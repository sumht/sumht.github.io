# Maven私服搭建与上传

## 安装

> 下载镜像

```
docker pull sonatype/nexus3
```

> 安装镜像

```
docker run -d -p 7878:8081 --name nexus -v /root/nexus-data:/var/nexus-data --restart=always sonatype/nexus3
```

使用nexus3镜像创建并启动一个容器，指定暴露8081端口到对应主机的8081端口，将容器内部/var/nexus-data挂载到主机/root/nexus-data目录。

在浏览器输入：http://ip:7878/nexus/)

> 查看密码

```
vim  /root/nexus-data/admin.password
```

至此就算安装好了，里面具体内容可以百度了解一下。下面是最关键的将自己的组件上传到私服

## 组件上传

### 修改setting.xml

> 新增一个server,username与password需要与设置的私服账号密码绑定。id则需要保证唯一

```
  <servers>
      <server>
        <id>nexus-sumht</id>
        <username>admin</username>
        <password>gzb@admin0220</password>
      </server>
  </servers>
```

### 修改pom.xml

> 指定上传的仓库地址，我这里用的是上一篇文章中的组件进行发布的

```
    <distributionManagement>
        <repository>
            <id>nexus-sumht</id>
            <url>http://sumht.maven:7878/nexus/repository/maven-releases/</url>
        </repository>
        <snapshotRepository>
            <id>sumhtSnapshot</id>
            <url>http://sumht.maven:7878/nexus/repository/maven-snapshots/</url>
        </snapshotRepository>
    </distributionManagement>
```

> 在idea-》maven点击deploy,显示如下则表示上传成功

```
[INFO] --------------< com.sumht:sumht-starter-biz-translation >---------------
[INFO] Building sumht-starter-biz-translation 2.1.0-snapshot            [16/21]
[INFO]   from sumht-starter-biz-translation\pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- resources:3.3.1:resources (default-resources) @ sumht-starter-biz-translation ---
[INFO] Copying 1 resource from src\main\resources to target\classes
[INFO] 
[INFO] --- flatten:1.5.0:flatten (flatten) @ sumht-starter-biz-translation ---
[INFO] Generating flattened POM of project com.sumht:sumht-starter-biz-translation:jar:2.1.0-snapshot...
[INFO] 
[INFO] --- compiler:3.8.1:compile (default-compile) @ sumht-starter-biz-translation ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 7 source files to D:\codes\SumhtOrg\basic-platform-framework\sumht-starter-biz-translation\target\classes
[INFO] 
[INFO] --- resources:3.3.1:testResources (default-testResources) @ sumht-starter-biz-translation ---
[INFO] skip non existing resourceDirectory D:\codes\SumhtOrg\basic-platform-framework\sumht-starter-biz-translation\src\test\resources
[INFO] 
[INFO] --- compiler:3.8.1:testCompile (default-testCompile) @ sumht-starter-biz-translation ---
[INFO] No sources to compile
[INFO] 
[INFO] --- surefire:3.0.0-M5:test (default-test) @ sumht-starter-biz-translation ---
[INFO] No tests to run.
[INFO] 
[INFO] --- jar:3.3.0:jar (default-jar) @ sumht-starter-biz-translation ---
[INFO] Building jar: D:\codes\SumhtOrg\basic-platform-framework\sumht-starter-biz-translation\target\sumht-starter-biz-translation-2.1.0-snapshot.jar
[INFO] 
[INFO] --- install:3.1.1:install (default-install) @ sumht-starter-biz-translation ---
[INFO] Installing D:\codes\SumhtOrg\basic-platform-framework\sumht-starter-biz-translation\.flattened-pom.xml to C:\Users\sumht\.m2\repository\com\sumht\sumht-starter-biz-translation\2.1.0-snapshot\sumht-starter-biz-translation-2.1.0-snapshot.pom
[INFO] Installing D:\codes\SumhtOrg\basic-platform-framework\sumht-starter-biz-translation\target\sumht-starter-biz-translation-2.1.0-snapshot.jar to C:\Users\sumht\.m2\repository\com\sumht\sumht-starter-biz-translation\2.1.0-snapshot\sumht-starter-biz-translation-2.1.0-snapshot.jar
[INFO] 
[INFO] --- deploy:3.1.1:deploy (default-deploy) @ sumht-starter-biz-translation ---
Uploading to nexus-sumht: http://sumht.maven:7878/nexus/repository/maven-releases/com/sumht/sumht-starter-biz-translation/2.1.0-snapshot/sumht-starter-biz-translation-2.1.0-snapshot.pom
Uploaded to nexus-sumht: http://sumht.maven:7878/nexus/repository/maven-releases/com/sumht/sumht-starter-biz-translation/2.1.0-snapshot/sumht-starter-biz-translation-2.1.0-snapshot.pom (1.2 kB at 8.1 kB/s)
Uploading to nexus-sumht: http://sumht.maven:7878/nexus/repository/maven-releases/com/sumht/sumht-starter-biz-translation/2.1.0-snapshot/sumht-starter-biz-translation-2.1.0-snapshot.jar
Uploaded to nexus-sumht: http://sumht.maven:7878/nexus/repository/maven-releases/com/sumht/sumht-starter-biz-translation/2.1.0-snapshot/sumht-starter-biz-translation-2.1.0-snapshot.jar (8.0 kB at 63 kB/s)
Downloading from nexus-sumht: http://sumht.maven:7878/nexus/repository/maven-releases/com/sumht/sumht-starter-biz-translation/maven-metadata.xml
Downloaded from nexus-sumht: http://sumht.maven:7878/nexus/repository/maven-releases/com/sumht/sumht-starter-biz-translation/maven-metadata.xml (336 B at 5.1 kB/s)
Uploading to nexus-sumht: http://sumht.maven:7878/nexus/repository/maven-releases/com/sumht/sumht-starter-biz-translation/maven-metadata.xml
Uploaded to nexus-sumht: http://sumht.maven:7878/nexus/repository/maven-releases/com/sumht/sumht-starter-biz-translation/maven-metadata.xml (336 B at 2.6 kB/s)

```

> 可以在maven仓库看下是否已经成功上传
>
> todo：这里需要了解下releases与snapshots的去别

## 从私服拉取数据

在项目的pom文件中设置

```
    <repositories>
        <repository>
            <id>nexus-sumht</id>
            <name>sumht</name>
            <url>http://sumht.maven:7878/nexus/repository/maven-public</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
        </repository>
    </repositories>
```

> 在maven3.8.1版本后就不允许在http的私服下载依赖，所以两种办法，自建一个https证书，我们这边公司内网就没有在自建。统一在maven的setting.xml新增该镜像依赖标识允许从http下下载

```
    <mirror>
      <id>nexus-sumht</id>
      <name>Nexus aliyun</name>
      <mirrorOf>*</mirrorOf>
      <url>http://sumht.maven:7878/nexus/repository/maven-public/</url>
    </mirror>
```

> 这里有个大坑，我的依赖会一直从中央仓库下载，并没有走我的私服，所以要在中央仓库加上

```
    <mirror>
      <id>nexus-aliyun</id>
      <mirrorOf>*,!nexus-sumht</mirrorOf>
      <name>Nexus aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
```

