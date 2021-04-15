//fetch top scorers for League Id = 39   , Season 2020
//
//Get the 20 best players for a league or cup.

/* How it is calculated:

1 : The player that has scored the higher number of goals
2 : The player that has scored the fewer number of penalties
3 : The player that has delivered the higher number of goal assists
4 : The player that scored their goals in the higher number of matches
5 : The player that played the fewer minutes
6 : The player that plays for the team placed higher on the table
7 : The player that received the fewer number of red cards
8 : The player that received the fewer number of yellow cards
Update Frequency : This endpoint is updated several times a week.

https://www.api-football.com/documentation-v3#operation/get-players

Recommended Calls : 1 call per day. */

export const TOP_SCORERS = [
  {
    player: {
      id: 184,
      name: "H. Kane",
      firstname: "Harry",
      lastname: "Kane",
      age: 28,
      birth: {
        date: "1993-07-28",
        place: "London",
        country: "England",
      },
      nationality: "England",
      height: "188 cm",
      weight: "86 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/184.png",
    },
    statistics: [
      {
        team: {
          id: 47,
          name: "Tottenham",
          logo: "https://media.api-sports.io/football/teams/47.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 27,
          lineups: 27,
          minutes: 2367,
          number: null,
          position: "Attacker",
          rating: "7.677777",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 4,
          bench: 0,
        },
        shots: {
          total: 82,
          on: 38,
        },
        goals: {
          total: 17,
          conceded: 0,
          assists: 13,
          saves: null,
        },
        passes: {
          total: 685,
          key: 40,
          accuracy: 17,
        },
        tackles: {
          total: 18,
          blocks: 8,
          interceptions: 9,
        },
        duels: {
          total: 369,
          won: 168,
        },
        dribbles: {
          attempts: 71,
          success: 37,
          past: null,
        },
        fouls: {
          drawn: 51,
          committed: 24,
        },
        cards: {
          yellow: 1,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 4,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 306,
      name: "Mohamed Salah",
      firstname: "Mohamed",
      lastname: "Salah Ghaly",
      age: 29,
      birth: {
        date: "1992-06-15",
        place: "Muḥāfaẓat al Gharbiyya",
        country: "Egypt",
      },
      nationality: "Egypt",
      height: "175 cm",
      weight: "71 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/306.png",
    },
    statistics: [
      {
        team: {
          id: 40,
          name: "Liverpool",
          logo: "https://media.api-sports.io/football/teams/40.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 28,
          lineups: 26,
          minutes: 2346,
          number: null,
          position: "Attacker",
          rating: "7.228571",
          captain: false,
        },
        substitutes: {
          in: 2,
          out: 5,
          bench: 2,
        },
        shots: {
          total: 65,
          on: 38,
        },
        goals: {
          total: 17,
          conceded: 0,
          assists: 3,
          saves: null,
        },
        passes: {
          total: 990,
          key: 39,
          accuracy: 29,
        },
        tackles: {
          total: 17,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: 245,
          won: 85,
        },
        dribbles: {
          attempts: 69,
          success: 33,
          past: null,
        },
        fouls: {
          drawn: 19,
          committed: 15,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 6,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 1485,
      name: "Bruno Fernandes",
      firstname: "Bruno Miguel",
      lastname: "Borges Fernandes",
      age: 27,
      birth: {
        date: "1994-09-08",
        place: "Maia",
        country: "Portugal",
      },
      nationality: "Portugal",
      height: "179 cm",
      weight: "80 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/1485.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 29,
          lineups: 28,
          minutes: 2471,
          number: null,
          position: "Midfielder",
          rating: "7.644827",
          captain: false,
        },
        substitutes: {
          in: 1,
          out: 10,
          bench: 1,
        },
        shots: {
          total: 59,
          on: 39,
        },
        goals: {
          total: 16,
          conceded: 0,
          assists: 10,
          saves: null,
        },
        passes: {
          total: 1683,
          key: 82,
          accuracy: 45,
        },
        tackles: {
          total: 48,
          blocks: null,
          interceptions: 22,
        },
        duels: {
          total: 292,
          won: 113,
        },
        dribbles: {
          attempts: 33,
          success: 14,
          past: null,
        },
        fouls: {
          drawn: 40,
          committed: 36,
        },
        cards: {
          yellow: 5,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 8,
          missed: 1,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 18766,
      name: "D. Calvert-Lewin",
      firstname: "Dominic",
      lastname: "Calvert-Lewin",
      age: 24,
      birth: {
        date: "1997-03-16",
        place: "Sheffield",
        country: "England",
      },
      nationality: "England",
      height: "187 cm",
      weight: "71 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/18766.png",
    },
    statistics: [
      {
        team: {
          id: 45,
          name: "Everton",
          logo: "https://media.api-sports.io/football/teams/45.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 25,
          lineups: 24,
          minutes: 2156,
          number: null,
          position: "Attacker",
          rating: "7.124000",
          captain: false,
        },
        substitutes: {
          in: 1,
          out: 6,
          bench: 1,
        },
        shots: {
          total: 54,
          on: 34,
        },
        goals: {
          total: 14,
          conceded: 0,
          assists: null,
          saves: null,
        },
        passes: {
          total: 501,
          key: 12,
          accuracy: 13,
        },
        tackles: {
          total: 12,
          blocks: 5,
          interceptions: 6,
        },
        duels: {
          total: 353,
          won: 171,
        },
        dribbles: {
          attempts: 37,
          success: 16,
          past: null,
        },
        fouls: {
          drawn: 32,
          committed: 30,
        },
        cards: {
          yellow: 3,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 19134,
      name: "P. Bamford",
      firstname: "Patrick",
      lastname: "Bamford",
      age: 28,
      birth: {
        date: "1993-09-05",
        place: "Grantham",
        country: "England",
      },
      nationality: "England",
      height: "185 cm",
      weight: "71 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/19134.png",
    },
    statistics: [
      {
        team: {
          id: 63,
          name: "Leeds",
          logo: "https://media.api-sports.io/football/teams/63.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 29,
          lineups: 29,
          minutes: 2442,
          number: null,
          position: "Attacker",
          rating: "7.031034",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 8,
          bench: 0,
        },
        shots: {
          total: 75,
          on: 37,
        },
        goals: {
          total: 14,
          conceded: 0,
          assists: 6,
          saves: null,
        },
        passes: {
          total: 399,
          key: 20,
          accuracy: 10,
        },
        tackles: {
          total: 14,
          blocks: 3,
          interceptions: 9,
        },
        duels: {
          total: 222,
          won: 86,
        },
        dribbles: {
          attempts: 31,
          success: 16,
          past: null,
        },
        fouls: {
          drawn: 21,
          committed: 28,
        },
        cards: {
          yellow: 2,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 1,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 186,
      name: "Son Heung-Min",
      firstname: "Heung-Min",
      lastname: "Son",
      age: 29,
      birth: {
        date: "1992-07-08",
        place: "Chuncheon",
        country: "Korea Republic",
      },
      nationality: "Korea Republic",
      height: "183 cm",
      weight: "78 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/186.png",
    },
    statistics: [
      {
        team: {
          id: 47,
          name: "Tottenham",
          logo: "https://media.api-sports.io/football/teams/47.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 28,
          lineups: 28,
          minutes: 2362,
          number: null,
          position: "Attacker",
          rating: "7.275000",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 12,
          bench: 0,
        },
        shots: {
          total: 41,
          on: 27,
        },
        goals: {
          total: 13,
          conceded: 0,
          assists: 9,
          saves: null,
        },
        passes: {
          total: 746,
          key: 54,
          accuracy: 22,
        },
        tackles: {
          total: 22,
          blocks: 3,
          interceptions: 12,
        },
        duels: {
          total: 265,
          won: 106,
        },
        dribbles: {
          attempts: 52,
          success: 29,
          past: null,
        },
        fouls: {
          drawn: 39,
          committed: 9,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 633,
      name: "İ. Gündoğan",
      firstname: "İlkay",
      lastname: "Gündoğan",
      age: 31,
      birth: {
        date: "1990-10-24",
        place: "Gelsenkirchen",
        country: "Germany",
      },
      nationality: "Germany",
      height: "180 cm",
      weight: "80 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/633.png",
    },
    statistics: [
      {
        team: {
          id: 50,
          name: "Manchester City",
          logo: "https://media.api-sports.io/football/teams/50.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 23,
          lineups: 20,
          minutes: 1744,
          number: null,
          position: "Midfielder",
          rating: "7.386956",
          captain: false,
        },
        substitutes: {
          in: 3,
          out: 6,
          bench: 6,
        },
        shots: {
          total: 35,
          on: 20,
        },
        goals: {
          total: 12,
          conceded: 0,
          assists: 1,
          saves: null,
        },
        passes: {
          total: 1406,
          key: 34,
          accuracy: 55,
        },
        tackles: {
          total: 19,
          blocks: 3,
          interceptions: 19,
        },
        duels: {
          total: 128,
          won: 68,
        },
        dribbles: {
          attempts: 32,
          success: 22,
          past: null,
        },
        fouls: {
          drawn: 19,
          committed: 6,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 1,
          missed: 1,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 18788,
      name: "J. Vardy",
      firstname: "Jamie",
      lastname: "Vardy",
      age: 34,
      birth: {
        date: "1987-01-11",
        place: "Sheffield",
        country: "England",
      },
      nationality: "England",
      height: "179 cm",
      weight: "74 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/18788.png",
    },
    statistics: [
      {
        team: {
          id: 46,
          name: "Leicester",
          logo: "https://media.api-sports.io/football/teams/46.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 25,
          lineups: 22,
          minutes: 2050,
          number: null,
          position: "Attacker",
          rating: "7.112000",
          captain: false,
        },
        substitutes: {
          in: 3,
          out: 5,
          bench: 3,
        },
        shots: {
          total: 51,
          on: 30,
        },
        goals: {
          total: 12,
          conceded: 0,
          assists: 7,
          saves: null,
        },
        passes: {
          total: 294,
          key: 21,
          accuracy: 7,
        },
        tackles: {
          total: 15,
          blocks: 3,
          interceptions: 4,
        },
        duels: {
          total: 174,
          won: 77,
        },
        dribbles: {
          attempts: 30,
          success: 17,
          past: null,
        },
        fouls: {
          drawn: 16,
          committed: 19,
        },
        cards: {
          yellow: 1,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 6,
          missed: 1,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 1467,
      name: "A. Lacazette",
      firstname: "Alexandre",
      lastname: "Lacazette",
      age: 30,
      birth: {
        date: "1991-05-28",
        place: "Lyon",
        country: "France",
      },
      nationality: "France",
      height: "175 cm",
      weight: "73 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/1467.png",
    },
    statistics: [
      {
        team: {
          id: 42,
          name: "Arsenal",
          logo: "https://media.api-sports.io/football/teams/42.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 25,
          lineups: 19,
          minutes: 1629,
          number: null,
          position: "Attacker",
          rating: "7.048000",
          captain: false,
        },
        substitutes: {
          in: 6,
          out: 13,
          bench: 10,
        },
        shots: {
          total: 36,
          on: 27,
        },
        goals: {
          total: 11,
          conceded: 0,
          assists: 2,
          saves: null,
        },
        passes: {
          total: 425,
          key: 21,
          accuracy: 13,
        },
        tackles: {
          total: 12,
          blocks: 1,
          interceptions: 11,
        },
        duels: {
          total: 238,
          won: 101,
        },
        dribbles: {
          attempts: 27,
          success: 19,
          past: null,
        },
        fouls: {
          drawn: 45,
          committed: 33,
        },
        cards: {
          yellow: 3,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 3,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 19366,
      name: "O. Watkins",
      firstname: "Ollie",
      lastname: "Watkins",
      age: 26,
      birth: {
        date: "1995-12-30",
        place: "Torbay",
        country: "England",
      },
      nationality: "England",
      height: "180 cm",
      weight: "70 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/19366.png",
    },
    statistics: [
      {
        team: {
          id: 66,
          name: "Aston Villa",
          logo: "https://media.api-sports.io/football/teams/66.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 28,
          lineups: 28,
          minutes: 2520,
          number: null,
          position: "Attacker",
          rating: "7.042857",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: 59,
          on: 34,
        },
        goals: {
          total: 10,
          conceded: 0,
          assists: 3,
          saves: null,
        },
        passes: {
          total: 615,
          key: 32,
          accuracy: 15,
        },
        tackles: {
          total: 25,
          blocks: 1,
          interceptions: 7,
        },
        duels: {
          total: 468,
          won: 201,
        },
        dribbles: {
          attempts: 52,
          success: 27,
          past: null,
        },
        fouls: {
          drawn: 37,
          committed: 33,
        },
        cards: {
          yellow: 1,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 1,
          missed: 1,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 2939,
      name: "C. Wilson",
      firstname: "Callum",
      lastname: "Wilson",
      age: 29,
      birth: {
        date: "1992-02-27",
        place: "Coventry",
        country: "England",
      },
      nationality: "England",
      height: "180 cm",
      weight: "66 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/2939.png",
    },
    statistics: [
      {
        team: {
          id: 34,
          name: "Newcastle",
          logo: "https://media.api-sports.io/football/teams/34.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 21,
          lineups: 21,
          minutes: 1816,
          number: null,
          position: "Attacker",
          rating: "7.028571",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 4,
          bench: 1,
        },
        shots: {
          total: 34,
          on: 16,
        },
        goals: {
          total: 10,
          conceded: 0,
          assists: 5,
          saves: null,
        },
        passes: {
          total: 305,
          key: 16,
          accuracy: 10,
        },
        tackles: {
          total: 9,
          blocks: 3,
          interceptions: 7,
        },
        duels: {
          total: 279,
          won: 107,
        },
        dribbles: {
          attempts: 38,
          success: 23,
          past: null,
        },
        fouls: {
          drawn: 37,
          committed: 31,
        },
        cards: {
          yellow: 2,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 4,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 909,
      name: "M. Rashford",
      firstname: "Marcus",
      lastname: "Rashford",
      age: 24,
      birth: {
        date: "1997-10-31",
        place: "Manchester",
        country: "England",
      },
      nationality: "England",
      height: "180 cm",
      weight: "70 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/909.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 29,
          lineups: 27,
          minutes: 2381,
          number: null,
          position: "Attacker",
          rating: "6.934482",
          captain: false,
        },
        substitutes: {
          in: 2,
          out: 7,
          bench: 2,
        },
        shots: {
          total: 48,
          on: 31,
        },
        goals: {
          total: 9,
          conceded: 0,
          assists: 7,
          saves: null,
        },
        passes: {
          total: 992,
          key: 34,
          accuracy: 28,
        },
        tackles: {
          total: 12,
          blocks: 1,
          interceptions: 8,
        },
        duels: {
          total: 287,
          won: 133,
        },
        dribbles: {
          attempts: 129,
          success: 70,
          past: null,
        },
        fouls: {
          drawn: 32,
          committed: 21,
        },
        cards: {
          yellow: 4,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 645,
      name: "R. Sterling",
      firstname: "Raheem Shaquille",
      lastname: "Sterling",
      age: 27,
      birth: {
        date: "1994-12-08",
        place: "Kingston",
        country: "Jamaica",
      },
      nationality: "England",
      height: "170 cm",
      weight: "69 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/645.png",
    },
    statistics: [
      {
        team: {
          id: 50,
          name: "Manchester City",
          logo: "https://media.api-sports.io/football/teams/50.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 25,
          lineups: 23,
          minutes: 2060,
          number: null,
          position: "Attacker",
          rating: "6.896000",
          captain: false,
        },
        substitutes: {
          in: 2,
          out: 3,
          bench: 6,
        },
        shots: {
          total: 36,
          on: 24,
        },
        goals: {
          total: 9,
          conceded: 0,
          assists: 5,
          saves: null,
        },
        passes: {
          total: 876,
          key: 33,
          accuracy: 30,
        },
        tackles: {
          total: 20,
          blocks: null,
          interceptions: 13,
        },
        duels: {
          total: 276,
          won: 119,
        },
        dribbles: {
          attempts: 102,
          success: 57,
          past: null,
        },
        fouls: {
          drawn: 33,
          committed: 25,
        },
        cards: {
          yellow: 2,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 1,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 18778,
      name: "H. Barnes",
      firstname: "Harvey Lewis",
      lastname: "Barnes",
      age: 24,
      birth: {
        date: "1997-12-09",
        place: "Burnley",
        country: "England",
      },
      nationality: "England",
      height: "174 cm",
      weight: "66 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/18778.png",
    },
    statistics: [
      {
        team: {
          id: 46,
          name: "Leicester",
          logo: "https://media.api-sports.io/football/teams/46.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 25,
          lineups: 22,
          minutes: 1949,
          number: null,
          position: "Midfielder",
          rating: "6.844000",
          captain: false,
        },
        substitutes: {
          in: 3,
          out: 7,
          bench: 4,
        },
        shots: {
          total: 40,
          on: 26,
        },
        goals: {
          total: 9,
          conceded: 0,
          assists: 4,
          saves: null,
        },
        passes: {
          total: 605,
          key: 26,
          accuracy: 18,
        },
        tackles: {
          total: 19,
          blocks: 3,
          interceptions: 8,
        },
        duels: {
          total: 261,
          won: 116,
        },
        dribbles: {
          attempts: 89,
          success: 40,
          past: null,
        },
        fouls: {
          drawn: 33,
          committed: 16,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 635,
      name: "R. Mahrez",
      firstname: "Riyad",
      lastname: "Mahrez",
      age: 30,
      birth: {
        date: "1991-02-21",
        place: "Sarcelles",
        country: "France",
      },
      nationality: "Algeria",
      height: "179 cm",
      weight: "67 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/635.png",
    },
    statistics: [
      {
        team: {
          id: 50,
          name: "Manchester City",
          logo: "https://media.api-sports.io/football/teams/50.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 23,
          lineups: 19,
          minutes: 1631,
          number: null,
          position: "Attacker",
          rating: "7.477272",
          captain: false,
        },
        substitutes: {
          in: 4,
          out: 7,
          bench: 10,
        },
        shots: {
          total: 35,
          on: 18,
        },
        goals: {
          total: 9,
          conceded: 0,
          assists: 4,
          saves: null,
        },
        passes: {
          total: 852,
          key: 40,
          accuracy: 32,
        },
        tackles: {
          total: 19,
          blocks: null,
          interceptions: 5,
        },
        duels: {
          total: 190,
          won: 95,
        },
        dribbles: {
          attempts: 74,
          success: 42,
          past: null,
        },
        fouls: {
          drawn: 22,
          committed: 11,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 1243,
      name: "T. Souček",
      firstname: "Tomáš",
      lastname: "Souček",
      age: 26,
      birth: {
        date: "1995-02-27",
        place: "Havlíčkův Brod",
        country: "Czech Republic",
      },
      nationality: "Czech Republic",
      height: "192 cm",
      weight: "86 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/1243.png",
    },
    statistics: [
      {
        team: {
          id: 48,
          name: "West Ham",
          logo: "https://media.api-sports.io/football/teams/48.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 29,
          lineups: 29,
          minutes: 2610,
          number: null,
          position: "Midfielder",
          rating: "7.165517",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: 38,
          on: 19,
        },
        goals: {
          total: 9,
          conceded: 0,
          assists: null,
          saves: null,
        },
        passes: {
          total: 1133,
          key: 12,
          accuracy: 28,
        },
        tackles: {
          total: 58,
          blocks: 13,
          interceptions: 46,
        },
        duels: {
          total: 478,
          won: 263,
        },
        dribbles: {
          attempts: 19,
          success: 10,
          past: null,
        },
        fouls: {
          drawn: 37,
          committed: 55,
        },
        cards: {
          yellow: 4,
          yellowred: 0,
          red: 1,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 3247,
      name: "W. Zaha",
      firstname: "Wilfried",
      lastname: "Zaha",
      age: 29,
      birth: {
        date: "1992-11-10",
        place: "Abidjan",
        country: "Côte d'Ivoire",
      },
      nationality: "Côte d'Ivoire",
      height: "180 cm",
      weight: "66 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/3247.png",
    },
    statistics: [
      {
        team: {
          id: 52,
          name: "Crystal Palace",
          logo: "https://media.api-sports.io/football/teams/52.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 21,
          lineups: 20,
          minutes: 1803,
          number: null,
          position: "Attacker",
          rating: "6.904761",
          captain: false,
        },
        substitutes: {
          in: 1,
          out: 2,
          bench: 1,
        },
        shots: {
          total: 31,
          on: 15,
        },
        goals: {
          total: 9,
          conceded: 0,
          assists: 2,
          saves: null,
        },
        passes: {
          total: 502,
          key: 18,
          accuracy: 18,
        },
        tackles: {
          total: 13,
          blocks: null,
          interceptions: 5,
        },
        duels: {
          total: 284,
          won: 122,
        },
        dribbles: {
          attempts: 82,
          success: 39,
          past: null,
        },
        fouls: {
          drawn: 63,
          committed: 22,
        },
        cards: {
          yellow: 4,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 2,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 1465,
      name: "P. Aubameyang",
      firstname: "Pierre-Emerick",
      lastname: "Aubameyang",
      age: 32,
      birth: {
        date: "1989-06-18",
        place: "Laval",
        country: "France",
      },
      nationality: "Gabon",
      height: "187 cm",
      weight: "80 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/1465.png",
    },
    statistics: [
      {
        team: {
          id: 42,
          name: "Arsenal",
          logo: "https://media.api-sports.io/football/teams/42.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 24,
          lineups: 21,
          minutes: 1934,
          number: null,
          position: "Attacker",
          rating: "6.925000",
          captain: false,
        },
        substitutes: {
          in: 3,
          out: 3,
          bench: 5,
        },
        shots: {
          total: 37,
          on: 21,
        },
        goals: {
          total: 9,
          conceded: 0,
          assists: 1,
          saves: null,
        },
        passes: {
          total: 520,
          key: 16,
          accuracy: 16,
        },
        tackles: {
          total: 10,
          blocks: null,
          interceptions: 5,
        },
        duels: {
          total: 173,
          won: 66,
        },
        dribbles: {
          attempts: 23,
          success: 12,
          past: null,
        },
        fouls: {
          drawn: 17,
          committed: 13,
        },
        cards: {
          yellow: 2,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 2,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 18784,
      name: "J. Maddison",
      firstname: "James",
      lastname: "Maddison",
      age: 25,
      birth: {
        date: "1996-11-23",
        place: "Coventry",
        country: "England",
      },
      nationality: "England",
      height: "175 cm",
      weight: "73 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/18784.png",
    },
    statistics: [
      {
        team: {
          id: 46,
          name: "Leicester",
          logo: "https://media.api-sports.io/football/teams/46.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 23,
          lineups: 18,
          minutes: 1630,
          number: null,
          position: "Midfielder",
          rating: "7.265217",
          captain: false,
        },
        substitutes: {
          in: 5,
          out: 8,
          bench: 5,
        },
        shots: {
          total: 36,
          on: 17,
        },
        goals: {
          total: 8,
          conceded: 0,
          assists: 5,
          saves: null,
        },
        passes: {
          total: 746,
          key: 43,
          accuracy: 26,
        },
        tackles: {
          total: 26,
          blocks: 1,
          interceptions: 7,
        },
        duels: {
          total: 192,
          won: 96,
        },
        dribbles: {
          attempts: 38,
          success: 19,
          past: null,
        },
        fouls: {
          drawn: 50,
          committed: 14,
        },
        cards: {
          yellow: 4,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 18955,
      name: "D. Ings",
      firstname: "Daniel William John",
      lastname: "Ings",
      age: 29,
      birth: {
        date: "1992-07-23",
        place: "Winchester",
        country: "England",
      },
      nationality: "England",
      height: "178 cm",
      weight: "73 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/18955.png",
    },
    statistics: [
      {
        team: {
          id: 41,
          name: "Southampton",
          logo: "https://media.api-sports.io/football/teams/41.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2020,
        },
        games: {
          appearences: 22,
          lineups: 20,
          minutes: 1691,
          number: null,
          position: "Attacker",
          rating: "6.936363",
          captain: false,
        },
        substitutes: {
          in: 2,
          out: 7,
          bench: 2,
        },
        shots: {
          total: 31,
          on: 20,
        },
        goals: {
          total: 8,
          conceded: 0,
          assists: 3,
          saves: null,
        },
        passes: {
          total: 384,
          key: 18,
          accuracy: 11,
        },
        tackles: {
          total: 21,
          blocks: 2,
          interceptions: 3,
        },
        duels: {
          total: 185,
          won: 72,
        },
        dribbles: {
          attempts: 42,
          success: 21,
          past: null,
        },
        fouls: {
          drawn: 14,
          committed: 15,
        },
        cards: {
          yellow: 1,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 2,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
];

/* fetch("https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d9ad56e7d3mshf09eb906ca38e7ap162eacjsne5fdd08c2007",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            })
            .catch(err => {
                console.error(err);
            }); */
