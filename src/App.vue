<template>
  <div id="app" class="app">
    <aside class="navbar">
      <div class="logo">
        <router-link to="/">
          <font-awesome-icon icon="home" class="icon"/><span class="logo__text">SPA</span>
        </router-link>
      </div>
      <hr>
      <appNavigation></appNavigation>
    </aside>
    <div class="content">
      <router-view/>
      <footer class="footer">
        Footer
      </footer>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/navigation'
  
  export default {
    data() {
      return {}
    },
    components: {
      appNavigation: Navigation
    }
  }
</script>

<style lang="scss">
  
  #app {
    display: flex;
    min-height: 100vh;
  }
  
  .navbar {
    min-width: 200px;
    align-self: stretch;
    background: $asideBG;
    color: #fff;
  }

  .logo {
    padding-top: 15px;
    height: $headerHeight;
    text-align: center;
  }

  .icon {
    font-size: 3em;
  }

  
  .logo__text {
  }
  
  .content {
    flex-grow:1;
    display: flex;
    flex-flow: column;
  }
  
  .header {
    background: #5477ff;
  }
  
  .main {
    flex-grow: 1;
  }
  
  .footer {
    background: #5477ff;
  }
  

</style>
