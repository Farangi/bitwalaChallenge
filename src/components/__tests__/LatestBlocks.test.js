import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LatestBlocks from '../LatestBlocks';
import { ApolloProvider } from '@apollo/client';
import client from '../../lib/apollo/client';

describe('LatestBlocks', () => {
    const navigationMock = { navigate: jest.fn() };

    test('renders the component', () => {
        const { getByTestId } = render(
            <ApolloProvider client={client}>
                <LatestBlocks navigation={navigationMock} searchValue={''} />
            </ApolloProvider>
        );
        const latestBlocksComponent = getByTestId('t_latestBlocks');
        expect(latestBlocksComponent).toBeDefined();
    });

    test('clicks on the first block', async () => {
        const navigationMock = { navigate: jest.fn() };
        const { getByTestId, getAllByTestId } = render(
            <ApolloProvider client={client}>
                <LatestBlocks navigation={navigationMock} searchValue={''} />
            </ApolloProvider>
        );

        await waitFor(() => expect(getByTestId('t_blocksheader')).toBeDefined());

        const rows = getAllByTestId('t_block-item');
        if (rows.length) fireEvent.press(rows[0]);
    });
});
