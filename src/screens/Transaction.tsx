import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { T_Transaction, TransactionScreenProps } from '../models';
import { useQuery } from '@apollo/client';
import { GET_TRANSACTION } from '../lib/apollo/queries/getTransaction';

const Transaction: React.FC<TransactionScreenProps> = ({ route }) => {
  const { transactionId } = route.params;
  const { data } = useQuery(GET_TRANSACTION, { variables: { txid: transactionId } })
  const transactionData: T_Transaction = data?.getTransaction || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Status:</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>{
            transactionData.status?.confirmed ? "confirmed" : "unconfirmed" || "-"
          }</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Size:</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>{transactionData.size || "-"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Version:</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>{transactionData.version || "-"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Lock time:</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>{transactionData.locktime || "-"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Weight:</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.value}>{transactionData.weight || "-"}</Text>
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

export default Transaction;
