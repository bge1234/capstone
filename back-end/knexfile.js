module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/moveit'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
