import React, { Component } from 'react';
import {
    Dimensions,
    View,
    StyleSheet
} from 'react-native';
import TodoItem from "./todo-item";
import StorageService from "../services/storageService";
import {Text} from "@rneui/base";

const storageService = new StorageService();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        }
    }

    componentDidMount() {
        storageService.readFromStorage().then(items => {
            this.setState(prevState => ({
                todoItems: [...prevState.todoItems, ...JSON.parse(items)]
            }));
        })
    }

    render() {
        let items = this.state.todoItems;
        let renderedItems = []
        items.forEach((val, key) => {
            renderedItems.push(<TodoItem title={val} key={key} />)
        })
        return (
            <View>
                <View style={styles.appTitleContainer}>
                    <Text style={styles.appTitle}>List</Text>
                </View>
                <View style={styles.listContainer}>
                    {
                        renderedItems
                    }
                </View>
                <View style={styles.footerContainer}>
                    <Text>Footer</Text>
                </View>
            </View>
        )
    }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    appTitleContainer: {
        height: height * .11,
        width: width,
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center'

    },
    appTitle: {
        fontSize: 48,
        color: 'black',
    },
    listContainer: {
    }
});


export default Home;