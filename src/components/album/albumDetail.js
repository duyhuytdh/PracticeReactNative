import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import {Card, CardSection, MyButton} from '../common';

const AlbumDetail = ({album}) => {

    const {name, artist, image, url} = album;
    const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle
            , textTittleStyle, imageStyle} = styles;

    return(
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{uri:image}}></Image>
            </View>
            <View style={headerContentStyle}>
                <Text style={textTittleStyle}>{name}</Text>
                <Text>{artist}</Text>
            </View>         
        </CardSection>

        <CardSection>
            <Image style={imageStyle} source={{uri: image}}/>
        </CardSection>

        <CardSection>
            <MyButton onPress={() => {Linking.openURL(url);}}>
                Buy Now
            </MyButton>
        </CardSection>
    </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection:'column',
        justifyContent:'space-around'
    },

    thumbnailStyle:{
        height:50,
        width:50
    },

    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },

    textTittleStyle:{
        fontSize:18
    },

    imageStyle:{
        height:300,
        flex:1,
        width:null
    },
}

export default AlbumDetail;