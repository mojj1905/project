<template>
  <div>
    <section id="home_page">
      <div class="container">
        <div class="row" id="first">
        
          <div class="col">
            <div class="title">
              <h2 class="">Start guide for beginner designers</h2>
              <p>
                With UI,it’s easy to find the right music or podcast for
                every moment – on your phone, your computer,your tablet and
                more.
              </p>
            </div>
            <div class="buttongroup ">
              <button>Let s start</button>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div class="row" id="number">
          <div class="col-4  mt-5">
            <span>+</span>
            <small>150</small>
            <h3>
              Happy <br />
              Students
            </h3>
          </div>
          <div class="col-4 mt-5">
            <span>+</span>
            <small>50</small>
            <h3>CERTIFIED <br />courses</h3>
          </div>
          <div class="col-4 mt-5">
            <span>+</span>
            <small>1000</small>
            <h3>AWARDS <br />RECEIVED</h3>
          </div>
        </div>
      </div>
    </section>
    <footer></footer>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;1,200&display=swap");

#home_page {
  background-image: url("../assets/img/background.gif");
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;

  padding-bottom: 25px;

}
#home_page p {
 

  font-size: 20px;
  letter-spacing: 0px;
  line-height: 27px;
  color: #ffffff;
  font-weight: 600;
  font-family: "Krub";
  text-align: left;
  width: 420px;
}
#home_page h2 {
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 29px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  font-family: "Krub";

}
#home_page button {
  width: 125px;
  height: 45px;
  background-color: #3f2b6b;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 700;
  font-family: "Oswald";
  border: none;
  margin-left: 10px;
}
.buttongroup {

  display: flex;
  justify-content: center;
  align-items: center;
 
}
.title {
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#home_page span {
  font-size: 51px;
  color: #a460f9;
  margin-top: 60px;
}
#home_page small {
  font-size: 51px;
  color: #ffff;
  font-weight: bold;
  font-family: "Oswald";
  margin-top: 60px;
}
#home_page h3 {
  font-size: 22px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 400;
  font-family: "Krub";
  margin-top: 75px;
  margin-left: 10px;
}
#number{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#number .col-4{
  display: flex;
} 
/* responsive css start */
@media screen and (min-width: 320px) and (max-width:480px){



#home_page span{
  font-size: 25px;
  margin-top: 75px;
}

.title{

    margin-top: 50px;
}
#first{
  display: flex;
  flex-direction: column;
}
#home_page p{
  
  font-size: 14px;
width: 220px;
  line-height: normal;
}
#home_page h2{
  font-size: 15px;

}
#home_page h3{
  font-size: 9px;
  margin-top: 78px;
  margin-left: 5px;
 
}
#home_page small{
  font-size: 18px;
  margin-top: 75px;
}
#home_page button{
  font-size: 10px;
  width: 70px;
  height: 30px;
}
#home_page span{
  font-size: 17px;
}

}
@media screen and (min-width: 481px) and (max-width:768px){
  .title{
 
    margin-top: 100px;
  }
  #home_page h3{
    font-size: 14px;
    letter-spacing: 1px;
  }
  #home_page small{
    font-size: 25px;
    margin-top: 75px;
  }
  #home_page span{
    font-size: 30px;
    margin-top: 70px;
  }

  #home_page h2{
    font-size: 18px;
  }

}
@media screen and (min-width: 769px) and (max-width:1023px){
  .title{
    margin-top: 170px;
  
  }
 #home_page small{
  font-size: 40px;
  margin-top: 68px;
 }
 #home_page span{
  font-size: 40px;
  margin-top: 66px;
 }
 #home_page h3{
    font-size: 20px;
    
  }
  /* #number{
    margin-left: 20px;
  } */
}


</style>