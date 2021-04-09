import { useEffect, useState } from 'react'
import { TOP_SCORERS } from "../../top20Scorers.js";
import { ALL_LEAGUES_2020 } from "../../allLeagues2020";
import { Bar } from "react-chartjs-2";
import Dropdown from "../Dropdown";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
`

const LeftSection = styled.div`
    display: flex;
    flex: 1;
    margin: 0 50px;
`
const RightSection = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    width: 500px;
    align-items: center;
    margin: 0 100px;
`

const DropdownContainer = styled.div`
    width: 500px;
    margin-bottom: 50px;
`


const StyledPlayerList = styled.div`


    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        transition: 1s;
    }
    img:hover{
        width: 100px;
        height: 100px;
        transition: 1s;
    }

    table{
        border-collapse: collapse;
        width: 100%;  
        table-layout: fixed;
        font-size: smaller;
    }

    th{
      background-color: rgb(153, 255, 153,0.2) ;
      text-align: center;
      border: 1px solid #ddd;
    }
    td{
        text-align: center;
        border: 1px solid #ddd;
        padding: 4px;
    }

`

function Top20Scorers() {

    const [player_name_arr, setPlayersArr] = useState([]);
    const [goals_arr, setGoalsArr] = useState([])
    const [shots_arr, setShotsArr] = useState([])
    const [img_arr, setImgArr] = useState([])
    const [leagues_arr, setLeaguesArr] = useState([])

    const [red_card, setRedCard] = useState([])
    const [yellow_card, setYellowCard] = useState([])
    const [yellow_red_card, setRedYellowCard] = useState([])

    const [leagueId, setLeagueId] = useState([39]);  //Set default id to 39 (Premier League)
    const [topScorersArr, setTopScorersArr] = useState([]);

    const eventhandler = (selectedLeague) => {
        console.log(selectedLeague.value)
        if (!!selectedLeague) {
            setLeagueId(selectedLeague.value)
        }
    }





    useEffect(() => {




        /* console.log(TOP_SCORERS) */
        //Ex. leagues that have Top 20 scoreres
        //UEFA Europa League  : 3
        console.log(leagueId)
        console.log("Inside useeffect")
        //Fetch top 20 players from API when user select a league from dropdown
        if (leagueId && leagueId !== 39) {   //Check leagueId has a value and it is not the default value
            console.log("Inside fetch")

            console.log(leagueId)
            fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${leagueId}&season=2020`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "d9ad56e7d3mshf09eb906ca38e7ap162eacjsne5fdd08c2007",
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.response.length > 0) {
                        setTopScorersArr(data.response);  //Store fetched data in the state
                        console.log(data.response)
                    } else {
                        setTopScorersArr(TOP_SCORERS); //If a league don't have Top 20 scorers,set the top20 to default league 
                        console.log("Sorry, Not found top 20 for this league");
                    }
                })
                .catch(err => {
                    console.error(err);
                });

        }


        if (topScorersArr.length !== 0 && topScorersArr !== undefined) {

            /* console.log(topScorersArr) */

            const players_arr = topScorersArr.map((item) => item.player.name);
            const goals_arr = topScorersArr.map((item) => item.statistics[0].goals.total);
            const shots_arr = topScorersArr.map((item) => item.statistics[0].shots.total);
            const img_arr = topScorersArr.map((item) => item.player.photo);
            const red_card = topScorersArr.map((item) => item.statistics[0].cards.red);
            const yellow_card = topScorersArr.map((item) => item.statistics[0].cards.yellow);
            const yellow_red_card = topScorersArr.map((item) => item.statistics[0].cards.yellowred);

            /* console.log(TOP_SCORERS) */
            setPlayersArr(players_arr)
            setGoalsArr(goals_arr)
            setShotsArr(shots_arr)
            setImgArr(img_arr)

            setRedCard(red_card)
            setYellowCard(yellow_card)
            setRedYellowCard(yellow_red_card)
        }


        //Set data to league dropdown
        let legueArr = [];

        if (ALL_LEAGUES_2020.length > 0) {
            ALL_LEAGUES_2020.map((item) => {
                legueArr.push({
                    value: item.league.id,
                    label: item.league.name,
                }
                )
            }
            )
        } else {
            console.log("Empty")
        }
        setLeaguesArr(legueArr);

    }, [leagueId]);


    return (
        <Container>
            {/* <Dropdown placeholder={'Choose your favorite team'} dataSet={team_array} dropdownId="TEAMS" uid={props.user.uid} favorite={fav_team} /> */}
            <LeftSection>
                <Top20List topScorersArr={topScorersArr} />
            </LeftSection>

            <RightSection>
                <DropdownContainer>
                    <Dropdown placeholder={'Choose a league'} dataSet={leagues_arr} dropdownId="TOP_20" onChange={eventhandler} />
                </DropdownContainer>
                <Bar
                    data={{
                        labels: player_name_arr,
                        datasets: [
                            {
                                label: 'Total goals',
                                data: goals_arr,
                                backgroundColor: '#4AB19D',
                                borderColor: '#344E5C',
                                barThickness: 'flex',
                                borderWidth: 1,
                            },
                            {
                                label: 'Total shots',
                                data: shots_arr,
                                backgroundColor: 'rgb(179, 198, 255, 0.1)',
                                borderColor: '	rgb(179, 179, 255)',
                                barThickness: 'flex',
                                borderWidth: 1,
                            },
                            {
                                label: "Red Cards",
                                data: red_card,
                                backgroundColor: '#EE4540',
                                borderColor: 'rgb(255, 99, 132)',
                                barThickness: 'flex',
                                borderWidth: 1,
                            },
                            {
                                label: "Yellow Cards",
                                data: yellow_card,
                                backgroundColor: "#ffff00",
                                borderColor: "#EFC958",
                                barThickness: 'flex',
                                borderWidth: 1,
                            },
                            {
                                label: "Yellow Red Cards",
                                data: yellow_red_card,
                                backgroundColor: "#EFC958",
                                borderColor: "#EF3D59",
                                barThickness: 'flex',
                                borderWidth: 1,
                            }


                        ]

                    }}
                    options={{
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                stacked: true
                            }],
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                    stacked: true
                                }
                            ]
                        },



                    }}
                />
            </RightSection>

        </Container>
    )
}

export default Top20Scorers;

const Top20List = (props) => {
    return (
        <StyledPlayerList>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Team logo</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(props.topScorersArr)}
                    {/* {console.log(TOP_SCORERS)} */}

                    {/* {console.log("Inside map")} */}

                    {props.topScorersArr.map((item, index) => (

                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.player.name}</td>
                            <td><img src={item.player.photo} alt="player photo" /></td>
                            <td>{item.statistics[0].team.name}</td>
                            <td><img src={item.statistics[0].team.logo} alt="team logo" /></td>
                            <td>{item.statistics[0].games.position}</td>
                        </tr>


                    ))}
                </tbody>
            </table>
        </StyledPlayerList>
    );
};

/*  TOP_SCORERS.map((item) => item.player.name) */