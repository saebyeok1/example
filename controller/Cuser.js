const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  //post signup은 DB에 저장만 해주면 됨 -> model에서 작성
  // 그 데이터들이 req.body에 담겨서 옴
  //
  User.post_signup(req.body, () => {
    res.send({ result: true });
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  //model과 연결되는 것 작성
  // rows값이 result로 들어감
  User.post_signin(req.body, (result) => {
    console.log(result);
    if (result.length > 0) {
      res.send({ result: true, data: result[0] });
    } else {
      res.send({ result: false, data: null });
    }
  });
};

// req는 profile을 받음
exports.post_profile = (req, res) => {
  console.log(req.body);
  ``;
  User.post_profile(req.body, (result) => {
    if (result.length > 0) {
      // 페이지 전송 방식은 render를 사용가능
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("/user/signin");
    }
  });
};

exports.edit_profile = (req, res) => {
  console.log(req.body);
  // req.body로 데이터값을 받아서 model로 그대로 보내서 model에서 데이터를 처리해주는 방식
  User.edit_profile(req.body, () => {
    res.send({ result: true });
  });
};

exports.delete_profile = (req, res) => {
  User.delete_profile(req.body.id, () => {
    res.send({ result: true });
  });
};
