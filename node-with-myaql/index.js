var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'student'
});

connection.connect( error => {
    if(error){
        console.log("Conncetion Fail");
    }
    else{
        console.log("conncetion success");
        // InsertData(connection);
        // DeleteDataByID(connection);
        // updateData(connection);
        selectData(connection);
    }
});

const InsertData = (connection) =>{
    let SQLQuery = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('rakib','03','Ten','01751149979','Dhaka')"
    connection.query(SQLQuery, (error) =>{
        if(error){
            console.log("Data insert file");
        }
        else{
            console.log('Data insert success');
        }
    })
};

const DeleteDataByID = (connection) =>{
    let SQLQuery = "DELETE FROM `students_list` WHERE `id` = '01'"
    connection.query(SQLQuery, (error) =>{
        if(error){
            console.log("Data delete file");
        }
        else{
            console.log('Data delete success');
        }
    });
};

const updateData = (connection) =>{
    let SQLQuery = "UPDATE `students_list` SET `name`='Habibur Rahman',`roll`='04',`class`='Nine',`phone`='0299384829',`city`='Gazipur' WHERE `id` = '03'"
    connection.query(SQLQuery, (error) =>{
        if(error){
            console.log("Data update file");
        }
        else{
            console.log('Data update success');
        }
    });
}

const selectData = (connection) =>{
    let SQLQuery = "SELECT * FROM `students_list`"
    connection.query(SQLQuery, (error, result) =>{
        if(error){
            console.log("Data select file");
        }
        else{
            console.log('Data select success');
            console.log(result);
        }
    });
}