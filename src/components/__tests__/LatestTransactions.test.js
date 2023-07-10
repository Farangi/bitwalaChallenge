import { ApolloProvider } from '@apollo/client';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import client from '../../lib/apollo/client';
import LatestTransactions from '../LatestTransactions';

describe('LatestTransactions', () => {
    const navigationMock = { navigate: jest.fn() };

    test('renders the component', () => {
        const { getByTestId } = render(
            <ApolloProvider client={client}>
                <LatestTransactions navigation={navigationMock} searchValue={''} />
            </ApolloProvider>
        );
        const latestTransactionsComponent = getByTestId('t_latestTransactions');
        expect(latestTransactionsComponent).toBeDefined();
    });

    test('clicks on the first transaction', async () => {
        const navigationMock = { navigate: jest.fn() };
        const { getByTestId, getAllByTestId } = render(
            <ApolloProvider client={client}>
                <LatestTransactions navigation={navigationMock} searchValue={''} />
            </ApolloProvider>
        );

        // need to manually increase the timeout because of GET_MEMPOOL_TX_IDS taking time to resolve
        await waitFor(() => expect(getByTestId('t_transactionsheader')).toBeDefined(), {
            interval: 50,
            timeout: 5000
        });

        const rows = getAllByTestId('t_transaction-item');
        if (rows.length) fireEvent.press(rows[0]);
    });
});
