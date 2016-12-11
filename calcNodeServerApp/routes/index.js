var express = require('express');
var router = express.Router();

var soap = require('soap');

var baseURL = "http://localhost:8080/calculatorWebService/services";

/* GET home page. */
router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Calculator' });
	});

router.post('/calc', function(req, res, next) {

	var option = {
			ignoredNamespaces : true	
	};

	var url = baseURL+"/CalcSoap?wsdl";




	
//	console.log("inside function");
	var temp1 = req.body.num1;
//	var num1 = req.param('num1');
	var temp2 = req.body.num2;
	var opr = req.body.operation;
	var result;
	
	var num1 = Number(temp1);
	var num2 = Number(temp2);
	
	var args = {n1: num1 ,n2: num2};


	// console.log(num1);
	// console.log(num2);
	// console.log(opr);
	// console.log(typeof num1);


	if((isNaN(Number(num1) && isNaN(Number(num2))))){
		res.send({"msg" : "Invalid"});
	}else{


		soap.createClient(url,option, function(err, client) {
		switch(opr){

			case '+':
				client.add(args, function(err, result) {
			    	  if(result){
			    		  res.send({"result" : result.addReturn});
			    	  }
			    	  else{
			    		  res.send({statusCode:401});
			    	  }
	     		 });
				break;
			case '-':
				client.subtract(args, function(err, result) {
			    	  if(result){
			    		  res.send({"result" : result.subtractReturn});
			    	  }
			    	  else{
			    		  res.send({statusCode:401});
			    	  }
	     		 });
				break;
			case '*':
				client.multiply(args, function(err, result) {
			    	  if(result){
			    		  res.send({"result" : result.multiplyReturn});
			    	  }
			    	  else{
			    		  res.send({statusCode:401});
			    	  }
	     		 });
				break;
			case '/':

				if(num2 === 0){
					res.send({"result" : null});
				}else{
				client.divide(args, function(err, result) {
			    	  if(result){
			    		  res.send({"result" : result.divideReturn});
			    	  }
			    	  else{
			    		  res.send({statusCode:401});
			    	  }
	     		 });
				}
				break;	
		}		

		});
	}	
	
	



	
	
});


module.exports = router;




