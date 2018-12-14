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

  let image = 0;
  this.images = [];



  this.images[0] = {img: 'images/band-project.png', div:
  { showBandDiv: false,
  }}
  this.images[1] = {img: 'images/dive-project.png', div:
  { showDiveDiv: false,
  }}
  this.images[2] = {img: 'images/specu-project.png', div:
  { showSpecuDiv: false,
  }}
  this.images[3] = {img: 'images/christmas-project.png', div:
  { showChristDiv: false,
  }}
  this.images[4] = {img: 'images/tr-project.png', div:
  { showTrDiv: false,
  }}

let image1Div;
let image2Div;
let image3Div;
  this.moveImages = function(direction) {
    imageDivArray = []
    console.log('you clicked an arrow', image, this.images.length);
    if (direction == "right") {
      console.log(document.peruse3.src);
      if (image === this.images.length - 3) {

      } else if (image !== this.images.length - 3) {
        image++
        console.log(image);
        document.peruse1.src = this.images[image].img;
        document.peruse2.src = this.images[image + 1].img;
        document.peruse3.src = this.images[image + 2].img;
        image1Div = this.images[image].div;
        image2Div = this.images[image+1].div;
        image3Div = this.images[image+2].div;
        imageDivArray = [{name: 'image1Div', value: image1Div}, {name: 'image2Div', value: image2Div}, {name: 'image3Div', value: image3Div}]
      }
    } else if (direction == "left") {
      if (image === 0) {

      } else if (image > 0) {
        image--
        document.peruse1.src = this.images[image].img;
        document.peruse2.src = this.images[image + 1].img;
        document.peruse3.src = this.images[image + 2].img;
        image1Div = this.images[image].div;
        image2Div = this.images[image+1].div;
        image3Div = this.images[image+2].div;
        imageDivArray = [{name: 'image1Div', value: image1Div}, {name: 'image2Div', value: image2Div}, {name: 'image3Div', value: image3Div}]
      }
    }
  }
    document.peruse1.src = this.images[image].img;
    document.peruse2.src = this.images[image + 1].img;
    document.peruse3.src = this.images[image + 2].img;
    image1Div = this.images[image].div;
    image2Div = this.images[image+1].div;
    image3Div = this.images[image+2].div;
    imageDivArray = [{name: 'image1Div', value: image1Div}, {name: 'image2Div', value: image2Div}, {name: 'image3Div', value: image3Div}]
console.log(imageDivArray);


this.openDiv = function(div) {
  this.images[0].div.showBandDiv = false;
  this.images[1].div.showDiveDiv = false;
  this.images[2].div.showSpecuDiv = false;
  this.images[3].div.showChristDiv = false;
  this.images[4].div.showTrDiv = false;

  console.log('you clicked one of the images', div)
  console.log(div);
  for (item in imageDivArray) {
    console.log(imageDivArray[item].name);
    if (div == imageDivArray[item].name){
      let prop = Object.keys(imageDivArray[item].value)[0];
      console.log(prop);
      (imageDivArray[item].value)[prop] = true;
      console.log((imageDivArray[item].value)[prop]);

    }
  }
}

this.changeImg = function(direction) {
  if (direction === 'left') {
    document.querySelector('#left-arrow').setAttribute('src', 'images/red-left-arrow.png')
  }
  if (direction === 'right') {
    document.querySelector('#right-arrow').setAttribute('src', 'images/red-right-arrow.png')
}
}
this.changeImgBack = function(direction) {
  if (direction === 'left') {
    document.querySelector('#left-arrow').setAttribute('src', 'images/left-arrow.png')
  }
  if (direction === 'right') {
    document.querySelector('#right-arrow').setAttribute('src', 'images/right-arrow.png')
  }
}
}])
