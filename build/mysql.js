var express = require('express')
var mysql = require("mysql");
var bodyparser = require("body-parser");
var app=express();
//数据库部分
var client=mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"111",
     port:3306,
     database:"zhz"//数据库名字
});
client.connect();

app.use(bodyparser.urlencoded({extended:true})); //body_parser是接收post数据用的通过body
//res.body
app.use(express.static("./"));
//
/*app.set("views","./views");
app.engine('ejs', ejs.__express);
app.set('view engine', 'ejs');*/

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
});

//登录post提交方式
//登录
/*app.post("/login",function(req,res,next){
    //console.log(req.route)
    console.log(req.body);
   console.log(req.body.number+","+req.body.password);
    client.query("select * from new where username = '"+req.body.number+"' and password='"+req.body.password+"'",function(err,reslt){

        console.log(reslt);
        if(reslt.length > 0){
            console.log(1);
            res.jsonp("1");
        }else{
            console.log(0);
            res.jsonp("0");
        }
    })
});*/

//注册
app.post("/regist",function(req,res,next){
    console.log(req.body);
    /*client.query("insert into logins(emails,phone,pwd) values('"+req.body.emails+"','"+req.body.phone+"','"+req.body.pwd+"')",function(err,reslt){
        console.log(reslt);
        if(reslt){//返回值不是一个数组
        console.log(1);
            res.jsonp("1");
        }else{
           console.log(0);
            res.jsonp("0");
        }
    

    })*/
});



app.listen(3006,function(){
    console.log("连接成功");
});