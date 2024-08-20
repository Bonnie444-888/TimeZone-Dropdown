function ShowTimeZone(event) {
  if (event.target.value === "paris") {
    let parisTimeZone = moment()
      .tz("Europe/Paris")
      .format("dddd, MMMM D, YYYY h:mm A");
    alert(`It is ${parisTimeZone} in Europe/Paris `);
  }
  if (event.target.value === "tokyo") {
    let tokyoTimeZone = moment()
      .tz("Asia/Tokyo")
      .format("dddd, MMMM D, YYYY h:mm A");
    alert(`It is ${tokyoTimeZone} in Asia/Tokyo `);
  }
  if (event.target.value === "sydney") {
    let sydneyTimeZone = moment()
      .tz("Australia/Sydney")
      .format("dddd, MMMM D, YYYY h:mm A");
    alert(`It is ${sydneyTimeZone} in Australia/Sydney `);
  }
}

let countrySelected = document.querySelector("#cities");
countrySelected.addEventListener("change", ShowTimeZone);
