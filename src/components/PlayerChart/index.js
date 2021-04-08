import { useState, useEffect } from "react";

function PlayerChart() {


    useEffect(() => {

        //Player squad by team
        /* fetch("https://api-football-v1.p.rapidapi.com/v2/players/squad/61/2018-2019", {
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


        /* "https://api-football-v1.p.rapidapi.com/v2/leagues" */
        /* https://api.football-data.org/v2/competitions/2001/matches */

        /* fetch("https://api.football-data.org/v2/competitions/2001/matches", {
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



        /* fetch("https://api-football-v1.p.rapidapi.com/v3/teams?id=33", {
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
            });
 */
        //Top scorers

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

        /* fetch("https://api-football-v1.p.rapidapi.com/v3/players?season=2020", {
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
        /* fetch("https://api-football-v1.p.rapidapi.com/v2/leagues/type/league", {
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
            });
 */


        //ALL THE LEAGUES
        /* fetch("https://api-football-v1.p.rapidapi.com/v3/leagues", {
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


        //ALL THE SEASONS
        /* fetch("https://api-football-v1.p.rapidapi.com/v3/leagues/seasons", {
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

        //ALL THE PLAYERS
        /* fetch("https://api-football-v1.p.rapidapi.com/v3/players?league=4&season=2020", {
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



        //fetch top scorers for League Id = 39   , Season 2020

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




    }, []);

    return (
        <>
            <h1>Player chart</h1>
        </>
    )
}

export default PlayerChart;