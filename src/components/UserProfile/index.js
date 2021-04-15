import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import { AuthUserContext, withAuthentication } from "../Session";
import ProfileImage from "../../img/prf_img.png";
import { requestOptions } from "../../data.js";
import styled from "styled-components";
import SnackbarComponent from "../SnackbarComponent";
import TextField from '@material-ui/core/TextField';




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

    const [uid, setUid] = useState(null);
    const [url, setUrl] = useState(ProfileImage);

    /* const [fav_competition, setFav_competition] = useState(null); */
    const [fav_player, setFav_player] = useState(null);
    const [fav_team, setFav_team] = useState(null);
    const [userName, setUserName] = useState('');




    //Used to display messages in snackbar
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');


    const [teamsArr, setTeamsArr] = useState([]);
    const [squadArr, setSquadArr] = useState([]);
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
            if (check === 'TEAMS') {
                setSelectedTeamId(selectedOption.value) //Set selected competition id to use when fetch favorite team
            }
        }

    }


    useEffect(() => {


        setUid(user.uid);
        bindData(user.uid);
        setUserName(user.username);

        //1. Fetch teams according to league that a specific user has on firebase db
        if (!!user.league) {

            fetch(`http://api.football-data.org/v2/competitions/${user.league}/teams`, requestOptions)
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
                    } else {
                        handleSnackbar("Couldn't found the teams", "error");
                    }

                })
                .catch(err => {
                    handleSnackbar("Couldn't found the teams", "error");
                });

        }


        //2. Fetch team squad data if user has selected a team
        if (!!selectedTeamId) {

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
                    } else {
                        handleSnackbar("Couldn't found the squad", "error");
                    }

                })
                .catch(err => {
                    handleSnackbar("Couldn't found the squad", "error");
                });

        }


    }, [selectedTeamId])




    const handleChange = e => {
        if (e.target.files[0]) {
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

                <Dropdown placeholder={'Choose your favorite team'} dataSet={teamsArr} dropdownId="TEAMS" favorite={fav_team} onChange={eventhandler} />
                <Dropdown placeholder={'Choose your favorite player'} dataSet={squadArr} dropdownId="PLAYERS" favorite={fav_player} />

                {message !== '' ?
                    <SnackbarComponent severity={severity} message={message} clearSnackbar={clearSnackbar} /> : null
                }
            </UserComp>

        </Container>

    )
}

export default withAuthentication(UserProfile);



