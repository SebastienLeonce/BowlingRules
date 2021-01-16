<template>
    <div uk-dropdown>
        <ul class="uk-nav uk-dropdown-nav" style="text-align: left;">
            <span v-if="$parent.$parent.$parent.formDoned === true">
            <li class="uk-nav-header">Partie en cours</li>
            <li class="uk-nav-divider"></li>
            <li style="color: black;" v-on:click="reloadPage()"><a style="color: black;">Recommencez</a></li>
            <li><span class="uk-padding-right-small uk-padding-top-remove" v-on:click="quit()" style="color: black;">Quitter</span></li><br>
            <li class="uk-nav-divider"></li>
            </span>
            <button v-if="$parent.$parent.isDark === false " class="uk-button uk-button-default" style="background-color: rgb(51,51,51);color: white;" v-on:click="$parent.$parent.isDark=true; $parent.$parent.$parent.isDark = true">Dark</button>
            <button v-if="$parent.$parent.isDark === true " class="uk-button uk-button-default" v-on:click="$parent.$parent.isDark=false; $parent.$parent.$parent.isDark = false">Light</button>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Menu",
    methods:{
        /** 
         * @method reloadPage()
         * @param none
         * @returns none
         * @description Reload the page /game
         */
        reloadPage(){
            this.$parent.$parent.$parent.formDoned = false;
            this.$router.push('/game')
        },
        /** 
         * @method quit()
         * @param none
         * @returns none
         * @description Quit the /game page, reload the app and go to the /home page 
         */
        quit(){
            this.$parent.$parent.$parent.formDoned = false;
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

</style>