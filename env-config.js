const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-pawananjani.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-pawananjani.herokuapp.com',
  'process.env.CLIENT_ID': 'lzoT7lVqqQDGkCt9l9Lpf6fuLxtJUq9l'
}
