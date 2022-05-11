import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Button from "./component/Button";
import Counter from "./component/Counter";
import Form from "./component/Form";

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`

const App = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <Container>
            <Button
                title = {isVisible ? 'Hide':'Show'}
                onPress={()=> setIsVisible(prev => !prev)}
            />
            {isVisible && <Form/>}
        </Container> 
        
    )
};

export default App;