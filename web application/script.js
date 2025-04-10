// Load schedule from XML
function loadSchedule() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const xmlDoc = this.responseXML;
    const events = xmlDoc.getElementsByTagName("event");
    const list = document.getElementById("event-list");
    list.innerHTML = "";
    for (let i = 0; i < events.length; i++) {
      const name = events[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
      const time = events[i].getElementsByTagName("time")[0].childNodes[0].nodeValue;
      list.innerHTML += `<li><strong>${name}</strong> – ${time}</li>`;
    }
  };
  xhttp.open("GET", "schedule.xml", true);
  xhttp.send();
}

// Simple form submission
document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("thanksMessage").style.display = "block";
  this.reset();
});
