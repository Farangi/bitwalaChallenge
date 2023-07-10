import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LatestBlocks from '../components/LatestBlocks';
import LatestTransactions from '../components/LatestTransactions';
import { HomeScreenProps } from '../models';

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');

  const clearSearch = () => {
    setSearchValue('')
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer} testID='t_home'>
        <TextInput
          style={styles.input}
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder={'Enter Block ID / Transaction ID'}
        />
        <TouchableOpacity style={styles.searchButton} onPress={clearSearch}>
          <Text style={styles.searchButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <LatestBlocks navigation={navigation} searchValue={searchValue} />
      <LatestTransactions navigation={navigation} searchValue={searchValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Home;
