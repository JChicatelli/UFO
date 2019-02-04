// from data.js
var tableData = data;
table = d3.select("tbody")
// YOUR CODE HERE!
d3.select("#filter-btn").on("click",function () {
    d3.event.preventDefault();
    table.text("");
    var date = d3.select("#datetime").property("value").trim();
    var city = d3.select("#city").property("value").trim();
    var state = d3.select("#state").property("value").trim();
    var country = d3.select("#country").property("value").trim();
    var shape = d3.select("#shape").property("value").trim();

    if (! date){date = /.*/;} else {date = new RegExp(date);}
    if (!city){ city = /.*/;} else {city = new RegExp(city);}
    if (!state){state = /.*/;} else {state = new RegExp(state);}
    if (!country){country = /.*/;} else {country = new RegExp(country);}
    if (!shape){shape = /.*/;} else {shape = new RegExp(shape);}

    console.log(`Date: ${date}`);
    console.log(`City: ${city}`);
    console.log(`State: ${state}`);
    console.log(`Country: ${country}`);
    console.log(`Shape: ${shape}`);

    tableData.forEach(data => {
        if (date.test(data.datetime) &&
        city.test(data.city) &&
        country.test(data.country) &&
        state.test(data.state) &&
        shape.test(data.shape)) {
            row = table.append("tr");
            Object.values(data).forEach(val => {
                row.append("td").text(val)
            } );
        }
    });
});