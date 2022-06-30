import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    Text,
    View,
    StyleSheet
} from 'react-native';
import TodoItem from "./todo-item";
import StorageService from "../services/storageService";

const storageService = new StorageService();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        }
    }

    componentWillMount() {
        storageService.readFromStorage().then(items => {
            this.setState(prevState => ({
                todoItems: [...prevState.todoItems, items]
            }));
        })
    }

    render() {
        let items = this.state.todoItems;
        console.log('renders', items);
        let renderedItems = []
        items.push((val) => {
            renderedItems.push(<TodoItem title={val} />)
        })
        return (
            <View style={styles.container}>
                {
                    renderedItems
                }
            </View>
        )
    }
}

const { height, width } = Dimensions.get('window');

const styles = {
    container: {
        height: height,
        width: width
    }
}

export default Home;