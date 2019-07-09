// server.js

const express = require('express');  
var ObjectId = require('mongodb').ObjectID;
const path = require('path');
var cors = require('cors')

var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var db = require( './db' );

const users = require('./user');
const products = require('./products');

const app = express();  
const port = process.env.PORT || 8050;
var bodyParser=require('body-parser');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'uploads')));

app.get('/', function(req,res){
  res.json({status:200, message:"Api working"});
  res.end();
});
// Admin Login post data
app.post('/login', function(req, res) {
  console.log(req.body)
  user={email:req.body.username,password:req.body.password}
  users.login(user,function(err,result){
    if(err) res.status(404).json({message:"Not found"});
    res.json(result);
  });
    res.json({data:"hello"});
});

// Logout Admin
app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
});

// Add new product page
app.get('/add-product',
  function(req, res) {
    res.render('add-product');
});

// Edit product page
app.get('/edit-product/:id',
  function(req, res) {
    products.getProducts({_id:ObjectId(req.params.id)},function(err,result){
      // console.log(result);
      res.render('edit-product',{product:result[0]});
    });
});

// Add-edit post data
app.post('/add-product',upload.single('image'), function (req, res, next) {
    var data=req.body;
    if(data.title){
      if(req.file){
        data.image=req.file.filename;
      }
      if(req.body._id){

        let id={_id:ObjectId(req.body._id)};
        delete data._id;

        products.updateOne(id,data, function(err, result) {
          if (err) { 
            req.flash('error', 'Product not update.') ;
          }
          data=null;
          res.redirect('/');
        });

      }else{
        products.insertOne(data, function(err, result) {
          if (err) { 
            req.flash('error', 'Product not added.') ;
          }else{
            req.flash('success', 'Product added successfully.');
          }
          data=null;
          res.redirect('add-product');
        });
      }

    }else{
      data=null;
       req.flash('warning', 'All fields required.');
       res.render('add-product');
    }
    
});

// delte product 
app.get('/del-product/:id',
  // require('connect-ensure-login').ensureLoggedIn(),
  function(req, res) {
    products.deleteOne({_id:ObjectId(req.params.id)},function(err,result){
      res.redirect('/');
    });
});

app.get('/frontend',
  function(req, res) {
    products.getProducts(null,function(err,result){
      req.session.email="hgglkm";
    console.log(req.session);
    console.log(req.session.email);
    res.render('frontend',{products:result});
  });

});

app.get('/add-to-cart',
  function(req, res) {
    console.log(req.session);
    console.log(req.session.email);

});


db.connectToServer( function( err ) {
  const server = app.listen(port, function() {  
    console.log('Server listening on port ' + port);
  });
})
