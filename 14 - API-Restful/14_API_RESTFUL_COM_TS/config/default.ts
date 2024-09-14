const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@udemy.p7dyt.mongodb.net/?retryWrites=true&w=majority&appName=udemy`,
};
