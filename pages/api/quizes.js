import jsdom from 'jsdom'

export default async function(request, response){

  const res = await fetch('https://aluraquiz-base.alura-challenges.vercel.app/contribuidores')
  const text = await res.text()

  let dom = new jsdom.JSDOM(text)
  let data = dom.window.document.querySelectorAll('.exWsLd a')

  response.json(data)

}