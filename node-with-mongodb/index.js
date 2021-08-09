// U72Dvntrc5dUHu5p
const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://NodeJsPractice:U72Dvntrc5dUHu5p@cluster0.wngqq.mongodb.net/NodeJsPractice?retryWrites=true&w=majority";
// const mongodbCompassUri = "mongodb+srv://NodeJsPractice:U72Dvntrc5dUHu5p@cluster0.wngqq.mongodb.net/test";
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err) => {
    const MyDataBase = client.db("NodeJsPractice")
    const collection = MyDataBase.collection("Practice");
    if (err) {
        console.log("connection Fail");
    }
    else {
        console.log("connection success");
        // InsertData(collection);
        // DeleteData(collection);
        // DeleteAllData(collection);
        // FindOneWithOutCondition(collection);
        // FindOneWithCondition(collection);
        // FindAllData(collection);
        // FindAllDataByProjection(collection);
        // FindAllDataByQuery(collection);
        // FindAllDataByLimit(collection);
        // FindAllDataBySort(collection);
        // UpdataMyData(collection);
        // CreateMyCollection(MyDataBase);
        // DeleteMyCollection(MyDataBase);
    }

});


const InsertData = (MyMongoClient) => {
    const MyData = { name: "Aslam", Roll: "01", Class: "Honous", City: "Gazipur" };
    MyMongoClient.insertOne(MyData, (error) => {
        if (error) {
            console.log("Data insert fail");
        }
        else {
            console.log("Data insert success");
        }
    })
}


const DeleteData = (MyMongoClient) => {
    const DeleteItem = { Roll: "01" };
    MyMongoClient.deleteOne(DeleteItem, (error) => {
        if (error) {
            console.log("Data delete fail");
        }
        else {
            console.log("Data delete success");
        }
    })
}


const DeleteAllData = (MyMongoClient) => {
    MyMongoClient.deleteMany((error, ResultObj) => {
        if (error) {
            console.log("Data deleteAll fail");
        }
        else {
            console.log("Data deleteAll success", ResultObj);
        }
    })
}

const FindOneWithOutCondition = (MyMongoClient) => {
    const FindObj = {};
    MyMongoClient.findOne(FindObj, (error, ResultObj) => {
        if (error) {
            console.log("Data Find Default fail");
        }
        else {
            console.log("Data Find Default 1st data success", ResultObj);
        }
    })
}

const FindOneWithCondition = (MyMongoClient) => {
    var FindObj = { name: "Aslam" };
    MyMongoClient.findOne(FindObj, (error, ResultObj) => {
        if (error) {
            console.log("Data Find fail");
        }
        else {
            console.log("Data Find success", ResultObj);
        }
    })
}

const FindAllData = (MyMongoClient) => {
    MyMongoClient.find().toArray((error, ResultObj) => {
        if (error) {
            console.log("Data FindAll fail");
        }
        else {
            console.log("Data FindAll success", ResultObj);
        }
    })
}

const FindAllDataByProjection = (MyMongoClient) => {
    const ItemObj = {};
    const ItemPorjection = { projection: { name: '', Roll: '' } };

    MyMongoClient.find(ItemObj, ItemPorjection).toArray((error, result) => {
        if (error) {
            console.log("Data FindAllDataByProjection fail");
        }
        else {
            console.log("Data FindAllDataByProjection success", result);
        }

    })
}

const FindAllDataByQuery = (MyMongoClient) => {
    const Query = { Class: "Honous" };

    MyMongoClient.find(Query).toArray((error, result) => {
        if (error) {
            console.log("Data FindAllDataByQuery fail");
        }
        else {
            console.log("Data FindAllDataByQuery success", result);
        }
    })
}

const FindAllDataByLimit = (MyMongoClient) => {
    MyMongoClient.find().limit(2).toArray((error, result) => {
        if (error) {
            console.log("Data FindAllDataByLimit fail");
        }
        else {
            console.log("Data FindAllDataByLimit success", result);
        }
    })
}

const FindAllDataBySort = (MyMongoClient) => {
    var SortPattern = { Roll: -1 }

    MyMongoClient.find().sort(SortPattern).toArray( (error, result) =>{
        if (error) {
            console.log("Data FindAllDataBySort fail");
        }
        else {
            console.log("Data FindAllDataBySort success", result);
        }
    })
}

const UpdataMyData = (MyMongoClient) => {
    const myquery = { Roll: '02' };
    const newValues = { $set: { name: "Rock Star" } };
    MyMongoClient.updateOne(myquery, newValues,  (error, result) => {
        if (error) {
            console.log("Data updata fail");
        }
        else {
            console.log("Data updata success", result);
        }
    })
}

const CreateMyCollection = (MyDataBase) =>{
    MyDataBase.createCollection("darkList", (error, result) =>{
        if (error) {
            console.log("Data CreateMyCollection fail");
        }
        else {
            console.log("Data CreateMyCollection success", result);
        }
    })
}

const DeleteMyCollection = (MyDataBase)=>{
    MyDataBase.dropCollection("darkList", (error, result) => {
        if (error) {
            console.log("Data DeleteMyCollection fail");
        }
        else {
            console.log("Data DeleteMyCollection success", result);
        }
    })
}

