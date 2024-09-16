import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/docs_qseries/',
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "Q-Series快捷系列插件",
  description: "快捷系列插件",
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "目录",
    outline: "deep",
    
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      {text: '插件简介',link: '/About Add-ons'},
      {text: '使用文档',
        items: [
          { text: '快捷系列插件管理器', link: '/Documentation/qseries_addons_manager_Doc' },
          { text: '快捷灯光增强版(QLights Pro)', link: '/Documentation/QLights Pro Doc' },
          { text: '快捷HDRI增强版(QHDRI Pro)', link: '/Documentation/QHDRI Pro Doc' },
          { text: '快捷通道(QPasses)', link: '/Documentation/QPasses Doc' },
          { text: '快捷材质(QMaterials)', link: '/Documentation/QMaterials Doc' },
          { text: '快捷着色器(QShader)', link: '/Documentation/QShader Doc' },
          { text: '快捷纹理(QTex)', link: '/Documentation/QTex Doc' },
          { text: '快捷批量渲染(QBatchRender)', link: '/Documentation/QBatchRender Doc' },
          { text: '快捷窗口(QWindows)', link: '/Documentation/QWindows Doc' },
          { text: '快捷渲染插槽(QRenderSlots)', link: '/Documentation/QRenderSlots Doc' },
          { text: '快捷放置(QDrop)', link: '/Documentation/QDrop Doc' }
        ]
      },
      {text: '常见问题',link: '/FAQ'},
    ],

    sidebar: [
      {text: '插件简介',
        items: [
          { text: '快捷系列插件简介', link: '/About Add-ons' }
        ]
      },
      {text: '使用文档',
        collapsed: false,
        items: [
          { text: '快捷系列插件管理器', link: '/Documentation/qseries_addons_manager_Doc' },
          { text: '快捷灯光增强版(QLights Pro)', link: '/Documentation/QLights Pro Doc' },
          { text: '快捷HDRI增强版(QHDRI Pro)', link: '/Documentation/QHDRI Pro Doc' },
          { text: '快捷通道(QPasses)', link: '/Documentation/QPasses Doc' },
          { text: '快捷材质(QMaterials)', link: '/Documentation/QMaterials Doc' },
          { text: '快捷着色器(QShader)', link: '/Documentation/QShader Doc' },
          { text: '快捷纹理(QTex)', link: '/Documentation/QTex Doc' },
          { text: '快捷批量渲染(QBatchRender)', link: '/Documentation/QBatchRender Doc' },
          { text: '快捷窗口(QWindows)', link: '/Documentation/QWindows Doc' },
          { text: '快捷渲染插槽(QRenderSlots)', link: '/Documentation/QRenderSlots Doc' },
          { text: '快捷放置(QDrop)', link: '/Documentation/QDrop Doc' }
        ]
      },
      {text: '常见问题',
        items: [
          { text: '常见问题解答', link: '/FAQ' }
        ]
      },
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mskins' },
      { icon: 'youtube', link: 'https://space.bilibili.com/429605217?spm_id_from=333.1007.0.0'}
    ],


    footer: 
      { copyright:"版权所有 © 2024 亮锅不服LAO"},


    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

  },

  vite: {

    ssr: {
      noExternal: ['@escook/vitepress-theme','vitepress']
    }

  }


})
