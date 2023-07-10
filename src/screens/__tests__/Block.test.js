import { render } from '@testing-library/react-native';
import Block from '../Block';


describe('Block', () => {
    const mockBlock = {
        id: '12345',
        tx_count: 10,
        height: 1000,
    };

    test('renders the Block component with correct block data', () => {
        const { getByText } = render(<Block route={{ params: { block: mockBlock } }} />);
        const blockIdElement = getByText('Block ID:');
        const transactionCountElement = getByText('Transaction Count:');
        const heightElement = getByText('Height:');

        expect(blockIdElement).toBeDefined();
        expect(transactionCountElement).toBeDefined();
        expect(heightElement).toBeDefined();
    });

    test('displays the correct values for block data', () => {
        const { getByText } = render(<Block route={{ params: { block: mockBlock } }} />);
        const blockIdValueElement = getByText('12345');
        const transactionCountValueElement = getByText('10');
        const heightValueElement = getByText('1000');

        expect(blockIdValueElement).toBeDefined();
        expect(transactionCountValueElement).toBeDefined();
        expect(heightValueElement).toBeDefined();
    });
})
