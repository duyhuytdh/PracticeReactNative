import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component{

    renderItem(library){
        return <ListItem library ={library}></ListItem>;
    }

    render() {
        console.log('LibraryList: ');
        console.log(this.props.libraries);
        return(
            <FlatList data = {this.props.libraries} 
                        renderItem={this.renderItem}
                        keyExtractor ={(library) => library.id.toString()}>

            </FlatList>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);