<template>
  <!-- <div>
    <div class="container-fluid" id="footer">
      <div class="row">
        <div class="col-3">
          <div class="about_title" id="about_foot">
            <h3>About</h3>
            <small></small>
          </div>
          <ul type="none" id="foot">
            <li><a href="">History</a></li>
            <li><a href=""> Our Team</a></li>
            <li><a href="">Mission Statement</a></li>
            <li><a href="">Terms & Condition</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-3">
          <div class="about_title">
            <h3>What we do</h3>
            <span></span>
          </div>
          <ul type="none" id="foot">
            <li><a href="">News and stories</a></li>
            <li><a href="">Publications</a></li>
            <li><a href="">Take action</a></li>
            <li><a href=""> Recomendations</a></li>
            <li><a href="">Help</a></li>
          </ul>
        </div>
        <div class="col-6">
        <div class="last_footer">
            <h4>Sign Up To Receive <p>Our Newsletter</p> </h4>
          <input type="text" class="form-control" >
          <div class="icons d-flex">
            <h5> Follow us!</h5>
           
              <a href="https://www.facebook.com/mehemmed.valehov.3"><i class="fa-brands fa-facebook"></i></a> 
            <a href="https://www.instagram.com/raphaelll.m/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
            
          </div>
          
         
        </div>
        </div>
      </div>
    </div>
  </div> -->
  <div>
        <!-- FOOTER -->
        <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4" id="footer">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">FB.</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. </p>
                </div>
             
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><RouterLink to="/">Home</RouterLink></li>
                        <li><RouterLink to="/about">About</RouterLink></li>
                        <li><RouterLink to="/whyus">Why us</RouterLink></li>
                        <li><RouterLink to="/management">Management</RouterLink></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;1,200&display=swap");
li :hover{
  color: #a460f9;
  cursor: pointer;


}
/* #footer {
  background-color: #8c6eca;
  padding-bottom: 20px;
}
#footer span {
  width: 213px;
  height: 2px;
  background-color: #e6e6e6;
  margin-left: 35px;
  margin-bottom: 35px;
}
#footer h3 {
 display: flex;
 justify-content: center;
  padding-top: 15px;
  font-size: 33px;
  letter-spacing: 3px;
  color: black;
  font-weight: 700;
  font-family: "Krub";
}
#footer .about_title {
  display: flex;
  flex-direction: column;
}
#footer small {
  width: 115px;
  height: 2px;
  background-color: #e6e6e6;
  margin-left: 30px;
  margin-bottom: 35px;
}
#foot a {
  font-size: 25px;
  line-height: 44px;
  color: #ffffff;
  font-weight: 600;
  font-family: "Krub";
  text-decoration: none;
 
}
#footer h4{
 
  padding-top: 15px;
  font-size: 33px;
line-height: 49px;
color: #ffffff;
font-weight: 700;
font-family: "Krub";
text-align: right;
}
#footer p{
  color:#181818;
}
#footer input{
    width: 470px;
height: 63px;
margin-left: 120px;
border: 3px solid #f1f1f1;
background-color: #8c6eca;
}
.last_footer{
    display: flex;
    flex-direction: column;
    margin-right: 30px;
}
#footer h5{
    font-size: 25px;
line-height: 33px;
color: #ffffff;
font-weight: 500;
font-family: "Krub";

}
.icons{
   margin-top: 120px; 
   margin-left: 60px;
 
}

.icons i{
font-size: 50px;
border-radius: 32px;
color: #e6e6e6;
background-color: #8c6eca;
margin-left: 77px;

}
.icons i:hover{
  color: #181818;
}
#about_foot{
  margin-right: 105px;
}
#foot a:hover{
  color:#181818;
} */
#footer {
  background: #2a2e32;
}

.text-small {
  font-size: 0.9rem;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

a:hover, a:focus {
  text-decoration: none;
}

.form-control {
  background: #212529;
  border-color: #545454;
}

.form-control:focus {
  background: #212529;
}

footer {
  background: #212529;
}


/* ==========================================
    CUSTOM UTILS CLASSES
  ========================================== */
  body, html {
    height: 100%;
  }
</style>