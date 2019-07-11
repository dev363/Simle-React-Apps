const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();

var mysql = require('mysql');
app.set('view engine','jade');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

// var con = mysql.createConnection({
// 	host :'localhost',
// 	user :'root',
// 	password :'',
// 	database :'rect1'
// });

const PORT = 8060;
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// app.post('/login',function(req,res){
// 	var username = req.body.uname;
// 	var password = req.body.psw;
	
// 	var sql="select * from login where username='"+req.body.uname+"' and psw='"+req.body.psw+"'";
// 	con.query(sql,(err,rows)=> {
// 	   if (err) throw err;
// 	   if(rows.length > 0){
// 	   res.json(rows);
// 	   }
// 	   else
// 	   {
// 		   console.log('wrong username Password');
// 	   }
// 	});
// });

// app.get('/getproducts',function(req,res){

// 	var sql="select * from product";
// 	con.query(sql, (err,rows) => {
// 		if(err) throw err;
// 		res.json(rows);
// 	});
// });
// app.post('/delete/:id',function(req,res) {
	
// 	const id=req.params.id;
// 	console.log(id);
// 	const query=`delete from product where product.id=${id}`;
// 	con.query(query, (err,rows) => {
// 		if(err) throw err;
// 		res.json(rows);
// 	});
// });

app.post('/add-product',function(req,res){
	console.log(req.files.image);
  // const pro_name = req.body.pro_name;
  // const details = req.body.details;
  // const imageFile = req.files.image;
  // const time = req.body.time;
  // con.query(
  //   `INSERT INTO product values("${pro_name}", "${details}", "${time}.jpg")`,
  //   (err, res) => {
  //     if (err) throw err;
  //   }
  // );
  
  
  // imageFile.mv(`./../public/${req.body.time}.jpg`, function(err) {
  //   if (err) {
  //     return res.status(500).send(err);
  //   }

  //   res.json({ file: `public/${req.body.filename}.jpg` });
  // });
	
});

app.listen(PORT,function(){
	console.log('Server running on port:',PORT);
});