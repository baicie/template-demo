
  import Layout from "../layouts/index.vue";
  import docsRoutes from "./docsRoutes";

  export default [
    
          {
            path: '/docs',
            meta: {"pathF":"docs","subtitle":"readme","type":"说明","title":"说明","path":"docs"},
            component: Layout,
            children: [...docsRoutes],
          }
        
  ]
  