const {dynamoDbClient} = require("../utils/config");


async function getItem(params) {
    try {
        const data = await dynamoDbClient.get(params).promise();
        return data.Item;
    } catch (err) {
        console.log("Error", err);
    }
}
async function putItem(params) {
    try {
        const data = await dynamoDbClient.put(params).promise();
        return data;
    } catch (err) {
        console.log("Error", err);
    }
}
//difining dynamodb scan operation
async function scanTable(params) {
    try {
        const data = await dynamoDbClient.scan(params).promise();
        return data.Items;
    } catch (err) {
        console.log("Error", err);
    }
}


async function insertMany (dictinary) {
    try {
       let i = 0;
    for (let item of dictinary) {
        if (i % 100 === 0) {
            console.log(i);
        }
        i++;
        const word = Object.keys(item)[0];
        const value =  Object.values(item)[0];
        const params = {
            TableName: "Dictionary",
            Item: { word,value },
        };
        await putItem(params);
    }
    console.log("finished upload"); 
    } catch (error) {
        throw new Error (error)
    }
}
module.exports={getItem,putItem,insertMany,scanTable}