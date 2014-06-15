var app = angular.module('PIFA', []);

app.controller('PIFACtrl', ['$scope', function ($scope) {
  $scope.players = {
    eyassu: {
      spotOn: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      PTS: 0
    },
    joey: {
      spotOn: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      PTS: 0
    },
    kaleb: {
      spotOn: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      PTS: 0
    },
    moe: {
      spotOn: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      PTS: 0
    }
  };

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
        $scope.players[player].PTS -= 2;
        $scope.players[player].forfeit++;
        $scope.matches[match].pts[player] = -2;
      }

      // spot on prediction
      else if (($scope.matches[match].match.scoreA === $scope.matches[match].prediction[player].teamA) && ($scope.matches[match].match.scoreB === $scope.matches[match].prediction[player].teamB)) {
        $scope.players[player].PTS += 3;
        $scope.players[player].spotOn++;
        $scope.matches[match].pts[player] = 3;
      }

      // side prediction
      else if (($scope.matches[match].match.scoreA > $scope.matches[match].match.scoreB) === ($scope.matches[match].prediction[player].teamA > $scope.matches[match].prediction[player].teamB)) {
        $scope.players[player].PTS += 1;
        $scope.players[player].right++;
        $scope.matches[match].pts[player] = 1;
      }

      // wrong prediction
      else {
        $scope.players[player].PTS -= 1;
        $scope.players[player].wrong++;
        $scope.matches[match].pts[player] = -1;
      }
    }
  }

  // calculating ranking...
  // it'll be `easier` to do it this way - I've don't deserve to use Angular
  // forgiveness, please
  $scope.playersList = [];
  for (player in $scope.players) {
    $scope.playersList.push({name: player, stat: $scope.players[player]});
  };

  $scope.nextPredictions = [
    {
      match: {
        teamA: 'SWI',
        scoreA: 0,
        teamB: 'ECU',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 1, teamB: 3},
        moe: {teamA: 0, teamB: 2},
        eyassu: {teamA: 1, teamB: 1},
        kaleb: {teamA: 2, teamB: 0},
      }
    },

    {
      match: {
        teamA: 'FRA',
        scoreA: 0,
        teamB: 'HON',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 1, teamB: 0},
        moe: {teamA: 3, teamB: 0},
        eyassu: {teamA: 2, teamB: 1},
        kaleb: {teamA: 2, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'ARG',
        scoreA: 0,
        teamB: 'BOS',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 4, teamB: 2},
        moe: {teamA: 4, teamB: 1},
        eyassu: {teamA: 3, teamB: 1},
        kaleb: {teamA: 2, teamB: 0}
      }
    }
  ];

}]);
