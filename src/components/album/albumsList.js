import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumsList extends Component {

    state = {albums: []};

    componentWillMount(){
        console.log('component will mount in AlbumsList!!!');
        axios.get('https://tigervn.herokuapp.com/albums')
        .then(Response => this.setState({albums:Response.data}));
    }

    rednerAlbums(){
        return this.state.albums.map(album => <AlbumDetail key={album.albumId} album={album}/>);
    }

    render(){

        console.log(this.state);

        return(
            <ScrollView>
               {this.rednerAlbums()}
            </ScrollView>
        );
    }   
}

export default AlbumsList;