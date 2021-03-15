
const DB_USER='admin-pawananjani';
const PASS=encodeURIComponent('Kumar%40123');
module.exports = {
  DB_URI:  `mongodb+srv://${DB_USER}:${PASS}@cluster0.eidmm.mongodb.net/PortFolioDB?retryWrites=true&w=majority`,
  NAMESPACE: 'https://filipjerga.herokuapp.com'
}

