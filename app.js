const app = angular.module('Portfolio', []);

app.controller('MainController', ['$http', function($http){

this.showLinked = false;
this.showResume = false;
this.showProject = false;
this.showGit = false;
this.aboutModal = false;
this.resumerModal = false;
this.projectModal = false;
this.favModal = false;

this.showLinkedIn = function(){
  this.showLinked = !this.showLinked;
  this.showResume = false;
  this.showProject = false;
  this.showGit = false;
}
this.showR = function(){
  this.showLinked = false;
  this.showResume = !this.showResume;
  this.showProject = false;
  this.showGit = false;
}
this.showP = function(){
  this.showLinked = false;
  this.showResume = false;
  this.showProject = !this.showProject;
  this.showGit = false;
}
this.showGithub = function(){
  this.showLinked = false;
  this.showResume = false;
  this.showProject = false;
  this.showGit = !this.showGit;
}
this.toggleAboutModal = function(){
  this.aboutModal = !this.aboutModal;
  console.log('you clicked about');
}
this.toggleResumeModal = function(){
  this.resumeModal = !this.resumeModal;
}
this.toggleProjectModal = function(){
  console.log('hello');
  this.projectModal = !this.projectModal;
}
this.toggleFavModal = function(){
  this.favModal = !this.favModal;
}


}])
