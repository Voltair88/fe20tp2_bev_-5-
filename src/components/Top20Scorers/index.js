import React, { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { AuthUserContext, withAuthentication } from "../Session";
import { TOP_20_CHAMPIONS_LEAGUE } from '../../UEFAChampionsLeagueTop20';
import { TOP_20_PREMIER_LEAGUE } from '../../PremierLeagueTop20';


const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};


const Container = styled.div`
    display: flex;
    /* overflow-x: hidden; */
    /* @media (max-width: 768px) {
    flex-direction: column;
  } */

  /* width: 100vw; */

  @media ${device.laptop} { 
    flex-direction: column;
  }


  background-color: whitesmoke;
`;

const LeftSection = styled.div`
    display: flex;
    /* align-items: center;
    justify-content: center; */
    flex: 1;
    /* margin: 0 50px; */
    /* width: 40vw; */
    
`
const RightSection = styled.div`
background-color: aquamarine;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 80vh;
    /* align-items: center; */
    /* align-self: center; */
    
    /* margin: 0 100px; */

    @media ${device.laptop} { 
        width: 100%;
        height: 80vh;
        
    }
    @media ${device.mobileL} { 
        width: 100%;
        height: 50vh;
    }
    @media ${device.mobileS} { 
        width: 100%;
        height: 50vh;
    }


    /* @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 414px) {
    width: 70%;
  } */

`;



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
        background-color: ${({ theme }) => theme.colors.body};
        border-collapse: collapse;
        width: 90%;  
        table-layout: fixed;
        font-size: smaller;
        color: ${({ theme }) => theme.colors.text};
        margin: 0 auto;
    }

    th{
      /* background-color: rgb(153, 255, 153,0.2) ; */
      background-color: ${({ theme }) => theme.colors.body};
      text-align: center;
      border: 0.5px solid #ddd;
    }
    td{
        text-align: center;
        border: 0.5px solid #ddd;
        padding: 3px;
        overflow: hidden; 
        text-overflow: ellipsis; 
        word-wrap: break-word;
    }
    th:nth-child(1) { 
        width: 10%; 
    }

    @media ${device.tablet} { 
        table{
            font-size: x-small; 
        }
        img{
            width:25px;
            height:25px;
        }
        img:hover{
        width: 50px;
        height: 50px;
    }
    }


`;

function Top20Scorers() {

    const user = React.useContext(AuthUserContext);

    /* const DEFAULT_LEAGUE = 39;   *///Premier League
    const PREMIER_LEAGUE_ID = 2021;   //Premier league id that admin used to set for a specific user
    const CHAMPIONS_LEAGUE_ID = 2001;   //Champions league id that admin used to set for a specific user

    const [leagueId, setLeagueId] = useState([null]);  //Set default id to 39 (Premier League)
    const [topScorersArr, setTopScorersArr] = useState([]);


    useEffect(() => {

        if (!!user) {
            setLeagueId(user.league)  //set the league id that read from the firebase db
        }

        //As our grupp 5 account has reached the maximum quota for RapidAPI, saved the fetched data in two separate .js files to avoid get blocked on this API subscription
        if (!!leagueId) {
            if (leagueId === PREMIER_LEAGUE_ID) {  //f user has the id 2021 as the league id in firebase,load the top 20 premier league data from PremierLeagueTop20.js
                setTopScorersArr(TOP_20_PREMIER_LEAGUE[0].response);
            } else if (leagueId === CHAMPIONS_LEAGUE_ID) { //if user has the id 2001 as the league id in firebase,load the top 20 champions league data from UEFAChampionsLeagueTop20.js
                setTopScorersArr(TOP_20_CHAMPIONS_LEAGUE[0].response);
            }
        }
    }, [leagueId]);


    return (
        <Container>
            <LeftSection>
                <Top20List topScorersArr={topScorersArr} />
            </LeftSection>

            <RightSection>
                <Chart topScorersArr={topScorersArr} />
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

const Chart = (props) => {

    const [player_name_arr, setPlayersArr] = useState([]);
    const [goals_arr, setGoalsArr] = useState([])
    const [shots_arr, setShotsArr] = useState([])
    const [img_arr, setImgArr] = useState([])

    const [red_card, setRedCard] = useState([])
    const [yellow_card, setYellowCard] = useState([])
    const [yellow_red_card, setRedYellowCard] = useState([])

    useEffect(() => {


        if (props.topScorersArr !== undefined && props.topScorersArr.length > 0) {

            const players_arr = props.topScorersArr.map((item) => item.player.name);
            const no_of_goals_arr = props.topScorersArr.map((item) => item.statistics[0].goals.total);
            const no_of_shots_arr = props.topScorersArr.map((item) => item.statistics[0].shots.total);
            const imges_arr = props.topScorersArr.map((item) => item.player.photo);
            const no_of_red_card = props.topScorersArr.map((item) => item.statistics[0].cards.red);
            const no_of_yellow_card = props.topScorersArr.map((item) => item.statistics[0].cards.yellow);
            const no_of_red_yellow_card = props.topScorersArr.map((item) => item.statistics[0].cards.yellowred);


            setPlayersArr(players_arr)
            setGoalsArr(no_of_goals_arr)
            setShotsArr(no_of_shots_arr)
            setImgArr(imges_arr)

            setRedCard(no_of_red_card)
            setYellowCard(no_of_yellow_card)
            setRedYellowCard(no_of_red_yellow_card)
        }

    }, [props.topScorersArr]);


    return (
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
                        backgroundColor: 'rgba(196, 229, 56,0.5)',
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
                responsive: true,
                maintainAspectRatio: false,
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
    )
}
