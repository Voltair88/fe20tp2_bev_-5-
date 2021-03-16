import React, { useState, useContext } from "react";
import Select from "react-select";
import { AuthUserContext, withAuthentication } from "../Session";



function Dropdown(props) {

    const [selectedOption, setSelectedOption] = useState(null);
    const [uid, setUid] = useState('');




    function handleChange(selectedOption) {
        setSelectedOption(selectedOption)
        /* console.log(props.dropdownId)
        console.log(selectedOption) */
        /* props.firebase.user(uid).set({
            fav_player: selectedOption.value,
            fav_team: "LK"
        }); */

        /* Update db fields when onChanged dropdown */
        if (props.dropdownId === "TEAMS") {
            props.firebase.user(uid).update({
                fav_team: selectedOption.value
            });
        } else if (props.dropdownId === "PLAYERS") {
            props.firebase.user(uid).update({
                fav_player: selectedOption.value
            });
        }

        /* console.log(props.firebase.user(uid).fav_player)
        console.log(props.firebase.user(uid).fav_team) */
    }


    return (
        <AuthUserContext.Consumer>
            {(authUser) => (
                <div>
                    <p>{props.placeholder}</p>
                    <Select
                        defaultValue={selectedOption}
                        onChange={handleChange}
                        options={props.dataSet}
                    />
                    {setUid(authUser.uid)}
                </div>

            )}
        </AuthUserContext.Consumer>
    );
}

export default withAuthentication(Dropdown);