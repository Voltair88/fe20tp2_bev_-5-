import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import { AuthUserContext, withAuthentication } from "../Session";
import ProfileImage from "../../img/prf_img.png";
import { CL_TEAMS_DATA } from "../../data.js";
import { TEAM_DATA } from "../../data.js";
import styled from "styled-components";
import PasswordChangeForm from "../PasswordChange";
import Pencil from "../../img/pencil.png"
import SnackbarComponent from "../SnackbarComponent";
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PlayerChart from "../PlayerChart";






const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const UserComp = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  .username-input{
      font-size: x-large;
      align-self: center;
      text-align: center;
      border: none;
  }
`;

const UserName = styled.div`
    align-self: center;
    position: relative;

`

const ImageUpload = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    & > input{
        visibility:hidden;
        width:0;
        height:0;
    }
    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
    }
`





function UserProfile(props) {

    const user = React.useContext(AuthUserContext);

    const [image, setImage] = useState(null);
    const [uid, setUid] = useState();
    const [url, setUrl] = useState(ProfileImage);

    const [fav_competition, setFav_competition] = useState(null);
    const [fav_player, setFav_player] = useState(null);
    const [fav_team, setFav_team] = useState(null);

    /* const [player_array, setPlayer_array] = useState([]);
    const [team_array, setTeam_array] = useState([]); */

    const [userName, setUserName] = useState();




    //Used to display messages in snackbar
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const [competitionsArr, setCompetitionsArr] = useState([]);
    const [competitionsLoaded, setCompetitionsLoaded] = useState(false);

    const [teamsArr, setTeamsArr] = useState([]);
    const [teamsLoaded, setTeamsLoaded] = useState(false);

    const [squadArr, setSquadArr] = useState([]);
    const [squadLoaded, setSquadLoaded] = useState(false);



    const [selectedCompetitionId, setSelectedCompetitionId] = useState();
    const [selectedTeamId, setSelectedTeamId] = useState();

    const handleSnackbar = (message, severity) => {
        setMessage(message);
        setSeverity(severity);
    }

    const clearSnackbar = () => {
        setMessage('');
        setSeverity('');
    }

    const eventhandler = (selectedOption, check) => {
        if (!!selectedOption) {
            if (check === 'COMPETITION') {
                setSelectedCompetitionId(selectedOption.value) //Set selected competition id to use when fetch favorite team
            }
            else if (check === 'TEAMS') {
                setSelectedTeamId(selectedOption.value) //Set selected competition id to use when fetch favorite team
            }
        }

    }



    useEffect(() => {
        setUid(user.uid);
        bindData(user.uid);
        setUserName(user.username);

        //Read CL_TEAMS_DATA from data.js and choose only id and team name from that data and store in an array
        /* let teamArr = [];
        for (let key of Object.keys(CL_TEAMS_DATA.teams)) {
            teamArr.push({
                value: CL_TEAMS_DATA.teams[key].id,
                label: CL_TEAMS_DATA.teams[key].name,
            });
        }
        setTeam_array(teamArr); */
        //End CL_TEAMS_DATA team


        /* let player_array = [];
        for (let key of Object.keys(TEAM_DATA.squad)) {
            player_array.push({
                value: TEAM_DATA.squad[key].id,
                label: TEAM_DATA.squad[key].name,
            });
        }
        setPlayer_array(player_array); */


        //Fetch data from API
        //1. Fetch competitions data
        if (!competitionsLoaded) {
            var myHeaders = new Headers();
            myHeaders.append("X-Auth-Token", "ef2c88344214470198023fffda588093");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://api.football-data.org/v2/competitions/", requestOptions)
                .then(response => response.json())
                .then((data) => {
                    if (data !== undefined) {


                        let competitions = [];
                        for (let key of Object.keys(data.competitions)) {
                            competitions.push({
                                value: data.competitions[key].id,
                                label: data.competitions[key].name,
                            });
                        }
                        setCompetitionsArr(competitions)
                        setCompetitionsLoaded(true) //Set the "competitions loaded" to true
                    } else {
                        handleSnackbar("Couldn't found the competition", "error");
                    }

                })
                .catch(err => {
                    //console.error(err);
                    handleSnackbar("Couldn't found the competition", "error");
                });
        }


        //2. Fetch teams data if user has already selected a competition
        if (selectedCompetitionId !== undefined) {
            var myHeaders = new Headers();
            myHeaders.append("X-Auth-Token", "ef2c88344214470198023fffda588093");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`http://api.football-data.org/v2/competitions/${selectedCompetitionId}/teams`, requestOptions)
                .then(response => response.json())
                .then((data) => {
                    if (data !== undefined) {
                        let teams = [];
                        for (let key of Object.keys(data.teams)) {
                            teams.push({
                                value: data.teams[key].id,
                                label: data.teams[key].name,
                            });
                        }
                        setTeamsArr(teams)
                        setTeamsLoaded(true)
                        console.log(teamsArr);
                    } else {
                        handleSnackbar("Couldn't found the teams", "error");
                    }

                })
                .catch(err => {
                    //console.error(err);
                    handleSnackbar("Couldn't found the teams", "error");
                });

        }


        //3. Fetch team squad data if user has selected a team
        if (selectedTeamId !== undefined) {

            var myHeaders = new Headers();
            myHeaders.append("X-Auth-Token", "ef2c88344214470198023fffda588093");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };


            fetch(`http://api.football-data.org/v2/teams/${selectedTeamId}`, requestOptions)
                .then(response => response.json())
                .then((data) => {
                    if (data !== undefined) {
                        let squad = [];
                        for (let key of Object.keys(data.squad)) {
                            squad.push({
                                value: data.squad[key].id,
                                label: data.squad[key].name,
                            });
                        }
                        setSquadArr(squad)
                        setSquadLoaded(true)
                    } else {
                        handleSnackbar("Couldn't found the squad", "error");
                    }

                })
                .catch(err => {
                    handleSnackbar("Couldn't found the squad", "error");
                });

        }


        //END Fetch data from API

    }, [selectedCompetitionId, selectedTeamId])




    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            handleUpload(e.target.files[0]);
        }
    }

    const handleChangeUserName = e => {


        //Update the firebase db username when change the username
        if (props.firebase.user(props.user.uid).update({
            username: e.target.value
        })) {
            handleSnackbar("Successfully changed the username", "success");
        } else {
            handleSnackbar("Couldn't change the username", "error");
        }


        setUserName(e.target.value)
    }

    const handleUpload = (file) => {

        const uploadTask = props.firebase.profileImage(uid).put(file);
        uploadTask.on(
            "state_changed",
            snapshot => {
                handleSnackbar("Successfully uploaded the image!", "success")
            },
            error => {
                handleSnackbar("Couldn't upload the image", "error");
            }
            ,
            () => {
                props.firebase.profileImage(uid)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
            }
        );

    }

    const bindData = (uid) => {

        //Bind profile image
        props.firebase.profileImage(uid)
            .getDownloadURL()
            .then(url => {
                setUrl(url);
            }).catch(error => handleSnackbar("Don't have a profile image", "error"))




        //Bind data to dropdowns
        props.firebase.user(uid).get().then(function (snapshot) {
            if (snapshot.exists()) {

                setFav_competition(snapshot.val().fav_competition_name);
                setFav_player(snapshot.val().fav_player_name);
                setFav_team(snapshot.val().fav_team_name);
                setUserName(snapshot.val().username);

            }
            else {
                handleSnackbar("No data available", "error");
            }
        }).catch(function (error) {
            handleSnackbar("Something went wrong, try again", "error");;
        });

    }



    return (


        <Container>
            <UserComp>
                <ImageUpload>
                    <label htmlFor="file-input">
                        <img src={url} alt="user profile image" />
                    </label>
                    <input id="file-input" type="file" onChange={handleChange} />
                    <br />
                </ImageUpload>

                <UserName>

                    <TextField id="user-input" className="username-input" type="text" value={userName} onChange={handleChangeUserName}
                        inputProps={{ style: { textAlign: 'center', fontSize: '1.5em' } }}
                    />
                </UserName>

                <Dropdown placeholder={'Choose your favorite competition'} dataSet={competitionsArr} dropdownId="COMPETITION" favorite={fav_competition} onChange={eventhandler} />
                <Dropdown placeholder={'Choose your favorite team'} dataSet={teamsArr} dropdownId="TEAMS" favorite={fav_team} onChange={eventhandler} />
                <Dropdown placeholder={'Choose your favorite player'} dataSet={squadArr} dropdownId="PLAYERS" favorite={fav_player} />

                {message !== '' ?
                    <SnackbarComponent severity={severity} message={message} clearSnackbar={clearSnackbar} /> : null
                }
            </UserComp>

            {/* <PlayerChart /> */}

        </Container>

    )
}

export default withAuthentication(UserProfile);



