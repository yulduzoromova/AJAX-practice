'use strict'

const uzs = document.querySelector('#uzs'),
usd = document.querySelector('#usd')

uzs.addEventListener('input', (e) => {
  const request = new XMLHttpRequest()

  request.open('GET', 'json/current.json')
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
  request.send()

  request.addEventListener('readystatechange', () => {
    if (request.status === 200 && request.readyState === 4) {
      const data = JSON.parse(request.response)
      usd.value = (+uzs.value / data.current.usd).toFixed(2)
    } else {
      usd.value = 'Something went wrong'
    }
  })
})

