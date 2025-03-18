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