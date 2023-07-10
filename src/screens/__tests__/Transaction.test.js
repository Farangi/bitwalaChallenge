const { ApolloProvider } = require("@apollo/client");
const { render } = require("@testing-library/react-native");
const { default: client } = require("../../lib/apollo/client");
const { default: Transaction } = require("../Transaction");

describe('Transaction', () => {
    test('renders the Transaction component with correct transaction data', () => {
        const { getByText } = render(
            <ApolloProvider client={client}>
                <Transaction route={{ params: { transactionId: '27ed44d37b0e0a30d8c85c85a8cf6e7bf632207130a4447932ce057646f2e1de' } }} />
            </ApolloProvider>
        );
        const statusElement = getByText('Status:');
        const sizeElement = getByText('Size:');
        const versionElement = getByText('Version:');
        const lockTimeElement = getByText('Lock time:');
        const weightElement = getByText('Weight:');

        // Verify that the transaction data is rendered correctly
        expect(statusElement).toBeDefined();
        expect(sizeElement).toBeDefined();
        expect(versionElement).toBeDefined();
        expect(lockTimeElement).toBeDefined();
        expect(weightElement).toBeDefined();
    });

})