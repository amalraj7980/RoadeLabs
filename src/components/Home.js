import React, {Component} from 'react';
import {
  View,Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,Image,
  ImageBackground,
} from 'react-native';
import {SearchBar, Button, ListItem} from 'react-native-elements';
import { styles, primaryColor } from '../../BaseThems'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [],
      error: null,
      loading: false,
    };
  }
  search = async () => {
    const url = `https://62dac16ce56f6d82a7691c1a.mockapi.io/api/roade/cc/users?name=` + this.state.search;
    this.setState({loading: true});
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({error, loading: false});
      });
  };

  renderSearch = () => {
    return this.state.data.map(item => {
      return (
        <View>
          <Text>{item.name}</Text>
        </View>
      );
    });
  };

  renderItem = ({item}) => (
    <View>
      <View style={styles.Products_card}>
          <View style={{ flex: 1,flexDirection:"row",alignItems:"center"}}>
              <Image style={styles.user_avatar}
                resizeMode="contain" source={{ uri: `${item.avatar}` }}>
              </Image>
                  <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:15}}>{item.name}</Text>
          </View>
          <View style={{ flex: 1,}}>
            <Text>{item.post}</Text>
          </View>
      </View> 
      
    </View>
  );

  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <SearchBar
            containerStyle={{width: '70%', height: 80, backgroundColor: '#fff'}}
            placeholder="Search name"
            lightTheme
            platform="ios"
            autoFocus={true}
            showLoading={false}
            autoCorrect={false}
            value={this.state.search}
            onChangeText={search => this.setState({search})}
            
          />
  
          <Button
            buttonStyle={{backgroundColor: primaryColor, padding: 9}}
            title="search"
            onPress={() => this.search()}
          />
        </View>

        {this.state.loading ? (
          <ActivityIndicator
            style={{
              position: 'absolute',
              flexDirection: 'row',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              marginTop: 0,
            }}
            size="large"
            color="#0275d8"
          />
        ) : (
          <FlatList
            style={{flex: 1}}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        )}
      </View>
    );
  }
}

export default Home;