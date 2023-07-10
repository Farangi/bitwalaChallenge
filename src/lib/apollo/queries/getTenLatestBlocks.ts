import { gql } from "@apollo/client";

export const GET_TEN_LATEST_BLOCKS = gql`
    query GetTenLatestBlocks {
        getTenLatestBlocks {
            id
            height
            tx_count
        }
    }
`
