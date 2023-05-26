import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";



// import Components from 'unplugin-vue-components/vite'

// // 搜索插件github：[https://github.com/emersonbottero/vitepress-plugin-search]
var options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
};



export default defineConfig({
    themeConfig: {
        search: {
            provider: 'local'
        }
    },
    plugins: [
          SearchPlugin(options),
        //   Components({
        //     dirs: resolve(__dirname, '.vitepress/theme/components'),
        //     include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        //     resolvers: [
        //       IconsResolver({
        //         componentPrefix: '',
        //       }),
        //     ],
        //     dts: './.vitepress/components.d.ts',
        //     transformer: 'vue3',
        //   }),
    ],

});



