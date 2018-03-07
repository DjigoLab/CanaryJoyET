<template>
  <v-app>

    <header>
    

    <v-toolbar>

      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat><v-icon>search</v-icon></v-btn>
      <v-btn flat><v-icon>star</v-icon></v-btn>
      <v-btn flat><v-icon>refresh</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!--   <v-navigation-drawer
        temporary
        absolute
        v-model="sideNav"
        >
 <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">

              <v-icon   @click.stop="sideNav = !sideNav">chevron_left</v-icon>
            <span>Menu</span>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>

      
    </v-toolbar>
     <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" @click="a">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

 
        </v-navigation-drawer> -->
</header>

 <v-list  v-for="place in places" v-bind:key="place" id="lista" style="height:100%">
  <v-card >  
          <v-card-media
          class="white--text"
          height="100px"
          src="https://images.unsplash.com/photo-1513517235976-e8999eb5f4cd?ixlib=rb-0.3.5&s=b75639b5f4746e68727ac01c9befb0f9&auto=format&fit=crop&w=600&q=60"
        >
        <v-container fluid>
          <v-layout>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{ places.title }}</span>

             </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div> 
            <span class="grey--text">{{places.description}}</span><br>
            <span>{{places.tag1}}</span><br>
            <span></span>
           </div>
        </v-card-title>
        <v-card-actions>
          <v-btn icon flat ><v-icon>star_border</v-icon></v-btn>
          <v-btn icon flat ><v-icon>share</v-icon></v-btn>
        </v-card-actions>
      </v-card>
   </v-list>


<div class="darkness"></div>
    <v-layout id="home" justify-start="true">

    <div id="bgex"  v-on:click='explorecolor()'>
      
 
       <h2 id="exh2">Explore</h2>
      <div class ="animate-arrow"></div>
       <v-btn flat >
         <v-icon  id="swipeup" class="animate-arrow" large  color="white">arrow_upward</v-icon>           
      </v-btn>

 </div>

 <div class ="phrase">
     <h1>What are you up to today?</h1>
     </div>


 
    <div id="bgpt" v-on:click='explorecolor()'><h2 id="pth2">Party</h2>
          <div class ="animate-arrow"></div>

    <v-btn flat >
         <v-icon  id="swipeup" class="animate-arrow" large  color="white">arrow_upward</v-icon>           
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
          icon: "star",
          title: "Favorites"
        }
        
      ],
      places:[
        {
          imagesrc : "",
          title: "",
          description : "",
          tags:[
            {tag1:"",
            tag2:""}
            ]
        },
         {
          imagesrc : "",
          title: "",
          description : "",
          tags:[
            {tag1:"",
            tag2:""}
            ]
        },
         {
          imagesrc : "",
          title: "",
          description : "",
          tags:[
            {tag1:"",
            tag2:""}
            ]
        },
         {
          imagesrc : "",
          title: "",
          description : "",
          tags:[
            {tag1:"",
            tag2:""}
            ]
        }
        
        
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  mounted:function(){
   
  },
  methods: {
 
    explorecolor: function() {
      var bgex = document.getElementById("bgex");
      var bgpt = document.getElementById("bgpt");

      var exh2 = document.getElementById("exh2");
      var pth2 = document.getElementById("pth2");
      
      var foot = document.getElementById("footer")

      var swipe = document.getElementById('swipeup')

      var phrase = document.getElementsByClassName('phrase')

      var exclicked = false;
      var ptclicked = false;

      phrase[0].style.opacity = '0'

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

#home{display:none;}
header {}
#lista{background-color: #2c3e50;}


.darkness{
    position: absolute;
  z-index: 101;
  background-color: rgb(32, 48, 44);
  width: 100%;
  height: 100%;
opacity: 0;
  animation: dissapear 4s;
  pointer-events: none;

}

.animate-arrow{
  height: 60%;
  animation: up 1.8s, dissapear 1.8s;
  animation-iteration-count: infinite;
  opacity: 1;


}
@keyframes up {
  from{height: 80%;}
  to{height: 60%;}
}

@keyframes dissapear {
  from{opacity: 1}
  to{opacity: 0;}
  
}
.phrase{
  position: absolute;
color :white;
width: 100%;
z-index: 100;
margin-top: 6em;
font-family: 'Tillana', cursive;
animation: fadein 2s;
transition: 1s ease-in-out;
    font-size: 0.8em;


}

@keyframes fadein {
    from { opacity: 0; 
    ;font-size: 0.2em}
    to   { opacity: 1;
    font-size: 0.8em;
     }
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
  transition: 1s ease-in-out;
  transition-delay: 1s;
}
#bgpt h2 {
  
  opacity: 0;
  transition: 1.7s ease-in-out;
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




</style>
