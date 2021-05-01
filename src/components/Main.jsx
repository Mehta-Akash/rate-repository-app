import React from 'react';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';
import { StyleSheet, View, ScrollView } from 'react-native';
import Text from './Text';
import AppBar from './AppBar';

const Main = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <AppBar />
        <RepositoryList />
      </View>
      {/* <Text>Simple text</Text>
      <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
      <Text fontWeight="bold" fontSize="subheading">
        Bold subheading
      </Text>
      <Text color="textSecondary">Text with secondary color</Text> */}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    // backgroundColor: 'coral',
    // flexGrow: 1,
    // flexShrink: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e4e8'
  },
  markDown: {
    // alignItems: 'center',
    // flex: 1,
    // width: 400,
    // color: 'coral',
    // strong: {
    //   fontWeight: 15,
    // },
  },
});

const markStyles = {
  strong: {
    color: 'blue',
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 8,
    color: 'blue',
  },
  block: {
    marginBottom: 50,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    width: 350,
    backgroundColor: '#ddd',
    padding: 15,
  },
  list: {
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
    width: 350,
  },
  listItemContent: {
    flexDirection: 'row',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  listItemBullet: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    marginRight: 10,
    // listStyleType: 'square',
  },
};
export default Main;
