# jsPanel for Vue 2

https://jspanel.de/index.html

## install

`npm install jspanel4 -S`

in main.js:  

 `import "jspanel4/dist/jspanel.min.css"` 

or in index.html

```html
<!-- jsPanel CSS -->
<link href="https://cdn.jsdelivr.net/npm/jspanel4@4.2.1/dist/jspanel.css" rel="stylesheet">
```

## usage example

```vue
<template>
  <j-panel :options="options">
   <!--slot-->
  </j-panel>
</template>

<script>
  import JPanel from 'JSPanel'
  import * as actionTypes from 'store/action-types'
  
  export default {
    name: 'panel',
    data() {
      return {
        panelOptions: {
          headerTitle: 'panel',
          theme: "#339999",
          contentSize: {
            width: 520,
            height: 330
          },
          onclosed: this.closeThis,
          resizeit: { handles: 'n,s', minHeight: 330 }
        }
      }
    },
    components: {JPanel},
    methods: {
     closeThis() {
        //method to close panel if you use vuex
        this.$store.dispatch('showPanel', false); 
    	}
    },
    computed: {
      ...mapState({
        //if you use vuex
        show: state => state.PanelState.show
      }),
      // required
      options() {
        return {
          show: this.show, 
          panel: this.panelOptions
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 
</style>
```

