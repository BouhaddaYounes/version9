
const sql = require('mssql/msnodesqlv8')
  var config = {
   
    server: "localhost",
    user: "app",
   
    password: "123",
    database: "my_db",
    port:1433,
    
   
        options: {
           encrypt: false, 
    trustServerCertificate: true
        }

  };
  const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}