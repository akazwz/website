# 工作约定

akazwz.com：Solid 2 + StyleX 的个人网站，界面组件写在项目里，不依赖组件库，没有 React，没有 Tailwind。每个页面在构建时预渲染成静态 HTML，用 `cf` 部署到 Cloudflare。它是什么、怎么跑、目录怎么分，见 [README.md](README.md)。

## 动手之前

停一下。Solid 2 还是候选版本，它不是 React，也不是 Solid 1.x；凭习惯写会错。

1. 先读 [docs/solid2-stylex.md](docs/solid2-stylex.md)：这套技术栈的实战经验（版本、Solid 2 的要点、路由、StyleX 的坑、组件怎么按组件库封装、文档外壳、整页预渲染、怎么验证）。文中的“这个模板”指它的来源，结论在这里同样适用。
2. 写界面之前读 [docs/web-platform.md](docs/web-platform.md)：浏览器已经自带了什么，每一样在这套技术栈里怎么写。
3. 再读装好的包里自带的、和版本严格对应的文档：
   - `node_modules/solid-js/CHEATSHEET.md`
   - `node_modules/@solidjs/vite-plugin/README.md`
   - `node_modules/@solidjs/router/README.md`
   - `node_modules/@solidjs/meta/README.md`
   - `node_modules/prerender-crawler/README.md`
   - 控制台出现诊断代码时：`node_modules/solid-js/skills/reactivity-diagnostics/SKILL.md`
4. 用一个库的组件或接口之前，读它自己的文档、类型定义和源码，**包括没有设置的参数的默认值**。

## 设计

原则只有一条：**简约、现代、简洁、美观**。做减法。

- 一根居中的栏（`frame.width`），留白多，中性灰，纯白或纯黑的底，跟随系统深浅色。
- 只用系统字体，不下载字体。只有两种字重（400、600）和少数几个字号，都在 `src/ui/tokens.stylex.ts`。
- 不加彩色强调色、大写小标签、编号、边框卡片、侧栏这类装饰。列表就是“标题 + 右侧灰色日期”，项目就是“名字 + 一句话”。
- 加东西之前先问：去掉它页面会更差吗？不会就不加。

## 约定

- **结构照官方模板。** 没有 `index.html`，没有挂载文件：入口由 Vite 插件围绕 `src/App.tsx` 和 `src/Document.tsx` 生成。`vite.config.ts` 里 StyleX 插件在 Solid 插件前面。
- **路由是文件。** `src/routes/[[lang]]/` 下的文件同时回答英文（`/about`）和中文（`/zh/about`）两个地址，每个文件用 `matchFilters: { lang: ["zh"] }` 限定语言段。链接是普通的 `<a>`，地址用 `src/i18n/locale.ts` 的 `localized(locale, path)` 拼。`file-routes.d.ts` 是生成的，不手改，要提交。
- **页面要能被预渲染。** 组件函数体里不碰只有浏览器才有的东西（`window`、`document`、`localStorage`、`matchMedia`）；构建时和浏览器接管时画出来的必须一样（所以日期是手写格式化的，不用 `Intl`）。
- **每页的 `<head>` 走 `src/components/Head.tsx`**（`@solidjs/meta`）：标题、描述、canonical、`hreflang`、分享预览。不在 `Document.tsx` 里写会被页面覆盖的标签。
- **文章是 Markdown。** `content/posts/<slug>.md` 是英文，`content/posts/zh/<slug>.md` 是中文，frontmatter 要有 `title`、`date`、`category`、`excerpt`、`readingTime`。`tools/content.ts` 在构建时用 Markdoc 把正文解析成一棵树，`src/ui/Prose.tsx` 按标签逐个渲染。正文里出现 `Prose` 不认识的元素时构建直接失败；要支持新的语法，先在 `Prose` 里给它一个样式，再加进 `proseElements`。
- **界面文字在 `src/i18n/messages.ts`。** 英文那份定义结构，中文那份必须满足同一类型；组件里不出现面向用户的文字。
- **`src/ui` 是组件库，`src/components` 是业务组件。** `src/ui` 里是通用的、不含业务的控件，调用处只能通过 `xstyle` 调布局；布局和带业务含义的拼装写在 `src/components`。不做 `Stack`、`Row`、`Text` 这类把 CSS 包成 props 的包装。
- **设计变量在 `src/ui/tokens.stylex.ts`。** 组件里不写死颜色、间距、圆角、字号，也不写死媒体查询。新颜色先算对比度（文字 4.5:1，轮廓和焦点环 3:1，深浅两种外观都要），把数写在注释里。
- **样式用 `{...stylex.attrs(…)}`**，不是 `stylex.props`。值是 JSX 的 prop 只读一次（用 `<Show>` 的函数子节点）。
- **版本全部写死**，锁文件要提交。升级 Solid 的包照 docs/solid2-stylex.md 的“升级 Solid 的包”整套一起升。
- **代码注释用英文，文档用中文。**

## 部署

用 Cloudflare 的 `cf` CLI，配置在 `cloudflare.config.ts`（不是 wrangler）。站点没有 Worker 脚本，只有静态资源：

- `pnpm build`（即 `cf build`）跑 Vite：Solid 构建客户端和服务端，`prerender-crawler` 把每个页面渲染成 HTML，Cloudflare 的 Vite 插件把客户端产物写成 `.cloudflare/output/` 下的 Build Output。
- **推到 `main` 就自动上线**：`akazwz` Worker 连着这个仓库（Workers Builds，触发器 “Deploy main”）。构建命令 `pnpm check && pnpm build`，检查不过就不部署；部署命令 `pnpm exec cf deploy --prebuilt`。Node 和 pnpm 的版本由构建变量 `NODE_VERSION`、`PNPM_VERSION` 指定，升级 `mise.toml` 时一起改（`cf builds triggers environment-variables`）。构建记录用 `cf builds list`、`cf builds logs get` 看。
- 手动部署：`pnpm deploy`（即 `cf deploy`）构建并上传；`cf deploy --prebuilt` 上传已有的构建产物。登录用 `cf auth login`。
- 流量怎么进来：akazwz.com 的 DNS 是一条开了代理的 `AAAA 100::`（没有源站，只为让请求进这个 zone），zone 上的路由 `akazwz.com/*` 指向 `akazwz` Worker。路由写得越具体越优先，`https://akazwz.com/*` 会压过 `akazwz.com/*`；部署后线上没变，先查 zone 上有没有别的 Worker 路由（2026-10-15 旧站的 `blog` Worker 就是这样占着，已删除）。
- 找不到文件的地址回最近的 `404.html`（中文地址回 `zh/404.html`），状态码 404。缓存头在 `public/_headers`。
- `cf` 和 `@cloudflare/vite-plugin` 现在都是 beta，版本写死，升级后重新走一遍下面的验证。
- `vite.config.ts` 里的 `builder.sharedPlugins: true` 不能去掉。Cloudflare 插件把客户端产物挪到了 `.cloudflare/output/`，Solid 插件要靠同一份插件实例记住这个目录，服务端构建才读得到客户端清单。去掉之后构建照样“成功”，但每个页面都没有样式表和脚本，只有在浏览器里打开构建产物才看得出来（2026-10-15 踩过）。

## 改完之后怎么验证

按成本从低到高，每次改动至少走到第 2 步，动了界面走到第 4 步：

1. `pnpm check`：格式、类型、lint。
2. `pnpm build`：StyleX 的编译错误、预渲染的错误只在这里暴露。看最后一行渲染了多少页。
3. `pnpm dev`，打开页面，看开发服务的日志（浏览器控制台转到了这里）。Solid 的诊断都要修。
4. 在浏览器里走真实流程：桌面宽度和手机宽度、浅色和深色、中文和英文各看一遍；站内跳转不应重新加载页面。
5. 发布前 `pnpm preview`，它在 workerd 里按 Cloudflare 的规则跑构建产物：核对尾斜杠、404 页和状态码、缓存头。

起了开发服务或预览服务，验证完要停掉。汇报时说清楚哪些是在浏览器里看到的，哪些只是命令通过。
