window.addEventListener('load', function (e) {
  window.applicationCache.addEventListener('updateready', function (e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      window.location.reload();
    }
  }, false);
}, false);

var app = angular.module('PIFA', ['sort_column']);

app.controller('PIFACtrl', ['$scope', function ($scope) {
  $scope.players = PIFA.players;
  $scope.matches = PIFA.matches.reverse();
  $scope.nextPredictions = PIFA.predictions;

  // this is where the `magic` happens  
  for (match in $scope.matches) {
    $scope.matches[match].pts = {};

    for(player in $scope.players) {
      // forfeit
      if ($scope.matches[match].prediction.hasOwnProperty(player) === false) {
        $scope.matches[match].prediction[player] = {};
        $scope.matches[match].prediction[player].teamA = 'X';
        $scope.matches[match].prediction[player].teamB = 'X';
        $scope.players[player].PTS -= 2;
        $scope.players[player].forfeit++;
        $scope.matches[match].pts[player] = -2;
      }

      // Game not forfeited
      else {

          // initialize played
          if(!$scope.players[player].hasOwnProperty('played'))
            $scope.players[player].played = 0;  

          $scope.players[player].played++;

          // spot on prediction
          if (($scope.matches[match].match.scoreA === $scope.matches[match].prediction[player].teamA) && ($scope.matches[match].match.scoreB === $scope.matches[match].prediction[player].teamB)) {
            $scope.players[player].PTS += 3;
            $scope.players[player].spotOn++;
            $scope.matches[match].pts[player] = 3;
          }

          // side prediction
          else if (
              ($scope.matches[match].match.scoreA > $scope.matches[match].match.scoreB) === ($scope.matches[match].prediction[player].teamA > $scope.matches[match].prediction[player].teamB) &&
              ($scope.matches[match].match.scoreA < $scope.matches[match].match.scoreB) === ($scope.matches[match].prediction[player].teamA < $scope.matches[match].prediction[player].teamB)
          ) {
            // goal difference
            if (($scope.matches[match].match.scoreA - $scope.matches[match].match.scoreB) === ($scope.matches[match].prediction[player].teamA - $scope.matches[match].prediction[player].teamB)) {
              $scope.players[player].PTS += 2;
              $scope.players[player].gd++;
              $scope.matches[match].pts[player] = 2;
            } else {
              $scope.players[player].PTS += 1;
              $scope.players[player].right++;
              $scope.matches[match].pts[player] = 1;
            }
          }

          // wrong prediction
          else {
            $scope.players[player].PTS -= 1;
            $scope.players[player].wrong++;
            $scope.matches[match].pts[player] = -1;
          }

      }
    }
  }


  // calculating ranking...
  // it'll be `easier` to do it this way - i don't deserve to use Angular
  // forgiveness, please
  $scope.playersList = [];
  for (player in $scope.players) {
    
    // Calculating success rate
    ptsWithoutDeduction = $scope.players[player].PTS + ($scope.players[player].forfeit * 2)+$scope.players[player].wrong;
    $scope.players[player].success = ptsWithoutDeduction/($scope.players[player].played*3) * 100;
    $scope.players[player].success = $scope.players[player].success.toFixed(2)+'%';

    $scope.playersList.push({name: player, stat: $scope.players[player]});
  };
}]);

app.service('sortService', function() {
  this.sortOrder = ['-stat.PTS','-stat.spotOn','-stat.gd','-stat.right','stat.wrong','stat.forfeit',];
})
