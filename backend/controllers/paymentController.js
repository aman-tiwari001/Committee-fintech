const Razorpay = require("razorpay");

// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({
  key_id: "rzp_test_ApfDwyyDcj8yjg", // not storing in .env because then koi aur clone karke
  key_secret: "LjNVF22GEvBF2BeL4DyY1xuf", // run karega to error ayega
});

async function createOrder(req, res) {
  const { amount, email } = req.body;

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: email,
  };

  razorpayInstance.orders.create(options, (err, order) => {
    if (err) {
      res.status(500).json({ error: err });
    }
    res.status(200).json({ ...order });
  });
}

module.exports = createOrder;
