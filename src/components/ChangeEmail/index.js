import React from "react";
import {Input, Button, Wrapper, MainBlock } from '../StyledCom';

const ChangeEmail = () => {
    return ( 
    <MainBlock>   
    <Wrapper>
    <Input type="password" name="CurrentPassword" placeholder="Current Password"/>
    <p>Forgot your password? Click here to reset</p>
    <Input type="text" name="NewEmail" placeholder="New Email Adress"/>
    <Button>Send Code</Button>
    <hr/>
    <Input type="text" name="EmailConfirmationCode" placeholder="Email Confirmation Code"/>   
    <Button>Update Email</Button>
    
    </Wrapper> 
    </MainBlock> 
    );
}
 
export default ChangeEmail ;