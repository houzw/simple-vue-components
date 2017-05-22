<template>
  <div class="vue-tree">
    <ul>
      <tree-item :tree-node.sync="option.root"></tree-item>
    </ul>
  </div>
</template>

<script>
import TreeItem from './TreeItem'

export default {
  name: 'vue-tree',
  data() {
    return {}
  },
  components: {
    'tree-item': TreeItem
  },
  methods: {},
  props: {
    option: {
      type: Object,
      required: true,
      default: {
        root: {
          name: 'Tree root name',
          title: 'Tree root title',
          isParent: true,
          children: [],
          icon: 'android-folder',
          openedIcon: 'android-folder-open',
          closedIcon: 'android-folder',
          showLoading: false,
          button: [
            {
              title: 'root btn',
              icon: 'ios-location',
              click: node => {
                console.log('clicked tree root');
              }
            }
          ],
          onOpened: node => { console.log('onOpened'); },
          onClosed: node => { console.log('onClosed'); }
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "./tree.scss";
</style>
