// import React, { Component } from 'react';
// import { Image, StyleSheet, Text, View, ImageBackground ,ScrollView,SafeAreaView} from 'react-native';
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
// import { images } from '../../BaseThems'


// class Home extends Component {

//     constructor(props) {
//     super(props);
//     this.state = {
//         bgcolor: "#FAEFF0",
//         Category_Items: [
//             {
//                 key: 1,
//                 image: images.Hrx1,
//                 icon: images.HRX_Logo,
//                 offer: "20",
//                 offer_amount: "200",
//                 currency: "₹"
//             },
//             {
//                 key: 2,
//                 image: images.Tshirt,
//                 icon: images.Myntra_Logo,
//                 offer: "4",
//                 offer_amount: "200",
//                 currency: "₹"
//             },
//             {
//                 key: 3,
//                 image: images.Jack,
//                 icon: images.Jack_Jones_Logo,
//                 offer: "20",
//                 offer_amount: "300",
//                 currency: "₹"
//             },
//             {
//                 key: 4,
//                 image: images.disco,
//                 icon: images.Disco_Logo,
//                 offer: "20",
//                 offer_amount: "200",
//                 currency: "₹"

//             },
//             {
//                 key: 5,
//                 image: images.Chanel,
//                 icon: images.Chanel_Logo,
//                 offer: "10",
//                 offer_amount: "100",
//                 currency: "₹"
//             },
//             {
//                 key: 6,
//                 image: images.Rollex1,
//                 icon: images.Rollex_Logo,
//                 offer: "15",
//                 offer_amount: "300",
//                 currency: "₹"
//             },
//             {
//                 key: 7,
//                 image: images.Rollex2,
//                 icon: images.Rollex_Logo,
//                 offer: "20",
//                 offer_amount: "200",
//                 currency: "₹"
//             },
//             {
//                 key: 8,
//                 image: images.Hrx2,
//                 icon: images.HRX_Logo,
//                 offer: "20",
//                 offer_amount: "150",
//                 currency: "₹"
//             },
//             {
//                 key: 9,
//                 image: images.Hrx1,
//                 icon: images.HRX_Logo,
//                 offer: "20",
//                 offer_amount: "200",
//                 currency: "₹"
//             },
//             {
//                 key: 10,
//                 image: images.Rollex3,
//                 icon: images.Rollex_Logo,
//                 offer: "60",
//                 offer_amount: "200",
//                 currency: "₹"
//             },
//             {
//                 key: 11,
//                 image: images.Tshirt,
//                 icon: images.Myntra_Logo,
//                 offer: "4",
//                 offer_amount: "200",
//                 currency: "₹"
//             },
//             {
//                 key: 12,
//                 image: images.Rollex1,
//                 icon: images.Rollex_Logo,
//                 offer: "15",
//                 offer_amount: "300",
//                 currency: "₹"
//             },
//         ]


//      }
//     }
//     componentDidMount() {

//     }

//     render() {
//         return (<>
//         <SafeAreaView style={{flex:1}}>
//               <FlatList style={{ flex: 1, margin: 4 }}
//                 numColumns={3}
//                 scrollToItem={false}
//                 data={this.state.Category_Items}
//                 renderItem={({ item }) => (
//                     <View style={styles.Products_card}>
//                         <View style={{ flex: 1 }}>
//                             <ImageBackground style={styles.images}
//                                 resizeMode="cover" source={item.image}>
//                             </ImageBackground>
//                         </View>

//                         <View style={{ flex: 1, }}>
//                             <View style={styles.Brand_position}>
//                                 <Image style={styles.Brand_icon} resizeMode="contain" source={item.icon} />
//                             </View>

//                             <View style={{ flex: 1 }}>
//                                 <Text style={styles.offer_Text}>Upto {item.offer} off</Text>
//                             </View>

//                             <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10, paddingBottom: 5 }}>
//                                 <TouchableOpacity style={styles.offerView}>
//                                     <Image source={images.Earn_icon} resizeMode="cover" style={styles.earn_icon} />
//                                     <Text style={{ color: "black", fontWeight: 'bold', fontSize: 12 }}>Earn {item.offer_amount}{item.currency}</Text>
//                                 </TouchableOpacity>
//                             </View>
                            
//                         </View>
//                     </View>
//                     )} />
//             </SafeAreaView>
//         </>);
//     }
// }

// const styles = StyleSheet.create({

//     Products_card: {
//         flex: 1,
//         margin: 5,
//         borderWidth: 1,
//         borderColor: "gray",
//         borderRadius: 15,
//         backgroundColor: "#FFFFFF",
//         overflow: "hidden"
//     },
//     images: {
//         width: "100%",
//         height: 100,
//     },
//     offerView: {
//         flexDirection: "row",
//         padding: 5,
//         width: "100%",
//         height: 35,
//         backgroundColor: "#FAEFF0",
//         borderWidth: 1, borderColor: 'lightgray',
//         borderRadius: 15,
//         alignItems: "center",
//         justifyContent: "space-evenly"
//     },
//     earn_icon: {
//         height: 20,
//         width: 20,
//         borderRadius: 20
//     },

//     Brand_position: {
//         position: "absolute",
//         zIndex: 10,
//         bottom: 60,
//         width: "100%",
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     Brand_icon: {
//         height: 60,
//         width: 60,
//         borderRadius: 30,
//         borderWidth: 1,
//         borderColor: "lightgray",
//         overflow: "hidden"
//     },
//     offer_Text: {
//         marginTop: 20,
//         marginBottom: 5,
//         fontWeight: "bold",
//         fontSize: 11,
//         textAlign: "center"
//     }

// })

// export default Home;




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