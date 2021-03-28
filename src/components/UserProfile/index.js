import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import { AuthUserContext, withAuthentication } from "../Session";
import ProfileImage from "../../img/prf_img.png";
import { LEAGUES_DATA } from "../../data.js";
import { PLAYER_DATA } from "../../data.js";
import styled from "styled-components";
import PasswordChangeForm from "../PasswordChange";
import Pencil from "../../img/pencil.png"

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;

  /* & > div{
        background-color: bisque;
        width: 400px;
    } */
`;

const UserComp = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 50%;
  .username-input{
      /* background-color: red; */
      font-size: x-large;
      width: 50%;
      align-self: center;
      text-align: center;
      border: none;
      background-image: url(../../img/pencil.png);
    background-position: 7px 7px;
    background-repeat: no-repeat;
  }
  span{
    position: absolute;
    top: 2px;
    right: 2px;
  }
`;

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
    const [progress, setProgress] = useState(0);

    const [fav_player, setFav_player] = useState(null);
    const [fav_team, setFav_team] = useState(null);

    const [player_array, setPlayer_array] = useState([]);
    const [team_array, setTeam_array] = useState([]);
    const [changePassword, setChangePassword] = useState(false);

    const [userName, setUserName] = useState();

    useEffect(() => {
        setUid(props.user.uid);
        bindData(props.user.uid);
        setUserName(props.user.username);

        //Read LEAGUES_DATA from data.js and choose only id and team name from that data and store in an array
        let teamArr = [];
        for (let key of Object.keys(LEAGUES_DATA.competitions)) {
            teamArr.push({
                value: LEAGUES_DATA.competitions[key].id,
                label: LEAGUES_DATA.competitions[key].name,
            });
        }
        setTeam_array(teamArr);
        //End LEAGUES_DATA team


    }, [])



    const players = [
        { value: 'zlatan', label: 'Zlatan' },
        { value: 'messi', label: 'Messi' },
        { value: 'ronaldo', label: 'Ronaldo' },
    ];
    const teams = [
        { value: 'sl', label: 'SL' },
        { value: 'sw', label: 'SW' },
        { value: 'rr', label: 'Rr' },
    ];




    function onChangePassword() {
        setChangePassword(true);
    }
    function onCancel() {
        setChangePassword(false);
    }
    const handleChange = e => {
        console.log(e.target)
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            handleUpload(e.target.files[0]);
        }
    }

    const handleChangeUserName = e => {


        //Update the firebase db username when change the username
        props.firebase.user(props.user.uid).update({
            username: e.target.value
        });

        setUserName(e.target.value)
    }

    const handleUpload = (file) => {

        const uploadTask = props.firebase.profileImage(uid).put(file);
        uploadTask.on(
            "state_changed",
            snapshot => {
                console.log("uploaded image")
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
                            {/* <button onClick={handleUpload} > Upload </button> */}
                        </ImageUpload>
                        <input className="username-input" type="text" value={userName} onChange={handleChangeUserName} />

                        <Dropdown placeholder={'Choose your favorite team'} dataSet={team_array} dropdownId="TEAMS" uid={props.user.uid} favorite={fav_team} />
                        <Dropdown placeholder={'Choose your favorite player'} dataSet={players} dropdownId="PLAYERS" uid={props.user.uid} favorite={fav_player} />


                        {/*  <br />
                        {changePassword ? <PasswordChangeForm /> : ''}
                        {changePassword ? (<button onClick={onCancel}>Cancel</button>) : (<button onClick={onChangePassword}>Change password</button>)} */}
                    </UserComp>
                </Container>
            )}
        </AuthUserContext.Consumer>
    )
}

export default withAuthentication(UserProfile);
