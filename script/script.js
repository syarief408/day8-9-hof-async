let hamburgerIsOpen = false;

function openHamburger() {
  let hamburgerNavContainer = document.getElementById(
    "hamburger-nav-container"
  );

  if (hamburgerIsOpen) {
    hamburgerNavContainer.style.display = "none";
    hamburgerIsOpen = false;
  } else {
    hamburgerNavContainer.style.display = "block";
    hamburgerNavContainer.style.backgroundColor = "red";
    hamburgerIsOpen = true;
  }
}

const sendingMessage = () => {
  const name = document.getElementById("input-name").value;
  const gmail = document.getElementById("input-gmail").value;
  const phoneNumber = document.getElementById("input-phoneNumber").value;
  const subject = document.getElementById("input-subject").value;
  const message = document.getElementById("input-message").value;

  if (name === "") {
    return alert(`Name can not empty !`);
  }
  if (gmail === "") {
    return alert(`Gmail can not empty !`);
  }
  if (phoneNumber === "") {
    return alert("Phone number can not empty !");
  }
  if (subject === "") {
    return alert("Subject can not empty !");
  }
  if (message === "") {
    return alert("Message can not empty");
  }

  const emailTo = `syarief@gmail.com`;

  const linkA = document.createElement("a");

  linkA.href = `mailto:${emailTo}?subject=${subject}&body=Hello, i'm ${name}, ${message}, please contact me at ${phoneNumber}`;

  linkA.click();

  alert("Your message has been sent successfully");

  let data = {
    name,
    gmail,
    phoneNumber,
    subject,
    message,
  };

  console.log(data);
};

$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});
