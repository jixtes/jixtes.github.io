var PIFA = {
  players: {
    eyassu: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      PTS: 0
    },
    joey: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      PTS: 0
    },
    kaleb: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      PTS: 0
    },
    moe: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      PTS: 0
    },
    og: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
      PTS: 0
    },
    yoseph: {
      spotOn: 0,
      gd: 0,
      right: 0,
      wrong: 0,
      forfeit: 0,
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
        moe: {teamA: 0, teamB: 2}
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
        kaleb: {teamA: 2, teamB: 0},
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
        kaleb: {teamA: 2, teamB: 1},
        yoseph: {teamA: 5, teamB: 0}
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
        kaleb: {teamA: 2, teamB: 0},
        yoseph: {teamA: 5, teamB: 0}
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
        yoseph: {teamA: 2, teamB: 2}
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
        kaleb: {teamA: 0, teamB: 0}
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
        kaleb: {teamA: 1, teamB: 1}
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
        kaleb: {teamA: 2, teamB: 0},
        eyassu: {teamA: 2, teamB: 0},
        og: {teamA: 1, teamB: 1}
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
        kaleb: {teamA: 4, teamB: 0},
        og: {teamA: 1, teamB: 1}
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
        kaleb: {teamA: 2, teamB: 1},
        og: {teamA: 1, teamB: 1}
      }
    }
  ],



  predictions: [
    {
      match: {
        teamA: 'AUS',
        scoreA: 0,
        teamB: 'NET',
        scoreB: 0
      },
      prediction: {
        moe: {teamA: 0, teamB: 5}
        /*
        joey: {teamA: 3, teamB: 0},
        yoseph: {teamA: 2, teamB: 0},
        kaleb: {teamA: 2, teamB: 0},
        eyassu: {teamA: 2, teamB: 0}
        */
      }
    },

    {
      match: {
        teamA: 'SPA',
        scoreA: 0,
        teamB: 'CHI',
        scoreB: 0
      },
      prediction: {
        moe: {teamA: 2, teamB: 1}
        /*
        joey: {teamA: 3, teamB: 1},
        yoseph: {teamA: 2, teamB: 1},
        eyassu: {teamA: 2, teamB: 1},
        kaleb: {teamA: 4, teamB: 0}
        */
      }
    },

    {
      match: {
        teamA: 'CAM',
        scoreA: 0,
        teamB: 'CRO',
        scoreB: 0
      },
      prediction: {
        moe: {teamA: 0, teamB: 1}
        /*
        joey: {teamA: 2, teamB: 0},
        yoseph: {teamA: 1, teamB: 1},
        eyassu: {teamA: 2, teamB: 0},
        kaleb: {teamA: 2, teamB: 1}
        */
      }
    }
  ]
};
