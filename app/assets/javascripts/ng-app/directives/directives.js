    app.directive('compiler', [
    '$compile',
    function ($compile) {
        return {
            restrict: 'E',
            replace: true,
            link: function (scope, element, attributes) {
                scope.$watch(attributes.html, function (html) {
                    element.html(html);
                    $compile(element.contents())(scope);
                });
            }
        };
    }
]);