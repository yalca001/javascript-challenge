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
function dateclick() {
    var date = d3.select("#datetime").property("value");
    console.log(date);
    var filterdata = tableData;
    // console.log(filterdata);
    finaldata = filterdata.filter(row => row.datetime === date);
console.log(finaldata);

builddata(filterdata);
}

d3.selectAll('#filter-btn').on('click', dateclick);
