import React from 'react'
import Dropdown from '../Dropdown'

export default function UserProfile() {
    return (
        <div>
            <h1>This is user profile page</h1>
            <input type="file" />
            <Dropdown placeholder={'Choose your favorite team'} />
            <Dropdown placeholder={'Choose your favorite player'} />

        </div>
    )
}
