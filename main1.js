btn.addEventListener('click', (e) => {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      console.log('请求响应完毕了')
      if (xhr.status === 200) {
        console.log('请求成功')
        console.log(xhr.responseText)
        let parser = new DOMParser()
        let xmlDoc = parser.parseFromString(xhr.responseText,"text/html")
        let title = xmlDoc.getElementsByTagName('heading')[0].textContent
        console.log(title)
      } else if(xhr.status >= 400){
        console.log('请求失败')
      }
    }
  }
  xhr.open('GET', '/xxx')
  xhr.send()
})