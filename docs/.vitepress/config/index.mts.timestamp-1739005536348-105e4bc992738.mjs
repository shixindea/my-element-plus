// .vitepress/config/index.mts
import consola from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/consola@2.15.3/node_modules/consola/dist/consola.js";
import { REPO_BRANCH as REPO_BRANCH2, REPO_PATH as REPO_PATH2 } from "file:///F:/my-project/element-promax-dev/internal/build-constants/dist/index.mjs";
import { docsDirName as docsDirName2 } from "file:///F:/my-project/element-promax-dev/internal/build-utils/dist/index.mjs";

// .vitepress/utils/lang.ts
import fs from "fs";
import path from "path";
import { docRoot } from "file:///F:/my-project/element-promax-dev/internal/build-utils/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\my-project\\element-promax-dev\\docs\\.vitepress\\utils";
var languages = fs.readdirSync(path.resolve(__vite_injected_original_dirname, "../crowdin"));
var ensureLang = (lang) => `/${lang}`;
var getLang = (id) => path.relative(docRoot, id).split(path.sep)[0];

// .vitepress/config/features.ts
var features = {};

// .vitepress/config/head.ts
import fs2 from "fs";
import path2 from "path";
import { vpRoot } from "file:///F:/my-project/element-promax-dev/internal/build-utils/dist/index.mjs";
var head = [
  [
    "link",
    {
      rel: "icon",
      href: "/images/element-plus-logo-small.svg",
      type: "image/svg+xm"
    }
  ],
  [
    "link",
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180"
    }
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5"
    }
  ],
  [
    "meta",
    {
      name: "theme-color",
      content: "#ffffff"
    }
  ],
  [
    "meta",
    {
      name: "msapplication-TileColor",
      content: "#409eff"
    }
  ],
  [
    "meta",
    {
      name: "msapplication-config",
      content: "/browserconfig.xml"
    }
  ],
  [
    "meta",
    {
      property: "og:image",
      content: "/images/element-plus-og-image.png"
    }
  ],
  [
    "meta",
    {
      property: "og:image:width",
      content: "1200"
    }
  ],
  [
    "meta",
    {
      property: "og:image:height",
      content: "630"
    }
  ],
  [
    "meta",
    {
      property: "og:description",
      content: "A Vue 3 based component library for designers and developers"
    }
  ],
  [
    "script",
    {},
    `;(() => {
      window.supportedLangs = ${JSON.stringify(languages)}
    })()`
  ],
  ["script", {}, fs2.readFileSync(path2.resolve(vpRoot, "lang.js"), "utf-8")],
  [
    "script",
    {
      async: "true",
      src: "https://www.googletagmanager.com/gtag/js?id=UA-175337989-1"
    }
  ],
  [
    "script",
    {},
    `if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(function(registration) {
          // console.log(registration);
        })
        .catch(function(err) {
          console.log(err);
        });
    }`
  ],
  [
    "script",
    {
      async: "true"
    },
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-175337989-1');`
  ],
  [
    "script",
    {
      async: "true",
      src: "https://www.googletagmanager.com/gtag/js?id=G-M74ZHEQ1M1"
    }
  ],
  [
    "script",
    {},
    `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-M74ZHEQ1M1');
    `
  ],
  [
    "script",
    {
      async: "true"
    },
    `
  var resource = document.createElement('link');
  resource.setAttribute("rel", "stylesheet");
  resource.setAttribute("href","https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800|Open+Sans:400,600;display=swap");
  resource.setAttribute("type","text/css");
  var head = document.querySelector('head');
  head.appendChild(resource);
    `
  ]
];

// .vitepress/i18n/pages/sidebar.json
var sidebar_default = {
  "en-US": [
    {
      text: "Guide",
      link: "/guide/design",
      activeMatch: "/guide/"
    },
    {
      text: "Component",
      link: "/component/overview",
      activeMatch: "/component/"
    },
    {
      text: "Resource",
      link: "/resource/index",
      activeMatch: "/resource/"
    }
  ]
};

// .vitepress/config/nav.ts
function getNav() {
  return Object.fromEntries(
    Object.entries(sidebar_default).map(([lang, locales]) => {
      const item = Object.values(locales).map((item2) => ({
        ...item2,
        link: `${ensureLang(lang)}${item2.link}`
      }));
      return [lang, item];
    })
  );
}
var nav = getNav();

// .vitepress/config/plugins.ts
import mdContainer from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/markdown-it-container@3.0.0/node_modules/markdown-it-container/index.js";

// .vitepress/plugins/external-link-icon.ts
var external_link_icon_default = (md) => {
  const renderToken = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
  const defaultLinkOpenRenderer = md.renderer.rules.link_open || renderToken;
  const defaultLinkCloseRenderer = md.renderer.rules.link_close || renderToken;
  let isExternalLink = false;
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const href = token.attrGet("href");
    if (href) {
      token.attrJoin("class", "vp-link");
      if (/^((ht|f)tps?):\/\/?/.test(href)) {
        isExternalLink = true;
      }
    }
    return defaultLinkOpenRenderer(tokens, idx, options, env, self);
  };
  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    if (isExternalLink) {
      isExternalLink = false;
      return `<i-ri-external-link-line class="link-icon" />${self.renderToken(
        tokens,
        idx,
        options
      )}`;
    }
    return defaultLinkCloseRenderer(tokens, idx, options, env, self);
  };
};

// .vitepress/plugins/table-wrapper.ts
var table_wrapper_default = (md) => {
  md.renderer.rules.table_open = () => '<div class="vp-table"><table>';
  md.renderer.rules.table_close = () => "</table></div>";
};

// .vitepress/plugins/tooltip.ts
var tooltip_default = (md) => {
  md.renderer.rules.tooltip = (tokens, idx) => {
    const token = tokens[idx];
    return `<api-typing type="${token.content}" details="${token.info}" />`;
  };
  md.inline.ruler.before("emphasis", "tooltip", (state, silent) => {
    const tooltipRegExp = /^\^\[([^\]]*)\](`[^`]*`)?/;
    const str = state.src.slice(state.pos, state.posMax);
    if (!tooltipRegExp.test(str)) return false;
    if (silent) return true;
    const result = str.match(tooltipRegExp);
    if (!result) return false;
    const token = state.push("tooltip", "tooltip", 0);
    token.content = result[1].replace(/\\\|/g, "|");
    token.info = (result[2] || "").replace(/^`(.*)`$/, "$1");
    token.level = state.level;
    state.pos += result[0].length;
    return true;
  });
};

// .vitepress/plugins/tag.ts
var tag_default = (md) => {
  md.inline.ruler.before("emphasis", "tag", (state, silent) => {
    const tagRegExp = /^\^\(([^)]*)\)/;
    const str = state.src.slice(state.pos, state.posMax);
    if (!tagRegExp.test(str)) return false;
    if (silent) return true;
    const result = str.match(tagRegExp);
    if (!result) return false;
    const token = state.push("html_inline", "", 0);
    const value = result[1].trim();
    const tagClass = ["beta", "deprecated", "a11y", "required"].includes(value) ? value : "";
    token.content = `<span class="vp-tag ${tagClass}">${value}</span>`;
    token.level = state.level;
    state.pos += result[0].length;
    return true;
  });
};

// .vitepress/plugins/headers.ts
import { resolveHeadersFromTokens, slugify } from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/@mdit-vue+shared@2.1.3/node_modules/@mdit-vue/shared/dist/index.mjs";
var headers_default = (md) => {
  const render = md.renderer.render.bind(md.renderer);
  const level = [2, 3, 4, 5, 6];
  md.renderer.render = (tokens, options, env) => {
    env.headers = resolveHeadersFromTokens(tokens, {
      level,
      shouldAllowHtml: true,
      shouldAllowNested: false,
      shouldEscapeText: false,
      slugify
    });
    return render(tokens, options, env);
  };
};

// .vitepress/plugins/demo.ts
import path3 from "path";
import fs3 from "fs";
import { docRoot as docRoot2 } from "file:///F:/my-project/element-promax-dev/internal/build-utils/dist/index.mjs";
function createDemoContainer(md) {
  return {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const sourceFileToken = tokens[idx + 2];
        let source = "";
        const sourceFile = sourceFileToken.children?.[0].content ?? "";
        if (sourceFileToken.type === "inline") {
          source = fs3.readFileSync(
            path3.resolve(docRoot2, "examples", `${sourceFile}.vue`),
            "utf-8"
          );
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);
        return `<Demo source="${encodeURIComponent(
          md.render(`\`\`\` vue
${source}\`\`\``)
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source
        )}" description="${encodeURIComponent(md.render(description))}">
  <template #source><ep-${sourceFile.replaceAll("/", "-")}/></template>`;
      } else {
        return "</Demo>\n";
      }
    }
  };
}
var demo_default = createDemoContainer;

// .vitepress/plugins/api-table.ts
var ApiTableContainer = (md) => {
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, ...rest] = args;
    const [options, env] = rest;
    const token = tokens[idx];
    if (token.info === "api") {
      const newTokens = md.parse(token.content, env);
      let result = "";
      const { rules } = md.renderer;
      newTokens.forEach((newToken, idx2) => {
        const { type } = newToken;
        if (type === "inline") {
          result += md.renderer.renderInline(newToken.children, options, env);
        } else if (typeof rules[type] !== "undefined") {
          result += rules[newToken.type](
            newTokens,
            idx2,
            options,
            env,
            md.renderer
          );
        } else {
          result += md.renderer.renderToken(newTokens, idx2, options);
        }
      });
      return result;
    }
    return fence.call(md, ...args);
  };
};

// .vitepress/config/plugins.ts
var mdPlugin = (md) => {
  md.use(headers_default);
  md.use(external_link_icon_default);
  md.use(table_wrapper_default);
  md.use(tooltip_default);
  md.use(tag_default);
  md.use(mdContainer, "demo", demo_default(md));
  md.use(ApiTableContainer);
};

// .vitepress/i18n/pages/guide.json
var guide_default = {
  "en-US": {
    intro: {
      text: "Basics",
      children: [
        {
          text: "Design",
          link: "/guide/design"
        },
        {
          text: "Navigation",
          link: "/guide/nav"
        },
        {
          text: "Installation",
          link: "/guide/installation"
        },
        {
          text: "Quick Start",
          link: "/guide/quickstart"
        }
      ]
    },
    advanced: {
      text: "Advanced",
      children: [
        {
          text: "i18n",
          link: "/guide/i18n"
        },
        {
          text: "Migration from ElementUI",
          link: "/guide/migration"
        },
        {
          text: "Theming",
          link: "/guide/theming"
        },
        {
          text: "Dark Mode",
          link: "/guide/dark-mode",
          promotion: "2.2.0"
        },
        {
          text: "Custom Namespace",
          link: "/guide/namespace",
          promotion: "2.2.0"
        },
        {
          text: "SSR",
          link: "/guide/ssr"
        },
        {
          text: "Built-in Transitions",
          link: "/guide/transitions"
        },
        {
          text: "Changelog",
          link: "/guide/changelog"
        }
      ]
    },
    development: {
      text: "Development",
      children: [
        {
          text: "Development Guide",
          link: "/guide/dev-guide"
        },
        {
          text: "Development FAQ",
          link: "/guide/dev-faq"
        },
        {
          text: "Commit Examples",
          link: "/guide/commit-examples"
        },
        {
          text: "Translation",
          link: "/guide/translation"
        }
      ]
    }
  }
};

// .vitepress/i18n/pages/component.json
var component_default = {
  "en-US": {
    overview: {
      text: "Overview",
      children: [
        {
          link: "/overview",
          text: "Overview"
        }
      ]
    },
    basic: {
      text: "Basic",
      children: [
        {
          link: "/button",
          text: "Button"
        },
        {
          link: "/border",
          text: "Border"
        },
        {
          link: "/color",
          text: "Color"
        },
        {
          link: "/container",
          text: "Layout Container"
        },
        {
          link: "/icon",
          text: "Icon"
        },
        {
          link: "/layout",
          text: "Layout"
        },
        {
          link: "/link",
          text: "Link"
        },
        {
          link: "/text",
          text: "Text",
          promotion: "2.3.0"
        },
        {
          link: "/scrollbar",
          text: "Scrollbar"
        },
        {
          link: "/space",
          text: "Space"
        },
        {
          link: "/typography",
          text: "Typography"
        }
      ]
    },
    configuration: {
      text: "Configuration",
      children: [
        {
          link: "/config-provider",
          text: "Config Provider"
        }
      ]
    },
    form: {
      text: "Form",
      children: [
        {
          link: "/autocomplete",
          text: "Autocomplete"
        },
        {
          link: "/cascader",
          text: "Cascader"
        },
        {
          link: "/checkbox",
          text: "Checkbox"
        },
        {
          link: "/color-picker",
          text: "Color Picker"
        },
        {
          link: "/date-picker",
          text: "Date Picker"
        },
        {
          link: "/datetime-picker",
          text: "DateTime Picker"
        },
        {
          link: "/form",
          text: "Form"
        },
        {
          link: "/form-pro",
          text: "FormPro"
        },
        {
          link: "/input",
          text: "Input"
        },
        {
          link: "/input-number",
          text: "Input Number"
        },
        {
          link: "/input-tag",
          text: "Input Tag",
          promotion: "2.9.0"
        },
        {
          link: "/mention",
          text: "Mention",
          promotion: "2.8.0"
        },
        {
          link: "/radio",
          text: "Radio"
        },
        {
          link: "/rate",
          text: "Rate"
        },
        {
          link: "/select",
          text: "Select"
        },
        {
          link: "/select-v2",
          text: "Virtualized Select"
        },
        {
          link: "/slider",
          text: "Slider"
        },
        {
          link: "/switch",
          text: "Switch"
        },
        {
          link: "/time-picker",
          text: "Time Picker"
        },
        {
          link: "/time-select",
          text: "Time Select"
        },
        {
          link: "/transfer",
          text: "Transfer"
        },
        {
          link: "/tree-select",
          text: "TreeSelect",
          promotion: "2.1.8"
        },
        {
          link: "/upload",
          text: "Upload"
        }
      ]
    },
    data: {
      text: "Data",
      children: [
        {
          link: "/avatar",
          text: "Avatar"
        },
        {
          link: "/badge",
          text: "Badge"
        },
        {
          link: "/calendar",
          text: "Calendar"
        },
        {
          link: "/card",
          text: "Card"
        },
        {
          link: "/carousel",
          text: "Carousel"
        },
        {
          link: "/collapse",
          text: "Collapse"
        },
        {
          link: "/descriptions",
          text: "Descriptions"
        },
        {
          link: "/empty",
          text: "Empty"
        },
        {
          link: "/image",
          text: "Image"
        },
        {
          link: "/infinite-scroll",
          text: "Infinite Scroll"
        },
        {
          link: "/pagination",
          text: "Pagination"
        },
        {
          link: "/progress",
          text: "Progress"
        },
        {
          link: "/result",
          text: "Result"
        },
        {
          link: "/skeleton",
          text: "Skeleton"
        },
        {
          link: "/table",
          text: "Table"
        },
        {
          link: "/table-v2",
          text: "Virtualized Table",
          promotion: "2.2.0"
        },
        {
          link: "/tag",
          text: "Tag"
        },
        {
          link: "/timeline",
          text: "Timeline"
        },
        {
          link: "/tour",
          text: "Tour",
          promotion: "2.5.0"
        },
        {
          link: "/tree",
          text: "Tree"
        },
        {
          link: "/tree-v2",
          text: "Virtualized Tree"
        },
        {
          link: "/statistic",
          text: "Statistic",
          promotion: "2.2.30"
        },
        {
          link: "/segmented",
          text: "Segmented",
          promotion: "2.7.0"
        }
      ]
    },
    navigation: {
      text: "Navigation",
      children: [
        {
          link: "/affix",
          text: "Affix"
        },
        {
          link: "/anchor",
          text: "Anchor",
          promotion: "2.6.0"
        },
        {
          link: "/backtop",
          text: "Backtop"
        },
        {
          link: "/breadcrumb",
          text: "Breadcrumb"
        },
        {
          link: "/dropdown",
          text: "Dropdown"
        },
        {
          link: "/menu",
          text: "Menu"
        },
        {
          link: "/page-header",
          text: "Page Header"
        },
        {
          link: "/steps",
          text: "Steps"
        },
        {
          link: "/tabs",
          text: "Tabs"
        }
      ]
    },
    feedback: {
      text: "Feedback",
      children: [
        {
          link: "/alert",
          text: "Alert"
        },
        {
          link: "/dialog",
          text: "Dialog"
        },
        {
          link: "/drawer",
          text: "Drawer"
        },
        {
          link: "/loading",
          text: "Loading"
        },
        {
          link: "/message",
          text: "Message"
        },
        {
          link: "/message-box",
          text: "Message Box"
        },
        {
          link: "/notification",
          text: "Notification"
        },
        {
          link: "/popconfirm",
          text: "Popconfirm"
        },
        {
          link: "/popover",
          text: "Popover"
        },
        {
          link: "/tooltip",
          text: "Tooltip"
        }
      ]
    },
    others: {
      text: "Others",
      children: [
        {
          link: "/divider",
          text: "Divider"
        },
        {
          link: "/watermark",
          text: "Watermark",
          promotion: "2.4.0"
        }
      ]
    }
  }
};

// .vitepress/config/sidebars.ts
function getGuideSidebar() {
  return Object.fromEntries(
    Object.entries(guide_default).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang))
    ])
  );
}
function getComponentsSideBar() {
  return Object.fromEntries(
    Object.entries(component_default).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, "/component"))
    ])
  );
}
var getSidebars = () => {
  return {
    "/guide/": getGuideSidebar(),
    "/component/": getComponentsSideBar()
  };
};
function mapPrefix(item, lang, prefix = "") {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => mapPrefix(child, lang, prefix))
    };
  }
  return {
    ...item,
    link: `${ensureLang(lang)}${prefix}${item.link}`
  };
}
var sidebars = getSidebars();

// .vitepress/config/vite.ts
import path5 from "path";
import Inspect from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/vite-plugin-inspect@0.8.7_rollup@4.24.4_vite@5.3.3_@types+node@22.9.0_sass@1.79.3_terser@5.36.0_/node_modules/vite-plugin-inspect/dist/index.mjs";
import UnoCSS from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/unocss@0.63.6_postcss@8.4.47_rollup@4.24.4_typescript@5.5.4_vite@5.3.3_@types+node@22.9.0_sass@1.79.3_terser@5.36.0_/node_modules/unocss/dist/vite.mjs";
import mkcert from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/vite-plugin-mkcert@1.17.6_vite@5.3.3_@types+node@22.9.0_sass@1.79.3_terser@5.36.0_/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import glob2 from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/fast-glob@3.2.11/node_modules/fast-glob/out/index.js";
import vueJsx from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.3.3_@types+node@22.9.0_sass@1.79.3_terser@5.36.0__vue@3.4.31_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Components from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.26.3_rollup@4.24.4_vue@3.4.31_typescript@5.5.4__webpack-sources@3.2.3/node_modules/unplugin-vue-components/dist/vite.js";
import Icons from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/unplugin-icons@0.14.15_@vue+compiler-sfc@3.5.12_vue-template-compiler@2.7.16/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/unplugin-icons@0.14.15_@vue+compiler-sfc@3.5.12_vue-template-compiler@2.7.16/node_modules/unplugin-icons/dist/resolver.mjs";
import { loadEnv } from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.24.0_@types+node@22.9.0_@types+react@18.3.3_async-va_5q27xugopmnhgnodgxts5jxz24/node_modules/vitepress/dist/node/index.js";
import {
  docPackage,
  epPackage,
  getPackageDependencies,
  projRoot as projRoot2
} from "file:///F:/my-project/element-promax-dev/internal/build-utils/dist/index.mjs";

// .vitepress/plugins/markdown-transform.ts
import fs4 from "fs";
import path4 from "path";
import { camelize } from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/index.js";
import glob from "file:///F:/my-project/element-promax-dev/node_modules/.pnpm/fast-glob@3.2.11/node_modules/fast-glob/out/index.js";
import { docRoot as docRoot3, docsDirName, projRoot } from "file:///F:/my-project/element-promax-dev/internal/build-utils/dist/index.mjs";
import { REPO_BRANCH, REPO_PATH } from "file:///F:/my-project/element-promax-dev/internal/build-constants/dist/index.mjs";

// .vitepress/i18n/component/footer.json
var footer_default = {
  "en-US": {
    source: "Source",
    contributors: "Contributors",
    component: "Component",
    style: "Style",
    docs: "Docs"
  }
};

// .vitepress/plugins/markdown-transform.ts
var compPaths;
function MarkdownTransform() {
  return {
    name: "element-plus-md-transform",
    enforce: "pre",
    async buildStart() {
      const pattern = `{${[...languages, languages[0]].join(",")}}/component`;
      compPaths = await glob(pattern, {
        cwd: docRoot3,
        absolute: true,
        onlyDirectories: true
      });
    },
    async transform(code, id) {
      if (!id.endsWith(".md")) return;
      const componentId = path4.basename(id, ".md");
      const append = {
        headers: [],
        footers: [],
        scriptSetups: getExampleImports(componentId)
      };
      code = transformVpScriptSetup(code, append);
      if (compPaths.some((compPath) => id.startsWith(compPath))) {
        code = transformComponentMarkdown(id, componentId, code, append);
      }
      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers
      );
    }
  };
}
var combineScriptSetup = (codes) => `
<script setup>
${codes.join("\n")}
</script>
`;
var combineMarkdown = (code, headers, footers) => {
  const frontmatterEnds = code.indexOf("---\n\n");
  const firstHeader = code.search(/\n#{1,6}\s.+/);
  const sliceIndex = firstHeader < 0 ? frontmatterEnds < 0 ? 0 : frontmatterEnds + 4 : firstHeader;
  if (headers.length > 0)
    code = code.slice(0, sliceIndex) + headers.join("\n") + code.slice(sliceIndex);
  code += footers.join("\n");
  return `${code}
`;
};
var vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/;
var transformVpScriptSetup = (code, append) => {
  const matches = code.match(vpScriptSetupRE);
  if (matches) code = code.replace(matches[0], "");
  const scriptSetup = matches?.[3] ?? "";
  if (scriptSetup) append.scriptSetups.push(scriptSetup);
  return code;
};
var GITHUB_BLOB_URL = `https://github.com/${REPO_PATH}/blob/${REPO_BRANCH}`;
var GITHUB_TREE_URL = `https://github.com/${REPO_PATH}/tree/${REPO_BRANCH}`;
var transformComponentMarkdown = (id, componentId, code, append) => {
  const lang = getLang(id);
  const docUrl = `${GITHUB_BLOB_URL}/${docsDirName}/en-US/component/${componentId}.md`;
  const componentUrl = `${GITHUB_TREE_URL}/packages/components/${componentId}`;
  const styleUrl = `${GITHUB_TREE_URL}/packages/theme-chalk/src/${componentId}.scss`;
  const componentPath = path4.resolve(
    projRoot,
    `packages/components/${componentId}`
  );
  const stylePath = path4.resolve(
    projRoot,
    `packages/theme-chalk/src/${componentId}.scss`
  );
  const isComponent = fs4.existsSync(componentPath);
  const isHaveComponentStyle = fs4.existsSync(stylePath);
  const links = [[footer_default[lang].docs, docUrl]];
  if (isComponent && isHaveComponentStyle)
    links.unshift([footer_default[lang].style, styleUrl]);
  if (isComponent) links.unshift([footer_default[lang].component, componentUrl]);
  const linksText = links.filter((i) => i).map(([text, link]) => `[${text}](${link})`).join(" \u2022 ");
  const sourceSection = `
## ${footer_default[lang].source}

${linksText}`;
  const contributorsSection = `
## ${footer_default[lang].contributors}

<Contributors id="${componentId}" />`;
  append.footers.push(sourceSection, isComponent ? contributorsSection : "");
  return code;
};
var getExampleImports = (componentId) => {
  const examplePath = path4.resolve(docRoot3, "examples", componentId);
  if (!fs4.existsSync(examplePath)) return [];
  const files = fs4.readdirSync(examplePath);
  const imports = [];
  for (const item of files) {
    if (!/\.vue$/.test(item)) continue;
    const file = item.replace(/\.vue$/, "");
    const name = camelize(`Ep-${componentId}-${file}`);
    imports.push(
      `import ${name} from '../../examples/${componentId}/${file}.vue'`
    );
  }
  return imports;
};

// .vitepress/config/vite.ts
var __vite_injected_original_dirname2 = "F:\\my-project\\element-promax-dev\\docs\\.vitepress\\config";
var { dependencies: epDeps } = getPackageDependencies(epPackage);
var { dependencies: docsDeps } = getPackageDependencies(docPackage);
var optimizeDeps = [.../* @__PURE__ */ new Set([...epDeps, ...docsDeps])].filter(
  (dep) => !dep.startsWith("@types/") && !["@element-plus/metadata", "element-plus"].includes(dep)
);
optimizeDeps.push(
  ...await glob2(["dayjs/plugin/*.js"], {
    cwd: path5.resolve(projRoot2, "node_modules"),
    onlyFiles: true
  })
);
var alias = [
  {
    find: "~/",
    replacement: `${path5.resolve(__vite_injected_original_dirname2, "../vitepress")}/`
  },
  ...process.env.DOC_ENV === "production" ? [] : [
    {
      find: /^element-plus(\/(es|lib))?$/,
      replacement: path5.resolve(projRoot2, "packages/element-plus/index.ts")
    },
    {
      find: /^element-plus\/(es|lib)\/(.*)$/,
      replacement: `${path5.resolve(projRoot2, "packages")}/$2`
    }
  ]
];
var getViteConfig = ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"]
        }
      }
    },
    server: {
      host: true,
      fs: {
        allow: [projRoot2]
      }
    },
    resolve: {
      alias
    },
    plugins: [
      vueJsx(),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: [".vitepress/vitepress/components"],
        allowOverrides: true,
        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver()
        ],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      }),
      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true
      }),
      UnoCSS(),
      MarkdownTransform(),
      Inspect(),
      env.HTTPS ? mkcert() : void 0
    ],
    optimizeDeps: {
      include: optimizeDeps
    }
  };
};

// .vitepress/config/vue-compiler.ts
import { createRequire } from "node:module";
var __vite_injected_original_import_meta_url = "file:///F:/my-project/element-promax-dev/docs/.vitepress/config/vue-compiler.ts";
var _require = createRequire(__vite_injected_original_import_meta_url);
var vitepressPath = _require.resolve("vitepress");
var vueCompiler = _require(
  _require.resolve("vue/compiler-sfc", { paths: [vitepressPath] })
);

// .vitepress/config/index.mts
var buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true
    };
  };
  const transformers = {};
  const directives = [
    "infinite-scroll",
    "loading",
    "popover",
    "click-outside",
    "repeat-click",
    "trap-focus",
    "mousewheel",
    "resize"
  ];
  directives.forEach((k) => {
    transformers[k] = transformer;
  });
  return transformers;
};
consola.debug(`NODE_ENV: ${process.env.NODE_ENV}`);
var setupConfig = (configEnv) => {
  const config = {
    title: "Element ProMax",
    description: "A Vue 3 based component library for designers and developers",
    lastUpdated: true,
    head,
    themeConfig: {
      repo: REPO_PATH2,
      docsBranch: REPO_BRANCH2,
      docsDir: docsDirName2,
      editLinks: true,
      editLinkText: "Edit this page on GitHub",
      logo: "/images/element-plus-logo.svg",
      logoSmall: "/images/element-plus-logo-small.svg",
      sidebars,
      nav,
      agolia: {
        apiKey: "99caf32e743ba77d78b095b763b8e380",
        appId: "ZM3TI8AKL4"
      },
      features,
      langs: languages
    },
    // locales,
    vite: getViteConfig(configEnv),
    markdown: {
      config: (md) => mdPlugin(md)
    },
    vue: {
      compiler: vueCompiler,
      template: {
        compilerOptions: {
          hoistStatic: false,
          directiveTransforms: buildTransformers()
        }
      }
    },
    // 设置基准路径 github 目前github 生成网址后 element-promax-docs 路径 自动变成 en-US 而不是 /element-promax-docs/en-US
    base: "/element-promax-docs/",
    //  process.env.NODE_ENV === 'production' ? '/element-promax-docs/' : '/',
    postRender(context) {
      if (context.teleports) {
        const body = Object.entries(context.teleports).reduce(
          (all, [key, value]) => {
            if (key.startsWith("#el-popper-container-")) {
              return `${all}<div id="${key.slice(1)}">${value}</div>`;
            }
            return all;
          },
          context.teleports.body || ""
        );
        context.teleports = { ...context.teleports, body };
      }
      return context;
    }
  };
  return config;
};
var config_default = setupConfig;
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcvaW5kZXgubXRzIiwgIi52aXRlcHJlc3MvdXRpbHMvbGFuZy50cyIsICIudml0ZXByZXNzL2NvbmZpZy9mZWF0dXJlcy50cyIsICIudml0ZXByZXNzL2NvbmZpZy9oZWFkLnRzIiwgIi52aXRlcHJlc3MvaTE4bi9wYWdlcy9zaWRlYmFyLmpzb24iLCAiLnZpdGVwcmVzcy9jb25maWcvbmF2LnRzIiwgIi52aXRlcHJlc3MvY29uZmlnL3BsdWdpbnMudHMiLCAiLnZpdGVwcmVzcy9wbHVnaW5zL2V4dGVybmFsLWxpbmstaWNvbi50cyIsICIudml0ZXByZXNzL3BsdWdpbnMvdGFibGUtd3JhcHBlci50cyIsICIudml0ZXByZXNzL3BsdWdpbnMvdG9vbHRpcC50cyIsICIudml0ZXByZXNzL3BsdWdpbnMvdGFnLnRzIiwgIi52aXRlcHJlc3MvcGx1Z2lucy9oZWFkZXJzLnRzIiwgIi52aXRlcHJlc3MvcGx1Z2lucy9kZW1vLnRzIiwgIi52aXRlcHJlc3MvcGx1Z2lucy9hcGktdGFibGUudHMiLCAiLnZpdGVwcmVzcy9pMThuL3BhZ2VzL2d1aWRlLmpzb24iLCAiLnZpdGVwcmVzcy9pMThuL3BhZ2VzL2NvbXBvbmVudC5qc29uIiwgIi52aXRlcHJlc3MvY29uZmlnL3NpZGViYXJzLnRzIiwgIi52aXRlcHJlc3MvY29uZmlnL3ZpdGUudHMiLCAiLnZpdGVwcmVzcy9wbHVnaW5zL21hcmtkb3duLXRyYW5zZm9ybS50cyIsICIudml0ZXByZXNzL2kxOG4vY29tcG9uZW50L2Zvb3Rlci5qc29uIiwgIi52aXRlcHJlc3MvY29uZmlnL3Z1ZS1jb21waWxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcaW5kZXgubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teS1wcm9qZWN0L2VsZW1lbnQtcHJvbWF4LWRldi9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2luZGV4Lm10c1wiO2ltcG9ydCBjb25zb2xhIGZyb20gJ2NvbnNvbGEnXG5pbXBvcnQgeyBSRVBPX0JSQU5DSCwgUkVQT19QQVRIIH0gZnJvbSAnQGVsZW1lbnQtcGx1cy9idWlsZC1jb25zdGFudHMnXG5pbXBvcnQgeyBkb2NzRGlyTmFtZSB9IGZyb20gJ0BlbGVtZW50LXBsdXMvYnVpbGQtdXRpbHMnXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuLi91dGlscy9sYW5nJ1xuaW1wb3J0IHsgZmVhdHVyZXMgfSBmcm9tICcuL2ZlYXR1cmVzJ1xuaW1wb3J0IHsgaGVhZCB9IGZyb20gJy4vaGVhZCdcbmltcG9ydCB7IG5hdiB9IGZyb20gJy4vbmF2J1xuaW1wb3J0IHsgbWRQbHVnaW4gfSBmcm9tICcuL3BsdWdpbnMnXG5pbXBvcnQgeyBzaWRlYmFycyB9IGZyb20gJy4vc2lkZWJhcnMnXG5pbXBvcnQgeyBnZXRWaXRlQ29uZmlnIH0gZnJvbSAnLi92aXRlJ1xuaW1wb3J0IHsgdnVlQ29tcGlsZXIgfSBmcm9tICcuL3Z1ZS1jb21waWxlcidcblxuaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuXG5jb25zdCBidWlsZFRyYW5zZm9ybWVycyA9ICgpID0+IHtcbiAgY29uc3QgdHJhbnNmb3JtZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiBbXSxcbiAgICAgIG5lZWRSdW50aW1lOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybWVycyA9IHt9XG4gIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXG4gICAgJ2luZmluaXRlLXNjcm9sbCcsXG4gICAgJ2xvYWRpbmcnLFxuICAgICdwb3BvdmVyJyxcbiAgICAnY2xpY2stb3V0c2lkZScsXG4gICAgJ3JlcGVhdC1jbGljaycsXG4gICAgJ3RyYXAtZm9jdXMnLFxuICAgICdtb3VzZXdoZWVsJyxcbiAgICAncmVzaXplJyxcbiAgXVxuICBkaXJlY3RpdmVzLmZvckVhY2goKGspID0+IHtcbiAgICB0cmFuc2Zvcm1lcnNba10gPSB0cmFuc2Zvcm1lclxuICB9KVxuXG4gIHJldHVybiB0cmFuc2Zvcm1lcnNcbn1cblxuY29uc29sYS5kZWJ1ZyhgTk9ERV9FTlY6ICR7cHJvY2Vzcy5lbnYuTk9ERV9FTlZ9YClcblxuY29uc3QgbG9jYWxlcyA9IHtcbiAgJy8nOiB7XG4gICAgbGFiZWw6ICdFbmdsaXNoJyxcbiAgICBsYW5nOiAnZW4tVVMnLFxuICB9XG59XG4vLyBsYW5ndWFnZXMuZm9yRWFjaCgobGFuZykgPT4ge1xuLy8gICBsb2NhbGVzW2AvJHtsYW5nfWBdID0ge1xuLy8gICAgIGxhYmVsOiBsYW5nLFxuLy8gICAgIGxhbmcsXG4vLyAgIH1cbi8vIH0pXG5cbmNvbnN0IHNldHVwQ29uZmlnID0gKGNvbmZpZ0VudikgPT4ge1xuICBjb25zdCBjb25maWc6IFVzZXJDb25maWc8YW55PiA9IHtcbiAgICB0aXRsZTogJ0VsZW1lbnQgUHJvTWF4JyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgVnVlIDMgYmFzZWQgY29tcG9uZW50IGxpYnJhcnkgZm9yIGRlc2lnbmVycyBhbmQgZGV2ZWxvcGVycycsXG4gICAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gICAgaGVhZCxcbiAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgcmVwbzogUkVQT19QQVRILFxuICAgICAgZG9jc0JyYW5jaDogUkVQT19CUkFOQ0gsXG4gICAgICBkb2NzRGlyOiBkb2NzRGlyTmFtZSxcblxuICAgICAgZWRpdExpbmtzOiB0cnVlLFxuICAgICAgZWRpdExpbmtUZXh0OiAnRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViJyxcblxuICAgICAgbG9nbzogJy9pbWFnZXMvZWxlbWVudC1wbHVzLWxvZ28uc3ZnJyxcbiAgICAgIGxvZ29TbWFsbDogJy9pbWFnZXMvZWxlbWVudC1wbHVzLWxvZ28tc21hbGwuc3ZnJyxcbiAgICAgIHNpZGViYXJzLFxuICAgICAgbmF2LFxuICAgICAgYWdvbGlhOiB7XG4gICAgICAgIGFwaUtleTogJzk5Y2FmMzJlNzQzYmE3N2Q3OGIwOTViNzYzYjhlMzgwJyxcbiAgICAgICAgYXBwSWQ6ICdaTTNUSThBS0w0JyxcbiAgICAgIH0sXG4gICAgICBmZWF0dXJlcyxcbiAgICAgIGxhbmdzOiBsYW5ndWFnZXMsXG4gICAgfSxcbiAgICAvLyBsb2NhbGVzLFxuICAgIHZpdGU6IGdldFZpdGVDb25maWcoY29uZmlnRW52KSxcbiAgICBtYXJrZG93bjoge1xuICAgICAgY29uZmlnOiAobWQpID0+IG1kUGx1Z2luKG1kKSxcbiAgICB9LFxuICAgIHZ1ZToge1xuICAgICAgY29tcGlsZXI6IHZ1ZUNvbXBpbGVyLFxuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgaG9pc3RTdGF0aWM6IGZhbHNlLFxuICAgICAgICAgIGRpcmVjdGl2ZVRyYW5zZm9ybXM6IGJ1aWxkVHJhbnNmb3JtZXJzKCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gXHU4QkJFXHU3RjZFXHU1N0ZBXHU1MUM2XHU4REVGXHU1Rjg0IGdpdGh1YiBcdTc2RUVcdTUyNERnaXRodWIgXHU3NTFGXHU2MjEwXHU3RjUxXHU1NzQwXHU1NDBFIGVsZW1lbnQtcHJvbWF4LWRvY3MgXHU4REVGXHU1Rjg0IFx1ODFFQVx1NTJBOFx1NTNEOFx1NjIxMCBlbi1VUyBcdTgwMENcdTRFMERcdTY2MkYgL2VsZW1lbnQtcHJvbWF4LWRvY3MvZW4tVVNcblxuXG5cbiAgICBiYXNlOiAnL2VsZW1lbnQtcHJvbWF4LWRvY3MvJyxcbiAgICAvLyAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcvZWxlbWVudC1wcm9tYXgtZG9jcy8nIDogJy8nLFxuICAgIHBvc3RSZW5kZXIoY29udGV4dCkge1xuICAgICAgLy8gSW5qZWN0IHRoZSB0ZWxlcG9ydCBtYXJrdXBcbiAgICAgIGlmIChjb250ZXh0LnRlbGVwb3J0cykge1xuICAgICAgICBjb25zdCBib2R5ID0gT2JqZWN0LmVudHJpZXMoY29udGV4dC50ZWxlcG9ydHMpLnJlZHVjZShcbiAgICAgICAgICAoYWxsLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnI2VsLXBvcHBlci1jb250YWluZXItJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGAke2FsbH08ZGl2IGlkPVwiJHtrZXkuc2xpY2UoMSl9XCI+JHt2YWx1ZX08L2Rpdj5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZXh0LnRlbGVwb3J0cy5ib2R5IHx8ICcnXG4gICAgICAgIClcblxuICAgICAgICBjb250ZXh0LnRlbGVwb3J0cyA9IHsgLi4uY29udGV4dC50ZWxlcG9ydHMsIGJvZHkgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGV4dFxuICAgIH0sXG4gIH1cblxuICByZXR1cm4gY29uZmlnXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwQ29uZmlnXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx1dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHV0aWxzXFxcXGxhbmcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215LXByb2plY3QvZWxlbWVudC1wcm9tYXgtZGV2L2RvY3MvLnZpdGVwcmVzcy91dGlscy9sYW5nLnRzXCI7aW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRvY1Jvb3QgfSBmcm9tICdAZWxlbWVudC1wbHVzL2J1aWxkLXV0aWxzJ1xuXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzID0gZnMucmVhZGRpclN5bmMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2Nyb3dkaW4nKSlcblxuZXhwb3J0IGNvbnN0IGVuc3VyZUxhbmcgPSAobGFuZzogc3RyaW5nKSA9PiBgLyR7bGFuZ31gXG4vLyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJy8nIDogXG5cbmV4cG9ydCBjb25zdCBnZXRMYW5nID0gKGlkOiBzdHJpbmcpID0+XG4gIHBhdGgucmVsYXRpdmUoZG9jUm9vdCwgaWQpLnNwbGl0KHBhdGguc2VwKVswXVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteS1wcm9qZWN0XFxcXGVsZW1lbnQtcHJvbWF4LWRldlxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxteS1wcm9qZWN0XFxcXGVsZW1lbnQtcHJvbWF4LWRldlxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXGZlYXR1cmVzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teS1wcm9qZWN0L2VsZW1lbnQtcHJvbWF4LWRldi9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2ZlYXR1cmVzLnRzXCI7ZXhwb3J0IGNvbnN0IGZlYXR1cmVzID0ge31cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxoZWFkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teS1wcm9qZWN0L2VsZW1lbnQtcHJvbWF4LWRldi9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2hlYWQudHNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgdnBSb290IH0gZnJvbSAnQGVsZW1lbnQtcGx1cy9idWlsZC11dGlscydcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uL3V0aWxzL2xhbmcnXG5cbmltcG9ydCB0eXBlIHsgSGVhZENvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuZXhwb3J0IGNvbnN0IGhlYWQ6IEhlYWRDb25maWdbXSA9IFtcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIGhyZWY6ICcvaW1hZ2VzL2VsZW1lbnQtcGx1cy1sb2dvLXNtYWxsLnN2ZycsXG4gICAgICB0eXBlOiAnaW1hZ2Uvc3ZnK3htJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgJ2xpbmsnLFxuICAgIHtcbiAgICAgIHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuICAgICAgaHJlZjogJy9hcHBsZS10b3VjaC1pY29uLnBuZycsXG4gICAgICBzaXplczogJzE4MHgxODAnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICAnbGluaycsXG4gICAge1xuICAgICAgcmVsOiAnbWFzay1pY29uJyxcbiAgICAgIGhyZWY6ICcvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJyxcbiAgICAgIGNvbG9yOiAnIzViYmFkNScsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgICdtZXRhJyxcbiAgICB7XG4gICAgICBuYW1lOiAndGhlbWUtY29sb3InLFxuICAgICAgY29udGVudDogJyNmZmZmZmYnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICAnbWV0YScsXG4gICAge1xuICAgICAgbmFtZTogJ21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyxcbiAgICAgIGNvbnRlbnQ6ICcjNDA5ZWZmJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgJ21ldGEnLFxuICAgIHtcbiAgICAgIG5hbWU6ICdtc2FwcGxpY2F0aW9uLWNvbmZpZycsXG4gICAgICBjb250ZW50OiAnL2Jyb3dzZXJjb25maWcueG1sJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgJ21ldGEnLFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiAnb2c6aW1hZ2UnLFxuICAgICAgY29udGVudDogJy9pbWFnZXMvZWxlbWVudC1wbHVzLW9nLWltYWdlLnBuZycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgICdtZXRhJyxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogJ29nOmltYWdlOndpZHRoJyxcbiAgICAgIGNvbnRlbnQ6ICcxMjAwJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgJ21ldGEnLFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiAnb2c6aW1hZ2U6aGVpZ2h0JyxcbiAgICAgIGNvbnRlbnQ6ICc2MzAnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICAnbWV0YScsXG4gICAge1xuICAgICAgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsXG4gICAgICBjb250ZW50OiAnQSBWdWUgMyBiYXNlZCBjb21wb25lbnQgbGlicmFyeSBmb3IgZGVzaWduZXJzIGFuZCBkZXZlbG9wZXJzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgJ3NjcmlwdCcsXG4gICAge30sXG4gICAgYDsoKCkgPT4ge1xuICAgICAgd2luZG93LnN1cHBvcnRlZExhbmdzID0gJHtKU09OLnN0cmluZ2lmeShsYW5ndWFnZXMpfVxuICAgIH0pKClgLFxuICBdLFxuXG4gIFsnc2NyaXB0Jywge30sIGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUodnBSb290LCAnbGFuZy5qcycpLCAndXRmLTgnKV0sXG4gIFtcbiAgICAnc2NyaXB0JyxcbiAgICB7XG4gICAgICBhc3luYzogJ3RydWUnLFxuICAgICAgc3JjOiAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1VQS0xNzUzMzc5ODktMScsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgICdzY3JpcHQnLFxuICAgIHt9LFxuICAgIGBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgICAgLnJlZ2lzdGVyKCcvc3cuanMnKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWdpc3RyYXRpb24pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfWAsXG4gIF0sXG4gIFtcbiAgICAnc2NyaXB0JyxcbiAgICB7XG4gICAgICBhc3luYzogJ3RydWUnLFxuICAgIH0sXG4gICAgYHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbmd0YWcoJ2NvbmZpZycsICdVQS0xNzUzMzc5ODktMScpO2AsXG4gIF0sXG4gIFtcbiAgICAnc2NyaXB0JyxcbiAgICB7XG4gICAgICBhc3luYzogJ3RydWUnLFxuICAgICAgc3JjOiAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLU03NFpIRVExTTEnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICAnc2NyaXB0JyxcbiAgICB7fSxcbiAgICBgXG4gICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG5cbiAgICAgIGd0YWcoJ2NvbmZpZycsICdHLU03NFpIRVExTTEnKTtcbiAgICBgLFxuICBdLFxuICBbXG4gICAgJ3NjcmlwdCcsXG4gICAge1xuICAgICAgYXN5bmM6ICd0cnVlJyxcbiAgICB9LFxuICAgIGBcbiAgdmFyIHJlc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICByZXNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICByZXNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW50ZXI6MzAwLDQwMCw1MDAsNjAwLDcwMCw4MDB8T3BlbitTYW5zOjQwMCw2MDA7ZGlzcGxheT1zd2FwXCIpO1xuICByZXNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0L2Nzc1wiKTtcbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gIGhlYWQuYXBwZW5kQ2hpbGQocmVzb3VyY2UpO1xuICAgIGAsXG4gIF0sXG5dXG4iLCAie1xuICBcImVuLVVTXCI6IFtcbiAgICB7XG4gICAgICBcInRleHRcIjogXCJHdWlkZVwiLFxuICAgICAgXCJsaW5rXCI6IFwiL2d1aWRlL2Rlc2lnblwiLFxuICAgICAgXCJhY3RpdmVNYXRjaFwiOiBcIi9ndWlkZS9cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiQ29tcG9uZW50XCIsXG4gICAgICBcImxpbmtcIjogXCIvY29tcG9uZW50L292ZXJ2aWV3XCIsXG4gICAgICBcImFjdGl2ZU1hdGNoXCI6IFwiL2NvbXBvbmVudC9cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0ZXh0XCI6IFwiUmVzb3VyY2VcIixcbiAgICAgIFwibGlua1wiOiBcIi9yZXNvdXJjZS9pbmRleFwiLFxuICAgICAgXCJhY3RpdmVNYXRjaFwiOiBcIi9yZXNvdXJjZS9cIlxuICAgIH1cbiAgXVxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxuYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215LXByb2plY3QvZWxlbWVudC1wcm9tYXgtZGV2L2RvY3MvLnZpdGVwcmVzcy9jb25maWcvbmF2LnRzXCI7aW1wb3J0IHsgZW5zdXJlTGFuZyB9IGZyb20gJy4uL3V0aWxzL2xhbmcnXG5pbXBvcnQgbmF2TG9jYWxlIGZyb20gJy4uL2kxOG4vcGFnZXMvc2lkZWJhci5qc29uJ1xuXG4vLyBNYXBwaW5nIHRoZSBmaXJzdCBzdWIgbGluayB0byB0aGUgbmF2IGxpbmsgdG8gYXZvaWQgNDA0IGVycm9yLlxuXG5mdW5jdGlvbiBnZXROYXYoKSB7XG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXMobmF2TG9jYWxlKS5tYXAoKFtsYW5nLCBsb2NhbGVzXSkgPT4ge1xuICAgICAgY29uc3QgaXRlbToge1xuICAgICAgICBsaW5rOiBzdHJpbmdcbiAgICAgICAgdGV4dDogc3RyaW5nXG4gICAgICAgIGFjdGl2ZU1hdGNoPzogc3RyaW5nXG4gICAgICB9W10gPSBPYmplY3QudmFsdWVzKGxvY2FsZXMpLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgbGluazogYCR7ZW5zdXJlTGFuZyhsYW5nKX0ke2l0ZW0ubGlua31gLFxuICAgICAgfSkpXG5cbiAgICAgIHJldHVybiBbbGFuZywgaXRlbV1cbiAgICB9KVxuICApXG59XG5cbmV4cG9ydCBjb25zdCBuYXYgPSBnZXROYXYoKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteS1wcm9qZWN0XFxcXGVsZW1lbnQtcHJvbWF4LWRldlxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxteS1wcm9qZWN0XFxcXGVsZW1lbnQtcHJvbWF4LWRldlxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215LXByb2plY3QvZWxlbWVudC1wcm9tYXgtZGV2L2RvY3MvLnZpdGVwcmVzcy9jb25maWcvcGx1Z2lucy50c1wiO2ltcG9ydCBtZENvbnRhaW5lciBmcm9tICdtYXJrZG93bi1pdC1jb250YWluZXInXG5pbXBvcnQgZXh0ZXJuYWxMaW5rSWNvbiBmcm9tICcuLi9wbHVnaW5zL2V4dGVybmFsLWxpbmstaWNvbidcbmltcG9ydCB0YWJsZVdyYXBwZXIgZnJvbSAnLi4vcGx1Z2lucy90YWJsZS13cmFwcGVyJ1xuaW1wb3J0IHRvb2x0aXAgZnJvbSAnLi4vcGx1Z2lucy90b29sdGlwJ1xuaW1wb3J0IHRhZyBmcm9tICcuLi9wbHVnaW5zL3RhZydcbmltcG9ydCBoZWFkZXJzIGZyb20gJy4uL3BsdWdpbnMvaGVhZGVycydcbmltcG9ydCBjcmVhdGVEZW1vQ29udGFpbmVyIGZyb20gJy4uL3BsdWdpbnMvZGVtbydcbmltcG9ydCB7IEFwaVRhYmxlQ29udGFpbmVyIH0gZnJvbSAnLi4vcGx1Z2lucy9hcGktdGFibGUnXG5pbXBvcnQgdHlwZSB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tICd2aXRlcHJlc3MnXG5cbmV4cG9ydCBjb25zdCBtZFBsdWdpbiA9IChtZDogTWFya2Rvd25SZW5kZXJlcikgPT4ge1xuICBtZC51c2UoaGVhZGVycylcbiAgbWQudXNlKGV4dGVybmFsTGlua0ljb24pXG4gIG1kLnVzZSh0YWJsZVdyYXBwZXIpXG4gIG1kLnVzZSh0b29sdGlwKVxuICBtZC51c2UodGFnKVxuICBtZC51c2UobWRDb250YWluZXIsICdkZW1vJywgY3JlYXRlRGVtb0NvbnRhaW5lcihtZCkpXG4gIG1kLnVzZShBcGlUYWJsZUNvbnRhaW5lcilcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxwbHVnaW5zXFxcXGV4dGVybmFsLWxpbmstaWNvbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbXktcHJvamVjdC9lbGVtZW50LXByb21heC1kZXYvZG9jcy8udml0ZXByZXNzL3BsdWdpbnMvZXh0ZXJuYWwtbGluay1pY29uLnRzXCI7aW1wb3J0IHR5cGUgeyBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSAndml0ZXByZXNzJ1xuXG50eXBlIFJlbmRlclJ1bGUgPSBFeGNsdWRlPFxuICBNYXJrZG93blJlbmRlcmVyWydyZW5kZXJlciddWydydWxlcyddWydjb250YWluZXInXSxcbiAgdW5kZWZpbmVkXG4+XG5leHBvcnQgZGVmYXVsdCAobWQ6IE1hcmtkb3duUmVuZGVyZXIpOiB2b2lkID0+IHtcbiAgY29uc3QgcmVuZGVyVG9rZW46IFJlbmRlclJ1bGUgPSAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZikgPT5cbiAgICBzZWxmLnJlbmRlclRva2VuKHRva2VucywgaWR4LCBvcHRpb25zKVxuICBjb25zdCBkZWZhdWx0TGlua09wZW5SZW5kZXJlciA9IG1kLnJlbmRlcmVyLnJ1bGVzLmxpbmtfb3BlbiB8fCByZW5kZXJUb2tlblxuICBjb25zdCBkZWZhdWx0TGlua0Nsb3NlUmVuZGVyZXIgPSBtZC5yZW5kZXJlci5ydWxlcy5saW5rX2Nsb3NlIHx8IHJlbmRlclRva2VuXG4gIGxldCBpc0V4dGVybmFsTGluayA9IGZhbHNlXG5cbiAgbWQucmVuZGVyZXIucnVsZXMubGlua19vcGVuID0gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNlbGYpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpZHhdXG4gICAgY29uc3QgaHJlZiA9IHRva2VuLmF0dHJHZXQoJ2hyZWYnKVxuXG4gICAgaWYgKGhyZWYpIHtcbiAgICAgIHRva2VuLmF0dHJKb2luKCdjbGFzcycsICd2cC1saW5rJylcbiAgICAgIGlmICgvXigoaHR8Zil0cHM/KTpcXC9cXC8/Ly50ZXN0KGhyZWYpKSB7XG4gICAgICAgIGlzRXh0ZXJuYWxMaW5rID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0TGlua09wZW5SZW5kZXJlcih0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKVxuICB9XG5cbiAgbWQucmVuZGVyZXIucnVsZXMubGlua19jbG9zZSA9ICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKSA9PiB7XG4gICAgaWYgKGlzRXh0ZXJuYWxMaW5rKSB7XG4gICAgICBpc0V4dGVybmFsTGluayA9IGZhbHNlXG4gICAgICByZXR1cm4gYDxpLXJpLWV4dGVybmFsLWxpbmstbGluZSBjbGFzcz1cImxpbmstaWNvblwiIC8+JHtzZWxmLnJlbmRlclRva2VuKFxuICAgICAgICB0b2tlbnMsXG4gICAgICAgIGlkeCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKX1gXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRMaW5rQ2xvc2VSZW5kZXJlcih0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKVxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxteS1wcm9qZWN0XFxcXGVsZW1lbnQtcHJvbWF4LWRldlxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luc1xcXFx0YWJsZS13cmFwcGVyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teS1wcm9qZWN0L2VsZW1lbnQtcHJvbWF4LWRldi9kb2NzLy52aXRlcHJlc3MvcGx1Z2lucy90YWJsZS13cmFwcGVyLnRzXCI7aW1wb3J0IHR5cGUgeyBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSAndml0ZXByZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCAobWQ6IE1hcmtkb3duUmVuZGVyZXIpOiB2b2lkID0+IHtcbiAgbWQucmVuZGVyZXIucnVsZXMudGFibGVfb3BlbiA9ICgpID0+ICc8ZGl2IGNsYXNzPVwidnAtdGFibGVcIj48dGFibGU+J1xuICBtZC5yZW5kZXJlci5ydWxlcy50YWJsZV9jbG9zZSA9ICgpID0+ICc8L3RhYmxlPjwvZGl2Pidcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxwbHVnaW5zXFxcXHRvb2x0aXAudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215LXByb2plY3QvZWxlbWVudC1wcm9tYXgtZGV2L2RvY3MvLnZpdGVwcmVzcy9wbHVnaW5zL3Rvb2x0aXAudHNcIjtpbXBvcnQgdHlwZSB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tICd2aXRlcHJlc3MnXG5cbmV4cG9ydCBkZWZhdWx0IChtZDogTWFya2Rvd25SZW5kZXJlcik6IHZvaWQgPT4ge1xuICBtZC5yZW5kZXJlci5ydWxlcy50b29sdGlwID0gKHRva2VucywgaWR4KSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaWR4XVxuXG4gICAgcmV0dXJuIGA8YXBpLXR5cGluZyB0eXBlPVwiJHt0b2tlbi5jb250ZW50fVwiIGRldGFpbHM9XCIke3Rva2VuLmluZm99XCIgLz5gXG4gIH1cblxuICBtZC5pbmxpbmUucnVsZXIuYmVmb3JlKCdlbXBoYXNpcycsICd0b29sdGlwJywgKHN0YXRlLCBzaWxlbnQpID0+IHtcbiAgICBjb25zdCB0b29sdGlwUmVnRXhwID0gL15cXF5cXFsoW15cXF1dKilcXF0oYFteYF0qYCk/L1xuICAgIGNvbnN0IHN0ciA9IHN0YXRlLnNyYy5zbGljZShzdGF0ZS5wb3MsIHN0YXRlLnBvc01heClcblxuICAgIGlmICghdG9vbHRpcFJlZ0V4cC50ZXN0KHN0cikpIHJldHVybiBmYWxzZVxuICAgIGlmIChzaWxlbnQpIHJldHVybiB0cnVlXG5cbiAgICBjb25zdCByZXN1bHQgPSBzdHIubWF0Y2godG9vbHRpcFJlZ0V4cClcblxuICAgIGlmICghcmVzdWx0KSByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IHRva2VuID0gc3RhdGUucHVzaCgndG9vbHRpcCcsICd0b29sdGlwJywgMClcbiAgICB0b2tlbi5jb250ZW50ID0gcmVzdWx0WzFdLnJlcGxhY2UoL1xcXFxcXHwvZywgJ3wnKVxuICAgIHRva2VuLmluZm8gPSAocmVzdWx0WzJdIHx8ICcnKS5yZXBsYWNlKC9eYCguKilgJC8sICckMScpXG4gICAgdG9rZW4ubGV2ZWwgPSBzdGF0ZS5sZXZlbFxuICAgIHN0YXRlLnBvcyArPSByZXN1bHRbMF0ubGVuZ3RoXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteS1wcm9qZWN0XFxcXGVsZW1lbnQtcHJvbWF4LWRldlxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpbnNcXFxcdGFnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teS1wcm9qZWN0L2VsZW1lbnQtcHJvbWF4LWRldi9kb2NzLy52aXRlcHJlc3MvcGx1Z2lucy90YWcudHNcIjtpbXBvcnQgdHlwZSB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tICd2aXRlcHJlc3MnXG5cbmV4cG9ydCBkZWZhdWx0IChtZDogTWFya2Rvd25SZW5kZXJlcik6IHZvaWQgPT4ge1xuICBtZC5pbmxpbmUucnVsZXIuYmVmb3JlKCdlbXBoYXNpcycsICd0YWcnLCAoc3RhdGUsIHNpbGVudCkgPT4ge1xuICAgIGNvbnN0IHRhZ1JlZ0V4cCA9IC9eXFxeXFwoKFteKV0qKVxcKS9cbiAgICBjb25zdCBzdHIgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhdGUucG9zLCBzdGF0ZS5wb3NNYXgpXG5cbiAgICBpZiAoIXRhZ1JlZ0V4cC50ZXN0KHN0cikpIHJldHVybiBmYWxzZVxuICAgIGlmIChzaWxlbnQpIHJldHVybiB0cnVlXG5cbiAgICBjb25zdCByZXN1bHQgPSBzdHIubWF0Y2godGFnUmVnRXhwKVxuXG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3QgdG9rZW4gPSBzdGF0ZS5wdXNoKCdodG1sX2lubGluZScsICcnLCAwKVxuICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0WzFdLnRyaW0oKVxuICAgIC8qKlxuICAgICAqIEFkZCBzdHlsZXMgZm9yIHNvbWUgc3BlY2lhbCB0YWdzXG4gICAgICogdml0ZXByZXNzL3N0eWxlcy9jb250ZW50L3RhZy1jb250ZW50LnNjc3NcbiAgICAgKi9cbiAgICBjb25zdCB0YWdDbGFzcyA9IFsnYmV0YScsICdkZXByZWNhdGVkJywgJ2ExMXknLCAncmVxdWlyZWQnXS5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgID8gdmFsdWVcbiAgICAgIDogJydcbiAgICB0b2tlbi5jb250ZW50ID0gYDxzcGFuIGNsYXNzPVwidnAtdGFnICR7dGFnQ2xhc3N9XCI+JHt2YWx1ZX08L3NwYW4+YFxuICAgIHRva2VuLmxldmVsID0gc3RhdGUubGV2ZWxcbiAgICBzdGF0ZS5wb3MgKz0gcmVzdWx0WzBdLmxlbmd0aFxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSlcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxwbHVnaW5zXFxcXGhlYWRlcnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215LXByb2plY3QvZWxlbWVudC1wcm9tYXgtZGV2L2RvY3MvLnZpdGVwcmVzcy9wbHVnaW5zL2hlYWRlcnMudHNcIjtpbXBvcnQgeyByZXNvbHZlSGVhZGVyc0Zyb21Ub2tlbnMsIHNsdWdpZnkgfSBmcm9tICdAbWRpdC12dWUvc2hhcmVkJ1xuaW1wb3J0IHR5cGUgeyBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSAndml0ZXByZXNzJ1xuXG4vKipcbiAqIEdldCBtYXJrZG93biBoZWFkZXJzIGluZm9cbiAqXG4gKiBFeHRyYWN0IHRoZW0gaW50byBlbnZcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKG1kOiBNYXJrZG93blJlbmRlcmVyKTogdm9pZCA9PiB7XG4gIC8vIGV4dHJhY3QgaGVhZGVycyB0byBlbnZcbiAgY29uc3QgcmVuZGVyID0gbWQucmVuZGVyZXIucmVuZGVyLmJpbmQobWQucmVuZGVyZXIpXG5cbiAgY29uc3QgbGV2ZWwgPSBbMiwgMywgNCwgNSwgNl1cbiAgbWQucmVuZGVyZXIucmVuZGVyID0gKHRva2Vucywgb3B0aW9ucywgZW52KSA9PiB7XG4gICAgZW52LmhlYWRlcnMgPSByZXNvbHZlSGVhZGVyc0Zyb21Ub2tlbnModG9rZW5zLCB7XG4gICAgICBsZXZlbCxcbiAgICAgIHNob3VsZEFsbG93SHRtbDogdHJ1ZSxcbiAgICAgIHNob3VsZEFsbG93TmVzdGVkOiBmYWxzZSxcbiAgICAgIHNob3VsZEVzY2FwZVRleHQ6IGZhbHNlLFxuICAgICAgc2x1Z2lmeSxcbiAgICB9KVxuICAgIHJldHVybiByZW5kZXIodG9rZW5zLCBvcHRpb25zLCBlbnYpXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxwbHVnaW5zXFxcXGRlbW8udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215LXByb2plY3QvZWxlbWVudC1wcm9tYXgtZGV2L2RvY3MvLnZpdGVwcmVzcy9wbHVnaW5zL2RlbW8udHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgZG9jUm9vdCB9IGZyb20gJ0BlbGVtZW50LXBsdXMvYnVpbGQtdXRpbHMnXG5pbXBvcnQgdHlwZSB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tICd2aXRlcHJlc3MnXG5cbmludGVyZmFjZSBDb250YWluZXJPcHRzIHtcbiAgbWFya2VyPzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHZhbGlkYXRlPyhwYXJhbXM6IHN0cmluZyk6IGJvb2xlYW5cbiAgcmVuZGVyPzogTWFya2Rvd25SZW5kZXJlclsncmVuZGVyZXInXVsncnVsZXMnXVsnY29udGFpbmVyJ11cbn1cbmZ1bmN0aW9uIGNyZWF0ZURlbW9Db250YWluZXIobWQ6IE1hcmtkb3duUmVuZGVyZXIpOiBDb250YWluZXJPcHRzIHtcbiAgcmV0dXJuIHtcbiAgICB2YWxpZGF0ZShwYXJhbXMpIHtcbiAgICAgIHJldHVybiAhIXBhcmFtcy50cmltKCkubWF0Y2goL15kZW1vXFxzKiguKikkLylcbiAgICB9LFxuXG4gICAgcmVuZGVyKHRva2VucywgaWR4KSB7XG4gICAgICBjb25zdCBtID0gdG9rZW5zW2lkeF0uaW5mby50cmltKCkubWF0Y2goL15kZW1vXFxzKiguKikkLylcbiAgICAgIGlmICh0b2tlbnNbaWR4XS5uZXN0aW5nID09PSAxIC8qIG1lYW5zIHRoZSB0YWcgaXMgb3BlbmluZyAqLykge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG0gJiYgbS5sZW5ndGggPiAxID8gbVsxXSA6ICcnXG4gICAgICAgIGNvbnN0IHNvdXJjZUZpbGVUb2tlbiA9IHRva2Vuc1tpZHggKyAyXVxuICAgICAgICBsZXQgc291cmNlID0gJydcbiAgICAgICAgY29uc3Qgc291cmNlRmlsZSA9IHNvdXJjZUZpbGVUb2tlbi5jaGlsZHJlbj8uWzBdLmNvbnRlbnQgPz8gJydcblxuICAgICAgICBpZiAoc291cmNlRmlsZVRva2VuLnR5cGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKFxuICAgICAgICAgICAgcGF0aC5yZXNvbHZlKGRvY1Jvb3QsICdleGFtcGxlcycsIGAke3NvdXJjZUZpbGV9LnZ1ZWApLFxuICAgICAgICAgICAgJ3V0Zi04J1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNvdXJjZSkgdGhyb3cgbmV3IEVycm9yKGBJbmNvcnJlY3Qgc291cmNlIGZpbGU6ICR7c291cmNlRmlsZX1gKVxuXG4gICAgICAgIHJldHVybiBgPERlbW8gc291cmNlPVwiJHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgbWQucmVuZGVyKGBcXGBcXGBcXGAgdnVlXFxuJHtzb3VyY2V9XFxgXFxgXFxgYClcbiAgICAgICAgKX1cIiBwYXRoPVwiJHtzb3VyY2VGaWxlfVwiIHJhdy1zb3VyY2U9XCIke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICBzb3VyY2VcbiAgICAgICAgKX1cIiBkZXNjcmlwdGlvbj1cIiR7ZW5jb2RlVVJJQ29tcG9uZW50KG1kLnJlbmRlcihkZXNjcmlwdGlvbikpfVwiPlxuICA8dGVtcGxhdGUgI3NvdXJjZT48ZXAtJHtzb3VyY2VGaWxlLnJlcGxhY2VBbGwoJy8nLCAnLScpfS8+PC90ZW1wbGF0ZT5gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJzwvRGVtbz5cXG4nXG4gICAgICB9XG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZW1vQ29udGFpbmVyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxteS1wcm9qZWN0XFxcXGVsZW1lbnQtcHJvbWF4LWRldlxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luc1xcXFxhcGktdGFibGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215LXByb2plY3QvZWxlbWVudC1wcm9tYXgtZGV2L2RvY3MvLnZpdGVwcmVzcy9wbHVnaW5zL2FwaS10YWJsZS50c1wiO2ltcG9ydCB0eXBlIHsgTWFya2Rvd25SZW5kZXJlciB9IGZyb20gJ3ZpdGVwcmVzcydcbmV4cG9ydCBjb25zdCBBcGlUYWJsZUNvbnRhaW5lciA9IChtZDogTWFya2Rvd25SZW5kZXJlcikgPT4ge1xuICBjb25zdCBmZW5jZSA9IG1kLnJlbmRlcmVyLnJ1bGVzLmZlbmNlIVxuXG4gIG1kLnJlbmRlcmVyLnJ1bGVzLmZlbmNlID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBbdG9rZW5zLCBpZHgsIC4uLnJlc3RdID0gYXJnc1xuICAgIGNvbnN0IFtvcHRpb25zLCBlbnZdID0gcmVzdFxuICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2lkeF1cbiAgICBpZiAodG9rZW4uaW5mbyA9PT0gJ2FwaScpIHtcbiAgICAgIGNvbnN0IG5ld1Rva2VucyA9IG1kLnBhcnNlKHRva2VuLmNvbnRlbnQsIGVudilcblxuICAgICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgICBjb25zdCB7IHJ1bGVzIH0gPSBtZC5yZW5kZXJlclxuICAgICAgbmV3VG9rZW5zLmZvckVhY2goKG5ld1Rva2VuLCBpZHgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBuZXdUb2tlblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICByZXN1bHQgKz0gbWQucmVuZGVyZXIucmVuZGVySW5saW5lKG5ld1Rva2VuLmNoaWxkcmVuISwgb3B0aW9ucywgZW52KVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBydWxlc1t0eXBlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHQgKz0gcnVsZXNbbmV3VG9rZW4udHlwZV0hKFxuICAgICAgICAgICAgbmV3VG9rZW5zLFxuICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIGVudixcbiAgICAgICAgICAgIG1kLnJlbmRlcmVyXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCArPSBtZC5yZW5kZXJlci5yZW5kZXJUb2tlbihuZXdUb2tlbnMsIGlkeCwgb3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgcmV0dXJuIGZlbmNlLmNhbGwobWQsIC4uLmFyZ3MpXG4gIH1cbn1cbiIsICJ7XG4gIFwiZW4tVVNcIjoge1xuICAgIFwiaW50cm9cIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiQmFzaWNzXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIkRlc2lnblwiLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9ndWlkZS9kZXNpZ25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiTmF2aWdhdGlvblwiLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9ndWlkZS9uYXZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiSW5zdGFsbGF0aW9uXCIsXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2d1aWRlL2luc3RhbGxhdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJRdWljayBTdGFydFwiLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9ndWlkZS9xdWlja3N0YXJ0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJhZHZhbmNlZFwiOiB7XG4gICAgICBcInRleHRcIjogXCJBZHZhbmNlZFwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJpMThuXCIsXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2d1aWRlL2kxOG5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiTWlncmF0aW9uIGZyb20gRWxlbWVudFVJXCIsXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2d1aWRlL21pZ3JhdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRleHRcIjogXCJUaGVtaW5nXCIsXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2d1aWRlL3RoZW1pbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiRGFyayBNb2RlXCIsXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2d1aWRlL2RhcmstbW9kZVwiLFxuICAgICAgICAgIFwicHJvbW90aW9uXCI6IFwiMi4yLjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQ3VzdG9tIE5hbWVzcGFjZVwiLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9ndWlkZS9uYW1lc3BhY2VcIixcbiAgICAgICAgICBcInByb21vdGlvblwiOiBcIjIuMi4wXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIlNTUlwiLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9ndWlkZS9zc3JcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQnVpbHQtaW4gVHJhbnNpdGlvbnNcIixcbiAgICAgICAgICBcImxpbmtcIjogXCIvZ3VpZGUvdHJhbnNpdGlvbnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQ2hhbmdlbG9nXCIsXG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2d1aWRlL2NoYW5nZWxvZ1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiZGV2ZWxvcG1lbnRcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiRGV2ZWxvcG1lbnRcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiRGV2ZWxvcG1lbnQgR3VpZGVcIixcbiAgICAgICAgICBcImxpbmtcIjogXCIvZ3VpZGUvZGV2LWd1aWRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIkRldmVsb3BtZW50IEZBUVwiLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9ndWlkZS9kZXYtZmFxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidGV4dFwiOiBcIkNvbW1pdCBFeGFtcGxlc1wiLFxuICAgICAgICAgIFwibGlua1wiOiBcIi9ndWlkZS9jb21taXQtZXhhbXBsZXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiVHJhbnNsYXRpb25cIixcbiAgICAgICAgICBcImxpbmtcIjogXCIvZ3VpZGUvdHJhbnNsYXRpb25cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG59IiwgIntcbiAgXCJlbi1VU1wiOiB7XG4gICAgXCJvdmVydmlld1wiOiB7XG4gICAgICBcInRleHRcIjogXCJPdmVydmlld1wiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvb3ZlcnZpZXdcIixcbiAgICAgICAgICBcInRleHRcIjogXCJPdmVydmlld1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiYmFzaWNcIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiQmFzaWNcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2J1dHRvblwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkJ1dHRvblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvYm9yZGVyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQm9yZGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9jb2xvclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkNvbG9yXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9jb250YWluZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJMYXlvdXQgQ29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9pY29uXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiSWNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvbGF5b3V0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiTGF5b3V0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9saW5rXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiTGlua1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvdGV4dFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlRleHRcIixcbiAgICAgICAgICBcInByb21vdGlvblwiOiBcIjIuMy4wXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9zY3JvbGxiYXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJTY3JvbGxiYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3NwYWNlXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiU3BhY2VcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3R5cG9ncmFwaHlcIixcbiAgICAgICAgICBcInRleHRcIjogXCJUeXBvZ3JhcGh5XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJjb25maWd1cmF0aW9uXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIkNvbmZpZ3VyYXRpb25cIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2NvbmZpZy1wcm92aWRlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkNvbmZpZyBQcm92aWRlclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiZm9ybVwiOiB7XG4gICAgICBcInRleHRcIjogXCJGb3JtXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9hdXRvY29tcGxldGVcIixcbiAgICAgICAgICBcInRleHRcIjogXCJBdXRvY29tcGxldGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2Nhc2NhZGVyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQ2FzY2FkZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2NoZWNrYm94XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQ2hlY2tib3hcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2NvbG9yLXBpY2tlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkNvbG9yIFBpY2tlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJEYXRlIFBpY2tlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvZGF0ZXRpbWUtcGlja2VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiRGF0ZVRpbWUgUGlja2VyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9mb3JtXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiRm9ybVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvZm9ybS1wcm9cIixcbiAgICAgICAgICBcInRleHRcIjogXCJGb3JtUHJvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9pbnB1dFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIklucHV0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9pbnB1dC1udW1iZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJJbnB1dCBOdW1iZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2lucHV0LXRhZ1wiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIklucHV0IFRhZ1wiLFxuICAgICAgICAgIFwicHJvbW90aW9uXCI6IFwiMi45LjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL21lbnRpb25cIixcbiAgICAgICAgICBcInRleHRcIjogXCJNZW50aW9uXCIsXG4gICAgICAgICAgXCJwcm9tb3Rpb25cIjogXCIyLjguMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvcmFkaW9cIixcbiAgICAgICAgICBcInRleHRcIjogXCJSYWRpb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvcmF0ZVwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlJhdGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3NlbGVjdFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlNlbGVjdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvc2VsZWN0LXYyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiVmlydHVhbGl6ZWQgU2VsZWN0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9zbGlkZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJTbGlkZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3N3aXRjaFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlN3aXRjaFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvdGltZS1waWNrZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJUaW1lIFBpY2tlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvdGltZS1zZWxlY3RcIixcbiAgICAgICAgICBcInRleHRcIjogXCJUaW1lIFNlbGVjdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvdHJhbnNmZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJUcmFuc2ZlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvdHJlZS1zZWxlY3RcIixcbiAgICAgICAgICBcInRleHRcIjogXCJUcmVlU2VsZWN0XCIsXG4gICAgICAgICAgXCJwcm9tb3Rpb25cIjogXCIyLjEuOFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvdXBsb2FkXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiVXBsb2FkXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJkYXRhXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIkRhdGFcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2F2YXRhclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkF2YXRhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvYmFkZ2VcIixcbiAgICAgICAgICBcInRleHRcIjogXCJCYWRnZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvY2FsZW5kYXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJDYWxlbmRhclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvY2FyZFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkNhcmRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2Nhcm91c2VsXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQ2Fyb3VzZWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2NvbGxhcHNlXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQ29sbGFwc2VcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2Rlc2NyaXB0aW9uc1wiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkRlc2NyaXB0aW9uc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvZW1wdHlcIixcbiAgICAgICAgICBcInRleHRcIjogXCJFbXB0eVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvaW1hZ2VcIixcbiAgICAgICAgICBcInRleHRcIjogXCJJbWFnZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvaW5maW5pdGUtc2Nyb2xsXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiSW5maW5pdGUgU2Nyb2xsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9wYWdpbmF0aW9uXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiUGFnaW5hdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvcHJvZ3Jlc3NcIixcbiAgICAgICAgICBcInRleHRcIjogXCJQcm9ncmVzc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvcmVzdWx0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiUmVzdWx0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9za2VsZXRvblwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlNrZWxldG9uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi90YWJsZVwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlRhYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi90YWJsZS12MlwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlZpcnR1YWxpemVkIFRhYmxlXCIsXG4gICAgICAgICAgXCJwcm9tb3Rpb25cIjogXCIyLjIuMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvdGFnXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiVGFnXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi90aW1lbGluZVwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlRpbWVsaW5lXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi90b3VyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiVG91clwiLFxuICAgICAgICAgIFwicHJvbW90aW9uXCI6IFwiMi41LjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3RyZWVcIixcbiAgICAgICAgICBcInRleHRcIjogXCJUcmVlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi90cmVlLXYyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiVmlydHVhbGl6ZWQgVHJlZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RhdGlzdGljXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiU3RhdGlzdGljXCIsXG4gICAgICAgICAgXCJwcm9tb3Rpb25cIjogXCIyLjIuMzBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3NlZ21lbnRlZFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlNlZ21lbnRlZFwiLFxuICAgICAgICAgIFwicHJvbW90aW9uXCI6IFwiMi43LjBcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBcIm5hdmlnYXRpb25cIjoge1xuICAgICAgXCJ0ZXh0XCI6IFwiTmF2aWdhdGlvblwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvYWZmaXhcIixcbiAgICAgICAgICBcInRleHRcIjogXCJBZmZpeFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvYW5jaG9yXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQW5jaG9yXCIsXG4gICAgICAgICAgXCJwcm9tb3Rpb25cIjogXCIyLjYuMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvYmFja3RvcFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkJhY2t0b3BcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2JyZWFkY3J1bWJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJCcmVhZGNydW1iXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9kcm9wZG93blwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkRyb3Bkb3duXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9tZW51XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiTWVudVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvcGFnZS1oZWFkZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJQYWdlIEhlYWRlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvc3RlcHNcIixcbiAgICAgICAgICBcInRleHRcIjogXCJTdGVwc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvdGFic1wiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlRhYnNcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBcImZlZWRiYWNrXCI6IHtcbiAgICAgIFwidGV4dFwiOiBcIkZlZWRiYWNrXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9hbGVydFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkFsZXJ0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9kaWFsb2dcIixcbiAgICAgICAgICBcInRleHRcIjogXCJEaWFsb2dcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2RyYXdlclwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkRyYXdlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvbG9hZGluZ1wiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkxvYWRpbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL21lc3NhZ2VcIixcbiAgICAgICAgICBcInRleHRcIjogXCJNZXNzYWdlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9tZXNzYWdlLWJveFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIk1lc3NhZ2UgQm94XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9ub3RpZmljYXRpb25cIixcbiAgICAgICAgICBcInRleHRcIjogXCJOb3RpZmljYXRpb25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL3BvcGNvbmZpcm1cIixcbiAgICAgICAgICBcInRleHRcIjogXCJQb3Bjb25maXJtXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi9wb3BvdmVyXCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiUG9wb3ZlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImxpbmtcIjogXCIvdG9vbHRpcFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlRvb2x0aXBcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBcIm90aGVyc1wiOiB7XG4gICAgICBcInRleHRcIjogXCJPdGhlcnNcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJsaW5rXCI6IFwiL2RpdmlkZXJcIixcbiAgICAgICAgICBcInRleHRcIjogXCJEaXZpZGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlua1wiOiBcIi93YXRlcm1hcmtcIixcbiAgICAgICAgICBcInRleHRcIjogXCJXYXRlcm1hcmtcIixcbiAgICAgICAgICBcInByb21vdGlvblwiOiBcIjIuNC4wXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxzaWRlYmFycy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbXktcHJvamVjdC9lbGVtZW50LXByb21heC1kZXYvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaWRlYmFycy50c1wiO2ltcG9ydCB7IGVuc3VyZUxhbmcgfSBmcm9tICcuLi91dGlscy9sYW5nJ1xuaW1wb3J0IGd1aWRlTG9jYWxlIGZyb20gJy4uL2kxOG4vcGFnZXMvZ3VpZGUuanNvbidcbmltcG9ydCBjb21wb25lbnRMb2NhbGUgZnJvbSAnLi4vaTE4bi9wYWdlcy9jb21wb25lbnQuanNvbidcblxuZnVuY3Rpb24gZ2V0R3VpZGVTaWRlYmFyKCkge1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKGd1aWRlTG9jYWxlKS5tYXAoKFtsYW5nLCB2YWxdKSA9PiBbXG4gICAgICBsYW5nLFxuICAgICAgT2JqZWN0LnZhbHVlcyh2YWwpLm1hcCgoaXRlbSkgPT4gbWFwUHJlZml4KGl0ZW0sIGxhbmcpKSxcbiAgICBdKVxuICApXG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudHNTaWRlQmFyKCkge1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKGNvbXBvbmVudExvY2FsZSkubWFwKChbbGFuZywgdmFsXSkgPT4gW1xuICAgICAgbGFuZyxcbiAgICAgIE9iamVjdC52YWx1ZXModmFsKS5tYXAoKGl0ZW0pID0+IG1hcFByZWZpeChpdGVtLCBsYW5nLCAnL2NvbXBvbmVudCcpKSxcbiAgICBdKVxuICApXG59XG5cbi8vIHJldHVybiBzaWRlYmFyIHdpdGggbGFuZ3VhZ2UgY29uZmlncy5cbi8vIHRoaXMgbWlnaHQgY3JlYXRlIGR1cGxpY2F0ZWQgZGF0YSBidXQgdGhlIG92ZXJoZWFkIGlzIGlnbm9yYWJsZVxuY29uc3QgZ2V0U2lkZWJhcnMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy9ndWlkZS8nOiBnZXRHdWlkZVNpZGViYXIoKSxcbiAgICAnL2NvbXBvbmVudC8nOiBnZXRDb21wb25lbnRzU2lkZUJhcigpLFxuICB9XG59XG5cbnR5cGUgSXRlbSA9IHtcbiAgdGV4dDogc3RyaW5nXG4gIGNoaWxkcmVuPzogSXRlbVtdXG4gIGxpbms/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gbWFwUHJlZml4KGl0ZW06IEl0ZW0sIGxhbmc6IHN0cmluZywgcHJlZml4ID0gJycpIHtcbiAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLml0ZW0sXG4gICAgICBjaGlsZHJlbjogaXRlbS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBtYXBQcmVmaXgoY2hpbGQsIGxhbmcsIHByZWZpeCkpLFxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLml0ZW0sXG4gICAgbGluazogYCR7ZW5zdXJlTGFuZyhsYW5nKX0ke3ByZWZpeH0ke2l0ZW0ubGlua31gLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFycyA9IGdldFNpZGViYXJzKClcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFx2aXRlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teS1wcm9qZWN0L2VsZW1lbnQtcHJvbWF4LWRldi9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3ZpdGUudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCdcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgbWtjZXJ0IGZyb20gJ3ZpdGUtcGx1Z2luLW1rY2VydCdcbmltcG9ydCBnbG9iIGZyb20gJ2Zhc3QtZ2xvYidcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSdcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7XG4gIGRvY1BhY2thZ2UsXG4gIGVwUGFja2FnZSxcbiAgZ2V0UGFja2FnZURlcGVuZGVuY2llcyxcbiAgcHJvalJvb3QsXG59IGZyb20gJ0BlbGVtZW50LXBsdXMvYnVpbGQtdXRpbHMnXG5pbXBvcnQgeyBNYXJrZG93blRyYW5zZm9ybSB9IGZyb20gJy4uL3BsdWdpbnMvbWFya2Rvd24tdHJhbnNmb3JtJ1xuaW1wb3J0IHR5cGUgeyBQbHVnaW4sIFVzZXJDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXG5cbnR5cGUgVml0ZUNvbmZpZyA9IFJlcXVpcmVkPFVzZXJDb25maWc+Wyd2aXRlJ11cbnR5cGUgUmVzb2x2ZU9wdGlvbnMgPSBSZXF1aXJlZDxWaXRlQ29uZmlnPlsncmVzb2x2ZSddXG50eXBlIEFsaWFzT3B0aW9ucyA9IFJlcXVpcmVkPFJlc29sdmVPcHRpb25zPlsnYWxpYXMnXVxuXG5jb25zdCB7IGRlcGVuZGVuY2llczogZXBEZXBzIH0gPSBnZXRQYWNrYWdlRGVwZW5kZW5jaWVzKGVwUGFja2FnZSlcbmNvbnN0IHsgZGVwZW5kZW5jaWVzOiBkb2NzRGVwcyB9ID0gZ2V0UGFja2FnZURlcGVuZGVuY2llcyhkb2NQYWNrYWdlKVxuY29uc3Qgb3B0aW1pemVEZXBzID0gWy4uLm5ldyBTZXQoWy4uLmVwRGVwcywgLi4uZG9jc0RlcHNdKV0uZmlsdGVyKFxuICAoZGVwKSA9PlxuICAgICFkZXAuc3RhcnRzV2l0aCgnQHR5cGVzLycpICYmXG4gICAgIVsnQGVsZW1lbnQtcGx1cy9tZXRhZGF0YScsICdlbGVtZW50LXBsdXMnXS5pbmNsdWRlcyhkZXApXG4pXG5vcHRpbWl6ZURlcHMucHVzaChcbiAgLi4uKGF3YWl0IGdsb2IoWydkYXlqcy9wbHVnaW4vKi5qcyddLCB7XG4gICAgY3dkOiBwYXRoLnJlc29sdmUocHJvalJvb3QsICdub2RlX21vZHVsZXMnKSxcbiAgICBvbmx5RmlsZXM6IHRydWUsXG4gIH0pKVxuKVxuXG5jb25zdCBhbGlhczogQWxpYXNPcHRpb25zID0gW1xuICB7XG4gICAgZmluZDogJ34vJyxcbiAgICByZXBsYWNlbWVudDogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3ZpdGVwcmVzcycpfS9gLFxuICB9LFxuICAuLi4ocHJvY2Vzcy5lbnYuRE9DX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBbXVxuICAgIDogW1xuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL15lbGVtZW50LXBsdXMoXFwvKGVzfGxpYikpPyQvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUocHJvalJvb3QsICdwYWNrYWdlcy9lbGVtZW50LXBsdXMvaW5kZXgudHMnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eZWxlbWVudC1wbHVzXFwvKGVzfGxpYilcXC8oLiopJC8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IGAke3BhdGgucmVzb2x2ZShwcm9qUm9vdCwgJ3BhY2thZ2VzJyl9LyQyYCxcbiAgICAgICAgfSxcbiAgICAgIF0pLFxuXVxuXG5leHBvcnQgY29uc3QgZ2V0Vml0ZUNvbmZpZyA9ICh7IG1vZGUgfTogeyBtb2RlOiBzdHJpbmcgfSk6IFZpdGVDb25maWcgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKVxuICByZXR1cm4ge1xuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgc2lsZW5jZURlcHJlY2F0aW9uczogWydsZWdhY3ktanMtYXBpJ10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgZnM6IHtcbiAgICAgICAgYWxsb3c6IFtwcm9qUm9vdF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXMsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWVKc3goKSxcblxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgZGlyczogWycudml0ZXByZXNzL3ZpdGVwcmVzcy9jb21wb25lbnRzJ10sXG5cbiAgICAgICAgYWxsb3dPdmVycmlkZXM6IHRydWUsXG5cbiAgICAgICAgLy8gY3VzdG9tIHJlc29sdmVyc1xuICAgICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgICAvLyBhdXRvIGltcG9ydCBpY29uc1xuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1pY29uc1xuICAgICAgICAgIEljb25zUmVzb2x2ZXIoKSxcbiAgICAgICAgXSxcblxuICAgICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXG4gICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICB9KSxcblxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWljb25zXG4gICAgICBJY29ucyh7XG4gICAgICAgIGF1dG9JbnN0YWxsOiB0cnVlLFxuICAgICAgfSksXG4gICAgICBVbm9DU1MoKSxcbiAgICAgIE1hcmtkb3duVHJhbnNmb3JtKCksXG4gICAgICBJbnNwZWN0KCksXG4gICAgICBlbnYuSFRUUFMgPyAobWtjZXJ0KCkgYXMgUGx1Z2luKSA6IHVuZGVmaW5lZCxcbiAgICBdLFxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgaW5jbHVkZTogb3B0aW1pemVEZXBzLFxuICAgIH0sXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15LXByb2plY3RcXFxcZWxlbWVudC1wcm9tYXgtZGV2XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxwbHVnaW5zXFxcXG1hcmtkb3duLXRyYW5zZm9ybS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbXktcHJvamVjdC9lbGVtZW50LXByb21heC1kZXYvZG9jcy8udml0ZXByZXNzL3BsdWdpbnMvbWFya2Rvd24tdHJhbnNmb3JtLnRzXCI7aW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGNhbWVsaXplIH0gZnJvbSAnQHZ1ZS9zaGFyZWQnXG5pbXBvcnQgZ2xvYiBmcm9tICdmYXN0LWdsb2InXG5pbXBvcnQgeyBkb2NSb290LCBkb2NzRGlyTmFtZSwgcHJvalJvb3QgfSBmcm9tICdAZWxlbWVudC1wbHVzL2J1aWxkLXV0aWxzJ1xuaW1wb3J0IHsgUkVQT19CUkFOQ0gsIFJFUE9fUEFUSCB9IGZyb20gJ0BlbGVtZW50LXBsdXMvYnVpbGQtY29uc3RhbnRzJ1xuaW1wb3J0IHsgZ2V0TGFuZywgbGFuZ3VhZ2VzIH0gZnJvbSAnLi4vdXRpbHMvbGFuZydcbmltcG9ydCBmb290ZXJMb2NhbGUgZnJvbSAnLi4vaTE4bi9jb21wb25lbnQvZm9vdGVyLmpzb24nXG5cbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcblxudHlwZSBBcHBlbmQgPSBSZWNvcmQ8J2hlYWRlcnMnIHwgJ2Zvb3RlcnMnIHwgJ3NjcmlwdFNldHVwcycsIHN0cmluZ1tdPlxuXG5sZXQgY29tcFBhdGhzOiBzdHJpbmdbXVxuXG5leHBvcnQgZnVuY3Rpb24gTWFya2Rvd25UcmFuc2Zvcm0oKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnZWxlbWVudC1wbHVzLW1kLXRyYW5zZm9ybScsXG5cbiAgICBlbmZvcmNlOiAncHJlJyxcblxuICAgIGFzeW5jIGJ1aWxkU3RhcnQoKSB7XG4gICAgICBjb25zdCBwYXR0ZXJuID0gYHske1suLi5sYW5ndWFnZXMsIGxhbmd1YWdlc1swXV0uam9pbignLCcpfX0vY29tcG9uZW50YFxuXG4gICAgICBjb21wUGF0aHMgPSBhd2FpdCBnbG9iKHBhdHRlcm4sIHtcbiAgICAgICAgY3dkOiBkb2NSb290LFxuICAgICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgb25seURpcmVjdG9yaWVzOiB0cnVlLFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgYXN5bmMgdHJhbnNmb3JtKGNvZGUsIGlkKSB7XG4gICAgICBpZiAoIWlkLmVuZHNXaXRoKCcubWQnKSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudElkID0gcGF0aC5iYXNlbmFtZShpZCwgJy5tZCcpXG4gICAgICBjb25zdCBhcHBlbmQ6IEFwcGVuZCA9IHtcbiAgICAgICAgaGVhZGVyczogW10sXG4gICAgICAgIGZvb3RlcnM6IFtdLFxuICAgICAgICBzY3JpcHRTZXR1cHM6IGdldEV4YW1wbGVJbXBvcnRzKGNvbXBvbmVudElkKSxcbiAgICAgIH1cblxuICAgICAgY29kZSA9IHRyYW5zZm9ybVZwU2NyaXB0U2V0dXAoY29kZSwgYXBwZW5kKVxuXG4gICAgICBpZiAoY29tcFBhdGhzLnNvbWUoKGNvbXBQYXRoKSA9PiBpZC5zdGFydHNXaXRoKGNvbXBQYXRoKSkpIHtcbiAgICAgICAgY29kZSA9IHRyYW5zZm9ybUNvbXBvbmVudE1hcmtkb3duKGlkLCBjb21wb25lbnRJZCwgY29kZSwgYXBwZW5kKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tYmluZU1hcmtkb3duKFxuICAgICAgICBjb2RlLFxuICAgICAgICBbY29tYmluZVNjcmlwdFNldHVwKGFwcGVuZC5zY3JpcHRTZXR1cHMpLCAuLi5hcHBlbmQuaGVhZGVyc10sXG4gICAgICAgIGFwcGVuZC5mb290ZXJzXG4gICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5jb25zdCBjb21iaW5lU2NyaXB0U2V0dXAgPSAoY29kZXM6IHN0cmluZ1tdKSA9PlxuICBgXFxuPHNjcmlwdCBzZXR1cD5cbiR7Y29kZXMuam9pbignXFxuJyl9XG48L3NjcmlwdD5cbmBcblxuY29uc3QgY29tYmluZU1hcmtkb3duID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIGhlYWRlcnM6IHN0cmluZ1tdLFxuICBmb290ZXJzOiBzdHJpbmdbXVxuKSA9PiB7XG4gIGNvbnN0IGZyb250bWF0dGVyRW5kcyA9IGNvZGUuaW5kZXhPZignLS0tXFxuXFxuJylcbiAgY29uc3QgZmlyc3RIZWFkZXIgPSBjb2RlLnNlYXJjaCgvXFxuI3sxLDZ9XFxzLisvKVxuICBjb25zdCBzbGljZUluZGV4ID1cbiAgICBmaXJzdEhlYWRlciA8IDBcbiAgICAgID8gZnJvbnRtYXR0ZXJFbmRzIDwgMFxuICAgICAgICA/IDBcbiAgICAgICAgOiBmcm9udG1hdHRlckVuZHMgKyA0XG4gICAgICA6IGZpcnN0SGVhZGVyXG5cbiAgaWYgKGhlYWRlcnMubGVuZ3RoID4gMClcbiAgICBjb2RlID1cbiAgICAgIGNvZGUuc2xpY2UoMCwgc2xpY2VJbmRleCkgKyBoZWFkZXJzLmpvaW4oJ1xcbicpICsgY29kZS5zbGljZShzbGljZUluZGV4KVxuICBjb2RlICs9IGZvb3RlcnMuam9pbignXFxuJylcblxuICByZXR1cm4gYCR7Y29kZX1cXG5gXG59XG5cbmNvbnN0IHZwU2NyaXB0U2V0dXBSRSA9IC88dnAtc2NyaXB0XFxzKC4qXFxzKT9zZXR1cChcXHMuKik/PihbXFxzXFxTXSopPFxcL3ZwLXNjcmlwdD4vXG5cbmNvbnN0IHRyYW5zZm9ybVZwU2NyaXB0U2V0dXAgPSAoY29kZTogc3RyaW5nLCBhcHBlbmQ6IEFwcGVuZCkgPT4ge1xuICBjb25zdCBtYXRjaGVzID0gY29kZS5tYXRjaCh2cFNjcmlwdFNldHVwUkUpXG4gIGlmIChtYXRjaGVzKSBjb2RlID0gY29kZS5yZXBsYWNlKG1hdGNoZXNbMF0sICcnKVxuICBjb25zdCBzY3JpcHRTZXR1cCA9IG1hdGNoZXM/LlszXSA/PyAnJ1xuICBpZiAoc2NyaXB0U2V0dXApIGFwcGVuZC5zY3JpcHRTZXR1cHMucHVzaChzY3JpcHRTZXR1cClcbiAgcmV0dXJuIGNvZGVcbn1cblxuY29uc3QgR0lUSFVCX0JMT0JfVVJMID0gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke1JFUE9fUEFUSH0vYmxvYi8ke1JFUE9fQlJBTkNIfWBcbmNvbnN0IEdJVEhVQl9UUkVFX1VSTCA9IGBodHRwczovL2dpdGh1Yi5jb20vJHtSRVBPX1BBVEh9L3RyZWUvJHtSRVBPX0JSQU5DSH1gXG5jb25zdCB0cmFuc2Zvcm1Db21wb25lbnRNYXJrZG93biA9IChcbiAgaWQ6IHN0cmluZyxcbiAgY29tcG9uZW50SWQ6IHN0cmluZyxcbiAgY29kZTogc3RyaW5nLFxuICBhcHBlbmQ6IEFwcGVuZFxuKSA9PiB7XG4gIGNvbnN0IGxhbmcgPSBnZXRMYW5nKGlkKVxuICBjb25zdCBkb2NVcmwgPSBgJHtHSVRIVUJfQkxPQl9VUkx9LyR7ZG9jc0Rpck5hbWV9L2VuLVVTL2NvbXBvbmVudC8ke2NvbXBvbmVudElkfS5tZGBcbiAgY29uc3QgY29tcG9uZW50VXJsID0gYCR7R0lUSFVCX1RSRUVfVVJMfS9wYWNrYWdlcy9jb21wb25lbnRzLyR7Y29tcG9uZW50SWR9YFxuICBjb25zdCBzdHlsZVVybCA9IGAke0dJVEhVQl9UUkVFX1VSTH0vcGFja2FnZXMvdGhlbWUtY2hhbGsvc3JjLyR7Y29tcG9uZW50SWR9LnNjc3NgXG5cbiAgY29uc3QgY29tcG9uZW50UGF0aCA9IHBhdGgucmVzb2x2ZShcbiAgICBwcm9qUm9vdCxcbiAgICBgcGFja2FnZXMvY29tcG9uZW50cy8ke2NvbXBvbmVudElkfWBcbiAgKVxuICBjb25zdCBzdHlsZVBhdGggPSBwYXRoLnJlc29sdmUoXG4gICAgcHJvalJvb3QsXG4gICAgYHBhY2thZ2VzL3RoZW1lLWNoYWxrL3NyYy8ke2NvbXBvbmVudElkfS5zY3NzYFxuICApXG5cbiAgY29uc3QgaXNDb21wb25lbnQgPSBmcy5leGlzdHNTeW5jKGNvbXBvbmVudFBhdGgpXG4gIGNvbnN0IGlzSGF2ZUNvbXBvbmVudFN0eWxlID0gZnMuZXhpc3RzU3luYyhzdHlsZVBhdGgpXG5cbiAgY29uc3QgbGlua3MgPSBbW2Zvb3RlckxvY2FsZVtsYW5nXS5kb2NzLCBkb2NVcmxdXVxuXG4gIGlmIChpc0NvbXBvbmVudCAmJiBpc0hhdmVDb21wb25lbnRTdHlsZSlcbiAgICBsaW5rcy51bnNoaWZ0KFtmb290ZXJMb2NhbGVbbGFuZ10uc3R5bGUsIHN0eWxlVXJsXSlcblxuICBpZiAoaXNDb21wb25lbnQpIGxpbmtzLnVuc2hpZnQoW2Zvb3RlckxvY2FsZVtsYW5nXS5jb21wb25lbnQsIGNvbXBvbmVudFVybF0pXG5cbiAgY29uc3QgbGlua3NUZXh0ID0gbGlua3NcbiAgICAuZmlsdGVyKChpKSA9PiBpKVxuICAgIC5tYXAoKFt0ZXh0LCBsaW5rXSkgPT4gYFske3RleHR9XSgke2xpbmt9KWApXG4gICAgLmpvaW4oJyBcdTIwMjIgJylcblxuICBjb25zdCBzb3VyY2VTZWN0aW9uID0gYFxuIyMgJHtmb290ZXJMb2NhbGVbbGFuZ10uc291cmNlfVxuXG4ke2xpbmtzVGV4dH1gXG5cbiAgY29uc3QgY29udHJpYnV0b3JzU2VjdGlvbiA9IGBcbiMjICR7Zm9vdGVyTG9jYWxlW2xhbmddLmNvbnRyaWJ1dG9yc31cblxuPENvbnRyaWJ1dG9ycyBpZD1cIiR7Y29tcG9uZW50SWR9XCIgLz5gXG5cbiAgYXBwZW5kLmZvb3RlcnMucHVzaChzb3VyY2VTZWN0aW9uLCBpc0NvbXBvbmVudCA/IGNvbnRyaWJ1dG9yc1NlY3Rpb24gOiAnJylcblxuICByZXR1cm4gY29kZVxufVxuXG5jb25zdCBnZXRFeGFtcGxlSW1wb3J0cyA9IChjb21wb25lbnRJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGV4YW1wbGVQYXRoID0gcGF0aC5yZXNvbHZlKGRvY1Jvb3QsICdleGFtcGxlcycsIGNvbXBvbmVudElkKVxuICBpZiAoIWZzLmV4aXN0c1N5bmMoZXhhbXBsZVBhdGgpKSByZXR1cm4gW11cbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhleGFtcGxlUGF0aClcbiAgY29uc3QgaW1wb3J0czogc3RyaW5nW10gPSBbXVxuXG4gIGZvciAoY29uc3QgaXRlbSBvZiBmaWxlcykge1xuICAgIGlmICghL1xcLnZ1ZSQvLnRlc3QoaXRlbSkpIGNvbnRpbnVlXG4gICAgY29uc3QgZmlsZSA9IGl0ZW0ucmVwbGFjZSgvXFwudnVlJC8sICcnKVxuICAgIGNvbnN0IG5hbWUgPSBjYW1lbGl6ZShgRXAtJHtjb21wb25lbnRJZH0tJHtmaWxlfWApXG5cbiAgICBpbXBvcnRzLnB1c2goXG4gICAgICBgaW1wb3J0ICR7bmFtZX0gZnJvbSAnLi4vLi4vZXhhbXBsZXMvJHtjb21wb25lbnRJZH0vJHtmaWxlfS52dWUnYFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBpbXBvcnRzXG59XG4iLCAie1xuICBcImVuLVVTXCI6IHtcbiAgICBcInNvdXJjZVwiOiBcIlNvdXJjZVwiLFxuICAgIFwiY29udHJpYnV0b3JzXCI6IFwiQ29udHJpYnV0b3JzXCIsXG4gICAgXCJjb21wb25lbnRcIjogXCJDb21wb25lbnRcIixcbiAgICBcInN0eWxlXCI6IFwiU3R5bGVcIixcbiAgICBcImRvY3NcIjogXCJEb2NzXCJcbiAgfVxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXktcHJvamVjdFxcXFxlbGVtZW50LXByb21heC1kZXZcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFx2dWUtY29tcGlsZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215LXByb2plY3QvZWxlbWVudC1wcm9tYXgtZGV2L2RvY3MvLnZpdGVwcmVzcy9jb25maWcvdnVlLWNvbXBpbGVyLnRzXCI7Ly8gVE9ETzogZGVsZXRlIHRoaXMgZmlsZSBhZnRlciB1cGdyYWRpbmcgdnVlIGluIHJvb3QgcGFja2FnZS5qc29uXG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnXG5cbmNvbnN0IF9yZXF1aXJlID0gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpXG5jb25zdCB2aXRlcHJlc3NQYXRoID0gX3JlcXVpcmUucmVzb2x2ZSgndml0ZXByZXNzJylcblxuZXhwb3J0IGNvbnN0IHZ1ZUNvbXBpbGVyID0gX3JlcXVpcmUoXG4gIF9yZXF1aXJlLnJlc29sdmUoJ3Z1ZS9jb21waWxlci1zZmMnLCB7IHBhdGhzOiBbdml0ZXByZXNzUGF0aF0gfSlcbilcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVYsT0FBTyxhQUFhO0FBQzdXLFNBQVMsZUFBQUEsY0FBYSxhQUFBQyxrQkFBaUI7QUFDdkMsU0FBUyxlQUFBQyxvQkFBbUI7OztBQ0ZzVCxPQUFPLFFBQVE7QUFDalcsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsZUFBZTtBQUZ4QixJQUFNLG1DQUFtQztBQUlsQyxJQUFNLFlBQVksR0FBRyxZQUFZLEtBQUssUUFBUSxrQ0FBVyxZQUFZLENBQUM7QUFFdEUsSUFBTSxhQUFhLENBQUMsU0FBaUIsSUFBSSxJQUFJO0FBRzdDLElBQU0sVUFBVSxDQUFDLE9BQ3RCLEtBQUssU0FBUyxTQUFTLEVBQUUsRUFBRSxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7OztBQ1ZzVCxJQUFNLFdBQVcsQ0FBQzs7O0FDQWpDLE9BQU9DLFNBQVE7QUFDcFcsT0FBT0MsV0FBVTtBQUNqQixTQUFTLGNBQWM7QUFLaEIsSUFBTSxPQUFxQjtBQUFBLEVBQ2hDO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQSxDQUFDO0FBQUEsSUFDRDtBQUFBLGdDQUM0QixLQUFLLFVBQVUsU0FBUyxDQUFDO0FBQUE7QUFBQSxFQUV2RDtBQUFBLEVBRUEsQ0FBQyxVQUFVLENBQUMsR0FBR0MsSUFBRyxhQUFhQyxNQUFLLFFBQVEsUUFBUSxTQUFTLEdBQUcsT0FBTyxDQUFDO0FBQUEsRUFDeEU7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0U7QUFBQSxJQUNBLENBQUM7QUFBQSxJQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVRjtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJRjtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0U7QUFBQSxJQUNBLENBQUM7QUFBQSxJQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPRjtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFGO0FBQ0Y7OztBQ3pKQTtBQUFBLEVBQ0UsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLE1BQVE7QUFBQSxNQUNSLE1BQVE7QUFBQSxNQUNSLGFBQWU7QUFBQSxJQUNqQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQVE7QUFBQSxNQUNSLE1BQVE7QUFBQSxNQUNSLGFBQWU7QUFBQSxJQUNqQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQVE7QUFBQSxNQUNSLE1BQVE7QUFBQSxNQUNSLGFBQWU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFDRjs7O0FDYkEsU0FBUyxTQUFTO0FBQ2hCLFNBQU8sT0FBTztBQUFBLElBQ1osT0FBTyxRQUFRLGVBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLE9BQU8sTUFBTTtBQUNqRCxZQUFNLE9BSUEsT0FBTyxPQUFPLE9BQU8sRUFBRSxJQUFJLENBQUNDLFdBQVU7QUFBQSxRQUMxQyxHQUFHQTtBQUFBLFFBQ0gsTUFBTSxHQUFHLFdBQVcsSUFBSSxDQUFDLEdBQUdBLE1BQUssSUFBSTtBQUFBLE1BQ3ZDLEVBQUU7QUFFRixhQUFPLENBQUMsTUFBTSxJQUFJO0FBQUEsSUFDcEIsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUVPLElBQU0sTUFBTSxPQUFPOzs7QUN0QmlVLE9BQU8saUJBQWlCOzs7QUNNblgsSUFBTyw2QkFBUSxDQUFDLE9BQStCO0FBQzdDLFFBQU0sY0FBMEIsQ0FBQyxRQUFRLEtBQUssU0FBUyxLQUFLLFNBQzFELEtBQUssWUFBWSxRQUFRLEtBQUssT0FBTztBQUN2QyxRQUFNLDBCQUEwQixHQUFHLFNBQVMsTUFBTSxhQUFhO0FBQy9ELFFBQU0sMkJBQTJCLEdBQUcsU0FBUyxNQUFNLGNBQWM7QUFDakUsTUFBSSxpQkFBaUI7QUFFckIsS0FBRyxTQUFTLE1BQU0sWUFBWSxDQUFDLFFBQVEsS0FBSyxTQUFTLEtBQUssU0FBUztBQUNqRSxVQUFNLFFBQVEsT0FBTyxHQUFHO0FBQ3hCLFVBQU0sT0FBTyxNQUFNLFFBQVEsTUFBTTtBQUVqQyxRQUFJLE1BQU07QUFDUixZQUFNLFNBQVMsU0FBUyxTQUFTO0FBQ2pDLFVBQUksc0JBQXNCLEtBQUssSUFBSSxHQUFHO0FBQ3BDLHlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUVBLFdBQU8sd0JBQXdCLFFBQVEsS0FBSyxTQUFTLEtBQUssSUFBSTtBQUFBLEVBQ2hFO0FBRUEsS0FBRyxTQUFTLE1BQU0sYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLEtBQUssU0FBUztBQUNsRSxRQUFJLGdCQUFnQjtBQUNsQix1QkFBaUI7QUFDakIsYUFBTyxnREFBZ0QsS0FBSztBQUFBLFFBQzFEO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBRUEsV0FBTyx5QkFBeUIsUUFBUSxLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQUEsRUFDakU7QUFDRjs7O0FDckNBLElBQU8sd0JBQVEsQ0FBQyxPQUErQjtBQUM3QyxLQUFHLFNBQVMsTUFBTSxhQUFhLE1BQU07QUFDckMsS0FBRyxTQUFTLE1BQU0sY0FBYyxNQUFNO0FBQ3hDOzs7QUNIQSxJQUFPLGtCQUFRLENBQUMsT0FBK0I7QUFDN0MsS0FBRyxTQUFTLE1BQU0sVUFBVSxDQUFDLFFBQVEsUUFBUTtBQUMzQyxVQUFNLFFBQVEsT0FBTyxHQUFHO0FBRXhCLFdBQU8scUJBQXFCLE1BQU0sT0FBTyxjQUFjLE1BQU0sSUFBSTtBQUFBLEVBQ25FO0FBRUEsS0FBRyxPQUFPLE1BQU0sT0FBTyxZQUFZLFdBQVcsQ0FBQyxPQUFPLFdBQVc7QUFDL0QsVUFBTSxnQkFBZ0I7QUFDdEIsVUFBTSxNQUFNLE1BQU0sSUFBSSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU07QUFFbkQsUUFBSSxDQUFDLGNBQWMsS0FBSyxHQUFHLEVBQUcsUUFBTztBQUNyQyxRQUFJLE9BQVEsUUFBTztBQUVuQixVQUFNLFNBQVMsSUFBSSxNQUFNLGFBQWE7QUFFdEMsUUFBSSxDQUFDLE9BQVEsUUFBTztBQUVwQixVQUFNLFFBQVEsTUFBTSxLQUFLLFdBQVcsV0FBVyxDQUFDO0FBQ2hELFVBQU0sVUFBVSxPQUFPLENBQUMsRUFBRSxRQUFRLFNBQVMsR0FBRztBQUM5QyxVQUFNLFFBQVEsT0FBTyxDQUFDLEtBQUssSUFBSSxRQUFRLFlBQVksSUFBSTtBQUN2RCxVQUFNLFFBQVEsTUFBTTtBQUNwQixVQUFNLE9BQU8sT0FBTyxDQUFDLEVBQUU7QUFFdkIsV0FBTztBQUFBLEVBQ1QsQ0FBQztBQUNIOzs7QUMxQkEsSUFBTyxjQUFRLENBQUMsT0FBK0I7QUFDN0MsS0FBRyxPQUFPLE1BQU0sT0FBTyxZQUFZLE9BQU8sQ0FBQyxPQUFPLFdBQVc7QUFDM0QsVUFBTSxZQUFZO0FBQ2xCLFVBQU0sTUFBTSxNQUFNLElBQUksTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNO0FBRW5ELFFBQUksQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFHLFFBQU87QUFDakMsUUFBSSxPQUFRLFFBQU87QUFFbkIsVUFBTSxTQUFTLElBQUksTUFBTSxTQUFTO0FBRWxDLFFBQUksQ0FBQyxPQUFRLFFBQU87QUFFcEIsVUFBTSxRQUFRLE1BQU0sS0FBSyxlQUFlLElBQUksQ0FBQztBQUM3QyxVQUFNLFFBQVEsT0FBTyxDQUFDLEVBQUUsS0FBSztBQUs3QixVQUFNLFdBQVcsQ0FBQyxRQUFRLGNBQWMsUUFBUSxVQUFVLEVBQUUsU0FBUyxLQUFLLElBQ3RFLFFBQ0E7QUFDSixVQUFNLFVBQVUsdUJBQXVCLFFBQVEsS0FBSyxLQUFLO0FBQ3pELFVBQU0sUUFBUSxNQUFNO0FBQ3BCLFVBQU0sT0FBTyxPQUFPLENBQUMsRUFBRTtBQUV2QixXQUFPO0FBQUEsRUFDVCxDQUFDO0FBQ0g7OztBQzdCOFYsU0FBUywwQkFBMEIsZUFBZTtBQVFoWixJQUFPLGtCQUFRLENBQUMsT0FBK0I7QUFFN0MsUUFBTSxTQUFTLEdBQUcsU0FBUyxPQUFPLEtBQUssR0FBRyxRQUFRO0FBRWxELFFBQU0sUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM1QixLQUFHLFNBQVMsU0FBUyxDQUFDLFFBQVEsU0FBUyxRQUFRO0FBQzdDLFFBQUksVUFBVSx5QkFBeUIsUUFBUTtBQUFBLE1BQzdDO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxNQUNqQixtQkFBbUI7QUFBQSxNQUNuQixrQkFBa0I7QUFBQSxNQUNsQjtBQUFBLElBQ0YsQ0FBQztBQUNELFdBQU8sT0FBTyxRQUFRLFNBQVMsR0FBRztBQUFBLEVBQ3BDO0FBQ0Y7OztBQ3ZCd1YsT0FBT0MsV0FBVTtBQUN6VyxPQUFPQyxTQUFRO0FBQ2YsU0FBUyxXQUFBQyxnQkFBZTtBQVF4QixTQUFTLG9CQUFvQixJQUFxQztBQUNoRSxTQUFPO0FBQUEsSUFDTCxTQUFTLFFBQVE7QUFDZixhQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxNQUFNLGVBQWU7QUFBQSxJQUM5QztBQUFBLElBRUEsT0FBTyxRQUFRLEtBQUs7QUFDbEIsWUFBTSxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssS0FBSyxFQUFFLE1BQU0sZUFBZTtBQUN2RCxVQUFJLE9BQU8sR0FBRyxFQUFFLFlBQVksR0FBa0M7QUFDNUQsY0FBTSxjQUFjLEtBQUssRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDLElBQUk7QUFDL0MsY0FBTSxrQkFBa0IsT0FBTyxNQUFNLENBQUM7QUFDdEMsWUFBSSxTQUFTO0FBQ2IsY0FBTSxhQUFhLGdCQUFnQixXQUFXLENBQUMsRUFBRSxXQUFXO0FBRTVELFlBQUksZ0JBQWdCLFNBQVMsVUFBVTtBQUNyQyxtQkFBU0MsSUFBRztBQUFBLFlBQ1ZDLE1BQUssUUFBUUMsVUFBUyxZQUFZLEdBQUcsVUFBVSxNQUFNO0FBQUEsWUFDckQ7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUNBLFlBQUksQ0FBQyxPQUFRLE9BQU0sSUFBSSxNQUFNLDBCQUEwQixVQUFVLEVBQUU7QUFFbkUsZUFBTyxpQkFBaUI7QUFBQSxVQUN0QixHQUFHLE9BQU87QUFBQSxFQUFlLE1BQU0sUUFBUTtBQUFBLFFBQ3pDLENBQUMsV0FBVyxVQUFVLGlCQUFpQjtBQUFBLFVBQ3JDO0FBQUEsUUFDRixDQUFDLGtCQUFrQixtQkFBbUIsR0FBRyxPQUFPLFdBQVcsQ0FBQyxDQUFDO0FBQUEsMEJBQzNDLFdBQVcsV0FBVyxLQUFLLEdBQUcsQ0FBQztBQUFBLE1BQ25ELE9BQU87QUFDTCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLGVBQVE7OztBQzVDUixJQUFNLG9CQUFvQixDQUFDLE9BQXlCO0FBQ3pELFFBQU0sUUFBUSxHQUFHLFNBQVMsTUFBTTtBQUVoQyxLQUFHLFNBQVMsTUFBTSxRQUFRLElBQUksU0FBUztBQUNyQyxVQUFNLENBQUMsUUFBUSxLQUFLLEdBQUcsSUFBSSxJQUFJO0FBQy9CLFVBQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSTtBQUN2QixVQUFNLFFBQVEsT0FBTyxHQUFHO0FBQ3hCLFFBQUksTUFBTSxTQUFTLE9BQU87QUFDeEIsWUFBTSxZQUFZLEdBQUcsTUFBTSxNQUFNLFNBQVMsR0FBRztBQUU3QyxVQUFJLFNBQVM7QUFDYixZQUFNLEVBQUUsTUFBTSxJQUFJLEdBQUc7QUFDckIsZ0JBQVUsUUFBUSxDQUFDLFVBQVVDLFNBQVE7QUFDbkMsY0FBTSxFQUFFLEtBQUssSUFBSTtBQUNqQixZQUFJLFNBQVMsVUFBVTtBQUNyQixvQkFBVSxHQUFHLFNBQVMsYUFBYSxTQUFTLFVBQVcsU0FBUyxHQUFHO0FBQUEsUUFDckUsV0FBVyxPQUFPLE1BQU0sSUFBSSxNQUFNLGFBQWE7QUFDN0Msb0JBQVUsTUFBTSxTQUFTLElBQUk7QUFBQSxZQUMzQjtBQUFBLFlBQ0FBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBLEdBQUc7QUFBQSxVQUNMO0FBQUEsUUFDRixPQUFPO0FBQ0wsb0JBQVUsR0FBRyxTQUFTLFlBQVksV0FBV0EsTUFBSyxPQUFPO0FBQUEsUUFDM0Q7QUFBQSxNQUNGLENBQUM7QUFDRCxhQUFPO0FBQUEsSUFDVDtBQUNBLFdBQU8sTUFBTSxLQUFLLElBQUksR0FBRyxJQUFJO0FBQUEsRUFDL0I7QUFDRjs7O0FQdkJPLElBQU0sV0FBVyxDQUFDLE9BQXlCO0FBQ2hELEtBQUcsSUFBSSxlQUFPO0FBQ2QsS0FBRyxJQUFJLDBCQUFnQjtBQUN2QixLQUFHLElBQUkscUJBQVk7QUFDbkIsS0FBRyxJQUFJLGVBQU87QUFDZCxLQUFHLElBQUksV0FBRztBQUNWLEtBQUcsSUFBSSxhQUFhLFFBQVEsYUFBb0IsRUFBRSxDQUFDO0FBQ25ELEtBQUcsSUFBSSxpQkFBaUI7QUFDMUI7OztBUWxCQTtBQUFBLEVBQ0UsU0FBUztBQUFBLElBQ1AsT0FBUztBQUFBLE1BQ1AsTUFBUTtBQUFBLE1BQ1IsVUFBWTtBQUFBLFFBQ1Y7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFVBQVk7QUFBQSxNQUNWLE1BQVE7QUFBQSxNQUNSLFVBQVk7QUFBQSxRQUNWO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsVUFDUixXQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxVQUNSLFdBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNiLE1BQVE7QUFBQSxNQUNSLFVBQVk7QUFBQSxRQUNWO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUNwRkE7QUFBQSxFQUNFLFNBQVM7QUFBQSxJQUNQLFVBQVk7QUFBQSxNQUNWLE1BQVE7QUFBQSxNQUNSLFVBQVk7QUFBQSxRQUNWO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFTO0FBQUEsTUFDUCxNQUFRO0FBQUEsTUFDUixVQUFZO0FBQUEsUUFDVjtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsVUFDUixXQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFpQjtBQUFBLE1BQ2YsTUFBUTtBQUFBLE1BQ1IsVUFBWTtBQUFBLFFBQ1Y7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQVE7QUFBQSxNQUNOLE1BQVE7QUFBQSxNQUNSLFVBQVk7QUFBQSxRQUNWO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxVQUNSLFdBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFVBQ1IsV0FBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsVUFDUixXQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQVE7QUFBQSxNQUNOLE1BQVE7QUFBQSxNQUNSLFVBQVk7QUFBQSxRQUNWO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsVUFDUixXQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsVUFDUixXQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsVUFDUixXQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxVQUNSLFdBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQWM7QUFBQSxNQUNaLE1BQVE7QUFBQSxNQUNSLFVBQVk7QUFBQSxRQUNWO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxVQUNSLFdBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBWTtBQUFBLE1BQ1YsTUFBUTtBQUFBLE1BQ1IsVUFBWTtBQUFBLFFBQ1Y7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7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V0FBVyx1QkFBdUIsR0FBRztBQUMzQyxxQkFBTyxHQUFHLEdBQUcsWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUssS0FBSztBQUFBLFlBQ2pEO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsVUFDQSxRQUFRLFVBQVUsUUFBUTtBQUFBLFFBQzVCO0FBRUEsZ0JBQVEsWUFBWSxFQUFFLEdBQUcsUUFBUSxXQUFXLEtBQUs7QUFBQSxNQUNuRDtBQUVBLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUVBLFNBQU87QUFDVDtBQUVBLElBQU8saUJBQVE7IiwKICAibmFtZXMiOiBbIlJFUE9fQlJBTkNIIiwgIlJFUE9fUEFUSCIsICJkb2NzRGlyTmFtZSIsICJmcyIsICJwYXRoIiwgImZzIiwgInBhdGgiLCAiaXRlbSIsICJwYXRoIiwgImZzIiwgImRvY1Jvb3QiLCAiZnMiLCAicGF0aCIsICJkb2NSb290IiwgImlkeCIsICJwYXRoIiwgImdsb2IiLCAicHJvalJvb3QiLCAiZnMiLCAicGF0aCIsICJkb2NSb290IiwgImRvY1Jvb3QiLCAicGF0aCIsICJmcyIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJnbG9iIiwgInBhdGgiLCAicHJvalJvb3QiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAiUkVQT19QQVRIIiwgIlJFUE9fQlJBTkNIIiwgImRvY3NEaXJOYW1lIl0KfQo=
