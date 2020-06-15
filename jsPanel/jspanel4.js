/**
 * 自定义指令
 * @see http://cn.vuejs.org/v2/guide/custom-directive.html
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @author houzhiwei
 * @date 2018/10/24
 * @date 2020/05/29
 */

import { jsPanel } from "jspanel4/es6module/jspanel.min.js"

const jspanel4 = {
    bind(el, binding, vnode) {

    },
    inserted(el, binding, vnode) {
        let options = binding.value.panel; // jsPanel options
        let show = binding.value.show; // show component
        // el: whole jsPanel object
        // animated needs animated.css: https://daneden.github.io/animate.css/
        let defaultOption = {
            headerTitle: 'Panel',
            theme: '#3F51B5',
            contentSize: { width: 520, height: 256 },
            show: 'animated fadeInDownBig',
            position: {
                my: "center",
                at: "center"
            },
            content: el,
            onwindowresize: true,
            // must set index.html body's height bigger than panel's height, e.g. 100vh
            dragit: { containment: 0 }
        };
        // combine options and defaultOption with an object
        let option = Object.assign({}, defaultOption, options);
        if (show) {
            // recode panel for operations, for example close. use vnode to share data。
            vnode.panel = null;
            vnode.panel = jsPanel.create(option);
        }
    },
    componentUpdated() {

    },
    update(el, binding, vnode, oldVnode) {
       // to ignore unncessary panel update
       vnode.panel = oldVnode.panel;
    },
    unbind(el, binding, vnode) {
        // avoid Error in directive jspanel unbind hook: "TypeError: a.parentElement is null"
      if (vnode.panel.parentElement !== null) {
        vnode.panel.close();
       }
        vnode.panel = null;
    }
}
export default jspanel4;