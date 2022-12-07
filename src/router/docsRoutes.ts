
            export default [
      
          {
            path: 'index:lang(-cn)?',
            meta: {"pathF":"docs","subtitle":"readme","type":"说明","title":"说明","category":"docs"},
            component: () => import('../../src/md/文档/index.md'),
          },
          {
            path: '%E4%B8%AD%E6%96%87:lang(-cn)?',
            meta: {"title":"中文.md","category":"docs"},
            component: () => import('../../src/md/文档/中文.md'),
          }
    ];