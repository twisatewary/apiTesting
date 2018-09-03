var updatedata=
{   id:1,
    name: 'john',
    age:24
}
var request=require('request');

describe("update request",function(){
    

    it("put",function(put){
          
        require('request').put({
            uri:"https://reqres.in/api/users/2",
            headers:{"contentType":"application/x-www-form-urlencoded"},
            body:require('querystring').stringify(updatedata)
            },function(err,res,body){
                console.log('error:',err);
                console.log('body:',body);
                console.log('status code:',res.statusCode);
                expect(res.statusCode).toBe(200);
                 var JsonObject=JSON.parse(body);
                  console.log(JsonObject);
               put();
            
        })

    })
})