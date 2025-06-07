
function isEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(email);
}


function isStrongPassword(pwd) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pwd);
}


$("#submit").click(function () {
  let empfield = "";
  let errormsg = "";

  
  $("#errors").html("");
  $("#success").html("");

  
  const email = $("#Email").val().trim();
  const phone = $("#phone").val().trim();
  const pass = $("#pass").val();
  const confirmPass = $("#Confirm-pass").val();

  
  if (email === "") empfield += "<p>Please enter your email.</p>";
  if (phone === "") empfield += "<p>Please enter your phone number.</p>";
  if (pass === "") empfield += "<p>Please enter your password.</p>";
  if (confirmPass === "") empfield += "<p>Please confirm your password.</p>";

  
  if (email && !isEmail(email)) {
    errormsg += "<p>Invalid email format.</p>";
  }

  if (phone && !/^\d{10}$/.test(phone)) {
    errormsg += "<p>Phone number must be exactly 10 digits.</p>";
  }

  if (pass && !isStrongPassword(pass)) {
    errormsg += "<p>Password must be at least 8 characters, include uppercase, lowercase, and a number.</p>";
  }

  if (pass && confirmPass && pass !== confirmPass) {
    errormsg += "<p>Passwords do not match.</p>";
  }

  
  if (empfield || errormsg) {
    $("#errors").html('<div class="errorBox">' + empfield + errormsg + "</div>");
  } else {
    $("#success").html('<div class="successBox">Your entry was registered successfully!</div>');
  }
});


$("#togglePassword").on("change", function () {
  const passField = $("#pass");
  const type = this.checked ? "text" : "password";
  passField.attr("type", type);
});


$("#phone").on("input", function () {
  
  this.value = this.value.replace(/\D/g, "");
  
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10);
  }
});

