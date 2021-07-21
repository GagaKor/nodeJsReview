var { response } = require('express');
const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('node Js 서버 시작 포트 8080')
});
app.get('/', function(reqeust, response){
    response.sendFile(__dirname+'/index.html')
});
app.get('/beauty', function(reqeust, response){
    response.send('뷰티용품 페이지')
});
app.get('/pet', function(reqeust, response){
    response.send('펫 용품 페이지')
});
