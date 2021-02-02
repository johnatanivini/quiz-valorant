import Error from '../components/Error/Error'

function Custom404 () {
  return <Error statusCode='404' statusText='Ops, não conheço este mapa!' />
}

export default Custom404
