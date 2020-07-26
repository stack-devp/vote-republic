const mysql = require('serverless-mysql')

console.log('process.env.MYSQL_HOST', process.env.MYSQL_HOST)
const db = mysql({
    
  config: {
    host: 'sql12.freesqldatabase.com',
    database: 'sql12352696',
    user: 'sql12352696',
    password: 'QBbQQJeA7L'
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}