# 简单树形组件
> 目前还比较原始，根据需要改进

## 参考 
https://github.com/weibangtuo/vue-tree/blob/master/src/tree.vue.js

## 依赖
font-awesome

## 使用
> `vue-tree` 外的`div`及样式 tree、tree-content 非必须

```
<template>
  <div class="tree">
    <!--tree-->
    <vue-tree class="tree-content" :option="projects"></vue-tree>
  </div>

</template>

<script>
  import VueTree from 'tree/Tree'

  export default {
    name: 'projects',
    data() {
      return {
        projects: {
          root: {
            name: 'Projects', //显示
            id: 'root',
            title: 'Projects', //提示
            children: [{
              name: 'AnHui Project',
              title: 'AnHui',
              id: 'anhui',
              children: [
                {
                  name: 'soil',
                  title: 'Soil Dataset',
                  id: 'soil',
                  children: [
                    {
                      name: 'soil-data1',
                      title: 'Soil Dataset 1',
                      id: 'soil-data1'
                    }
                  ],
                  buttons: [
                    {
                      title: 'Show on map',
                      icon: 'fa fa-table',
                      click: node => {

                      }
                    }
                  ]
                },
                {
                  name: 'water',
                  title: 'Water Dataset',
                  id: 'water',
                  buttons: [
                    {
                      title: 'Show on map',
                      icon: 'fa fa-map',
                      click: node => {

                      }
                    }
                  ]
                }
              ]
            }],
            showLoading: false
          }
        }
      }
    },
    components: {
       VueTree
    },
    methods: {
      /**
       * 详情按钮: 对于需要重复添加的按钮，可以提取为方法
       * @param { Function } clickFn click function
       * @returns {{title: string, icon: string, click: *}}
       */
      infoButton( clickFn ){
        return {
          title: 'Show details',
          icon: 'fa fa-info-circle',
          click: clickFn
        }
      },
      detailButton( clickFn ){
        return {
          title: 'Manage it in datagrid',
          icon: 'fa fa-table',
          click: clickFn
        }
      }
    }
  }
</script>

```
