const c1 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\Users\\Dell\\Desktop\\LG\\1_Vdeio_code\\part 3 · Vue.js 框架源码与进阶\\03-04-study-materials\\vue-ssg\\blog-with-gridsome\\src\\templates\\Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\Dell\\Desktop\\LG\\1_Vdeio_code\\part 3 · Vue.js 框架源码与进阶\\03-04-study-materials\\vue-ssg\\blog-with-gridsome\\src\\templates\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\Users\\Dell\\Desktop\\LG\\1_Vdeio_code\\part 3 · Vue.js 框架源码与进阶\\03-04-study-materials\\vue-ssg\\blog-with-gridsome\\src\\pages\\Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\Dell\\Desktop\\LG\\1_Vdeio_code\\part 3 · Vue.js 框架源码与进阶\\03-04-study-materials\\vue-ssg\\blog-with-gridsome\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Dell\\Desktop\\LG\\1_Vdeio_code\\part 3 · Vue.js 框架源码与进阶\\03-04-study-materials\\vue-ssg\\blog-with-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Dell\\Desktop\\LG\\1_Vdeio_code\\part 3 · Vue.js 框架源码与进阶\\03-04-study-materials\\vue-ssg\\blog-with-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/post/:id/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
