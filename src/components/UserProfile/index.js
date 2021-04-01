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

    const [image, setImage] = useState(null);
    const [uid, setUid] = useState();
    const [url, setUrl] = useState(ProfileImage);

    const [fav_player, setFav_player] = useState(null);
    const [fav_team, setFav_team] = useState(null);

    const [player_array, setPlayer_array] = useState([]);
    const [team_array, setTeam_array] = useState([]);

    const [userName, setUserName] = useState();




    //Used to display messages in snackbar
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const handleSnackbar = (message, type) => {
        setMessage(message);
        setSeverity(type);
    }



    useEffect(() => {
        setUid(props.user.uid);
        bindData(props.user.uid);
        setUserName(props.user.username);

        //Read CL_TEAMS_DATA from data.js and choose only id and team name from that data and store in an array
        let teamArr = [];
        for (let key of Object.keys(CL_TEAMS_DATA.teams)) {
            teamArr.push({
                value: CL_TEAMS_DATA.teams[key].id,
                label: CL_TEAMS_DATA.teams[key].name,
            });
        }
        setTeam_array(teamArr);
        //End CL_TEAMS_DATA team


        let player_array = [];
        for (let key of Object.keys(TEAM_DATA.squad)) {
            player_array.push({
                value: TEAM_DATA.squad[key].id,
                label: TEAM_DATA.squad[key].name,
            });
        }
        setPlayer_array(player_array);

    }, [])




    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            handleUpload(e.target.files[0]);
        }
    }

    const handleChangeUserName = e => {


        //Update the firebase db username when change the username
        props.firebase.user(props.user.uid).update({
            username: e.target.value
        }).catch(error => console.log("Couldn't change username", error));

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
                console.log(error);
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
            }).catch(error => console.log("Don't have a profile image", error))




        //Bind data to dropdowns
        props.firebase.user(uid).get().then(function (snapshot) {
            if (snapshot.exists()) {

                setFav_player(snapshot.val().fav_player_name);
                setFav_team(snapshot.val().fav_team_name);
                setUserName(snapshot.val().username);

            }
            else {
                console.log("No data available");
            }
        }).catch(function (error) {
            console.error(error);
        });

    }



    return (

        <AuthUserContext.Consumer>
            {(authUser) => (
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

                        <Dropdown placeholder={'Choose your favorite team'} dataSet={team_array} dropdownId="TEAMS" uid={props.user.uid} favorite={fav_team} />
                        <Dropdown placeholder={'Choose your favorite player'} dataSet={player_array} dropdownId="PLAYERS" uid={props.user.uid} favorite={fav_player} />

                        {
                            message != '' ?
                                <SnackbarComponent severity={severity} message={message} /> : null
                        }


                    </UserComp>
                </Container>
            )}
        </AuthUserContext.Consumer>
    )
}

export default withAuthentication(UserProfile);



