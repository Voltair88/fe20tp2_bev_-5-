import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { AuthUserContext, withAuthentication } from "../Session";



function Dropdown(props) {

    const [selectedOption, setSelectedOption] = useState(null);

    function handleChange(selectedOption) {
        setSelectedOption(selectedOption)

        /* Update db fields when onChanged dropdown */
        if (props.dropdownId === "TEAMS") {
            props.firebase.user(props.uid).update({
                fav_team: selectedOption.value
            });
        } else if (props.dropdownId === "PLAYERS") {
            props.firebase.user(props.uid).update({
                fav_player: selectedOption.value
            });
        }

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
                        placeholder={props.favorite != null ? props.favorite : ''}

                    />
                </div>

            )}
        </AuthUserContext.Consumer>
    );
}

export default withAuthentication(Dropdown);