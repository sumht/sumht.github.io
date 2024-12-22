<template><div><p>何同学在视频中把从 Github 下载的代码改成自己的，并删除掉 License，然后说是自己写的。</p>
<p>这件事受到很多开发者吐槽，他这样做违反开源精神和社区共识，即使需要修改开源的代码，并 fork 到自己项目中，也需要保留 License 和作者信息，毕竟这是作者的工作成果。</p>
<p>就正如作者回应，他这不仅仅是偷窃代码，而且是欺骗所有的粉丝。</p>
<p>那么对于企业来说，如何避免因为各种原因造成的 License 问题呢？</p>
<p>恰好在几周前，我们研讨会讨论过如何扫描项目中的 License，以及生成 SBOM （详情见研讨会记录）。</p>
<h1 id="_01-背景知识" tabindex="-1"><a class="header-anchor" href="#_01-背景知识"><span>01 背景知识</span></a></h1>
<p>#常见开源 License 和商业使用判定<br>
开源 License 往往有很多附加条件，需要根据自己的应用特点来判定，例如：</p>
<p>○ 开源许可证类型（MIT、GPL、Apache等）</p>
<p>○ 许可证允许的用途（商业用途、个人用途等）</p>
<p>○ 许可证的分发要求（是否需要附带许可证文本）</p>
<p>○ 许可证的修改要求（是否允许修改）</p>
<p>○ 许可证的兼容性（是否与其他许可证兼容）</p>
<p>○ 是否附带专利授权</p>
<p>比如非常著名的 C++ UI 库 QT。如果在项目中使用 QT，那么需要遵守 QT 的 License。</p>
<p>而 QT 的 License 是 GPL，所以如果使用 GPL 的 QT，那么项目中所有代码也必须开源，但是有一项例外，当 QT 的代码被当做动态链接库发布时，可以不要求开源。</p>
<p>也就是说，如果把 QT 打包在自己的应用中发布一个完整的 exe 文件，就需要开源，但是使用 DDL 动态链接库发布时，可以不要求开源。</p>
<p>对于一些不那么重要的库来说，替换比较容易，但是对于一些核心库来说，替换成本非常高，所以需要注意 License 问题。</p>
<p>#常见开源 License<br>
我这里根据开源许可的宽松程度，整理了一些常见 License，从最宽松到最严格，常见的开源许可证如下：</p>
<p>MIT License</p>
<p>○ 最宽松的许可证之一</p>
<p>○ 允许商业使用、修改和分发</p>
<p>○ 只需要保留版权声明和许可证文本</p>
<p>○ 不要求开源衍生作品</p>
<p>BSD License (Berkeley Software Distribution)</p>
<p>○ 与 MIT 类似的宽松许可</p>
<p>○ 允许商业使用和修改</p>
<p>○ 需要保留原始版权声明</p>
<p>○ 有多个版本(2-clause, 3-clause)，条款略有不同</p>
<p>Apache License 2.0</p>
<p>○ 相对宽松但比 MIT 更正式</p>
<p>○ 明确授予专利权</p>
<p>○ 允许商业使用</p>
<p>○ 要求详细说明修改内容</p>
<p>○ 需要保留原始许可证和声明</p>
<p>Mozilla Public License 2.0 (MPL)</p>
<p>○ 中等程度的限制</p>
<p>○ 文件级的 copyleft</p>
<p>○ 允许与专有软件链接</p>
<p>○ 修改过的文件必须开源</p>
<p>GNU Lesser General Public License (LGPL)</p>
<p>○ 对库友好的 copyleft 许可</p>
<p>○ 允许闭源软件以动态链接方式使用</p>
<p>○ 修改库本身需要开源</p>
<p>○ 主程序可以保持闭源</p>
<p>GNU General Public License (GPL)</p>
<p>○ 强 copyleft 许可证</p>
<p>○ 要求任何衍生作品必须开源</p>
<p>○ 使用 GPL 代码的软件也必须使用 GPL</p>
<p>○ v3 版本增加了专利保护</p>
<p>GNU Affero General Public License (AGPL)</p>
<p>○ 最严格的主流开源许可</p>
<p>○ 基于 GPL 扩展</p>
<p>○ 网络服务也需要开源</p>
<p>○ 适用于服务器软件</p>
<p>所以，如果项目中使用了 GPL 的库，那么项目中所有代码也必须开源，这个在业界被称为许可证的传染性。</p>
<p>参考 Github 选择开源许可证的页面，基本比较完整：<a href="https://choosealicense.com/" target="_blank" rel="noopener noreferrer">https://choosealicense.com/</a></p>
<p>#SBOM<br>
SBOM 是 Software Bill of Materials 的缩写，中文翻译为软件物料清单。SBOM 是描述软件包及其依赖关系的数据结构。SBOM 的格式有很多，比如 CycloneDX、SPDX 等，一般来说 CycloneDX 更流行一点，因为 CycloneDX 是一个早期的 SBOM 生成工具。</p>
<p>扫描 License 问题，可能会用到 SBOM，所以这里提前介绍一下。</p>
<p>有一些工具可以直接扫描代码仓库，然后导出 SBOM 来报告问题，另外一些开源工具可以先生成 SBOM，然后再拿这个 SBOM 去数据库中检查 License 问题，或者威胁。</p>
<p>#02 扫描工具<br>
了解 License 问题后，一般在选择引入开源包时，可以自行判断。但是一个项目的依赖包有几百个，如果每个都自行判断，工作量非常大。</p>
<p>所以，需要使用一些工具来扫描项目中的依赖包，并进行 License 合规检查。</p>
<p>我最早接触的一个工具是 FossID。疫情前夕，为了项目上为了解决合规问题，避免国际市场的调查，使用了 FossID 这个工具来进行扫描的。不过对于大多数项目来说 FossID 比较贵，也比较重，需要专门的团队去维护，对于一些中小企业来说，成本比较高。</p>
<p>由于项目需要我也调研了几个更加轻量级的工具。</p>
<p>#FOSSA (商业方案，少折腾)<br>
如果你在找一个工具，恰好有下面这几个需求，FOSSA 是一个不错的选择：</p>
<p>○ License 合规检查</p>
<p>○ 支持多种包管理工具</p>
<p>○ 支持多种报告格式</p>
<p>○ 支持威胁扫描</p>
<p>○ 可以配置 License 政策</p>
<p>○ 可以导出 SBOM（包清单，Software Bill of Materials）</p>
<p>FOSSA 是一个 SaaS 产品，所以开箱即用，使用成本和维护成本比较低。</p>
<p>参考网站： <a href="https://fossa.com/" target="_blank" rel="noopener noreferrer">https://fossa.com/</a></p>
<p>#OWASP Dependency-Track （开源方案，内网使用）<br>
FOSSA 除非是高级版本，普通的版本不支持内网部署，所以如果需要内网部署，可以考虑 OWASP Dependency-Track。</p>
<p>不过 OWASP Dependency-Track 是开源方案，所以需要自己维护，并且需要自己搭建服务。</p>
<p>OWASP Dependency-Track 需要使用一套工具链搭配，OWASP Dependency-Track 只是通过 SBOM 进行扫描License 问题和安全威胁。</p>
<p>但是生成 SBOM 需要使用另外一套工具，比如 Syft、CycloneDX-CLI 等工具，先生成 SBOM 文件，然后导入 OWASP Dependency-Track 中。</p>
<p>这里有点 Trick 的地方。 OWASP Dependency-Track 还有一个孪生兄弟，叫做 OWASP Dependency-Check。OWASP Dependency-Check 是一个命令行工具，也可以作为 Gradle 插件使用，可以直接在项目中扫描安全威胁，但是不能扫描 License 问题，也不能生成 SBOM。</p>
<p>这两个工具很多时候容易让人困惑。</p>
<p>参考网站： <a href="https://dependencytrack.org/" target="_blank" rel="noopener noreferrer">https://dependencytrack.org/</a></p>
<p>#03 项目依赖评审<br>
站在 TechLead 的视角，引入一个开源依赖包，不仅仅是 License 的问题，还会有很多其它麻烦。</p>
<p>所以建议 TechLead 在团队中增加开源依赖包的评审机制。如果开发者引入依赖包，那么最好进行评审，再引入使用。</p>
<p>在几年前，我优化过一个前端项目。这个项目构建并 Gzip 压缩后制品依然还有足足 5M，导致网站打开非常缓慢。我通过一些工具分析，一个 React 的项目，居然引入了 Bootstrap。在项目中找到了，唯一一个使用 Bootstrap 的地方居然是手手风琴菜单。</p>
<p>所以依赖审查这个事很不起眼，但是很重要。</p>
</div></template>


