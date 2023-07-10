import { gql } from '@apollo/client';

export const GET_TRANSACTION = gql`
  query GetTransaction($txid: String!) {
    getTransaction(txid: $txid) {
      txid
      version
      locktime
      size
      weight
      fee
      vin {
        txid
        vout
      }
      vout {
        value
      }
      status {
        confirmed
        block_height
        block_hash
        block_time
      }
    }
  }
`;