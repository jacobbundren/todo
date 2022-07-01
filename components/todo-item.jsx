import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    Text,
    View,
    StyleSheet
} from 'react-native';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'ToDo'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}

TodoItem.propTypes = {
    title: PropTypes.string
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height * .08,
        width: width,
        backgroundColor: 'greenyellow',
        borderColor: 'black',
        borderWidth: '1px'
    }
});

export default TodoItem;