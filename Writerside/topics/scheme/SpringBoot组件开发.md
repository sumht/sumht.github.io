# SpringBoot组件开发
## 原理介绍

通常我们使用一个公用的starter的时候，只需要将相应的依赖添加的Maven的配置文件当中即可，免去了自己需要引用很多依赖类，并且SpringBoot会自动进行类的自动配置。而我们自己开发一个starter也需要做相应的处理；

1. SpringBoot 在启动时会去依赖的starter包中寻找 resources/META-INF/spring.factories 文件，然后根据文件中配置的Jar包去扫描项目所依赖的Jar包，这类似于 Java 的 SPI 机制。

   > SPI 全称 Service Provider Interface，是Java提供的一套用来被第三方实现或者扩展的API，它可以用来启用框架扩展和替换组件。

2. 根据 spring.factories配置加载AutoConfigure类。

3. 根据 @Conditional注解的条件，进行自动配置并将Bean注入Spring Context 上下文当中。也可以使用@ImportAutoConfiguration({MyServiceAutoConfiguration.class}) 指定自动配置哪些类。

4. 日常使用的Spring官方的Starter一般采取spring-boot-starter-{name} 的命名方式，如 spring-boot-starter-web 。而非官方的Starter，官方建议 artifactId 命名应遵循{name}-spring-boot-starter 的格式。 例如：sumht-spring-boot-starter 。

## 工程示例

> 中间件工程数据翻译： sumht-starter-biz-translation 主要用于id转name，比如区域id转区域名称，部门id转部门名称等

```
├─src
│  └─main
│      ├─java
│      │  └─com
│      │      └─sumht
│      │          └─framework
│      │              └─translation
│      │                  │  package-info.java
│      │                  │
│      │                  ├─config
│      │                  │      SumhtTranslationAutoConfiguration.java
│      │                  │
│      │                  └─core
│      │                      │  TranslationInterface.java
│      │                      │
│      │                      ├─annotation
│      │                      │      Translation.java
│      │                      │      TranslationType.java
│      │                      │
│      │                      └─handler
│      │                              TranslationBeanSerializerModifier.java
│      │                              TranslationHandler.java
│      │
│      └─resources
│          └─META-INF
│              └─spring
│                      org.springframework.boot.autoconfigure.AutoConfiguration.imports

```

>  Translation.java 自定义注解：通用翻译注解

```
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.METHOD})
@Documented
@JacksonAnnotationsInside
@JsonSerialize(using = TranslationHandler.class)
public @interface Translation {

    /**
     * 类型 (需与实现类上的 {@link TranslationType} 注解type对应)
     * <p>
     * 默认取当前字段的值 如果设置了 @{@link Translation#mapper()} 则取映射字段的值
     */
    String type();

    /**
     * 映射字段 (如果不为空则取此字段的值)
     */
    String mapper() default "";

}
```

>  自定义注解：翻译类型注解 (标注到{@link TranslationInterface} 的实现类)
> TranslationType.java

```
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Documented
public @interface TranslationType {
    /**
     * 类型
     */
    String type();
}
```

> 翻译处理器
>
> TranslationHandler

```
@Slf4j
public class TranslationHandler extends StdSerializer<Object> implements ContextualSerializer {

    /**
     * 全局翻译实现类映射器
     */
    public static final Map<String, TranslationInterface<?>> TRANSLATION_MAPPER = new ConcurrentHashMap<>();

    private Translation translation;

    public TranslationHandler() {
        super(Object.class);
    }

    public TranslationHandler(String val) {
        super(Object.class);
    }

    @Override
    public JsonSerializer<?> createContextual(SerializerProvider prov, BeanProperty property) throws JsonMappingException {
        Translation translation = property.getAnnotation(Translation.class);
        if (Objects.nonNull(translation)) {
            this.translation = translation;
            return this;
        }
        return prov.findValueSerializer(property.getType(), property);
    }

    @Override
    public void serialize(Object value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        TranslationInterface<?> trans = TRANSLATION_MAPPER.get(translation.type());
        if (ObjectUtil.isNotNull(trans)) {
            // 如果为 null 直接写出
            if (ObjectUtil.isNull(value)) {
                gen.writeNull();
                return;
            }
            Object result = trans.translation(value);
            gen.writeObject(value);
            if (StrUtil.isNotBlank(translation.mapper())) {
                gen.writeObjectField(translation.mapper(),result);
            }else {
                gen.writeObjectField(gen.getOutputContext().getCurrentName()+"Name", result);
            }
        } else {
            gen.writeObject(value);
        }
    }
}
```

> 翻译接口 (实现类需标注 {@link TranslationType} 注解标明翻译类型)
>
> TranslationInterface

```
public interface TranslationInterface<T> {
    /**
     * 翻译
     *
     * @param key   需要被翻译的键(不为空)
     * @return 返回键对应的值
     */
    T translation(Object key);
}
```

> spring.factories & spring入口配置
>
> 将自己的XxxConfigue配置到这里，用于spring启动时候扫描到

```
com.sumht.framework.translation.config.SumhtTranslationAutoConfiguration
```

> config/StarterAutoConfigure.java & 配置信息装配
>
> SumhtTranslationAutoConfiguration

- 通过注解；@Configuration、@ConditionalOnClass、@EnableConfigurationProperties，来实现自定义配置获取值
- prefix = "itstack.door"，用于在yml中的配置

```
@Slf4j
@AutoConfiguration
public class SumhtTranslationAutoConfiguration {

    @Resource
    private List<TranslationInterface<?>> list;

    @PostConstruct
    public void init() {
        Map<String, TranslationInterface<?>> map = new HashMap<>(list.size());
        for (TranslationInterface<?> trans : list) {
            if (trans.getClass().isAnnotationPresent(TranslationType.class)) {
                TranslationType annotation = trans.getClass().getAnnotation(TranslationType.class);
                map.put(annotation.type(), trans);
            } else {
                log.info(trans.getClass().getName() + " 翻译实现类未标注 TranslationType 注解!");
            }
        }
        TranslationHandler.TRANSLATION_MAPPER.putAll(map);
    }
}
```

## 测试验证

> 在其他项目中引入该中间件

```
<dependency>
    <groupId>com.sumht</groupId>
    <artifactId>sumht-starter-biz-translation</artifactId>
</dependency>
```

> 实现TranslationInterface方法

```
@Slf4j
@Component
@TranslationType(type = TransConstant.DEPT_ID_TO_NAME)
public class DeptNameTranslationImpl implements TranslationInterface<String> {

    @Resource
    private DeptRedisDAO deptRedisDAO;

    @Resource
    private DeptService deptService;

    @Override
    public String translation(Object key) {
        String deptName = deptRedisDAO.get(key.toString());
        if (StrUtil.isEmpty(deptName)){
            DeptDO dept = deptService.getDept(key.toString());
            if (ObjectUtil.isNotEmpty(dept)) {
                return dept.getName();
            }
        }
        return deptName;
    }
}
```

> 使用翻译组件进行翻译

```
@Schema(description = "租户编号", requiredMode = Schema.RequiredMode.REQUIRED, example = "28937")
@ExcelProperty("租户编号")
@Translation(type = TransConstant.DEPT_ID_TO_NAME, mapper = "tenantName")
private String tenantId;
```

此时在数据返回给前端时，数据库中的部门id就已经转化为tenantName返回给前端。

完整项目示例联系我，后续打算将所有组件推到中央仓库