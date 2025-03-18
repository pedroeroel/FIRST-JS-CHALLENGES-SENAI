function calculateFreight() {
  let employees = parseInt(document.querySelector('#employees').value);
  let days = parseInt(document.querySelector('#days').value)

  let pricePerEmployee = (0 < employees && employees < 50) ? 4.50 : (employees < 100) ? 4.10 : (employees < 150) ? 3.8 : (employees >= 150) ? 3.6 : 0
  let finalPrice = days * (employees * pricePerEmployee)

  document.querySelector('#pricePerEmployee').value = '$ ' + pricePerEmployee.toFixed(2)
  document.querySelector('#result').value = '$ ' + finalPrice.toFixed(2)

  return;
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