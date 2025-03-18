function calculateNewSalary() {
  let salary = document.querySelector('#salary').value

  if (salary <= 1200) {
    newSalary = salary * 1.16;
  } else if (salary <= 2100) {
    newSalary = salary * 1.13;
  } else if (salary <= 3000) {
    newSalary = salary * 1.10;
  } else {
    newSalary = salary * 1.05;
  }

  document.querySelector('#newSalary').value = '$ ' + parseFloat(newSalary).toFixed(2)

}

function getCurrentDateTime() {
  const now = new Date();
  
  const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
  };
  
  const formattedDateTime = now.toLocaleString("en-US", options);
  return formattedDateTime;

}

document.querySelector('#about').value = getCurrentDateTime()

function updateDateTime() {
  const now = new Date();

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDateTime = now.toLocaleString("en-US", options);
  document.getElementById("about").textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 60000);