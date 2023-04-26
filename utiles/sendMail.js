export default function sendMail(id, product) {
  (function () {
    emailjs.init("pajDbC8NWgRvMqeKH"); //please encrypted user id for malicious attacks
  })();
  //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
  const templateParams = {
    to_name: "Estimado Administrador",
    id,
    ramo,
    to_email: "marcelo.campana@icloud.com",
  };

  emailjs.send("service_70jjprq", "template_x1adbs7", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
