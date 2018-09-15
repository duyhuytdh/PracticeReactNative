import React, { Component } from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import AlbumsList from './components/album/albumsList';

export default App = () =>{
  return (
    <View style={{flex:1}}>
      <Header headerText={'Albums !!!'}/>
      <AlbumsList></AlbumsList>
    </View>
  );
}

