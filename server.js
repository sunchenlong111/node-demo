var http = require('http')
var fs = require('fs')
var url = require('url')
<<<<<<< HEAD

var port = process.env.PORT || 8888;
// var port = process.argv[2]

// if(!port){
//   console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
//   process.exit(1)
// }

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if (pathWithQuery.indexOf('?') >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
  }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
=======
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
>>>>>>> 3dcdb51beb3c33c2463f8f24cb7e6c966f92817c
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/




<<<<<<< HEAD
  if (path === '/') {
    var string = fs.readFileSync('./index.html', 'utf8')
    var amount = fs.readFileSync('./db', 'utf8') //同步读一个文件
    string = string.replace('&&&amount&&&', amount)
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write(string)
    response.end()
  } else if (path === '/style.css') {
    var string = fs.readFileSync('./style.css', 'utf8')
    response.setHeader('Content-Type', 'text/css')
    response.write(string)
    response.end()
  } else if (path === '/main.js') {
    var string = fs.readFileSync('./main.js', 'utf8')
    response.setHeader('Content-Type', 'application/javascript')
    response.write(string)
    response.end()
  } else if (path === '/pay') {
    var amount = fs.readFileSync('./db', 'utf8') //同步读一个文件
    var newAmount = amount - 1
    fs.writeFileSync('./db', newAmount)
    response.setHeader('Content-Type', 'application/javascript')
    response.statusCode = 200
    response.write(` 
       ${query.callback}.call(undefined,'success')
       `)
    //说明jack的后端要对frank的前端代码细节要很熟悉
    //解耦
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-type', 'text/html;charset=utf-8')
    response.write('找不到对应的路径')
    response.end()
  }



=======

  console.log('Along说：得到 HTTP 路径\n' + path)
  
  
    if(path === '/'){
    var string = fs.readFileSync('./index.html','utf8')
    var amount = fs.readFileSync('./db','utf8')//同步读一个文件
    string=string.replace('&&&amount&&&',amount)
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write(string)
    response.end()
  }else if( path === '/style.css'){
    var string = fs.readFileSync('./style.css','utf8')
    response.setHeader('Content-Type', 'text/css')
    response.write(string)
    response.end()
  }else if( path === '/main.js'){
    var string = fs.readFileSync('./main.js','utf8')
    response.setHeader('Content-Type', 'application/javascript')
    response.write(string)
    response.end()
  }else if(path === '/pay' && method.toUpperCase()==='POST'){
     var amount = fs.readFileSync('./db','utf8')//同步读一个文件
     var newAmount = amount - 1
     fs.writeFileSync('./db',newAmount)
     response.write('success!')
     response.end()
  }
  else{
    response.statusCode = 404
    response.setHeader('Content-type','text/html;charset=utf-8')
    response.write('找不到对应的路径')
    response.end()
  }	

  
  
>>>>>>> 3dcdb51beb3c33c2463f8f24cb7e6c966f92817c









  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
<<<<<<< HEAD
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
=======
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


>>>>>>> 3dcdb51beb3c33c2463f8f24cb7e6c966f92817c
