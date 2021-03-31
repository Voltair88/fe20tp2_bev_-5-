import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { AuthUserContext, withAuthentication } from "../Session";
import SnackbarComponent from "../SnackbarComponent";



function Dropdown(props) {

    const [selectedOption, setSelectedOption] = useState(null);

    //Used to display messages in snackbar
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const handleSnackbar = (message, type) => {
        setMessage(message);
        setSeverity(type);
    }

    const clearSnackbar = () => {
        setMessage('');
        setSeverity('');
    }


    function handleChange(selectedOption) {
        setSelectedOption(selectedOption)

        /* Update db fields when onChanged dropdown */
        if (props.dropdownId === "TEAMS") {
            props.firebase.user(props.uid).update({
                fav_team_id: selectedOption.value,
                fav_team_name: selectedOption.label
            }) ? handleSnackbar("Successfully saved the team..!", "success") : handleSnackbar("Couldn't save the team..!", "error")

        } else if (props.dropdownId === "PLAYERS") {
            props.firebase.user(props.uid).update({
                fav_player_id: selectedOption.value,
                fav_player_name: selectedOption.label,
            }) ? handleSnackbar("Successfully saved the player..!", "success") : handleSnackbar("Couldn't save the player..!", "error")
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
                    {message != '' ?
                        <SnackbarComponent key={new Date()} severity={severity} message={message} clearSnackbar={clearSnackbar} /> : null
                    }

                    {console.log("Message:" + message)}
                </div>

            )}
        </AuthUserContext.Consumer>
    );
}


export default withAuthentication(Dropdown);



/* key={new Date()}  used this line, https://medium.com/@zaynjarvis/material-ui-is-great-but-how-to-make-snackbar-works-a08b26646fc1*/