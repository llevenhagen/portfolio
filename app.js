const app = angular.module('Portfolio', ['ngAnimate']);

app.controller('MainController', ['$http', '$location', '$anchorScroll', function($http, $location, $anchorScroll) {

  $location.hash('main')
  this.scrollTo = function(id) {
    console.log('heyyy there');
    $location.hash(id);
    $anchorScroll();

  }



  var intViewportWidth = document.body.clientWidth;
  console.log(intViewportWidth);
  let big = intViewportWidth > 1000;
  let small = intViewportWidth <= 1000;
  if (big) {
    this.showAbout = false;
    this.showLinked = false;
    this.showResume = false;
    this.showProject = false;
    this.showGit = false;
    this.aboutModal = false;
    this.resumerModal = false;
    this.projectModal = false;
    this.favModal = false;

    this.showA = function() {
      this.showAbout = !this.showAbout;
      this.showLinked = false;
      this.showResume = false;
      this.showProject = false;
      this.showGit = false;
    }
    this.showLinkedIn = function() {
      this.showLinked = !this.showLinked;
      this.showResume = false;
      this.showProject = false;
      this.showGit = false;
      this.showAbout = false;
    }
    this.showR = function() {
      this.showLinked = false;
      this.showResume = !this.showResume;
      this.showProject = false;
      this.showGit = false;
      this.showAbout = false;
    }
    this.showP = function() {
      this.showLinked = false;
      this.showResume = false;
      this.showProject = !this.showProject;
      this.showGit = false;
      this.showAbout = false;
    }
    this.showGithub = function() {
      this.showLinked = false;
      this.showResume = false;
      this.showProject = false;
      this.showGit = !this.showGit;
      this.showAbout = false;
    }
  } else if (small) {
    this.showAbout = true;
    this.showLinked = true;
    this.showResume = true;
    this.showProject = true;
    this.showGit = true;
  }
  console.log(this.showAbout);

  //
  // this.toggleAboutModal = function() {
  //   this.aboutModal = !this.aboutModal;
  //   console.log('you clicked about');
  // }
  // this.toggleResumeModal = function() {
  //   this.resumeModal = !this.resumeModal;
  // }
  // this.toggleProjectModal = function() {
  //   console.log('hello');
  //   this.projectModal = !this.projectModal;
  // }
  // this.toggleFavModal = function() {
  //   this.favModal = !this.favModal;
  // }

  // create div that only shows on browser not mobile
  // put 3 images inside div
  // create array of images, have the three images be the first three
  // add arrow on both sides with click event
  // click event on left makes all three images move left
  // click event on right makes all three images move right
  // when you click on an image, the project div appears with LINKS
  let image = 0;
  var images = [];

  this.showBandDiv = false;
  this.showDiveDiv = false;
  this.showSpecuDiv = false;
  this.showChristDiv = false;
  this.showTrDiv = false;

  images[0] = {img: 'images/band-project.png', div: 'showBandDiv'}
  images[1] = {img: 'images/dive-project.png', div: 'showDiveDiv'}
  images[2] = {img: 'images/specu-project.png', div: 'showSpecuDiv'}
  images[3] = {img: 'images/christmas-project.png', div: 'showChristDiv'}
  images[4] = {img: 'images/tr-project.png', div: 'showTrDiv'}

let image1Div;
let image2Div;
let image3Div;
  this.moveImages = function(direction) {
    imageDivArray = []
    console.log('you clicked an arrow', image, images.length);
    if (direction == "right") {
      console.log(document.peruse3.src);
      if (image === images.length - 3) {

      } else if (image !== images.length - 3) {
        image++
        console.log(image);
        document.peruse1.src = images[image].img;
        document.peruse2.src = images[image + 1].img;
        document.peruse3.src = images[image + 2].img;
        image1Div = images[image].div;
        image2Div = images[image+1].div;
        image3Div = images[image+2].div;
        imageDivArray = [{name: 'image1Div'}, {name: 'image2Div'}, {name: 'image3Div'}]
      }
    } else if (direction == "left") {
      if (image === 0) {

      } else if (image > 0) {
        image--
        document.peruse1.src = images[image].img;
        document.peruse2.src = images[image + 1].img;
        document.peruse3.src = images[image + 2].img;
        image1Div = images[image].div;
        image2Div = images[image+1].div;
        image3Div = images[image+2].div;
        imageDivArray = [{name: 'image1Div'}, {name: 'image2Div'}, {name: 'image3Div'}]
      }
    }
  }
    document.peruse1.src = images[image].img;
    document.peruse2.src = images[image + 1].img;
    document.peruse3.src = images[image + 2].img;
    image1Div = images[image].div;
    image2Div = images[image+1].div;
    image3Div = images[image+2].div;
    imageDivArray = [{name: 'image1Div'}, {name: 'image2Div'}, {name: 'image3Div'}]
console.log(imageDivArray);


this.openDiv = function(div) {
  console.log('you clicked one of the images', div)
  console.log(div);
  for (item in imageDivArray) {
    console.log(imageDivArray[item].name);
    if (div == imageDivArray[item].name){
      console.log('these are equal');
    }
  }
}

// next:
// found when they are equal, so pull the current value of that key from imagedivArray and make that this..... true 



}])
