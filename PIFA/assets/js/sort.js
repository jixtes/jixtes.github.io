var app = angular.module('sort_column', []);

order = "desc";

app.directive('sort', function($timeout,sortService) { 
	return {
		scope: false,
		link: function(scope, element, attrs) {
			element.addClass('sort')

			element.on('click',function() {
				scope.$apply(function(scope){
					var negate = "";

					if (order == "desc"){
						element.removeClass('sort_desc');
						element.addClass('sort_asc');
						order = "asc"						
					}
					else {
						element.removeClass('sort_asc');
						element.addClass('sort sort_desc');
						order = "desc";						
					}

					negate = (order=="desc") ? '-':'';
					scope.sort = [negate+attrs.sort]

					$timeout(function(){					
						element.removeClass('sort_'+order);
						scope.sort = sortService.sortOrder;
					}, 15000);
				})
			})

			scope.sort = sortService.sortOrder;
		}
	}
})

