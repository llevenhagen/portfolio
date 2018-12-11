const app = angular.module('Portfolio', ['ngAnimate']);

app.controller('MainController', ['$http', '$location', '$anchorScroll', function($http, $location, $anchorScroll){

$location.hash('main')
this.scrollTo = function(id) {
  console.log('heyyy there');
  $location.hash(id);
  $anchorScroll();

}





this.showAbout = false;
this.showLinked = false;
this.showResume = false;
this.showProject = false;
this.showGit = false;
this.aboutModal = false;
this.resumerModal = false;
this.projectModal = false;
this.favModal = false;

this.showA = function(){
  this.showAbout = !this.showAbout;
  this.showLinked = false;
  this.showResume = false;
  this.showProject = false;
  this.showGit = false;
}
this.showLinkedIn = function(){
  this.showLinked = !this.showLinked;
  this.showResume = false;
  this.showProject = false;
  this.showGit = false;
  this.showAbout = false;
}
this.showR = function(){
  this.showLinked = false;
  this.showResume = !this.showResume;
  this.showProject = false;
  this.showGit = false;
  this.showAbout = false;
}
this.showP = function(){
  this.showLinked = false;
  this.showResume = false;
  this.showProject = !this.showProject;
  this.showGit = false;
  this.showAbout = false;
}
this.showGithub = function(){
  this.showLinked = false;
  this.showResume = false;
  this.showProject = false;
  this.showGit = !this.showGit;
  this.showAbout = false;
}
// this.toggleAboutModal = function(){
//   this.aboutModal = !this.aboutModal;
//   console.log('you clicked about');
// }
// this.toggleResumeModal = function(){
//   this.resumeModal = !this.resumeModal;
// }
// this.toggleProjectModal = function(){
//   console.log('hello');
//   this.projectModal = !this.projectModal;
// }
this.toggleFavModal = function(){
  this.favModal = !this.favModal;
}


}])
