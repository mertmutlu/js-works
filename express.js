var express =require('express');
var app=express();
var fs=require('fs');

app.get('/listele',function(req,res){
    //res.send('kullanıcıları listeleyen çağrı');
    fs.readFile('kullanici.json','utf8',function(err,data){
        console.log(data);
        res.end(data);
    });

})

app.get('/ekle',function(req,res){
    //res.end('kullanıcı ekleyen çağrı');
var yenikullanici={
    "k3" :  {
        "isim": "esin albakir",
        "sifre": 789,
        "email": "esin@xyz.com"
    }
};
fs.readFile('kullanici.json','utf8',function(err,data){
    data = JSON.parse(data);
    data["k3"]=yenikullanici["k3"];
    console.log(data);
    //res.end(data);
    res.end(JSON.stringify(data));

    fs.writeFile('kullanici.json',JSON.stringify(data),function(err){
        console.log('bir hata olustu')
        });
    });
});

app.get('/sil',function(req,res){
    res.end('kullanıcı silen çağrı');
    fs.readFile('kullanici.json','utf8',function(err,data){
        data = JSON.parse(data);
        //data["k3"]=yenikullanici["k3"];
        var id="k" + req.query.id;
        delete data[id];
        console.log(data);
        //res.end(data);
        res.end(JSON.stringify(data));
    
        fs.writeFile('kullanici.json',JSON.stringify(data),function(err){
            console.log('bir hata olustu')
            });
        });
});

app.get('/sorgula',function(req,res){
    res.end('kullanıcı sorgulayan çağrı');
});

var server=app.listen(8000,function(){
    console.log('sunucu calisiyor');
});