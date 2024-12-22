<template><div><h2 id="常见的-bi-和报表的需求有哪些" tabindex="-1"><a class="header-anchor" href="#常见的-bi-和报表的需求有哪些"><span>常见的 BI 和报表的需求有哪些？</span></a></h2>
<ul>
<li>BI：商业洞见或者分析，BI 肯定有报表的一部分，会提供一些预测模型和分析模型。一般来说都是数据团队来实现，实时性不高，往往是 T+1。简单来说，偏向于图表渲染。</li>
<li>报表：现有数据呈现，分为实时数据（从库）、准实时数据（流处理平台）、离线 T+1 报表。简单来说，偏向于数据统计、查询、导出和分析。</li>
</ul>
<h2 id="常见的报表类型有哪些" tabindex="-1"><a class="header-anchor" href="#常见的报表类型有哪些"><span>常见的报表类型有哪些？</span></a></h2>
<ul>
<li>BI 报表（OLAP）
<ul>
<li>图表报表</li>
<li>分组统计报表（维度数据）</li>
<li>交互报表（自定义组合分析）</li>
<li>智能预测报表（销量和库存预测）</li>
<li>画像分析</li>
</ul>
</li>
<li>普通离线统计报表（OLAP）
<ul>
<li>从库、数仓、T+1 报表</li>
</ul>
</li>
<li>应用内实时报表（OLTP）
<ul>
<li>导出报表</li>
<li>套打报表（制式表格、word）</li>
<li>清单列表（非常复杂的组合查询）</li>
<li>普通统计报表</li>
</ul>
</li>
<li>驾驶舱大屏（OLAP+OLTP）
<ul>
<li>数据应用和普通应用混合体</li>
</ul>
</li>
</ul>
<h2 id="常见的技术选型有那些" tabindex="-1"><a class="header-anchor" href="#常见的技术选型有那些"><span>常见的技术选型有那些？</span></a></h2>
<p>商业 BI 报表类：</p>
<ul>
<li>Power BI</li>
<li>Tableau</li>
<li>Smartbi</li>
<li>QlikView</li>
<li>帆软 FineBI</li>
<li>水晶报表</li>
</ul>
<p>开源 BI 工具：</p>
<ul>
<li>eazyBI</li>
<li>dataease</li>
<li>pentaho</li>
<li>birt</li>
</ul>
<p>国内风格开源报表：</p>
<ul>
<li>润乾报表: 类 Excel 展开，早期的报表模型，比较主流的报表方案。还有一本书，可以了解。</li>
<li>poli：一个极其轻量级的 SQL 报表服务，比较容易集成到系统中。</li>
</ul>
<p>大数据平台类（含分布式计算和加工）：</p>
<ul>
<li>永红 BI</li>
</ul>
<p>开源信息化图表工具：</p>
<ul>
<li>kibana</li>
<li>Grafana</li>
<li>Apache ECharts</li>
<li>阿里 DataV</li>
<li>datart</li>
<li>DataEase</li>
<li>jimureport</li>
</ul>
<h2 id="常见的场景的最佳的技术选型" tabindex="-1"><a class="header-anchor" href="#常见的场景的最佳的技术选型"><span>常见的场景的最佳的技术选型？</span></a></h2>
<h3 id="普通的列表报表导出" tabindex="-1"><a class="header-anchor" href="#普通的列表报表导出"><span>普通的列表报表导出</span></a></h3>
<ul>
<li>EasyExcel</li>
</ul>
<h3 id="详情的-excel-异型表单导出" tabindex="-1"><a class="header-anchor" href="#详情的-excel-异型表单导出"><span>详情的 Excel 异型表单导出</span></a></h3>
<p>单头、单行、多 tab 页</p>
<ul>
<li>自己实现一个 XML Excel Writer 代替 POI 操作，也可以使用模板</li>
</ul>
<h3 id="非线性报表-多源分片" tabindex="-1"><a class="header-anchor" href="#非线性报表-多源分片"><span>非线性报表（多源分片）</span></a></h3>
<p>类似交叉报表，润乾发明的概念，相对于线性报表，单元格之间会互相影响。</p>
<p>本质上实现了非线性报表的理论，有另外一套数学模型支持（层次坐标的概念和算法）：</p>
<ul>
<li>润乾报表</li>
<li>帆软 FineBI</li>
</ul>
<p>参考： <a href="https://www.raqsoft.com.cn/r/r-model" target="_blank" rel="noopener noreferrer">https://www.raqsoft.com.cn/r/r-model</a></p>
<h3 id="复杂的数据源和拖拽定制化开发" tabindex="-1"><a class="header-anchor" href="#复杂的数据源和拖拽定制化开发"><span>复杂的数据源和拖拽定制化开发</span></a></h3>
<ul>
<li>
<h2 id="选择一个-bi-平台" tabindex="-1"><a class="header-anchor" href="#选择一个-bi-平台"><span>选择一个 BI 平台</span></a></h2>
</li>
<li>购买搭建一套传统的商业报表，一般订阅制
<ul>
<li>帆软 FineBI</li>
<li>润乾报</li>
</ul>
</li>
<li>
<h2 id="自研一套小的报表服务-使用开源平台" tabindex="-1"><a class="header-anchor" href="#自研一套小的报表服务-使用开源平台"><span>自研一套小的报表服务，使用开源平台</span></a></h2>
</li>
</ul>
<h2 id="常见的反模式有那些" tabindex="-1"><a class="header-anchor" href="#常见的反模式有那些"><span>常见的反模式有那些？</span></a></h2>
<ul>
<li>报表的数据源如何集成？
<ul>
<li>RESTful 实现 （不推荐）</li>
<li>数据库 Driver 链接</li>
<li>CSV、JSON 文件</li>
<li>数据流方式</li>
</ul>
</li>
</ul>
<h2 id="读写分离策略" tabindex="-1"><a class="header-anchor" href="#读写分离策略"><span>读写分离策略</span></a></h2>
<ul>
<li>主：写、为写入而读的查询（详情），详情加缓存，禁止做报表业务。</li>
<li>从：只为查询（Q）单独处理，报表全部走 Q 的逻辑。</li>
</ul>
<p>CQRUD：CRUD 走主库，Q 从库。</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>
<ul>
<li>报表类型 <a href="https://www.cnblogs.com/powertoolsteam/p/Report_Knowledge.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/powertoolsteam/p/Report_Knowledge.html</a></li>
</ul>
<h2 id="录屏" tabindex="-1"><a class="header-anchor" href="#录屏"><span>录屏</span></a></h2>
<p>链接: <a href="https://pan.baidu.com/s/1EPtqDeOuWYoOIYcAkVhv_g?pwd=24i6" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1EPtqDeOuWYoOIYcAkVhv_g?pwd=24i6</a> 提取码: 24i6 复制这段内容后打开百度网盘手机App，操作更方便哦</p>
</div></template>


