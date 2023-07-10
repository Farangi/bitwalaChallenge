import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LatestBlocksProps, T_Block } from '../models';
import { useQuery } from '@apollo/client';
import { GET_TEN_LATEST_BLOCKS } from '../lib/apollo/queries/getTenLatestBlocks';

const LatestBlocks: React.FC<LatestBlocksProps> = ({ navigation, searchValue }) => {
  const { data, loading } = useQuery(GET_TEN_LATEST_BLOCKS);
  const [latestBlocks, setLatestBlocks] = useState<T_Block[]>([])
  const handleRowPress = (block: T_Block) => {
    navigation.navigate('Block', { block });
  };

  useEffect(() => {
    if (data) {
      if (searchValue) {
        setLatestBlocks(prev => prev.filter(item => item.id.includes(searchValue)))
      } else {
        setLatestBlocks(data.getTenLatestBlocks);
      }
    }
  }, [data, searchValue])


  return (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle} testID='t_latestBlocks'>Latest Blocks</Text>
      {loading ? <Text style={styles.loading}>Loading Blocks ...</Text> : null}
      {latestBlocks.length > 0 ? (
        <View style={styles.headerRow} testID='t_blocksheader'>
          <Text style={styles.headerText}>Height</Text>
          <Text style={styles.headerText}>Transactions</Text>
        </View>
      ) : null}
      {latestBlocks.map((row) => (
        <TouchableOpacity
          key={row.id}
          testID='t_block-item'
          style={styles.rowContainer}
          onPress={() => handleRowPress(row)}
        >
          <Text style={styles.rowText}>{row.height}</Text>
          <Text style={styles.rowText}>{row.tx_count}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 20,
    width: '100%',
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loading: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    marginBottom: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    marginBottom: 5,
  },
  rowText: {
    fontSize: 16,
  },
});

export default LatestBlocks;
