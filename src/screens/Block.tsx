import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlockScreenProps } from '../models';

const Block: React.FC<BlockScreenProps> = ({ route }) => {
  const { block } = route.params;

  return (
    <View style={styles.container} testID='t_block'>
      <Text style={styles.title}>Block Details</Text>
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Block ID:</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>{block.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Transaction Count:</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>{block.tx_count}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Height:</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>{block.height}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  tableContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
});

export default Block;
