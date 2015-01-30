    app.controller('HomeCtrl',['$scope','$location', function ($scope, $location) {
        $scope.showSearch = $location.path() != '/coders';
    }]);

   app.controller('AceCtrl', function ($scope) {
	// select
	  $scope.modes = ['CoffeeScript','ColdFusion','C#','CSS','Dart','Go','Groovy','haXe','HTML','C/C++','Clojure',
		'Java','JavaScript','JSON','LaTeX','LESS','Liquid','Lua','Markdown','OCaml','Perl','pgSQL','PHP','Powershell','Python',
		'Ruby','OpenSCAD','Scala','SCSS','SH','SQL','SVG','Text','Textile','XML','XQuery','YAML'];
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
           	enableBasicAutocompletion: true,
			enableSnippets: true,
			enableLiveAutocompletion: true,
           	fontSize: '14px',
           	fontFamily: 'menlo'
           });

	      // HACK to have the ace instance in the scope...
	      $scope.modeChanged = function () {
	        editor.getSession().setMode("ace/mode/" + $scope.mode.toLowerCase());
	      };
	 
	    }
	  };
});
   