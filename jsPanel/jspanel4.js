/**
 * 自定义指令
 * @see http://cn.vuejs.org/v2/guide/custom-directive.html
 * @see http://www.cnblogs.com/handoing/p/5866830.html
 * @see http://www.myronliu.com/2017/01/31/vue/vue_mixins_directive/
 * @see http://wiki.jikexueyuan.com/project/vue-js-1.0/custom-directive.html
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @author houzhiwei
 * @date 2018/10/24
 */

import { jsPanel } from "jspanel4/es6module/jspanel.min.js"

const jspanel4 = {
    bind(el, binding, vnode) {
        // console.log('bind');
    },
    inserted(el, binding, vnode) {
        let options = binding.value.panel; // jsPanel options
        let show = binding.value.show; // show component
        // el: 整个 jsPanel 对象
        // 构造包含content选项的jsPanel选项，将组件及内部（slot）元素显示在panel之中
        // animated 动画需要 animated.css 支持 https://daneden.github.io/animate.css/
        let defaultOption = {
            headerTitle: 'Panel',
            theme: '#3F51B5',
            contentSize: { width: '520px', height: '256px' },
            show: 'animated fadeInDownBig',
            position: {
                my: "center", // jsPanel 上的定位点（用于定位jsPanel）
                at: "center" // jsPanel 的相对定位点
            },
            // animateOut: 'animated zoomOutDown',
            content: el,
            onwindowresize: true,
            dragit: { containment: 0 }
        };
        // combine options and defaultOption with an object
        let option = Object.assign({}, defaultOption, options);
        if (show) {
            // 记录panel，用于close等操作. 使用vnode来共享数据。Vue官方推荐使用dataset来在钩子间共享数据
            vnode.panel = null;
            vnode.panel = jsPanel.create(option);
        }
    },
    componentUpdated() {
        // 被绑定元素所在模板完成一次更新周期时调用。
        // console.log('componentUpdated');
    },
    update(el, binding, vnode, oldVnode) {
        // 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新
        // 将panel绑定到新的vnode上。没有这一句会报错，不能实现指令在多个地方使用时的数据隔离。？
        vnode.panel = oldVnode.panel;
    },
    unbind(el, binding, vnode) {
        vnode.panel.close(); // 关闭当前的panel
    }
}
export default jspanel4;