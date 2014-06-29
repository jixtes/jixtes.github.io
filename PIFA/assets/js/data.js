var PIFA = {
  players: {
    eyassu: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      bool: 0,
      PTS: 0
    },
    joey: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      bool: 0,
      PTS: 0
    },
    kaleab: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      bool: 0,
      PTS: 0
    },
    moe: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      bool: 0,
      PTS: 0
    },
    og: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      bool: 0,
      PTS: 0
    },
    yoseph: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      bool: 0,
      PTS: 0
    },
    bini: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      bool: 0,
      PTS: 0
    }
  },


  matches: [
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
        // even though i earned this prediction am letting it go
        // #presidentOne
        //moe: {teamA: 0, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'SWI',
        scoreA: 2,
        teamB: 'ECU',
        scoreB: 1
      },
      prediction: {
        joey: {teamA: 1, teamB: 3},
        moe: {teamA: 0, teamB: 2},
        eyassu: {teamA: 1, teamB: 1},
        kaleab: {teamA: 2, teamB: 0},
        og: {teamA: 5, teamB: 0},
        bini: {teamA: 5, teamB: 0},
        yoseph: {teamA: 5, teamB: 0}
      }
    },

    {
      match: {
        teamA: 'FRA',
        scoreA: 3,
        teamB: 'HON',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 1, teamB: 0},
        moe: {teamA: 3, teamB: 0},
        eyassu: {teamA: 2, teamB: 1},
        kaleab: {teamA: 2, teamB: 1},
        yoseph: {teamA: 5, teamB: 0},
        og: {teamA: 5, teamB: 0},
        bini: {teamA: 5, teamB: 0}
      }
    },

    {
      match: {
        teamA: 'ARG',
        scoreA: 2,
        teamB: 'BOS',
        scoreB: 1
      },
      prediction: {
        joey: {teamA: 4, teamB: 2},
        moe: {teamA: 4, teamB: 1},
        eyassu: {teamA: 3, teamB: 1},
        kaleab: {teamA: 2, teamB: 0},
        yoseph: {teamA: 5, teamB: 0},
        og: {teamA: 5, teamB: 0},
        bini: {teamA: 5, teamB: 0}
      }
    },

    {
      match: {
        teamA: 'GER',
        scoreA: 4,
        teamB: 'POR',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 3, teamB: 1},
        moe: {teamA: 2, teamB: 1},
        eyassu: {teamA: 1, teamB: 0},
        yoseph: {teamA: 2, teamB: 2},
        bini: {teamA: 0, teamB: 0},
        og: {teamA: 0, teamB: 0},
        kaleab: {teamA: 0, teamB: 0}
      }
    },

    {
      match: {
        teamA: 'IRA',
        scoreA: 0,
        teamB: 'NIG',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 1, teamB: 1},
        moe: {teamA: 1, teamB: 2},
        eyassu: {teamA: 2, teamB: 2},
        yoseph: {teamA: 1, teamB: 2},
        kaleab: {teamA: 0, teamB: 0},
        og: {teamA: 0, teamB: 5},
        bini: {teamA: 0, teamB: 5}
      }
    },

    {
      match: {
        teamA: 'GHA',
        scoreA: 1,
        teamB: 'USA',
        scoreB: 2
      },
      prediction: {
        joey: {teamA: 2, teamB: 2},
        moe: {teamA: 2, teamB: 1},
        eyassu: {teamA: 1, teamB: 1},
        yoseph: {teamA: 1, teamB: 1},
        kaleab: {teamA: 1, teamB: 1},
        bini: {teamA: 2, teamB: 1},
        og: {teamA: 2, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'BEL',
        scoreA: 2,
        teamB: 'ALG',
        scoreB: 1
      },
      prediction: {
        moe: {teamA: 3, teamB: 1},
        joey: {teamA: 3, teamB: 0},
        yoseph: {teamA: 2, teamB: 0},
        kaleab: {teamA: 2, teamB: 0},
        eyassu: {teamA: 2, teamB: 0},
        bini: {teamA: 1, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'BRA',
        scoreA: 0,
        teamB: 'MEX',
        scoreB: 0
      },
      prediction: {
        moe: {teamA: 3, teamB: 0},
        joey: {teamA: 3, teamB: 1},
        yoseph: {teamA: 2, teamB: 1},
        eyassu: {teamA: 2, teamB: 1},
        kaleab: {teamA: 4, teamB: 0},
        og: {teamA: 1, teamB: 1},
        bini: {teamA: 1, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'RUS',
        scoreA: 1,
        teamB: 'KOR',
        scoreB: 1
      },
      prediction: {
        moe: {teamA: 3, teamB: 0},
        joey: {teamA: 2, teamB: 0},
        yoseph: {teamA: 1, teamB: 1},
        eyassu: {teamA: 2, teamB: 0},
        kaleab: {teamA: 2, teamB: 1},
        og: {teamA: 1, teamB: 1},
        bini: {teamA: 2, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'AUS',
        scoreA: 2,
        teamB: 'NET',
        scoreB: 3
      },
      prediction: {
        joey: {teamA: 1, teamB: 3},
        moe: {teamA: 0, teamB: 5},
        eyassu: {teamA: 0, teamB: 3},
        og: {teamA: 1, teamB: 2},
        kaleab: {teamA: 0, teamB: 2},
        yoseph: {teamA: 0, teamB: 3},
        bini: {teamA: 0, teamB: 3}
      }
    },

    {
      match: {
        teamA: 'SPA',
        scoreA: 0,
        teamB: 'CHI',
        scoreB: 2
      },
      prediction: {
        joey: {teamA: 2, teamB: 1},
        moe: {teamA: 2, teamB: 1},
        eyassu: {teamA: 3, teamB: 1},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 1, teamB: 0},
        yoseph: {teamA: 2, teamB: 1},
        bini: {teamA: 2, teamB: 0}
      }
    },

    {
      match: {
        teamA: 'CAM',
        scoreA: 0,
        teamB: 'CRO',
        scoreB: 4
      },
      prediction: {
        joey: {teamA: 0, teamB: 2},
        moe: {teamA: 0, teamB: 1},
        eyassu: {teamA: 1, teamB: 2},
        og: {teamA: 1, teamB: 0},
        kaleab: {teamA: 0, teamB: 2},
        yoseph: {teamA: 0, teamB: 2},
        bini: {teamA: 1, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'COL',
        scoreA: 2,
        teamB: 'COT',
        scoreB: 1
      },
      prediction: {
        joey: {teamA: 1, teamB: 1},
        moe: {teamA: 3, teamB: 1},
        eyassu: {teamA: 2, teamB: 1},
        og: {teamA: 1, teamB: 2},
        kaleab: {teamA: 1, teamB: 1},
        yoseph: {teamA: 2, teamB: 2},
        bini: {teamA: 1, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'URU',
        scoreA: 2,
        teamB: 'ENG',
        scoreB: 1
      },
      prediction: {
        joey: {teamA: 0, teamB: 1},
        moe: {teamA: 2, teamB: 1},
        eyassu: {teamA: 1, teamB: 2},
        og: {teamA: 1, teamB: 2},
        kaleab: {teamA: 1, teamB: 1},
        yoseph: {teamA: 1, teamB: 2},
        bini: {teamA: 1, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'JAP',
        scoreA: 0,
        teamB: 'GRE',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 1, teamB: 0},
        moe: {teamA: 0, teamB: 2},
        eyassu: {teamA: 2, teamB: 1},
        og: {teamA: 1, teamB: 1},
        kaleab: {teamA: 0, teamB: 1},
        yoseph: {teamA: 1, teamB: 1},
        bini: {teamA: 10, teamB: 10}
      }
    },

    {
      match: {
        teamA: 'ITA',
        scoreA: 0,
        teamB: 'COS',
        scoreB: 1
      },
      prediction: {
        joey: {teamA: 1, teamB: 1},
        moe: {teamA: 2, teamB: 1},
        eyassu: {teamA: 2, teamB: 0},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 2, teamB: 0},
        yoseph: {teamA: 2, teamB: 0}
      }
    },

    {
      match: {
        teamA: 'SWI',
        scoreA: 2,
        teamB: 'FRA',
        scoreB: 5
      },
      prediction: {
        joey: {teamA: 1, teamB: 2},
        moe: {teamA: 2, teamB: 1},
        eyassu: {teamA: 1, teamB: 1},
        og: {teamA: 1, teamB: 2},
        kaleab: {teamA: 0, teamB: 0},
        yoseph: {teamA: 1, teamB: 1},
        bini: {teamA: 1, teamB: 3}
      }
    },

    {
      match: {
        teamA: 'HON',
        scoreA: 1,
        teamB: 'ECU',
        scoreB: 2
      },
      prediction: {
        joey: {teamA: 0, teamB: 0},
        moe: {teamA: 1, teamB: 2},
        eyassu: {teamA: 0, teamB: 0},
        og: {teamA: 1, teamB: 1},
        kaleab: {teamA: 0, teamB: 2},
        yoseph: {teamA: 1, teamB: 1},
        bini: {teamA: 0, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'ARG',
        scoreA: 1,
        teamB: 'IRA',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 3, teamB: 0},
        moe: {teamA: 4, teamB: 0},
        eyassu: {teamA: 4, teamB: 0},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 2, teamB: 0},
        yoseph: {teamA: 3, teamB: 0},
        bini: {teamA: 4, teamB: 0}
      }
    },

    {
      match: {
        teamA: 'GER',
        scoreA: 2,
        teamB: 'GHA',
        scoreB: 2
      },
      prediction: {
        joey: {teamA: 2, teamB: 0},
        moe: {teamA: 3, teamB: 0},
        eyassu: {teamA: 3, teamB: 1},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 1, teamB: 0},
        yoseph: {teamA: 3, teamB: 0},
        bini: {teamA: 4, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'NIG',
        scoreA: 1,
        teamB: 'BOS',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 0, teamB: 2},
        moe: {teamA: 1, teamB: 2},
        eyassu: {teamA: 1, teamB: 2},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 0, teamB: 0},
        yoseph: {teamA: 1, teamB: 2},
        bini: {teamA: 1, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'BEL',
        scoreA: 1,
        teamB: 'RUS',
        scoreB: 0
      },
      prediction: {
        joey: {teamA: 1, teamB: 1},
        moe: {teamA: 2, teamB: 0},
        eyassu: {teamA: 1, teamB: 2},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 3, teamB: 1},
        yoseph: {teamA: 2, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'KOR',
        scoreA: 2,
        teamB: 'ALG',
        scoreB: 4
      },
      prediction: {
        joey: {teamA: 0, teamB: 0},
        moe: {teamA: 1, teamB: 2},
        eyassu: {teamA: 2, teamB: 1},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 2, teamB: 1},
        yoseph: {teamA: 1, teamB: 1},
        bini: {teamA: 1, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'USA',
        scoreA: 2,
        teamB: 'POR',
        scoreB: 2
      },
      prediction: {
        joey: {teamA: 1, teamB: 2},
        moe: {teamA: 1, teamB: 1},
        eyassu: {teamA: 1, teamB: 3},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 1, teamB: 2},
        yoseph: {teamA: 0, teamB: 1},
        bini: {teamA: 2, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'NET',
        scoreA: 2,
        teamB: 'CHI',
        scoreB: 0
      },
      prediction: {
        moe: {teamA: 0, teamB: 2},
        eyassu: {teamA: 2, teamB: 1},
        bini: {teamA: 1, teamB: 0},
        joey: {teamA: 1, teamB: 2},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 1, teamB: 1},
        yoseph: {teamA: 3, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'AUS',
        scoreA: 0,
        teamB: 'SPA',
        scoreB: 3
      },
      prediction: {
        moe: {teamA: 1, teamB: 3},
        eyassu: {teamA: 1, teamB: 3},
        bini: {teamA: 0, teamB: 3},
        joey: {teamA: 1, teamB: 2},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 0, teamB: 2},
        yoseph: {teamA: 0, teamB: 4}
      }
    },

    {
      match: {
        teamA: 'CAM',
        scoreA: 1,
        teamB: 'BRA',
        scoreB: 4
      },
      prediction: {
        moe: {teamA: 0, teamB: 4},
        eyassu: {teamA: 0, teamB: 3},
        bini: {teamA: 0, teamB: 4},
        joey: {teamA: 0, teamB: 2},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 0, teamB: 3},
        yoseph: {teamA: 0, teamB: 3}
      }
    },

    {
      match: {
        teamA: 'CRO',
        scoreA: 1,
        teamB: 'MEX',
        scoreB: 3
      },
      prediction: {
        moe: {teamA: 0, teamB: 0},
        eyassu: {teamA: 1, teamB: 1},
        bini: {teamA: 1, teamB: 2},
        joey: {teamA: 1, teamB: 1},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 2, teamB: 1},
        yoseph: {teamA: 1, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'COS',
        scoreA: 0,
        teamB: 'ENG',
        scoreB: 0
      },
      prediction: {
        eyassu: {teamA: 0, teamB: 2},
        bini: {teamA: 1, teamB: 2},
        joey: {teamA: 0, teamB: 1},
        moe: {teamA: 2, teamB: 1},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 1, teamB: 2},
        yoseph: {teamA: 0, teamB: 3}
      }
    },

    {
      match: {
        teamA: 'ITA',
        scoreA: 0,
        teamB: 'URU',
        scoreB: 1
      },
      prediction: {
        eyassu: {teamA: 1, teamB: 1},
        bini: {teamA: 1, teamB: 1},
        joey: {teamA: 1, teamB: 2},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 0, teamB: 1},
        yoseph: {teamA: 1, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'JAP',
        scoreA: 1,
        teamB: 'COL',
        scoreB: 4
      },
      prediction: {
        moe: {teamA: 0, teamB: 3},
        eyassu: {teamA: 1, teamB: 2},
        bini: {teamA: 1, teamB: 3},
        joey: {teamA: 1, teamB: 3},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 0, teamB: 3},
        yoseph: {teamA: 2, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'GRE',
        scoreA: 2,
        teamB: 'COT',
        scoreB: 1
      },
      prediction: {
        moe: {teamA: 1, teamB: 1},
        eyassu: {teamA: 1, teamB: 2},
        bini: {teamA: 2, teamB: 2},
        joey: {teamA: 1, teamB: 1},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 0, teamB: 1},
        yoseph: {teamA: 1, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'NIG',
        scoreA: 2,
        teamB: 'ARG',
        scoreB: 3
      },
      prediction: {
        moe: {teamA: 0, teamB: 2},
        eyassu: {teamA: 0, teamB: 1},
        bini: {teamA: 0, teamB: 2},
        joey: {teamA: 0, teamB: 1},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 0, teamB: 3},
        yoseph: {teamA: 1, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'BOS',
        scoreA: 3,
        teamB: 'IRA',
        scoreB: 1
      },
      prediction: {
        moe: {teamA: 0, teamB: 0},
        eyassu: {teamA: 1, teamB: 0},
        bini: {teamA: 1, teamB: 1},
        joey: {teamA: 1, teamB: 0},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 0, teamB: 0},
        yoseph: {teamA: 1, teamB: 0}
      }
    },

    {
      match: {
        teamA: 'HON',
        scoreA: 0,
        teamB: 'SWI',
        scoreB: 3
      },
      prediction: {
        moe: {teamA: 0, teamB: 2},
        eyassu: {teamA: 1, teamB: 3},
        bini: {teamA: 1, teamB: 2},
        joey: {teamA: 0, teamB: 1},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 0, teamB: 2},
        yoseph: {teamA: 0, teamB: 1}
      }
    },

    {
      match: {
        teamA: 'ECU',
        scoreA: 0,
        teamB: 'FRA',
        scoreB: 0
      },
      prediction: {
        moe: {teamA: 1, teamB: 3},
        eyassu: {teamA: 1, teamB: 3},
        bini: {teamA: 0, teamB: 2},
        joey: {teamA: 0, teamB: 2},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 1, teamB: 2},
        yoseph: {teamA: 0, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'POR',
        scoreA: 2,
        teamB: 'GHA',
        scoreB: 1
      },
      prediction: {
        moe: {teamA: 2, teamB: 3},
        eyassu: {teamA: 2, teamB: 1},
        bini: {teamA: 2, teamB: 3},
        joey: {teamA: 1, teamB: 0},
        og: {teamA: 2, teamB: 0},
        kaleab: {teamA: 1, teamB: 0},
        yoseph: {teamA: 2, teamB: 2}
      }
    },

    {
      match: {
        teamA: 'USA',
        scoreA: 0,
        teamB: 'GER',
        scoreB: 1
      },
      prediction: {
        moe: {teamA: 1, teamB: 3},
        eyassu: {teamA: 1, teamB: 3},
        bini: {teamA: 1, teamB: 3},
        joey: {teamA: 1, teamB: 2},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 0, teamB: 2},
        yoseph: {teamA: 1, teamB: 3}
      }
    },

    {
      match: {
        teamA: 'KOR',
        scoreA: 0,
        teamB: 'BEL',
        scoreB: 1
      },
      prediction: {
        moe: {teamA: 0, teamB: 3},
        eyassu: {teamA: 0, teamB: 3},
        bini: {teamA: 0, teamB: 4},
        joey: {teamA: 0, teamB: 2},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 0, teamB: 2},
        yoseph: {teamA: 1, teamB: 3}
      }
    },

    {
      match: {
        teamA: 'ALG',
        scoreA: 1,
        teamB: 'RUS',
        scoreB: 1
      },
      prediction: {
        moe: {teamA: 2, teamB: 1},
        eyassu: {teamA: 1, teamB: 1},
        bini: {teamA: 1, teamB: 2},
        joey: {teamA: 1, teamB: 1},
        og: {teamA: 0, teamB: 2},
        kaleab: {teamA: 0, teamB: 0},
        yoseph: {teamA: 1, teamB: 2}
      }
    },

    {
      round: true,
      match: {
        normal: {
          teamA: 'A',
          scoreA: 3,
          teamB: 'B',
          scoreB: 2
        },
        extraTime: {
          scoreA: 2,
          scoreB: 1
        },
        pk: {
          scoreA: 3,
          scoreB: 0
        }
      },
      prediction: {
        moe: {
          normal: {
            teamA: 0,
            teamB: 2
          },
          extraTime: {
            teamA: 5,
            teamB: 4
          },
          pk: {
            teamA: 4,
            teamB: 5
          }
        }
      },
    }
  ],



  predictions: [
  ]
};
