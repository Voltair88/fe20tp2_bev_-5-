import React from "react";
import {Input, Button, Wrapper, MainBlock } from '../StyledCom';

const ChangePassword = () => {
    return ( 
    <MainBlock>   
    <Wrapper>
    <Input type="password" name="CurrentPassword" placeholder="Current Password"/>
    <p>Forgot your password? Click here to reset</p>
    <Input type="text" name="NewPassword" placeholder="New Password"/>
    <Input type="text" name="RepeatNewPassword" placeholder="Repeat New Password"/>   
    <Button>Update Password</Button>
    
    </Wrapper> 
    </MainBlock> 
    );
}
 
export default ChangePassword ;