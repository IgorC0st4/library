import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Text, ListItem, Button } from 'react-native-elements';
import Database from '../../services/Database';

export default class Resumo extends Component {
    static navigationOptions = {
        title: 'Livros',
    };

    render(){
        return(
            <SafeAreaView>
                <Text>Hello Resumo</Text>
            </SafeAreaView>
        );
    }
}