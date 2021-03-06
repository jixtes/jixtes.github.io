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
      else {
        // initialize groupstage and knockoutstage counters
        if(!$scope.players[player].hasOwnProperty('threePtGame') && !$scope.players[player].hasOwnProperty('fourPtGame')) {
          $scope.players[player].threePtGame = 0;  
          $scope.players[player].fourPtGame = 0;  
        }

        if ($scope.matches[match].hasOwnProperty('round') === true &&
                   $scope.matches[match].match.scoreA === $scope.matches[match].prediction[player].teamA &&
                   $scope.matches[match].match.scoreB === $scope.matches[match].prediction[player].teamB &&
                   $scope.matches[match].match.scoreA - $scope.matches[match].match.scoreB === 0 &&
                   $scope.matches[match].prediction[player].teamA - $scope.matches[match].prediction[player].teamB === 0) {
          // Second stage and on
          // SPOT-ON DRAW
          // 4PTS

          $scope.players[player].fourPtGame++;

          $scope.players[player].PTS += 4;
          $scope.players[player].boom++;
          $scope.matches[match].pts[player] = 4;
        } else if ($scope.matches[match].hasOwnProperty('round') === true &&
                   $scope.matches[match].match.scoreA === $scope.matches[match].match.scoreB &&
                   $scope.matches[match].prediction[player].teamA === $scope.matches[match].prediction[player].teamB) {
            // Second stage and on
            // GD draw
            // 3PTS

            $scope.players[player].fourPtGame++;

            $scope.players[player].PTS += 3;
            $scope.players[player].rgd++;
            $scope.matches[match].pts[player] = 3;
        } else {

          $scope.players[player].threePtGame++;

          if (($scope.matches[match].match.scoreA === $scope.matches[match].prediction[player].teamA) &&
                 ($scope.matches[match].match.scoreB === $scope.matches[match].prediction[player].teamB)) {
            // after here everything goes as planned

            // spot on prediction
            $scope.players[player].PTS += 3;
            $scope.players[player].spotOn++;
            $scope.matches[match].pts[player] = 3;
          } else if (($scope.matches[match].match.scoreA > $scope.matches[match].match.scoreB) ===
                     ($scope.matches[match].prediction[player].teamA > $scope.matches[match].prediction[player].teamB) &&
                     ($scope.matches[match].match.scoreA < $scope.matches[match].match.scoreB) ===
                     ($scope.matches[match].prediction[player].teamA < $scope.matches[match].prediction[player].teamB)) {
            // side prediction

            // goal difference
            if (($scope.matches[match].match.scoreA - $scope.matches[match].match.scoreB) ===
                ($scope.matches[match].prediction[player].teamA - $scope.matches[match].prediction[player].teamB)) {
              $scope.players[player].PTS += 2;
              $scope.players[player].gd++;
              $scope.matches[match].pts[player] = 2;
            } else {
              $scope.players[player].PTS += 1;
              $scope.players[player].right++;
              $scope.matches[match].pts[player] = 1;
            }
          } else {
            // wrong prediction
            $scope.players[player].PTS -= 1;
            $scope.players[player].wrong++;
            $scope.matches[match].pts[player] = -1;
          }
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
    $scope.players[player].success = ptsWithoutDeduction/($scope.players[player].threePtGame*3 + $scope.players[player].fourPtGame*4) * 100;
    $scope.players[player].success = $scope.players[player].success.toFixed(2)+'%';

    $scope.playersList.push({name: player, stat: $scope.players[player]});
  };
}]);

app.service('sortService', function() {
  this.sortOrder = ['-stat.PTS','-stat.boom','-stat.rgd','-stat.spotOn','-stat.gd','-stat.right','stat.wrong','stat.forfeit',];
  this.secondarySort = 'stat.success';
})