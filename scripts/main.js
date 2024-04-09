var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "http://www.example.com",
  width: 256,
  height: 256,
  colorDark: "#000000", 
  colorLight: "#fffff0",
  correctLevel: QRCode.CorrectLevel.H
});
