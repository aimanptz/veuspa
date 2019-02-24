<template>
  <nav>
    <ul class="menu">
      <li class="menu__item" @click="google = !google">Google
        <ul class="submenu" v-if="google">
          <li v-for="item in googleListItems"
              :key="item.id"
              class="submenu__item"
              ><router-link :to="item.routerPath">{{ item.name }}</router-link>
          </li>
        </ul>
      </li>
      <li class="menu__item" @click="vk = !vk">VK
        <ul class="submenu" v-if="vk">
          <li v-for="item in VKListItems"
              :key="item.id"
              class="submenu__item"
              ><router-link :to="item.routerPath">{{ item.name }}</router-link>
          </li>
        </ul>
      </li>
      <li class="menu__item"><router-link to="/formValidation">Form Validation</router-link></li>
    </ul>
  </nav>
</template>

<script>
	export default {
		name: "navigation",
    data() {
		  return {
		    google: false,
		    vk: false,
		    googleListItems: [
          { id: 1, routerPath: 'WhereAmI', name: 'Where am I'},
          { id: 2, routerPath: 'WeatherForecast', name: 'Weather Forecast'},
          { id: 3, routerPath: 'DistanceCalculator', name: 'Distance Calculator'},
          { id: 4, routerPath: 'HowtoReach', name: 'How to Reach'},
          { id: 5, routerPath: 'FindAroundMe', name: 'Find Around Me'}
          ],
		    VKListItems: [
          { id: 6, routerPath: 'WhereAmI', name: 'Where am I'},
          { id: 7, routerPath: 'WeatherForecast', name: 'Weather Forecast'},
          { id: 8, routerPath: 'DistanceCalculator', name: 'Distance Calculator'},
          { id: 9, routerPath: 'HowtoReach', name: 'How to Reach'},
          { id: 10, routerPath: 'FindAroundMe', name: 'Find Around Me'}
          ],
      }
    },
    methods: {
      toggleList(value) {
        value = !value;
      }
    }
	}
</script>

<style scoped lang="scss">
  
  .menu__item {
    padding: 10px 0;
    cursor: pointer;
    padding-left: 10px;
    font-size: $navFontSize;
    border-bottom: 1px solid #333;
  }
  
  .submenu {
    font-size: $mainFontSize;
    padding-left: 10px;
  }
  
</style>

