<template>
<div id="navbar-menu">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">



                 <ul class="navbar-nav one">

               <li>
                   <div id="search-box-posn" >
                        <!-- <div class="search-box" @click="expandSearchBox()">
                            <input class="search-txt" type="text" name="" placeholder="Type to search">
                            <div id="searchbtnid" v-if="searchbtnid">
                                    <a class="search-btn" href="#">
                                    <img id="searchicon" src="@/assets/images/search.png">
                                    </a>
                            </div>
                        </div>  -->
                        <input type="text" class="form-control songsearchtextbox" placeholder="Enter movie name" v-model="searchTerm">
                       <ul class="list-group">
                           <!-- <p v-if="showsearching" id="showsearching">Searching...</p> -->
                       
                        <li class="list-group-item" v-for="movie in movies" v-text="movie.Title"></li>

                       </ul>
                       <button type="submit" class="btn btn-primary searchbutton" v-on:click="pass(searchTerm)">GO</button>

                    </div>
                 </li>

              <li>
        <a class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us" id="gifticonid" v-if="gifticonid">
                  <img id="gifticon" src="@/assets/images/gift.png">
                </a>
                </li>
                <li>
                <router-link class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us" id="settingsiconid" v-if="settingsiconid">
                  <img id="settingsicon" src="@/assets/images/settings.png">
                </router-link>
                </li>
                <li>
                <router-link class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us" id="projecticonid" v-if="projecticonid">
                  <img id="projecticon" src="@/assets/images/project.png">
                </router-link>
                </li>

                    </ul>
                    <ul class="navbar-nav two">

                        <li>
                            <div class="menuitemborderradius one" id="dropdownbtnid" v-if="dropdownbtnid">
                <router-link class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us">
                  <img id="threelinedropdownicon" src="@/assets/images/menuthreeline.png">
                </router-link></div>
                </li>
                <li>
                    <div class="menuitemborderradius two">
                <router-link class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us">
                  <img id="megaphoneicon" src="@/assets/images/loudspeaker.png">
                </router-link></div>
                </li>
                <li>
                    <div class="menuitemborderradius three">
                <router-link class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us">
                  <img id="germanflagicon" src="@/assets/images/flag.png">
                </router-link></div>
                </li>
                <li>
                    <div class="menuitemborderradius four">
                <router-link class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us">
                  <img id="pizzaicon" src="@/assets/images/pacman.png">
                </router-link></div>
                </li>
                </ul>
        </nav>



    </div>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'

const options = { name: 'lodash' }

Vue.use(VueLodash, options)
Vue.use(VueAxios, axios)

 export default{
     
    //  mounted: function(){
        
    //         .then(response => this.posts=response.data)
    //         .catch(error=>this.posts=[{title:'No posts found'}]);
    //  },
     data(){
         return{
             gifticonid:true,
             settingsiconid:true,
             projecticonid:true,
             dropdownbtnid:false,
             showsearching:false,
             searchTerm:'',
             found:'',
            //  searchpost:'',
            //  searchpostfirsttwo:'',
            // //  foundsongone:'',
            // //  foundsongtwo:'',
            // //  foundsongthree:'',
            // //  foundsongfour:'',
            // //  foundsongfive:''
            // allposts:'',
            // posts: '',
             API_URL:'http://www.omdbapi.com/?type=movie&s=',
             key:'&apikey=ce54ee16',
             fullURL:'',
             movies:''
            


         }
     },
    //  async created(){
    //      try{
    //          const res= await axios.get('http://ziptasticapi.com/'+ this.searchsong);
    //          this.foundsongs=res.data;
    //      }catch(e){
    //          console.error(e)
    //      }
    //  }
    //  },
    //     watch:{
    //         searchpost: function(){
            
    //             this.posts = ''
    //           if(this.searchpost.length == 2){
    //              this.lookupsearchpost()
    //         }
    //     }
    // },
    methods:{
        pass:function(message){
            this.getResults(message)
        
        },
        getResults:function(message){
            
             this.fullURL=(this.API_URL + message + this.key)
            
             fetch(this.fullURL)
             .then(response=>response.json())
             .then(data=>this.showResults(data.Search));

        },
        showResults:function(results){
            this.movies=results

        }
    }
        // methods: {
         
    //         lookupsearchpost: _.debounce(function(){
    //             var app=this
    //         app.posts="Searching..."
    //         app.searchpostfirsttwo=app.searchpost.slice(0,1)
    //         axios.get('https://jsonplaceholder.typicode.com/posts' + app.searchpostfirsttwo)
                
    //             .then(response => app.allposts=response.title.search(app.searchpostfirsttwo))
    //             for(var i=0; i < app.allposts.length; i++){
                   
    //                     app.posts=app.allposts
    //                 }
                    
                
    //             .catch(error=>app.posts=[{title:'No posts found'}])
    //             },500)}
    // vm.foundsongfive=response.data.city+', '+response.data.state
 }
</script>
<style scoped>
.searchbutton{
    margin-left:241px;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
}
.songsearchtextbox{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:240px;
}

.list-group-item{
    border:transparent;




}

.list-group{
    position:absolute;
    top:120%;
    width:240px;
    z-index: 1;
}
.navbar{
    background-color:#e4e5e7 !important;
    height:62px;
   width:100%;
   position:relative;
}
#searchicon{
    height:25px;
    width:25px;
    display:none;
}
.navbar-nav{
    padding-left: 10px;
   
}
.navbar-nav.two{
    padding-left: 80px;
}
#gifticon{
    height: 25px;
    width: 25px;

      margin-left: 20px;
      display:none;



}
.menuitemborderradius.one{
border-radius:60px;
width:45px;
height:45px;
top:10px;

position: absolute;
background-color:rgb(235, 132, 15, 0.3);
border:1px solid rgb(235, 132, 15, 0.3);



}
.menuitemborderradius.two{
border-radius:60px;
width:45px;
height:45px;
top:10px;
position: absolute;
left:450px;
background-color:rgb(107, 196, 55, 0.3);
border:1px solid rgb(107, 196, 55, 0.3);

display:none;


}
.menuitemborderradius.three{
border-radius:60px;
width:45px;
height:45px;
top:10px;
left:525px;
position: absolute;
background-color:rgb(80, 118, 168, 0.3);
border:1px solid rgb(80, 118, 168, 0.3);
display:none;

}
.menuitemborderradius.four{
border-radius:60px;
width:45px;
height:45px;
top:10px;
left:600px;
position: absolute;
background-color:rgb(201, 155, 137, 0.3);
border:1px solid rgb(201, 155, 137, 0.3);
display:none;

}


#settingsicon{
    height: 25px;
    width: 25px;
    margin-left: 20px;
    display:none;
}
#projecticon{
    height:25px;
    width:25px;
    margin-left: 20px;
    display:none;
}
#threelinedropdownicon{
    height:15px;
    width:15px;
    transform:translate(-15%, -45%);
}
#megaphoneicon{
    height:25px;
    width:25px;
    transform:translate(-27%, -32%);
}
#germanflagicon{
    height:25px;
    width:25px;
    transform:translate(-27%, -32%);
}
#pizzaicon{
    height:25px;
    width:25px;
    transform:translate(-27%, -32%);
}

.search-box{


    background: #acadaf;
    height: 40px;
    border-radius: 40px;
    padding:0px;



}


.search-box:hover > .search-txt{
    width: 240px;
    padding: 0 13px;
}






.search-btn{
    color: #eeeaea;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgb(170, 172, 170);
    display: flex;
    justify-content: center;
    align-items:center;




}
.search-txt{
    border:none;
    background:none;
    outline:none;
    float:left;
    padding:0;
    color:white;
    font-size:16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;



}
#gifticon{
    height: 25px;
    width: 25px;




}
/* .navbar-nav.search-txt:hover #gifticon{

display:none;
}
.navbar-nav:hover #settingsicon{

display:none;
}
.navbar-nav:hover #projecticon{

display:none;
} */
#search-box-posn{
    padding-top:10px;
}
#navbar-menu{
    margin-bottom:0px;
}
</style>