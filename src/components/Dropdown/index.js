import React, { useState, useContext } from "react";
import Select from "react-select";

const options = [
    { value: 'zlatan', label: 'Zlatan' },
    { value: 'messi', label: 'Messi' },
    { value: 'ronaldo', label: 'Ronaldo' },
];

export default function Dropdown(props) {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div>
            <p>{props.placeholder}</p>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />

        </div>
    );
}