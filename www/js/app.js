angular.module('starter', ['ionic'])
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
.factory('Projects', function() {
  return {
    all: function() {
      var projectString = window.localStorage['projects'];
      if(projectString) {
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function(projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function(projectTitle) {
      // Add a new project
      return {
        title: projectTitle,
        set_of_prefs: []
      };
    },
    getLastActiveIndex: function() {
      return 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
})

.controller('TodoCtrl', function($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate) {

  // A utility function for creating a new project
  // with the given projectTitle
  var createProject = function(projectTitle) {
    var newProject = Projects.newProject(projectTitle);
    $scope.projects.push(newProject);
    Projects.save($scope.projects);
    $scope.selectProject(newProject, $scope.projects.length-1);
  }


  // Load or initialize projects
  $scope.projects = Projects.all();

  // Grab the last active, or the first project
  $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];

  // Called to create a new project
  $scope.newProject = function() {
    var projectTitle = prompt('Project name');
    if(projectTitle) {
      createProject(projectTitle);
    }
  };

  // Called to select the given project
  $scope.selectProject = function(project, index) {
    $scope.activeProject = project;
    Projects.setLastActiveIndex(index);
    $ionicSideMenuDelegate.toggleLeft(false);
  };

  // Create our modal
  $ionicModal.fromTemplateUrl('new-prefs.html', function(modal) {
    $scope.prefsModal = modal;
  }, {
    scope: $scope
  });

  $scope.createPrefs = function(prefs) {
    if(!$scope.activeProject || !prefs) {
      return;
    }
    $scope.activeProject.set_of_prefs.push({
      heatcold: prefs.heatcold,
      snow: prefs.snow,
      seasons: prefs.seasons,
      outdoors: prefs.outdoors,
      active: prefs.active,
      activities: prefs.activities,
      culture: prefs.culture,
      children: prefs.children,
      dog: prefs.dog,
      entrepreneur: prefs.entrepreneur,
      population: prefs.population,
      sports: prefs.sports,
      occupation: prefs.occupation
    });
    $scope.prefsModal.hide();

    // Inefficient, but save all the projects
    Projects.save($scope.projects);

  };

  $scope.newPrefs = function() {
    $scope.prefsModal.show();
  };

  $scope.closeNewPrefs = function() {
    $scope.prefsModal.hide();
  }

  $scope.toggleProjects = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };


  // Try to create the first project, make sure to defer
  // this by using $timeout so everything is initialized
  // properly
  $timeout(function() {
    if($scope.projects.length == 0) {
      while(true) {
        var projectTitle = prompt('Your first project title:');
        if(projectTitle) {
          createProject(projectTitle);
          break;
        }
      }
    }
  });

});
