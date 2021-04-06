import { useEffect, useState } from 'react'

import { TOP_SCORERS } from "../../topScorers.js";
import { ALL_LEAGUES_2020 } from "../../allLeagues2020";
import { Pie, Line, Bar } from "react-chartjs-2";
import { PieChart } from '../Charts/index.js';
import Dropdown from "../Dropdown";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';


const Container = styled.div`
    display: flex;/* 
    justify-content: center;
    flex-direction: column;
    width: 80%;
    align-items: center;
    background-color: aliceblue; */
    /* background-color: aliceblue; */
    /* flex-direction: column; */
`

const LeftSection = styled.div`
    display: flex;
    background-color: whitesmoke;
    flex: 1;
`
const RightSection = styled.div`
    display: flex;
    /* background-color: aqua; */
    flex: 2;
    flex-direction: column;
    width: 500px;
    align-items: center;

    .league-dropdown{
    }

    border-right: 100px;
`

const StyledPlayerList = styled.div`
    /* display: flex;
    flex-direction: row; */
    list-style-type: none;


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
    }

    th{
      background-color: rgb(153, 255, 153,0.2) ;
      text-align: center;
    }
    td{
        text-align: left;
        border: 1px solid #ddd;
        padding: 4px;
        background-color:cornsilk;
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

    useEffect(() => {
        console.log(TOP_SCORERS)


        if (TOP_SCORERS.length !== 0) {

            const players_arr = TOP_SCORERS.map((item) => item.player.name);
            const goals_arr = TOP_SCORERS.map((item) => item.statistics[0].goals.total);
            const shots_arr = TOP_SCORERS.map((item) => item.statistics[0].shots.total);
            const img_arr = TOP_SCORERS.map((item) => item.player.photo);
            const red_card = TOP_SCORERS.map((item) => item.statistics[0].cards.red);
            const yellow_card = TOP_SCORERS.map((item) => item.statistics[0].cards.yellow);
            const yellow_red_card = TOP_SCORERS.map((item) => item.statistics[0].cards.yellowred);

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

    }, []);


    return (
        <Container>
            {/* <h1>Top scoreres</h1> */}
            {/* <Dropdown placeholder={'Choose your favorite team'} dataSet={team_array} dropdownId="TEAMS" uid={props.user.uid} favorite={fav_team} /> */}
            <LeftSection>
                {/* <h1>This is left</h1> */}
                <Top20List />

            </LeftSection>

            <RightSection>
                <Dropdown placeholder={'Choose a league'} dataSet={leagues_arr} className="league-dropdown" />
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

const Top20List = () => {
    return (
        <StyledPlayerList>
            <table>

                <tr>
                    <th>Rank</th>
                    {/* <th>Name</th>
                    <th>Player</th>
                    <th>Team name</th>
                    <th>Team logo</th>
                    <th>Position</th> */}
                </tr>
                {TOP_SCORERS.map((item, index) => (



                    <tr>
                        <li>
                            <td>{index + 1}</td>
                            <td>{item.player.name}</td>
                            <td><img src={item.player.photo} alt="player photo" /></td>
                            <td>{item.statistics[0].team.name}</td>
                            <td><img src={item.statistics[0].team.logo} alt="team logo" /></td>
                            <td>{item.statistics[0].games.position}</td>
                        </li>
                    </tr>



                ))}
            </table>
        </StyledPlayerList>
    );
};

/*  TOP_SCORERS.map((item) => item.player.name) */