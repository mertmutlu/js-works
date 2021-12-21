var http=require('http');
var fs=require('fs');
function myFunc(request,response){
    if(request.url=='/'){
        /*
        console.log(request);
        response.writeHeader(200,{'Context-Type':'text-plain'});
        response.write('<html><body><h1>Mert ilk http denemesiiii</h1></body></html>');
        response.end();   
        */
       fs.createReadStream('./javascript-giris.html').pipe(response);
    }
    else {
        response.writeHeader(404,{'Context-Type':'text-plain'});
        response.write('Hatali Sayfa');
        response.end();
    }
}
http.createServer(myFunc).listen(8000);
console.log('sunucu çalışıyor');