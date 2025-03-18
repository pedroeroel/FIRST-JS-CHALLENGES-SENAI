function calculateFinalSalary() {
  let salary = parseFloat(document.querySelector('#salary').value);
  let extraHours = parseFloat(document.querySelector('#extraHours').value);
  let weekendExtraHours = parseFloat(document.querySelector('#weekendExtraHours').value);

  let finalSalary = salary + ((salary / 200) * (extraHours + (weekendExtraHours * 1.5)));

  document.querySelector('#result').value = '$ ' + finalSalary.toFixed(2);
  document.querySelector('#hoursResult').value = '$ ' + ((salary / 200) * extraHours).toFixed(2);
  document.querySelector('#weekendHoursResult').value = '$ ' + ((salary / 200) * (weekendExtraHours * 1.5)).toFixed(2);

  console.log(salary);
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