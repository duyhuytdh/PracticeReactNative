import React from 'react';
import {Text, View} from 'react-native';

//Make component
const Header = (props) =>{
    const {textStyles, viewStyles} = styles;

    return (
    <View style={viewStyles}>
        <Text style={textStyles}>{props.headerText}</Text>
    </View>);
}

const styles = {
    textStyles: {
        fontSize:20,
        color:'green',
    },

    viewStyles:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        height:60,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative',
    }
}

export { Header };