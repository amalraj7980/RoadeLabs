export const images= {
  Notification: require('./src/assects/notification.png'),
//App logo
App_Logo: require('./src/assects/eppeok.png'),

}

import {StyleSheet} from 'react-native';

const primaryColor = '#6F3A00';
const secondaryColor = '#00689E';
const white = '#FFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Products_card: {
    flex: 1,
    margin:8,
    borderWidth: 0.5,
    padding:15,
    borderColor: "lightgray",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    overflow: "hidden"
},
images: {
    width: "100%",
    height: 100,
},
    user_avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "lightgray",
        overflow: "hidden"
    },
});

export {styles, primaryColor, secondaryColor, white};