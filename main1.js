// window.jQuery = function (nodeOrSelector) {
//   let nodes = {}
//   nodes.addClass = function () {}
//   nodes.html = function () {}
//   return nodes
// }
// window.$ = window.jQuery


// window.jQuery.ajax = function ({url,method,body,successFn,failFn,headers}) {

  
//   // let url = options.url
//   // let method = options.method
//   // let body = options.body
//   // let successFn = options.successFn
//   // let failFn = options.failFn
//   // let headers = options.headers
//   // //es6解构赋值
//   // let {url,method,body,successFn,failFn,headers} = options

//    // if(arguments.length === 1){
//    //   url = options.url
//    // }else if(arguments.length === 2){
//    //   url = arguments[0]
//    //   options = arguments[1]
//    // }
//    //如何设置接受两种参数

//   let request = new XMLHttpRequest()
//   request.open(method, url)
  
//   //设置请求头
//   for(let key in headers){
//     let value = headers[key]
//     request.setRequestHeader(key,value)
//   }

//   request.onreadystatechange = () => {
//     if (request.readyState === 4) {
//       if (request.status >= 200 && request.status < 300) {
//         successFn.call(undefined, request.responseText)
//       } else if (request.status >= 400) {
//         failFn.call(undefined, request)
//       }
//     }
//   }
//   request.send(body)
// }

// function success(responseText){
//   console.log(responseText)
// }
// function fail(request){
//   console.log(request)
// }

btn.addEventListener('click', (e) => {
    $.ajax({
      url: '/xxx',
      type: 'get',
    }).then((responseText)=>{
      console.log(responseText)
      return responseText
    },(request)=>{
      console.log(request)
      return '已经处理'
    }).then((上一次处理的结果)=>{
      console.log(上一次处理的结果)//上一次处理的结果就是第一个then返回的responseText
    },(request)=>{
      console.log(request)
    })
})