var postData={
    id:1,
	name:"user",
	location:"hyderabad"
};

var request = require('request');

describe("posting data",function(){

    it("post",function(post){
        require('request').post({
            uri:"https://reqres.in/api/users",
            headers:{'content-type': 'application/x-www-form-urlencoded'},
            body:require('querystring').stringify(postData)
            },function(err,res,body){
                console.log('error:',err);
                console.log('body:',body);
                console.log('status code:',res.statusCode);
                expect(res.statusCode).toBe(201);
                /*var JsonObject=JSON.parse(body).data;
                 console.log(JsonObject);*/
               post();
            
          });

    });

});
