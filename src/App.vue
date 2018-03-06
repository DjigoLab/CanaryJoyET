<template>
  <v-app>

    <header>
      <v-navigation-drawer
        temporary
        absolute
        v-model="sideNav"
        >

       <v-list-tile-action>
            <v-btn icon @click.stop="sideNav = !sideNav">
              <v-icon>chevron_left</v-icon>
            </v-btn>
       </v-list-tile-action>

        </v-navigation-drawer>

    <v-toolbar>

      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>CanaryJoy</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
</header>
   

   <v-layout id="home" justify-start="true">
    <div id="bgex"  v-on:click='explorecolor()'>
       <h2 id="exh2">Explore</h2>
      <div style="height:80%"></div>
       <v-btn flat >
         <v-icon  id="swipeup1" large  color="white">arrow_upward</v-icon>           
      </v-btn>

 </div>
 
    <div id="bgpt" v-on:click='explorecolor()'><h2 id="pth2">Party</h2>
          <div style="height:80%"></div>

    <v-btn flat >
         <v-icon  id="swipeup" large  color="white">arrow_upward</v-icon>           
      </v-btn>
    </div>
    
   </v-layout>


<v-footer id ="footer" class="pa-3" absolute dark>
  <div>Antonio Djigo - 2º DAM</div>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      color: "grayscale(0%)",
      sideNav: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  methods: {
    explorecolor: function() {
      var bgex = document.getElementById("bgex");
      var bgpt = document.getElementById("bgpt");

      var exh2 = document.getElementById("exh2");
      var pth2 = document.getElementById("pth2");
      
      var foot = document.getElementById("footer")

      var swipe = document.getElementById('swipeup')

      var exclicked = false;
      var ptclicked = false;

      if (bgex.style.filter == this.color) {
        bgex.style.filter = "grayscale(1)";
        bgex.style.width = "50%";
        exh2.style.transitionDelay = '0ms';
        exh2.style.opacity = "0";
        bgpt.style.filter = this.color;
        bgpt.style.width = "200%";
        pth2.style.opacity = "1";
        pth2.style.transitionDelay = '1s';
        
        foot.removeAttribute('class');
        foot.setAttribute("class","footer pa-3 footer--absolute theme--dark")
        swipe
      } else {
        bgex.style.filter = this.color;
        bgex.style.width = "200%";
        exh2.style.opacity = "1";
        exh2.style.transitionDelay = '1s';
        bgpt.style.filter = "grayscale(1)";
        bgpt.style.width = "50%";
        pth2.style.transitionDelay = '0ms';
        pth2.style.opacity = "0";

        foot.removeAttribute('class');
        foot.setAttribute("class","footer pa-3 footer--absolute theme--light")
      }
    },
    
    changepage : function() {
      var home = document.getElementById('home')
      home.remove
    }
  },
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

.pa-3{
  opacity: 0.8;
      font-family: 'Tillana', cursive;
      transition: 0.8s ;
}

#bgex {
  background-image: url("./assets/img/explore.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: grayscale(1);
  transition: 1.5s ease-in-out;
  width: 50%;
}

div h2 {
  margin-top: 2em;
  font-size: 4em;
  position: absolute;
  text-align: center;
  width: 100%;
  color: white;
}
h2{

    font-family: 'Tillana', cursive;

}
#bgex h2 {
  opacity: 0;
  transition: 0.5s ease-in-out;
  transition-delay: 1s;
}
#bgpt h2 {
  
  opacity: 0;
  transition: 0.5s ease-in-out;
    transition-delay: 1s;

}
#bgpt {
  background-image: url("./assets/img/party.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50%;

  transition: 1.5s ease-in-out;

  filter: grayscale(1);
}


header {
  display: none;
}
</style>
