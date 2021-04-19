import React, { useState } from "react";
import Select from "react-select";
import { AuthUserContext, withAuthentication } from "../Session";
import SnackbarComponent from "../SnackbarComponent";



function Dropdown(props) {

    const user = React.useContext(AuthUserContext);


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
            if (props.onChange) {
                props.onChange(selectedOption, 'TEAMS');   //Call back function to parent that send state
            }
            props.firebase.user(user.uid).update({
                fav_team_id: selectedOption.value,
                fav_team_name: selectedOption.label
            }) ? handleSnackbar("Successfully saved the team..!", "success") : handleSnackbar("Couldn't save the team..!", "error")

        } else if (props.dropdownId === "PLAYERS") {
            props.firebase.user(user.uid).update({
                fav_player_id: selectedOption.value,
                fav_player_name: selectedOption.label,
            }) ? handleSnackbar("Successfully saved the player..!", "success") : handleSnackbar("Couldn't save the player..!", "error")

        }

    }

    return (
        <div>
            <p>{props.placeholder}</p>
            <Select
                defaultValue={selectedOption}
                onChange={handleChange}
                options={props.dataSet}
                placeholder={props.favorite != null ? props.favorite : ''}  //Set saved value to dropdown as placeholder
            />
            {message !== '' ?
                <SnackbarComponent key={new Date()} severity={severity} message={message} clearSnackbar={clearSnackbar} /> : null
            }
        </div>
    )
}


export default withAuthentication(Dropdown);