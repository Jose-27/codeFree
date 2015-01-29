    app.controller('HomeCtrl',['$scope','$location', function ($scope, $location) {
        $scope.showSearch = $location.path() != '/coders';
    }]);

   app.controller('AceCtrl', function ($scope) {
	// select
	  $scope.modes = ['text', 'XML', 'Javascript','html','css'];
	  $scope.mode = $scope.modes[0];
	 
	 
	  // ui-ace option
	  $scope.aceOption = {
	    mode: $scope.mode.toLowerCase(),
	    onLoad: function (editor) {	
	      // defaults 
          editor.setTheme("ace/theme/monokai");

           // options
           editor.setOptions({
           	showGutter: true,
           	showPrintMargin: false,
           	fontSize: '12px',
           	fontFamily: 'menlo'
           });
        
	      // HACK to have the ace instance in the scope...
	      $scope.modeChanged = function () {
	        editor.getSession().setMode("ace/mode/" + $scope.mode.toLowerCase());
	      };
	 
	    }
	  };
	 
	  $scope.aceModel = '\n\n\n\n\n\n\n\n\t\t\t\t<!-- Happy Coding. -->';
	 
});