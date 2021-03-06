var app = angular.module('sort_column', []);

order = "asc";
activeColumn = null;

app.directive('sort', function($timeout,sortService) { 
	return {
		scope: false,
		link: function(scope, column, attrs) {

			// Change sort default on click
			column.on('click',function() {
				scope.$apply(function(scope){

					// Remove/Add sort sign from active col
					if (activeColumn)
						activeColumn.removeClass('sort_desc').removeClass('sort_asc');				

					// Set the active column
					if(activeColumn != column){
						activeColumn = column;
						order = 'asc';

						//On time out reset to the default order.
						$timeout(function(){	
							if(activeColumn == column){				
								column.removeClass('sort_'+order);
								scope.sort = sortService.sortOrder;

								activeColumn = null;
							}
						}, 15000);
					}

					if (order == "desc"){
						column.addClass('sort_asc');
						order = "asc"						
					}
					else {
						column.addClass('sort sort_desc');
						order = "desc";						
					}

					// Set Sorting predicate
					negate = (order=="desc") ? '-':'';
					scope.sort = [negate+attrs.sort, negate+sortService.secondarySort];					
				})
			})

			scope.sort = sortService.sortOrder;
		}
	}
})
