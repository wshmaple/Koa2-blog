const mysql = require('mysql')
const MYSQL_CONFIG = require ('../config/default')

// mysql
const pool = mysql.createPool(MYSQL_CONFIG.database);
// query sql 语句入口
const query = (sql,val)=>{
	return new Promise((resolve,reject)=>{
		pool.getConnection(function(err,connection){
			if(err){
				reject(err);
			}
			else{
				connection.query(sql,val,(err,fields)=>{
					if(err) 
					{
						reject(err);
					}
					else
					{
						//console.log(fields);
						resolve(fields);
					}
					connection.release();
				})
			}
		})
		console.log(pool._allConnections.length); // 连接池里的连接数
	});
}
let selectData = function(value){
	let _sql = "select * from t_admin";
	return query(_sql);
}
module.exports ={
	query,
	selectData
}