require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
// const PASS_SECRET_CRYPTOJS = process.env.PASS_SECRET_CRYPTOJS;
// const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
// const JWT_RFR_SECRET_KEY = process.env.JWT_RFR_SECRET_KEY;
// const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
// const PAYSTACK_PUBLIC_KEY = process.env.PAYSTACK_PUBLIC_KEY;

module.exports = {
  MONGODB_URI,
  PORT,
};
