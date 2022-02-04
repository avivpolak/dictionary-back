const DICTIONARY_TABLE = process.env.DICTIONARY_TABLE;

const createTableParams = {
    AttributeDefinitions: [
        {
            AttributeName: "word",
            AttributeType: "S",
        },
    ],
    KeySchema: [{ AttributeName: "word", KeyType: "HASH" }],
    TableName: DICTIONARY_TABLE,
    ProvisionedThroughput: {
        ReadCapacityUnits: 25,
        WriteCapacityUnits: 25,
    },
};

const queryParams = (word) => {
 return {
    TableName: DICTIONARY_TABLE,
    Key: {
      word,
    },
  };
    
};

//defining dynamoDb scan query params
const scanParams = (limit) => {
    return {
        TableName: DICTIONARY_TABLE,
        Limit: limit
    };
};

const putItemParams = {
    Item: {
        word: {
            S: "Somewhat",
        },
        pos: {
            S: "n.",
        },
        definitions: {
            L: "Call Me Today",
        },
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "Dictionary",
};

module.exports = { queryParams, createTableParams, putItemParams, scanParams };
