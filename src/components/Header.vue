<template>
    <div>
        <p class="uk-position-top-center uk-margin-remove uk-padding-remove" style="font-size: 8pt;color:white;top: 0px;">BOWLING</p>
        <router-link v-bind:class="{'text-white': $parent.isDark, 'text-dark': !$parent.isDark}" class="uk-position-top-right uk-padding-right-small uk-padding-top-remove" to="/rules" style="font-size: 10pt;line-height: 2pt;font-size: 8pt;"><span>REGLES </span><span uk-icon="icon: question; ratio:0.7"></span></router-link>
        <p class="uk-position-top-left uk-padding-left-small black-mobile" type="button" uk-icon="icon: menu; ratio:0.7" style="color: white;"></p>
        <Menu/>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
    name: "Header",
    components:{
        Menu
    }
}
</script>

<style scoped>
.text-white{
  color: white;
}
.text-dark{
  color: rgb(51,51,51);
}
.dark{
  background-color: rgb(51,51,51);
  color:white;
}
</style>