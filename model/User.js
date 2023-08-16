const mysql = require("mysql");

// mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
  port: 3306,
});

// mysql 접속 확인
conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connect");
});

// 2개의 매개변수를 받음
// req.body를 data로 받고
exports.post_signup = (data, callback) => {
  const query = `INSERT INTO user (userid, pw, name) VALUES('${data.userid}','${data.pw}','${data.name}') `;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signup", rows);
    callback();
  });
};

// 로그인
exports.post_signin = (data, callback) => {
  const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signin", rows);
    callback(rows);
  });
};

// 프로필
exports.post_profile = (data, callback) => {
  const query = `SELECT * FROM user WHERE userid='${data.profile}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_profile", rows);
    callback(rows);
  });
};

exports.edit_profile = (data, callback) => {
  const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}',name='${data.name}' WHERE id=${data.id}`;
  conn.query(query, (err, rows) => {
    callback();
  });
};

exports.delete_profile = (id, callback) => {
  const query = `DELETE from user WHERE id=${id}`;
  conn.query(query, (err, rows) => {
    callback();
  });
};
