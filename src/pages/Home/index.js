import React, { Component } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import {
    Text, Image, Card, ListItem, Button,
    Header, Icon
} from 'react-native-elements';
import Ionicon from 'react-native-vector-icons/Ionicons';


import style from './style';
import Database from '../../services/Database';
import api from '../../services/api';

const db = new Database();

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            livros: [],
        }
    }

    async componentDidMount() {
        try {
            this.setState({ isLoading: true });
            const { data } = await api.get('/v2/list');
            console.log(JSON.stringify(data[0]));
            this.setState({ isLoading: false, livros: data });
        } catch (error) {
            console.error(JSON.stringify(error));
        }
    }



    render() {
        return (
            <SafeAreaView>
                <Header
                    leftComponent={<Text h4>Livros</Text>}
                    rightComponent={<Ionicon name='add' size={35} onPress={()=>this.props.navigation.navigate('NovoLivro')} />}
                />
                <FlatList
                    data={this.state.livros}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Card>
                            <Image
                                style={{ width: "100%", height: 200 }}
                                resizeMode="contain"
                                source={{ uri: item.download_url }} />
                            <Card.Divider />
                            <Card.Title>{item.author}</Card.Title>
                        </Card>
                    )}
                />
            </SafeAreaView>
        );
    }
}