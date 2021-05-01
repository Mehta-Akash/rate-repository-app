import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // display: 'flex',
    // flex: 1,
    // justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    // alignSelf: 'stretch',
  },
  languageTag: {
    backgroundColor: '#0366d6', color: 'white', alignSelf: 'flex-start',
    borderRadius: 5,
    padding: 3
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'pink',
    // alignSelf: 'stretch',
    paddingRight: 20
  }
});

function kFormatter(num) {
  return num > 999 ? (num / 1000).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num)
}

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'stretch', }}>
        {/* Image view */}
        <Image style={{
          width: 50,
          height: 50,

        }} source={{
          uri: `${item.ownerAvatarUrl}`,
        }} />

        {/* Heading of card and subheading */}
        <View style={{ paddingLeft: 20, paddingBottom: 10 }}>
          <Text fontWeight="bold" fontSize="subheading">
            {item.fullName}
          </Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text style={styles.languageTag}>{item.language}</Text>
        </View>

      </View>


      {/* Stats view */}
      <View style={styles.stats}>
        <View>
          <Text fontWeight='bold'>{kFormatter(item.stargazersCount)}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View>
          <Text fontWeight='bold'>{kFormatter(item.forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View>
          <Text fontWeight='bold'>{item.reviewCount}</Text>
          <Text color='textSecondary'>Review</Text>
        </View>
        <View>
          <Text fontWeight='bold'>{item.ratingAverage}</Text>
          <Text color='textSecondary'>Ratings</Text>
        </View>
      </View>

    </View>
  );
};

export default RepositoryItem;
