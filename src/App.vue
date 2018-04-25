<template>
  <v-app>   

<div id="bglist"></div>
 <div id="shade"></div>

    <v-layout id="home" fill-height>

    <div id="bgex"  v-on:click="explorecolor(1)">
      
 
       <h2 id="exh2">Explore</h2>
      <div class ="animate-arrow" ></div>
       <v-btn  id="swipeupEX" v-on:click.native='changepage()' flat>
         <v-icon  class="animate-arrow" large  color="white">arrow_upward</v-icon>           
      </v-btn>

 </div>

 <div class ="phrase">
     <h1>What are you up to today?</h1>
     </div>

 
    <div id="bgpt" v-on:click="explorecolor(0)"><h2 id="pth2">Party</h2>
          <div class ="animate-arrow"></div>

   <v-btn  id="swipeupPT" 
   v-on:click.native='changepagePT()' flat>
 
         <v-icon   class="animate-arrow" large  color="white">arrow_upward</v-icon>           
      </v-btn>
      
    </div>
    
   </v-layout>


    <header>
    <v-toolbar v-if="clicked === 1" id="menubar">
      
      <v-btn  flat v-on:click="changepagePT"><v-icon>swap_horiz</v-icon></v-btn>
<v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn flat ><v-icon>refresh</v-icon></v-btn>
      <v-btn v-on:click="search()" flat><v-icon>search</v-icon></v-btn>
      <v-btn flat  v-on:click="showTags()" ><v-icon id="tagshow">keyboard_arrow_down</v-icon></v-btn>

         <v-btn flat><v-icon>star</v-icon></v-btn>
        </v-toolbar-items>
          
    </v-toolbar>
    

    
    <v-toolbar dark v-if="clicked === 0" id="menubar">
      <v-btn flat v-on:click="changepage"><v-icon>swap_horiz</v-icon></v-btn>
<v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn flat  v-on:click="showTags()" ><v-icon id="tagshow">keyboard_arrow_down</v-icon></v-btn>
      <v-btn flat ><v-icon>refresh</v-icon></v-btn>
      <v-btn flat><v-icon>search</v-icon></v-btn>
   
      <v-btn flat><v-icon>star</v-icon></v-btn>
      </v-toolbar-items>
          
    </v-toolbar>
 <v-subheader light="" id="tagselect">
    <v-flex>
        <v-btn   class="tagxs" > tag </v-btn>         <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>
        <v-btn   class="tagxs" > tag </v-btn>

                       </v-flex></v-subheader>


     <v-container grid-list-xl text-xs-center>
   <v-layout row wrap>
  

  
  <v-flex md4 class="hidden-sm-and-up" v-if="clicked === 1"  v-for=" place in myJson" v-bind:key="place" >
    
 

  <v-card>  
        <div class="bgmediainvi">{{place.imagesrc}}</div>
          <v-card-media
          class="white--text"
          height="100px"
          src="a"
          onload="setCardBG()"
        >


        <v-container grid-list-md fluid>
          <v-layout>
            <v-flex xs12 flexbox>
              <span class="headline">{{ place.title }}</span>

             </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div> 
            <span class="grey--text">{{place.description}}</span><br>
            <v-flex>
                       <v-btn   class="tagxs" v-for="tag in place.tags" v-bind:key="tag"> {{tag}} </v-btn>
                       </v-flex>
           </div>
        </v-card-title>
        <v-card-actions>
          <v-btn  v-on:click="favbutton()" icon flat ><v-icon id="fav">star_border</v-icon></v-btn>
          <v-btn icon flat ><v-icon>share</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      </v-flex>

    
    <v-flex md4 class="hidden-xs-only" v-if="clicked === 1" v-for="place in myJson" v-bind:key="place">

    <v-card>  

          <v-card-media
          class="white--text"
          height="100px"
          src="https://images.unsplash.com/photo-1513517235976-e8999eb5f4cd?ixlib=rb-0.3.5&s=b75639b5f4746e68727ac01c9befb0f9&auto=format&fit=crop&w=600&q=60"
        >
        <v-container grid-list-md fluid>
          <v-layout>
            <v-flex xs12 flexbox>
              <span class="headline">{{ place.title }}</span>

             </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div> 
            <span class="grey--text">{{place.description}}</span><br>
            <v-flex >

                       <v-btn  class="tag" small v-for="tag in place.tags" v-bind:key="tag">  {{tag}}</v-btn>
            </v-flex>
           </div>
        </v-card-title>
        <v-card-actions>
          <v-btn  v-on:click="favbutton()" icon flat ><v-icon id="fav">star_border</v-icon></v-btn>
          <v-btn icon flat ><v-icon>share</v-icon></v-btn>
        <v-spacer></v-spacer>
          <v-menu offset-y >
      <v-btn flat icon color="green" dark slot="activator">
        <v-icon>more_horiz</v-icon>
        </v-btn>
      <v-list>
        <v-list-tile v-for="dropwdown in dropwdown" :key="dropwdown.title" >
          <v-list-tile-title>{{ dropwdown.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
        </v-card-actions>
      </v-card>
      </v-flex>
  

  <v-flex xs12 class="hidden-sm-and-up" v-if="clicked === 0"  v-for=" place in myPTJson" v-bind:key="place" >
    
     <v-card dark="">  

          <v-card-media
          class="white--text"
          height="100px"
          src="https://images.unsplash.com/photo-1514207147125-8e6c07bbe5ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbdce3ba9f72095ab0bae8e386bead9e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
        >

        <v-container grid-list-md fluid>
          <v-layout>
            <v-flex xs12 flexbox>
              <span class="headline">{{ place.title }}</span>

             </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div> 
            <span class="grey--text">{{place.description}}</span><br>
                        <v-flex md4>

                       <v-btn  class="tagxs"  v-for="tag in place.tags" v-bind:key="tag">  {{tag}}</v-btn>
                        </v-flex>
           </div>
        </v-card-title>
        <v-card-actions>
          <v-btn  v-on:click="favbutton()" icon flat ><v-icon id="fav">star_border</v-icon></v-btn>
          <v-btn icon flat ><v-icon>share</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      </v-flex>

  <v-flex md4 class="hidden-xs-only" v-if="clicked === 0" v-for="place in myPTJson" v-bind:key="place">

    <v-card dark="">  

          <v-card-media
          class="white--text"
          height="100px"
          src="https://images.unsplash.com/photo-1514207147125-8e6c07bbe5ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbdce3ba9f72095ab0bae8e386bead9e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
        >
        <v-container grid-list-md fluid>
          <v-layout>
            <v-flex xs12 flexbox>
              <span class="headline">{{ place.title }}</span>

             </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div> 
            <span class="grey--text">{{place.description}}</span><br>
                        <v-flex >

                       <v-btn   class="tag"  v-for="tag in place.tags" v-bind:key="tag"> {{tag}}</v-btn>
                        </v-flex>
           </div>
        </v-card-title>
        <v-card-actions>
          <v-btn v-on:click="favbutton()" icon flat ><v-icon id="fav">star_border</v-icon></v-btn>
          <v-btn icon flat ><v-icon>share</v-icon></v-btn>
        <v-spacer></v-spacer>
          <v-menu offset-y >
      <v-btn flat icon color="grey" slot="activator">
        <v-icon>more_horiz</v-icon>
        </v-btn>
      <v-list>
        <v-list-tile v-for="dropwdown in dropwdown" :key="dropwdown.title" >
          <v-list-tile-title>{{ dropwdown.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
        </v-card-actions>
      </v-card>
      </v-flex>
      </v-layout>
     </v-container>
    </header>



<v-footer id ="footer" class="pa-3"  dark>
  <div>Antonio Djigo - 2º DAM</div>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
    
  </v-app>
</template>

<script>
import json from "./assets/places.json";
import ptjson from "./assets/party.json";

export default {
  data() {
    return {
      color: "grayscale(0%)",
      clicked: 0,
      sideNav: false,
      clipped: false,
      drawer: true,
      fixed: false,
      clickado: false,
      data: "",
      items: [
        {
          icon: "star",
          title: "Favorites"
        }
      ],
      dropwdown: [
        {
          icon: "maps",
          title: "Map"
        }
      ],
      places: [
        {
          imagesrc: "",
          title: "",
          description: "",
          tags: [],
          created: function() {
            this.getJson();
          }
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      myJson: json,
      myPTJson: ptjson
    };
  },

  methods: {
    explorecolor: function(idbg) {
      var bgex = document.getElementById("bgex");
      var bgpt = document.getElementById("bgpt");

      var exh2 = document.getElementById("exh2");
      var pth2 = document.getElementById("pth2");

      var foot = document.getElementById("footer");

      var swipeEX = document.getElementById("swipeupEX");
      var swipePT = document.getElementById("swipeupPT");

      var phrase = document.getElementsByClassName("phrase");

      phrase[0].style.opacity = "0";

      switch (idbg) {
        case 0:
          bgex.style.filter = "grayscale(1)";
          bgex.style.width = "50%";
          exh2.style.transitionDelay = "0ms";
          pth2.style.transitionDelay = "1s";
          exh2.style.opacity = "0";
          bgpt.style.filter = this.color;
          bgpt.style.width = "200%";
          pth2.style.opacity = "1";
          swipeEX.style.display = "none";
          swipePT.style.display = "inline";

          foot.removeAttribute("class");
          foot.setAttribute("class", "footer pa-3 theme--dark");

          break;
        case 1:
          bgex.style.filter = this.color;
          bgex.style.width = "200%";
          exh2.style.opacity = "1";
          exh2.style.transitionDelay = "1s";
          pth2.style.transitionDelay = "0s";
          bgpt.style.filter = "grayscale(1)";
          bgpt.style.width = "50%";
          pth2.style.opacity = "0";
          swipeEX.style.display = "inline";
          swipePT.style.display = "none";
          foot.removeAttribute("class");
          foot.setAttribute("class", "footer pa-3 theme--light");
          break;
      }
    },

    changepage: function() {
      var home = document.getElementById("home");
      var listpage = document.getElementsByTagName("header");
      listpage[0].style.display = "inline";
      var foot = document.getElementById("footer");

      foot.removeAttribute("class");
      foot.setAttribute("class", "footer pa-3 theme--light");

      var bglist = document.getElementById("bglist");
      bglist.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1513517235976-e8999eb5f4cd?ixlib=rb-0.3.5&s=b75639b5f4746e68727ac01c9befb0f9&auto=format&fit=crop&w=600&q=60)";

      home.style.display = "none";
      return (this.clicked = 1);

      $.getJSON("./assets/places.json", function(json) {
        self.post = data;
      });
    },

    changepagePT: function() {
      var home = document.getElementById("home");
      var listpage = document.getElementsByTagName("header");
      var foot = document.getElementById("footer");

      listpage[0].style.display = "inline";

      foot.removeAttribute("class");
      foot.setAttribute("class", "footer pa-3  theme--dark");

      var bglist = document.getElementById("bglist");
      bglist.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1514207147125-8e6c07bbe5ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbdce3ba9f72095ab0bae8e386bead9e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)";
      home.style.display = "none";
      return (this.clicked = 0);

      $.getJSON("./assets/party.json", function(json) {
        self.post = data;
      });
    },

    search: function() {
      var input = document.getElementById("searchinput");
    },

    favbutton: function() {
      var fav = document.getElementById("fav");

      switch (this.clickado) {
        case true:
          fav.innerText = "star_border";
          this.clickado = false
          break;
        case false:
          fav.innerText = "star";
          this.clickado = true;
          break;
      }
    },
    showTags: function(){

      var tagbar = document.getElementById("tagselect")
      var button = document.getElementById("tagshow")

      var compare = button.innerHTML

      if(compare == "keyboard_arrow_down"){
      tagbar.style.opacity = "0.7"
      button.innerText = "keyboard_arrow_up"}
      else{
      tagbar.style.opacity = "0"
      button.innerText = "keyboard_arrow_down"
      }
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
  text-overflow: ellipsis;
}

#home {
  transition: 3s ease;
  z-index: 200;
}
#lista {
  height: 100%;
  z-index: 2;
}

#footer {
  z-index: 300;
}

#swipeupPT {
  display: none;
}
#swipeupEX {
  display: none;
}

#menubar {
  z-index: 1;
}
header {
  display: none;
  z-index: 201;
}

#bglist {
  position: absolute;
  background-image: url("./assets/img/explore.jpg");
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: 0;
}

.animate-arrow {
  height: 60%;
  animation: up 1.8s, dissapear 1.8s;
  animation-iteration-count: infinite;
}
@keyframes up {
  from {
    height: 80%;
  }
  to {
    height: 60%;
  }
}

@keyframes dissapear {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.phrase {
  position: absolute;
  color: white;
  width: 100%;
  z-index: 100;
  margin-top: 6em;
  font-family: "Tillana", cursive;
  animation: fadein 2s;
  transition: 1s ease-in-out;
  font-size: 0.8em;
}

@keyframes fadein {
  from {
    opacity: 0;
    font-size: 0.2em;
  }
  to {
    opacity: 1;
    font-size: 0.8em;
  }
}

h1,
h2 {
  font-weight: normal;
}

.pa-3 {
  opacity: 0.8;
  font-family: "Tillana", cursive;
  transition: 0.8s;
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
h2 {
  font-family: "Tillana", cursive;
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

.tag {
  height: 18px;
  font-size: 9px;
}

.tagxs {
  height: 14px;
  font-size: 8px;
}

#shade {
  position: absolute;
  width: 100%;
  heigth: 100%;
  z-index: 1000;
  background-color: #2c3e50;
}

#searchinput {
  transition: 1s ease-in-out;
}

#fav {
}

#tagselect{
  background-color: rgb(219, 219, 219);
  opacity: 0;
  border-radius: 0px 0px 30px 30px;
  padding: 2em;
  z-index: 200;
  transition: 0.5s ease-in-out;
   }
</style>
