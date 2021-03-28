import React from "react";
import { Button, Wrapper, MainBlock, InputForReset } from '../StyledCom';

const ChangeEmail = () => {
    return ( 
    <MainBlock>   
    <Wrapper>
    <InputForReset type="password" name="CurrentPassword" placeholder="Current Password"/>
    <p>Forgot your password? Click here to reset</p>
    <InputForReset type="text" name="NewEmail" placeholder="New Email Adress"/>
    <Button>Send Code</Button>
    <hr/>
    <InputForReset type="text" name="EmailConfirmationCode" placeholder="Email Confirmation Code"/>   
    <Button>Update Email</Button>
    
    </Wrapper> 
    </MainBlock> 
    );
}
 
export default ChangeEmail ;