/**
 * layui-layer 的 ES6 自定义类
 *  "layui-layer": "^1.0.9",
 */


import layer from 'layui-layer'

layer.config({
  skin: 'layui-layer-molv'
});

// layer 语法糖
export default class Vlayer {
  static alert( msg, icon )
  {
    layer.alert(msg, {
      title: 'Message',
      btn: 'OK',
      icon: icon
    })
  }
  
  static error( xhr )
  {
    var json = $.parseJSON(xhr.responseText);
    layer.alert("<p class='layerMsg'>" + json.msg + "</p>", {
      //title: 'Error message',
      title: false,
      btn: 'OK',
      icon: 5
    })
  }
  
  static confirm( msg ) {
    layer.confirm(msg, {
      title: 'Confirm',
      btn: ['Yes', 'Cancel'] //按钮
    }, function() {
      layer.msg('You chosen Yes', { icon: 1 });
    }, function() {
      layer.msg('canceled', {
        time: 2000 //20s后自动关闭
      });
    });
  }
}

//---- 静态属性 ----//

// icon
Vlayer.icon = {
  warning: 0,
  ok: 1,
  error: 2,
  question: 3,
  locked: 4,
  unhappy: 5,
  smile: 6,
  download: 7
}

// types
Vlayer.type = {
  info: 0, // default
  model: 1, // 页面层
  iframe: 2,
  loading: 3,
  tips: 4
}

// anims 动画
Vlayer.anim = {
  slideInDown: 1,
  slideInUp: 2,
  slideInLeft: 3,
  rollIn: 4,
  fadeIn: 5,
  shake: 6
}
