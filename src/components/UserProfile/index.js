import React, { useState, useEffect } from 'react'
import Dropdown from '../Dropdown'
import { AuthUserContext, withAuthentication } from "../Session";
import ProfileImage from '../../img/prf_img.png'
import { TEAM_DATA } from '../../data.js'


function UserProfile(props) {

    const [image, setImage] = useState(null);
    const [uid, setUid] = useState();
    const [url, setUrl] = useState(ProfileImage);
    const [progress, setProgress] = useState(0);

    const [fav_player, setFav_player] = useState(null);
    const [fav_team, setFav_team] = useState(null);


    useEffect(() => {
        setUid(props.user.uid)
        bindData(props.user.uid);
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
        console.log("On change Password")
        console.log(TEAM_DATA)

    }
    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {

        /* props.firebase.profileImage(uid).put(image).then(function () {
            console.log('successfull')
        }.catch(error => {
            console.log(error.message)
        },
            () => props.firebase.profileImage(uid)
                .child(`users/${uid}/profileImage`)
                .getDownloadURL()
                .then(url => {
                    console.log(url)
                    console.log("INSIDE")
                })
        ) */



        const uploadTask = props.firebase.profileImage(uid).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
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
                        console.log(url)
                    });
            }
        );





    }

    const bindData = (uid) => {
        (
            props.firebase.profileImage(uid)
                .getDownloadURL()
                .then(url => {
                    setUrl(url);
                }).catch(error => console.log("Don't have a profile image", error))
        ) ? console.log("Profile image found")
            : setUrl(ProfileImage);



        //Bind data to dropdowns
        props.firebase.user(uid).get().then(function (snapshot) {
            if (snapshot.exists()) {

                setFav_player(snapshot.val().fav_player);
                setFav_team(snapshot.val().fav_team);
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
                <div>
                    <h1>This is user profile page</h1>
                    <img src={url} alt="user profile image" />
                    <input type="file" onChange={handleChange} />
                    <button onClick={handleUpload} > Upload </button>
                    <p>{"Auth user: " + authUser.uid}</p>
                    <Dropdown placeholder={'Choose your favorite team'} dataSet={teams} dropdownId="TEAMS" uid={props.user.uid} favorite={fav_team} />
                    <Dropdown placeholder={'Choose your favorite player'} dataSet={players} dropdownId="PLAYERS" uid={props.user.uid} favorite={fav_player} />

                    <button onClick={onChangePassword}>Change password</button>
                </div>
            )}
        </AuthUserContext.Consumer>
    )

}


export default withAuthentication(UserProfile);

