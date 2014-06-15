var app = angular.module('PIFA', []);

app.controller('PIFACtrl', ['$scope', function ($scope) {
  $scope.players = {
    eyassu: 0,
    joey: 0,
    kaleb: 0,
    moe: 0
  }

  $scope.matches = [
    {
      match: {
        teamA: 'BRA',
        scoreA: 3,
        teamB: 'CRO',
        scoreB: 1
      },
      prediction: {}
    },

    {
      match: {
        teamA: 'MEX',
        scoreA: 1,
        teamB: 'CAM',
        scoreB: 0
      },
      prediction: {}
    },

    {
      match: {
        teamA: 'SPA',
        scoreA: 1,
        teamB: 'NET',
        scoreB: 5
      },
      prediction: {}
    },

    {
      match: {
        teamA: 'CHI',
        scoreA: 3,
        teamB: 'AUS',
        scoreB: 1
      },
      prediction: {}
    },

    {
      match: {
        teamA: 'COL',
        scoreA: 3,
        teamB: 'GRE',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 1, teamB: 0},
        moe: {teamA: 1, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'URU',
        scoreA: 1,
        teamB: 'COS',
        scoreB: 3
      },
      prediction: {
        eyassu: {teamA: 3, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'ENG',
        scoreA: 1,
        teamB: 'ITA',
        scoreB: 2
      },
      prediction: {
        joey: {teamA: 1, teamB: 2},
        eyassu: {teamA: 2, teamB: 1},
        moe: {teamA: 4, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'COT',
        scoreA: 2,
        teamB: 'JAP',
        scoreB: 1
      },
      prediction: {
        moe: {teamA: 0, teamB: 2}
      }
    }
  ];

  // this is where the `magic` happens
  for (match in $scope.matches) {
    $scope.matches[match].pts = {};

    for(player in $scope.players) {
      // forfeit
      if ($scope.matches[match].prediction.hasOwnProperty(player) === false) {
        $scope.matches[match].prediction[player] = {};
        $scope.matches[match].prediction[player].teamA = 'X';
        $scope.matches[match].prediction[player].teamB = 'X';
        $scope.players[player] -= 2;
        $scope.matches[match].pts[player] = -2;
      }

      // spot on prediction
      else if (($scope.matches[match].match.scoreA === $scope.matches[match].prediction[player].teamA) && ($scope.matches[match].match.scoreB === $scope.matches[match].prediction[player].teamB)) {
        $scope.players[player] += 3;
        $scope.matches[match].pts[player] = 3;
      }

      // side prediction
      else if (($scope.matches[match].match.scoreA > $scope.matches[match].match.scoreB) === ($scope.matches[match].prediction[player].teamA > $scope.matches[match].prediction[player].teamB)) {
        $scope.players[player] += 1;
        $scope.matches[match].pts[player] = 1;
      }

      // wrong prediction
      else {
        $scope.players[player] -= 1;
        $scope.matches[match].pts[player] = -1;
      }
    }
  }
}]);
