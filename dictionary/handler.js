const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");
const app = express();

const DICTIONARY_TABLE = process.env.DICTIONARY_TABLE;
// const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
const dynamoDbClientParams = {};
if (process.env.IS_OFFLINE) {
  dynamoDbClientParams.region = 'localhost'
  dynamoDbClientParams.endpoint = 'http://localhost:4566'
}
const dynamoDbClient = new AWS.DynamoDB.DocumentClient(dynamoDbClientParams);

app.use(express.json());


app.get("/word/:word", async function (req, res) {
  const params = {
    TableName: DICTIONARY_TABLE,
    Key: {
      word: req.params.word,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { word, value } = Item;
      return res.json({  word, value });
    } else {
      return res
        .status(404)
        .json({ error: 'Could not find word with provided "word"' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not retreive word" });
  }
});



app.post("/word", async function (req, res) {
  const { word, value } = req.body;
  if (typeof word !== "string") {
   return res.status(400).json({ error: '"word" must be a string' });
  } else if (typeof value !== "object") {
    return res.status(400).json({ error: '"value" must be a object' });
  }

  const params = {
    TableName: DICTIONARY_TABLE,
    Item: {
      word,
      value,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    return res.json({word,value });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not create word" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
