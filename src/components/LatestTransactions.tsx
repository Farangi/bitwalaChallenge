import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LatestTransactionsProps } from '../models';
import { useQuery } from '@apollo/client';
import { GET_MEMPOOL_TX_IDS } from '../lib/apollo/queries/getMempoolTxids';

const LatestTransactions: React.FC<LatestTransactionsProps> = ({ navigation, searchValue }) => {
    const { data, loading } = useQuery(GET_MEMPOOL_TX_IDS);
    const [latestTransactions, setLatestTransactions] = useState<string[]>([])
    const handleRowPress = (id: string) => {
        navigation.navigate('Transaction', { transactionId: id });
    };

    useEffect(() => {
        if (data) {
            if (searchValue) {
                setLatestTransactions(prev => prev.filter(txid => txid.includes(searchValue)))
            } else {
                setLatestTransactions(data.getMempoolTxids.slice(0, 10));
            }
        }
    }, [data, searchValue])


    return (
        <View style={styles.tableContainer}>
            <Text style={styles.tableTitle} testID='t_latestTransactions'>Latest Transactions</Text>
            {loading ? <Text style={styles.loading}>Loading Blocks ...</Text> : null}
            {latestTransactions.length > 0 ? (
                <View style={styles.headerRow} testID='t_transactionsheader'>
                    <Text style={styles.headerText}>Transaction ID</Text>
                </View>
            ) : null}
            {latestTransactions.map((item) => (
                <TouchableOpacity
                    key={item}
                    testID='t_transaction-item'
                    style={styles.rowContainer}
                    onPress={() => handleRowPress(item)}
                >
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.rowText}>{item}</Text>
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
    loading: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10
    },
    tableTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
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
        flex: 1
    },
});

export default LatestTransactions;
