var request = require('request');
var jasmine=require('jasmine');
describe("Using api",function(){

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    });

    it("getting test data",function(done){

        request('http://localhost:60971/api/Product/', function (error, response, body) {
           console.log('error:', error); // Print the error if one occurred
           console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
           console.log('body:', body); // Print the HTML for the Google homepage.
            var JSONObject = JSON.parse(body);
            console.log(JSONObject);
            expect(response.statusCode).toBe(200);
            done();
    });
  })

   var postData={
    Id:3,
	Name:"Postman"
    };
   
     it("post",function(post){
        require('request').post({
            uri:'http://localhost:60971/api/Product/',
            headers:{'content-type': 'application/x-www-form-urlencoded'},
            body:require('querystring').stringify(postData)
            },function(err,res,body){
                console.log('error:',err);
                console.log('body:',body);
                console.log('status code:',res.statusCode);
                expect(res.statusCode).toBe(204);
               /* var JsonObject=JSON.parse(body);
                 console.log(JsonObject);*/
              post();

});
    })
      var updatedata={
        Id:1,
        Name:"Hii"
        };

    it("put",function(put){
          
        require('request').put({
            uri:'http://localhost:60971/api/Product/1',
            headers:{'content-type': 'application/x-www-form-urlencoded'},
            body:require('querystring').stringify(updatedata)
            },function(err,res,body){
                console.log('error:',err);
                console.log('body:',body);
                console.log('status code:',res.statusCode);
                expect(res.statusCode).toBe(204);
                 //var JsonObject=JSON.parse(body);
                 // console.log(JsonObject);
               put();
        })
        
    });
        
       it("delete",function(del){
             require('request').delete({
            uri:"http://localhost:60971/api/Product/2",
            headers:{'content-type': 'application/x-www-form-urlencoded'},
            body:require('querystring').stringify()
            },function(err,res,body){
                console.log('error:',err);
                console.log('body:',body);
                console.log('status code:',res.statusCode);
                expect(res.statusCode).toBe(204);
                 //var JsonObject=JSON.parse(body);
                 // console.log(JsonObject);
                 del();

 
       })
    });
    it("getting test data",function(done1){

        request('http://localhost:60971/api/Product/', function (error, response, body) {
           console.log('error:', error); // Print the error if one occurred
           console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
           console.log('body:', body); // Print the HTML for the Google homepage.
            //var JSONObject = JSON.parse(body);
            //console.log(JSONObject);
            expect(response.statusCode).toBe(200);
            done1();
    });
  })
   

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});


});