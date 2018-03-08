<template>
  

<v-list>

    <header>
    

    <v-toolbar>

      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="sideNav = !sideNav" ></v-toolbar-side-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" >
      <v-btn flat ><v-icon>refresh</v-icon></v-btn>
      <v-btn flat><v-icon>search</v-icon></v-btn>
      <v-btn flat><v-icon>star</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>


  <div id="bglist"></div>

 <v-list id="lista" >
     <v-container grid-list-xl text-xs-center>
   <v-layout row wrap>
  <v-flex xs12 class="hidden-sm-and-up" v-for="places in places" v-bind:key="places"  >
     <v-card>  

          <v-card-media
          class="white--text"
          height="100px"
          src="https://images.unsplash.com/photo-1513517235976-e8999eb5f4cd?ixlib=rb-0.3.5&s=b75639b5f4746e68727ac01c9befb0f9&auto=format&fit=crop&w=600&q=60"
        >
        <v-container grid-list-md fluid>
          <v-layout>
            <v-flex xs12 flexbox>
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
      </v-flex>
    <v-flex xs6 class="hidden-xs-only" v-for="places in places" v-bind:key="places" >

    <v-card>  



          <v-card-media
          class="white--text"
          height="100px"
          src="https://images.unsplash.com/photo-1513517235976-e8999eb5f4cd?ixlib=rb-0.3.5&s=b75639b5f4746e68727ac01c9befb0f9&auto=format&fit=crop&w=600&q=60"
        >
        <v-container grid-list-md fluid>
          <v-layout>
            <v-flex xs12 flexbox>
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
        <v-spacer></v-spacer>
          <v-menu offset-y >
      <v-btn flat icon color="primary" dark slot="activator">
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
   </v-list>
    </header>

</v-list>

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
       dropwdown: [
        {
          icon: "maps",
          title: "Map"
        }
      ],
      places: [
        {
          imagesrc: "",
          title: "a",
          description: "a",
          tags: [
            {
              tag1: "a",
              tag2: ""
            }
          ]
        },
        {
          imagesrc: "",
          title: "b",
          description: "b",
          tags: [
            {
              tag1: "b",
              tag2: ""
            }
          ]
        },
        {
          imagesrc: "",
          title: "c",
          description: "c",
          tags: [
            {
              tag1: "c",
              tag2: ""
            }
          ]
        },
        {
          imagesrc: "d",
          title: "d",
          description: "d",
          tags: [
            {
              tag1: "d",
              tag2: ""
            }
          ]
        },  {
          imagesrc: "",
          title: "e",
          description: "e",
          tags: [
            {
              tag1: "e",
              tag2: ""
            }
          ]
        },  {
          imagesrc: "",
          title: "f",
          description: "f",
          tags: [
            {
              tag1: "f",
              tag2: ""
            }
          ]
        },  {
          imagesrc: "",
          title: "g",
          description: "g",
          tags: [
            {
              tag1: "g",
              tag2: ""
            }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  name: "List"
};
</script>

<style scoped>

#lista {
  height: 100%;

}
header {

  z-index: 1;
}


#bglist{
  position: absolute;
  height: 100%;
  width: 100%;
    background-image: url(".././assets/img/explore.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: 0;
}
</style>

