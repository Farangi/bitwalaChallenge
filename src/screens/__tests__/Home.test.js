import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ApolloProvider } from '@apollo/client';
import client from '../../lib/apollo/client';
import Home from '../Home';

describe('Home', () => {
    const navigationMock = { navigate: jest.fn() };

    test('renders the component', () => {
        const { getByTestId } = render(
            <ApolloProvider client={client}>
                <Home navigation={navigationMock} />
            </ApolloProvider>
        );
        expect(getByTestId('t_home')).toBeDefined();
    });

    test('clears the search input when the Clear button is pressed', () => {
        const { getByPlaceholderText, getByText } = render(
            <ApolloProvider client={client}>
                <Home navigation={navigationMock} />
            </ApolloProvider>
        );
        const inputElement = getByPlaceholderText('Enter Block ID / Transaction ID');
        fireEvent.changeText(inputElement, 'example');
        expect(inputElement.props.value).toBe('example');
        const clearButton = getByText('Clear');
        fireEvent.press(clearButton);
        expect(inputElement.props.value).toBe('');
    });

    test('renders child components with correct props', () => {
        const { getByTestId } = render(
            <ApolloProvider client={client}>
                <Home navigation={navigationMock} />
            </ApolloProvider>
        );
        const latestBlocksComponent = getByTestId('t_latestBlocks');
        const latestTransactionsComponent = getByTestId('t_latestTransactions');

        expect(latestBlocksComponent).toBeDefined();
        expect(latestTransactionsComponent).toBeDefined();
    });
});
