import React, { useState } from 'react'
import Dropdown from '../Dropdown'
import { AuthUserContext, withAuthentication } from "../Session";

function UserProfile(props) {


    /* const [authUser, setAuthUser] = useState(''); */
    const [image, setImage] = useState(null);



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
        console.log("image: ", image)
    }



    return (

        <AuthUserContext.Consumer>
            {(authUser) => (
                <div>
                    <h1>This is user profile page</h1>
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

