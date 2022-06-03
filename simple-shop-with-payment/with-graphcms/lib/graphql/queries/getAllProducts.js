import {gql} from 'graphql-request';

export default gql `
    query MyQuery{
        products{
            id
            name
            slug
            price
            images {
                id
                url
            }
        }
    }
    `;