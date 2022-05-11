import propTypes from "prop-types";
import React from "react";
import { Pressable, Text } from "react-native";

const MyButton = props =>{
    console.log(props);
    MyButton.defaultProps = {
        title : 'Default Button',
    };
    MyButton.propTypes ={
        title: propTypes.string.isRequired,
        onPress: propTypes.func.isRequired,
    };
    return(
        <Pressable
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress = {() => props.onPress()}
        >

            <Text style={{fontSize: 24}}>{props.children || props.title}</Text>
        </Pressable>
    );
};

export default MyButton;
