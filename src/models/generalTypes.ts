import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type T_Block = {
    id: string;
    height: number;
    tx_count: number;
}

export type T_Transaction = {
    txid: string;
    version: number;
    locktime: number;
    size: number;
    weight: number;
    fee: number;
    vin: {
        txid: string;
        vout: number;
    }[];
    vout: {
        value: number;
    }[];
    status: {
        confirmed: boolean;
        block_height: number;
        block_hash: string;
        block_time: number;
    }
}

export type LatestBlocksProps = {
    navigation: NavigationProp<RootStackParamList>;
    searchValue: string;
};

export type LatestTransactionsProps = {
    navigation: NavigationProp<RootStackParamList>;
    searchValue: string;
};

export type RootStackParamList = {
    Home: undefined;
    Block: { block: T_Block };
    Transaction: { transactionId: string };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type BlockScreenProps = NativeStackScreenProps<RootStackParamList, 'Block'>;
export type TransactionScreenProps = NativeStackScreenProps<RootStackParamList, 'Transaction'>;
