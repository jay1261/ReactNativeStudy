import React, {useState, useEffect} from "react";
import styled from "styled-components";

const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: 'none',
    autoCorrect: false,
})`
    border: 1px solid #757575;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    font-size: 20px;
`

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;    
`

const Form = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{
        console.log(`\n==== Form Component Mount====\n`);
        return () => console.log(`\n==== Form Component UnMount====\n`);
    },[]);

    useEffect(() => {
        console.log(`name: ${name}, email: ${email}\n`);
    }, [email]);

    return (
        <>
            <StyledText>Name: {name}</StyledText>
            <StyledText>Email: {email}</StyledText>

            <StyledTextInput
                value = {name}
                onChangeText = {text => setName(text)}
                palceholder = "name"
            />
            <StyledTextInput
                value = {email}
                onChangeText = {text => setEmail(text)}
                palceholder = "email"
            />
        </>
    );
};

export default Form;