// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// console.log(data);

function builddata(ufoSightings) {

tbody.html("");

data.forEach(function(ufoSightings) {
    // console.log(ufoSightings);
    const row = tbody.append("tr");
    Object.values(ufoSightings).forEach(function(value) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
}

builddata(tableData);

// Set filteredData to select filter button 
// add a filter object
//select the web user's input and the filter button

// Set filteredData to select filter button 
var filteredData = d3.select("#filter-btn");

filteredData.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
    
// Select the input element and get the raw HTML node
var inputElement = d3.select('#datetime', '#city', '#state', '#country', '#shape');

// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);

var filteredData = tableData.filter(row => row.datetime === inputValue);

console.log(filteredData);
});
