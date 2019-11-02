<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a href="#" class="navbar-brand dp">dp</a>
        <a href="#" class="navbar-brand" id="mainname">ArchitectUI Angular 7 Dashboard PRO</a>
        <a href="#" class="navbar-brand subtext">Live Demo Preview</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
       
        <ul class="navbar-nav ml-auto">
            
              <li class="navbarimages   " @click="menuToggle">
                 <div id="borderradnewspaper">
                      <router-link class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us">
                  <img id="newspapericon" src="@/assets/images/newspaper.png">
                </router-link>
                </div>
                </li>
                <li class="navbarimages   " @click="menuToggle">
                 <div id="borderradcart">
                      <router-link class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us">
                  <img id="shoppingcarticon" src="@/assets/images/shopping-cart.png">
                </router-link>
                </div>
                </li>
                <li class="navbarimages   " @click="menuToggle">
                 <div id="borderradcancel">
                      <router-link class="theme p-3 d-block color-jet-black hover-light-blue position-relative" active-class="active" to="/about-us">
                  <img id="cancelicon" src="@/assets/images/cancel.png">
                </router-link>
                </div>
                </li>
                
               
            
          
        </ul>
        </div>
    
        </nav>
</template>
<script>

export default {
    name:'navbartop',
    data() {
return{
// image:"@/assets/images/logo.png"
}
    }
}
</script>

<style scoped>
.navbar{
    background-color:#252733 !important;
    height:62px;   
}
.navbar .navbar-brand{
    color: #fff;
    margin-right: 8px;
    
}
.navbar .subtext{
    color: rgba(255,255,255,.7);
    padding-left: .5rem;
    padding-bottom: 2px;
    font-size: 16px;
}
.navbar .dp{
    background-image: linear-gradient(135deg,#667eea 0,#764ba2 100%);
    width: 42px;
    height: 42px;
    line-height: 32px;
    text-align: center;
    display: block;
    font-weight: 400;
    font-size: 1.7rem;
    font-style: italic;
    color: rgba(255,255,255,.7);
    text-transform: lowercase;
    border-radius: .25rem;
}


@media only screen and (max-width: 600px) {
   #mainname{
    display: none;
  }
}


#newspapericon{
    height: 25px;
    display: block;
    position: absolute;
    
    transform: translate(-40%, -45%);
    
   
}
#shoppingcarticon{
    height: 25px;
   
    position: absolute;
    
    transform: translate(-40%, -45%);
    
   
}
#cancelicon{
    height: 17px;
   
    position: absolute;
    
    transform: translate(-40%, -45%);
    
   
}
#borderradnewspaper{
    border-radius: 60px;
    width: 40px;
    height:40px;
    position: absolute;
    top:9px;
    left:1000px;
  
    box-sizing: border-box;
    background-color: rgb(223, 226, 12);
    border: 1px solid rgb(223, 226, 12);
   
}
#borderradcart{
    border-radius: 60px;
    width: 40px;
    height:40px;
    position: absolute;
    top:9px;
    left: 1070px;
  
    box-sizing: border-box;
    background-color: rgb(26, 172, 70);
    border: 1px solid rgb(26, 172, 70);
   }
   




</style>