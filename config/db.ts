import mysql from "mysql";
const pool = mysql.createPool({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "India@100",
  port: Number(process.env.PORT) || 3306,
  database: process.env.DATABASE || "test",
});
pool.getConnection((err) => {
  if (err) {
    console.log("error connecting to db", err.stack);
    process.exit(1);
  }
  console.log("Connected to db...");
});

const excuteQuery = (query: any, arrayParams: any) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrayParams, (err, data) => {
        if (err) {
          console.log("error excuting the query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};
export default excuteQuery;
