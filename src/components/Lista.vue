
</<template>

     <v-container grid-list-xl text-xs-center>
   <v-layout row wrap>
  

  
  <v-flex md4 class="hidden-sm-and-up" v-if="clicked === 1"  v-for=" place in myJson" v-bind:key="place" >
    
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
            <v-flex>
                       <v-btn   class="tagxs" v-for="tag in place.tags" v-bind:key="tag"> {{tag}}</v-btn>
                       </v-flex>
           </div>
        </v-card-title>
        <v-card-actions>
          <v-btn icon flat ><v-icon>star_border</v-icon></v-btn>
          <v-btn icon flat ><v-icon>share</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      </v-flex>

    
    <v-flex xs6 class="hidden-xs-only" v-if="clicked === 1" v-for="place in myJson" v-bind:key="place">

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
  

  <v-flex xs12 class="hidden-sm-and-up" v-if="clicked === 0"  v-for=" place in myPTJson" v-bind:key="place" >
    
     <v-card>  

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
          <v-btn icon flat ><v-icon>star_border</v-icon></v-btn>
          <v-btn icon flat ><v-icon>share</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      </v-flex>

  <v-flex md4 class="hidden-xs-only" v-if="clicked === 0" v-for="place in myPTJson" v-bind:key="place">

    <v-card>  

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
     </v-container></template>

<style>

#bglist {
  position: absolute;
  background-image: url(".././assets/img/explore.jpg");
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: 0;
}

.tag{
  height: 18px;
  font-size: 9px; 
}

.tagxs{ 
height: 14px;
  font-size: 8px; }
</style>

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
      myPTJson: ptjson,
      
      
    };
  },
  name: "Lista"
};