const paypal = require("paypal-rest-sdk");

// Cấu hình PayPal SDK
paypal.configure({
  mode: "sandbox", // Thay đổi thành "live" nếu bạn muốn chạy trong môi trường sản xuất
  client_id: "YOUR_CLIENT_ID", // Thay thế bằng Client ID của bạn
  client_secret: "YOUR_CLIENT_SECRET", // Thay thế bằng Client Secret của bạn
});

module.exports = paypal;
