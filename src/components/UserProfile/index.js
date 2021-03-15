import React, { useState } from 'react'
import Dropdown from '../Dropdown'
import { AuthUserContext, withAuthentication } from "../Session";

function UserProfile(props) {


    /* const [authUser, setAuthUser] = useState(''); */


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

    function onSaveProfile(authUser) {




        console.log("On change save")
        /* console.log(authUser.uid) */
        props.firebase.user(authUser.uid).set({
            fav_player: "RONA",
            fav_team: "LK"
            /* uid: authUser.uid */
        });

    }




    /* this.props.firebase.message(message.uid).set({
        ...messageSnapshot,
        text,
      }); */

    /* messages = () => this.db.ref("messages"); Pathum */

    /*  onCreateMessage = (event, authUser) => {
         this.props.firebase.messages().push({    
           text: this.state.text,
           userId: authUser.uid,
           createdAt: this.props.firebase.serverValue.TIMESTAMP,
         });
         this.setState({ text: "" });
         event.preventDefault();
       }; */

    /* onEditMessage = (message, text) => {
      const { uid, ...messageSnapshot } = message;
      this.props.firebase.message(message.uid).set({
        ...messageSnapshot,
        text,
        editedAt: this.props.firebase.serverValue.TIMESTAMP,
      });
    }; */

    return (

        <AuthUserContext.Consumer>
            {(authUser) => (
                <div>
                    <h1>This is user profile page</h1>
                    <input type="file" />
                    <p>{"Auth user: " + authUser.uid}</p>
                    <Dropdown placeholder={'Choose your favorite team'} dataSet={teams} dropdownId="TEAMS" />
                    <Dropdown placeholder={'Choose your favorite player'} dataSet={players} dropdownId="PLAYERS" />



                    <select
                    /* value={this.state.selectValue}
                    onChange={this.handleChange} */
                    >
                        <option value="Orange">Orange</option>
                        <option value="Radish">Radish</option>
                        <option value="Cherry">Cherry</option>
                    </select>

                    {/* {console.log(state)} */}

                    <button onClick={onChangePassword}>Change password</button>
                    <button onClick={() => onSaveProfile(authUser)}>Save</button>
                    {/* {console.log(authUser)} */}
                </div>
            )}
        </AuthUserContext.Consumer>
    )

}


export default withAuthentication(UserProfile);

