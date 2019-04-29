const config ={
	port:3000,//启动端口
	//数据库配置
	database:{
		host: 'localhost',
		user: 'root',
		password: 'root',
		database:'wxair', // 前面建的user表位于这个数据库中
		port:3306,
	}
}
module.exports = config