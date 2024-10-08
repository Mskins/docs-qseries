import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base:'/docs-qseries/',
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "QAddons快捷系列插件",
  description: "快捷系列插件",
  lastUpdated: true,
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config

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
      
      {text: '更新日志',
        items: [
          { text: '快捷系列插件管理器', link: '/updatelog/qseries_addons_manager_log' },
          { text: '快捷灯光增强版(QLights Pro)', link: '/updatelog/QLights Pro log' },
          { text: '快捷HDRI增强版(QHDRI Pro)', link: '/updatelog/QHDRI Pro log' },
          { text: '快捷通道(QPasses)', link: '/updatelog/QPasses log' },
          { text: '快捷材质(QMaterials)', link: '/updatelog/QMaterials log' },
          { text: '快捷着色器(QShader)', link: '/updatelog/QShader log' },
          { text: '快捷纹理(QTex)', link: '/updatelog/QTex log' },
          { text: '快捷批量渲染(QBatchRender)', link: '/updatelog/QBatchRender log' },
          { text: '快捷窗口(QWindows)', link: '/updatelog/QWindows log' },
          { text: '快捷渲染插槽(QRenderSlots)', link: '/updatelog/QRenderSlots log' },
          { text: '快捷放置(QDrop)', link: '/updatelog/QDrop log' }
        ]
      },

      {text: '常见问题',link: '/FAQ/FAQ'},
      {text: '免费插件',link: '/freeaddons'},

    ],
    
    sidebarMenuLabel: '菜单',


    // sidebar: [
    //   {text: '插件简介',
    //     items: [
    //       { text: '快捷系列插件简介', link: '/About Add-ons' }
    //     ]
    //   },
    //   {text: '使用文档',
    //     collapsed: false,
    //     items: [
    //       { text: '快捷系列插件管理器', link: '/Documentation/qseries_addons_manager_Doc' },
    //       { text: '快捷灯光增强版(QLights Pro)', link: '/Documentation/QLights Pro Doc' },
    //       { text: '快捷HDRI增强版(QHDRI Pro)', link: '/Documentation/QHDRI Pro Doc' },
    //       { text: '快捷通道(QPasses)', link: '/Documentation/QPasses Doc' },
    //       { text: '快捷材质(QMaterials)', link: '/Documentation/QMaterials Doc' },
    //       { text: '快捷着色器(QShader)', link: '/Documentation/QShader Doc' },
    //       { text: '快捷纹理(QTex)', link: '/Documentation/QTex Doc' },
    //       { text: '快捷批量渲染(QBatchRender)', link: '/Documentation/QBatchRender Doc' },
    //       { text: '快捷窗口(QWindows)', link: '/Documentation/QWindows Doc' },
    //       { text: '快捷渲染插槽(QRenderSlots)', link: '/Documentation/QRenderSlots Doc' },
    //       { text: '快捷放置(QDrop)', link: '/Documentation/QDrop Doc' }
    //     ]
    //   },
    //   {text: '常见问题',
    //     items: [
    //       { text: '常见问题解答', link: '/FAQ' }
    //     ]
    //   },
    // ],
    
    aside: 'left',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mskins' },
      { icon: {
          svg: '<svg t="1726988115721" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4411" width="200" height="200"><path d="M149.652275 208.50688c-70.0416 3.072-133.12 58.9824-146.37056 127.54944-4.38272 21.01248-3.05152 42.57792-3.1744 64V816.5376a156.42624 156.42624 0 0 0 24.92416 86.71232c23.06048 34.95936 59.22816 62.42304 100.78208 70.7584 21.7088 4.85376 44.05248 3.584 66.06848 3.72736h670.78144a157.0816 157.0816 0 0 0 83.82464-23.01952c36.47488-22.97856 65.20832-60.06784 73.80992-102.78912 4.7104-20.91008 3.50208-42.45504 3.64544-63.67232-0.06144-140.43136 0.06144-280.96512-0.06144-421.43744a155.70944 155.70944 0 0 0-45.9776-110.36672c-27.77088-29.24544-67.03104-47.104-107.35616-48.14848-30.63808-0.53248-61.2352-0.2048-91.83232-0.2048 7.59808-4.77184 13.84448-11.42784 20.76672-17.12128 10.79296-9.68704 22.46656-18.57536 32.21504-29.3888 10.99776-13.57824 17.3056-31.37536 15.9744-48.9472-0.9216-24.14592-15.83104-47.104-37.33504-58.1632a69.48864 69.48864 0 0 0-60.33408-2.6624c-14.80704 6.18496-25.94816 17.98144-37.94944 28.0576-49.41824 42.65984-98.38592 85.77024-147.968 128.18432h-104.20224c-49.60256-42.35264-98.63168-85.6064-148.02944-128.22528-11.96032-10.09664-23.08096-21.97504-37.80608-28.01664a69.98016 69.98016 0 0 0-61.93152 3.44064h0.06144c-20.6848 11.34592-34.87744 33.83296-35.79904 57.42592a71.33184 71.33184 0 0 0 26.60352 59.4944c14.17216 11.91936 27.36128 25.04704 42.41408 35.9424-31.90784 0.14336-63.83616-0.59392-95.744 0.38912z m649.6256 132.8128c13.25056 0.06144 27.0336-0.67584 39.71072 3.97312a76.14464 76.14464 0 0 1 47.73888 50.0736c3.3792 11.40736 2.99008 23.53152 2.99008 35.328v322.31424c0.28672 16.40448 0.4096 33.46432-7.08608 48.41472-12.288 26.13248-40.28416 44.21632-69.38624 43.1104-198.43072 0.12288-396.92288-0.08192-595.37408 0.06144-10.99776-0.06144-22.3232-0.14336-32.8704-3.97312-29.53216-10.01472-51.2-39.7312-50.688-71.10656-0.12288-115.4048 0.06144-230.72768-0.04096-346.03008a99.24608 99.24608 0 0 1 3.03104-28.11904c7.55712-26.46016 30.76096-47.96416 57.9584-52.79744 11.40736-1.65888 23.01952-1.26976 34.5088-1.26976h569.50784z" fill="#98989F" p-id="4412"></path><path d="M250.577715 588.14464c-0.24576 16.97792 0.47104 34.87744 9.29792 49.99168a71.14752 71.14752 0 0 0 57.0368 36.59776c24.39168 2.048 48.128-8.6016 62.83264-28.18048 10.26048-13.14816 14.62272-29.98272 14.62272-46.53056 0-25.14944 0.34816-50.33984-0.12288-75.48928-0.28672-20.74624-9.50272-41.30816-25.6-54.59968a71.86432 71.86432 0 0 0-53.10464-16.56832 71.63904 71.63904 0 0 0-63.81568 61.46048c-2.4576 24.35072-0.6144 48.90624-1.14688 73.3184zM641.356595 642.4576a71.2704 71.2704 0 0 0 56.17664 32.3584c25.72288 1.86368 51.75296-11.73504 65.00352-33.81248 9.13408-14.27456 11.12064-31.49824 10.99776-48.10752-0.43008-23.59296 0.512-47.22688-0.53248-70.81984a71.59808 71.59808 0 0 0-78.6432-68.7104v0.06144c-33.01376 2.78528-61.60384 31.15008-64 64.32768-1.6384 24.18688-0.34816 48.47616-0.77824 72.74496-0.47104 17.92 1.49504 36.70016 11.776 51.95776z" fill="#98989F" p-id="4413"></path></svg>'
        }, 
        link: 'https://space.bilibili.com/429605217?spm_id_from=333.1007.0.0'}
    ],


    footer: 
      { copyright:"版权所有 © 2024 亮锅不服LAO"},

    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换为亮色',
    darkModeSwitchTitle: '切换为暗色',  
    lastUpdatedText: "最后更新",  
    outlineTitle: "目录",
    outline: "deep",
    externalLinkIcon: true,
    returnToTopLabel: '返回顶部',
    docFooter: {
        prev: '上一页',
        next: '下一页'
      },
      
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

})
