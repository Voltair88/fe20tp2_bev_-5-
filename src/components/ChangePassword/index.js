import React from "react";
import {Input, Button, Wrapper, MainBlock,InputForReset } from '../StyledCom';

const ChangePassword = () => {
    return ( 
    <MainBlock>   
    <Wrapper>
    <InputForReset type="password" name="CurrentPassword" placeholder="Current Password"/>
    <p>Forgot your password? Click here to reset</p>
    <InputForReset type="text" name="NewPassword" placeholder="New Password"/>
    <InputForReset type="text" name="RepeatNewPassword" placeholder="Repeat New Password"/>   
    <Button>Update Password</Button>
    
    </Wrapper> 
    </MainBlock> 
    );
}
 
export default ChangePassword ;