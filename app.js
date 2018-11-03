const app = angular.module('Portfolio', []);

app.controller('MainController', ['$http', function($http){

this.showAbout = false;
this.showResume = false;
this.showProject = false;
this.showFav = false;
this.aboutModal = false;
this.resumerModal = false;
this.projectModal = false;
this.favModal = false;

this.showA = function(){
  this.showAbout = !this.showAbout;
  this.showResume = false;
  this.showProject = false;
  this.showFav = false;
}
this.showR = function(){
  this.showAbout = false;
  this.showResume = !this.showResume;
  this.showProject = false;
  this.showFav = false;
}
this.showP = function(){
  this.showAbout = false;
  this.showResume = false;
  this.showProject = !this.showProject;
  this.showFav = false;
}
this.showF = function(){
  this.showAbout = false;
  this.showResume = false;
  this.showProject = false;
  this.showFav = !this.showFav;
}
this.toggleAboutModal = function(){
  this.aboutModal = !this.aboutModal;
  console.log('you clicked about');
}
this.toggleResumeModal = function(){
  this.resumeModal = !this.resumeModal;
}
this.togggleProjectModal = function(){
  this.projectModal = !this.projectModal;
}
this.toggleFavModal = function(){
  this.favModal = !this.favModal;
}


}])
