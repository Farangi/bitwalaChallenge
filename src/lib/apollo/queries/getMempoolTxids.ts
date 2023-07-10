import { gql } from "@apollo/client";

export const GET_MEMPOOL_TX_IDS = gql`
    query GetMempoolTxids {
        getMempoolTxids
      }
`
