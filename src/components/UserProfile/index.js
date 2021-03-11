import React from 'react'
import Dropdown from '../Dropdown'
import { AuthUserContext } from "../Session";

export default function UserProfile() {
    return (
        <AuthUserContext.Consumer>
            {(authUser) => (
                <div>
                    <h1>This is user profile page</h1>
                    <input type="file" />
                    <p>{"Auth user: " + authUser.uid}</p>
                    <Dropdown placeholder={'Choose your favorite team'} />
                    <Dropdown placeholder={'Choose your favorite player'} />
                    {console.log(authUser)}
                </div>
            )}
        </AuthUserContext.Consumer>
    )

}
