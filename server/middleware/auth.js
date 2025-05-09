const jwt = require ('jsonwebtoken');

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    console.log(token)
    if (token && isCustomAuth) {      
     decodedData = jwt.verify(token, secret);
      // console.log(token)
     
      // req.userId = decodedData?.id;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {auth} ;