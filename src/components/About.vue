<template>
  <div class="container-fluid">
    <div>
      <div class="about_">
        <div class="row">
          <div class="col-12" id="about_1">
            <div class="about-title">
              <h1>About</h1>
              <div class="col-8">
                <p>
                UI transformed music listening forever when it launched in 2008.
                Discover,manage and share over 80 million tracks,including 4.7
                million podcasts,for free, or upgrade to UI Premium to access
                exclusive features for music including improved sound quality
                and an on-demand, offline,and ad-free music listening
                experience.<br />Our missionis to unlock the potential of human
                creativity—by giving a million creative artists the opportunity
                to live off their art and billions of fans the opportunity to
                enjoy and be inspired by it.
              </p>
              </div>
            </div>
         
          </div>
          <div class="col-6"></div>
        </div>
      </div>
    </div>
    <div class="team-boxed">
      <div class="container">
        <div class="intro">
          <h1 id="about_h1">Top Beneficial Owners</h1>
          <p class="text-center" style="font-style: oblique">
            Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
            Vestibulum nibh erat, pellentesque ut laoreet vitae.
          </p>ff
        </div>
        <div class="row people">
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="../assets/img/daniel.png" />
              <h3 class="name">Daniel Ek</h3>
              <p class="title">Entrepreneur</p>
              <p
                class="description"
                style="font-style: oblique 10deg;  color: #ffff"
              >
                Our missionis to unlock the potential of human creativity—by
                giving a million creative artists the opportunity to live off
                their art and billions of fans the opportunity to enjoy and be
                inspired by it.
              </p>
              <div class="social">
                <a href="https://www.facebook.com/eldsjal"
                  ><i class="fa-brands fa-facebook"></i></a
                ><a href="https://twitter.com/eldsjal"
                  ><i class="fa-brands fa-twitter"></i></a
                ><a href="https://www.instagram.com/eldsjal/"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img
                class="rounded-circle"
                src="../assets/img/martin-lorentzon.png"
              />
              <h3 class="name">Martin Lorentzon</h3>
              <p class="title">Producer</p>
              <p
                class="description"
                style="font-style: oblique 10deg;  color: #ffffff"
              >
                Our missionis to unlock the potential of human creativity—by
                giving a million creative artists the opportunity to live off
                their art and billions of fans the opportunity to enjoy and be
                inspired by it.
              </p>
              <div class="social">
                <a href="https://www.facebook.com/martin.lorentzon"
                  ><i class="fa-brands fa-facebook"></i></a
                ><a href="https://twitter.com/martinlorentzon"
                  ><i class="fa-brands fa-twitter"></i></a
                ><a href="https://www.instagram.com/martin_lorentzon/"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="../assets/img/mmm.png" />
              <h3 class="name">Morgan Stanley</h3>
              <p class="title">Director</p>
              <p
                class="description"
                style="font-style: oblique 10deg;  color: #ffffff;"
              >
                Our missionis to unlock the potential of human creativity—by
                giving a million creative artists the opportunity to live off
                their art and billions of fans the opportunity to enjoy and be
                inspired by it.
              </p>
              <div class="social">
                <a href="https://www.facebook.com/martin.lorentzon"
                  ><i class="fa-brands fa-facebook"></i></a
                ><a href="https://twitter.com/martinlorentzon"
                  ><i class="fa-brands fa-twitter"></i></a
                ><a href="https://www.instagram.com/martin_lorentzon/"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;1,200&display=swap");

.about-title h1 {
  font-size: 61px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Krub";
  background-color: #3f2b6b;
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 15px;
}

.about-title p {
  width: auto;
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  font-family: "Krub";
  margin-top: 45px;
  background-color: #3f2b6b;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 5%;
  border-radius: 15px;
  opacity: 70%;
}
.about-title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.about_ {
  background-image: url("../assets/img/Dump-Background-GIF-Find-Share-on-GIPHY.gif");
  background-position: center;
  background-repeat: no-repeat;
/* background-size:cover; */
background-size: 95% 100%;
padding-bottom: 150px;
}
.container-fluid {
  background-color: #181818;
}

.team-boxed p {
  color: #ffffff;
}

.team-boxed h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: #ffffff;
}

@media (max-width: 767px) {
  .team-boxed h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}

.team-boxed .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}

.team-boxed .intro p {
  margin-bottom: 0;
}

.team-boxed .people {
  padding: 50px 0;
}

.team-boxed .item {
  text-align: center;
}

.team-boxed .item .box {
  background-color: #3f2b6b;  text-align: center;
  padding: 30px;
  margin-bottom: 30px;
}

.team-boxed .item .name {
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 8px;
  color: #ffffff;
}

.team-boxed .item .title {
  text-transform: uppercase;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 13px;
}

.team-boxed .item .description {
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
  color: #ffffff;
}

.team-boxed .item img {
  max-width: 160px;
}

.team-boxed .social {
  font-size: 18px;
  color: #ffffff;
}

.team-boxed .social a {
  color: inherit;
  margin: 0 10px;
  display: inline-block;
  opacity: 0.7;
}

.team-boxed .social a:hover {
  opacity: 1;
}
#about_h1 {
  text-align: center;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
</style>