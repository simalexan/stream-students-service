const ApiBuilder = require('claudia-api-builder');
const api = new ApiBuilder();

const fs = require('fs');

api.get('/students', function (req){
  return ['Hello from our Students API'];
});

api.get('/students/{studentId}', function (request){
  return 'Here is the student with ID' + request.pathParams.studentId;
});

api.get('/bass-bulu', function (request){

   return new Promise(function (resolve, reject){

	  fs.readFile('index.html', 'utf-8', function (error, htmlFileContents) {
	      if (error) {
		    reject(error);
		  } else {
	         resolve(htmlFileContents);
		  }
	  })
   });
}, {success: { contentType: 'text/html' }});

module.exports = api;
