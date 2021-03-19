import React, { useState, useEffect } from 'react'
import Dropdown from '../Dropdown'
import { AuthUserContext, withAuthentication } from "../Session";
import ProfileImage from '../../img/prf_img.png'


function UserProfile(props) {

    const [image, setImage] = useState(null);
    const [uid, setUid] = useState();
    const [url, setUrl] = useState(ProfileImage);
    const [progress, setProgress] = useState(0);

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
        /* console.log(authUser != '' ? "WWW" : authUser) */

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
        props.firebase.profileImage(uid)
            .getDownloadURL()
            .then(url => {
                setUrl(url);
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
                    <Dropdown placeholder={'Choose your favorite team'} dataSet={teams} dropdownId="TEAMS" />
                    <Dropdown placeholder={'Choose your favorite player'} dataSet={players} dropdownId="PLAYERS" />


                    <button onClick={onChangePassword}>Change password</button>
                </div>
            )}
        </AuthUserContext.Consumer>
    )

}


export default withAuthentication(UserProfile);

