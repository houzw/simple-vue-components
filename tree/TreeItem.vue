<template>
  <li :class="{parent_li: node.isParent}">
    <i v-if="node.isParent" @click.prevent="toggle(node)" class="fa icon-open-state"
       :class='{"fa-plus-square-o": !node.isOpen, "fa-minus-square-o": node.isOpen}' aria-hidden="true"></i>
    <span :title="node.title">
        <i v-if="showIcon(node)" :class="nodeClass(node)" aria-hidden="true"></i>{{node.name}}
    </span>
    <a v-for="btn in node.buttons" class="ml5" :title="btn.title" @click.prevent="btnClick(btn, node)">
      <i :class="btn.icon" aria-hidden="true"></i>
    </a>
    <ul v-show="node.isOpen">
      <li v-show="node.showLoading && node._loading">
        <i class="fa fa-spinner fa-pulse" aria-hidden="true"></i>
      </li>
      <vue-tree-item v-for="item in node.children" :tree-node="item" :key="node.id"></vue-tree-item>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'vue-tree-item',
    data() {
      return {
        node: {}
      }
    },
    components: {},
    methods: {
      showIcon: node => {
        return node.icon || node.openedIcon || node.closedIcon;
      },
      nodeClass: node => {
        if (node.isOpen) {
          return node.openedIcon || node.icon;
        }
        else {
          return node.closedIcon || node.icon;
        }
      },
      toggle: node => {
        if (node.hasOwnProperty('isOpen')) {
          node.isOpen = !node.isOpen;
        }
        else {
          this.$set(node, 'isOpen', true);
        }
      },
      btnClick: ( btn, node ) => {
        if (typeof btn.click==='function') {
          btn.click(node);
        }
      }
    },
    created(){
      this.node = this.treeNode;
      this.$set(this.node, 'isOpen', false);

      //      如果定义了children且大于0
      if (this.node.children && this.node.children.length > 0) {
        this.$set(this.node, 'isParent', true);
        this.$set(this.node, 'openedIcon', 'fa fa-folder-open');
        this.$set(this.node, 'closedIcon', 'fa fa-folder');
      }
      else {
//      叶子
        this.$set(this.node, 'isParent', false);
        if (!this.node.icon) // 不存在icon属性
          this.$set(this.node, 'icon', 'fa fa-list');
        else
          this.node.icon = 'fa fa-list';
      }
    },
    mounted () {
    },
    computed: {},
    watch: {
      'node.isOpen': function( val ) {
        if (!this.node.hasOwnProperty('_loading')) {
          this.$set(this.node, '_loading', false);
        }
        if (val) {
          if (typeof this.node.onOpened==='function') {
            this.node.onOpened(this.node);
          }
        }
        else {
          if (typeof this.node.onClosed==='function') {
            this.node.onClosed(this.node);
          }
        }
      }
    },
    props: {
      treeNode: {
        type: Object,
        default() {
          return {
            isParent: false,
            children: []
          }
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
