// from data.js
var tableData = data;
// var columns = ["Date/Time", "City", "State", "Country", "Shape", "Comment"]

// YOUR CODE HERE!
// Get a reference to append the table to web page
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

tableData.forEach((ufo_sightings) => {
    var row = tbody.append("tr");
    Object.entries(ufo_sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

// // 14-Intro-To-JavaScript/3/Activities/09-Par_Form_Filter
// // Select the button
var button = d3.select("#filter-btn");
// // Select the form
var form = d3.select("#form");

// // // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// // // Complete the event handler function for the form
function runEnter() {

//   // Prevent the page from refreshing
  d3.event.preventDefault();
  
// //   // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

// //   // Get the value property of the input element
  var inputValue = inputElement.property("value");

// // Print the value to the console
  console.log(inputValue);

  var filteredData = tableData.filter(data => data.datetime === inputValue);
  console.log(filteredData);
  console.log(tableData);

// // // Then, select the unordered list element by class name
  var list = d3.select("tbody");

// // remove any children from the list to
    list.html("");
  
// // Step 5: append table for each value
filteredData.forEach(function(selections) {
  console.log(selections);
  var row = tbody.append("tr");
  Object.entries(selections).forEach(function([key, value]) {
    console.log(key, value);
//     // Append a cell to the row for each value
//     // in the UFO Sightings object
    var cell = row.append("td");
    cell.text(value);
    });
});
}
