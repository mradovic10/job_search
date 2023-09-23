// API Link
const url = 'https://api.jsonbin.io/v3/b/650dd2bf54105e766fb842dd/latest';

// Fetch the JSON data and log it in the console to look over.
//d3.json(url).then(function(data) {
//    console.log('JSON data:', data);
//});

// UPDATE TIME
// Function to get the current date and time.
function getCurrentDateAndTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString();
};

// Target an HTML element to display the current date and time.
const dateDisplay = document.getElementById('dateContainer');

// Set the innerHTML of the element to the current date and time returned by the function.
dateDisplay.innerHTML = getCurrentDateAndTime();

// Fetch the JSON data.
d3.json(url).then(function(data) {

    // Create variables to represent the 'applications' array and 'interviews' array.
    let apps = data.record.applications;
    let ints = data.record.interviews;

    // APPLICATIONS COUNT
    // Show the number of applications sent.
    const appCount = document.getElementById('appCount');
    appCount.innerHTML = apps.length;

    console.log('Number of Applications:', apps.length)

    // INTERVIEWS COUNT
    // Show the number of interviews that occured.
    const intCount = document.getElementById('intCount');
    intCount.innerHTML = ints.length;

    console.log('Number of Interviews:', ints.length)

    // MOST POPULAR FIELDS
    // Loop through 'applications' and add each row's field, type, and location to their respective lists.
    let fieldsList = [];
    let typesList = [];
    let locationsList = [];

    for (let i = 0; i < apps.length; i++) {
        fieldsList.push(apps[i].field);
        typesList.push(apps[i].type);
        locationsList.push(apps[i].location);
    };

    console.log('Fields:', fieldsList);
    console.log('Job Types:', typesList);
    console.log('Locations:', locationsList);

    // Create function to remove unknown data (data = '?') from a list.
    function removeUnknown(x) {
        return x != '?';
    };

    // Remove unknown fields from fieldsList.
    let newFieldsList = fieldsList.filter(removeUnknown);

    console.log('Fields Filtered:', newFieldsList)

    // Sort the fields alphabetically.
    newFieldsList.sort();

    console.log('Fields Sorted:', newFieldsList);

    // Find all unique fields.
    const uniqueFields = new Set(newFieldsList);

    console.log('Unique Fields:', uniqueFields);

    // Find count of each field. Add the most popular fields and their counts to popularFields and popFieldCounts lists, respectively.
    popularFields = [];
    popFieldCounts = [];

    uniqueFields.forEach((field) => {
        const start = newFieldsList.indexOf(field);
        const end = newFieldsList.lastIndexOf(field);
        const count = end - start + 1;
        if (count >= 10) {
            popularFields.push(field);
            popFieldCounts.push(count);
        };
    });

    console.log('Fields:', popularFields);
    console.log('Counts:', popFieldCounts);

    // Trace for most popular fields.
    let trace1 = {
        x: popularFields,
        y: popFieldCounts,
        type: "bar"
    };

    // Data trace array.
    let trace1Data = [trace1];

    // Apply title and y-axis title to the layout.
    let layout1 = {
        title: 'Most Popular Industries',
        yaxis: {
            title: 'Number of Applications'
        }
    };

    // Render the plot to the div tag with id "fieldBar".
    Plotly.newPlot("fieldBar", trace1Data, layout1);

    // JOB TYPES
    // Sort the types alphabetically.
    typesList.sort();

    console.log('Types Sorted:', typesList);

    // Find all unique types.
    const uniqueTypes = new Set(typesList);

    console.log('Unique Types:', uniqueTypes);

    // Find count of each type. Add the types and their counts to popularTypes and popTypeCounts lists, respectively.
    allTypes = [];
    allTypeCounts = [];

    uniqueTypes.forEach((type) => {
        const start = typesList.indexOf(type);
        const end = typesList.lastIndexOf(type);
        const count = end - start + 1;
        allTypes.push(type);
        allTypeCounts.push(count);
    });

    console.log('Types:', allTypes);
    console.log('Counts:', allTypeCounts);

    // Trace for all types.
    let trace2 = {
        x: allTypes,
        y: allTypeCounts,
        type: "bar"
    };

    // Data trace array.
    let trace2Data = [trace2];

    // Apply title and y-axis title to the layout.
    let layout2 = {
        title: 'Job Types',
        yaxis: {
            title: 'Number of Applications'
        }
    };

    // Render the plot to the div tag with id "typeBar".
    Plotly.newPlot("typeBar", trace2Data, layout2);

    // MAP
    

    // Remove unknown locations from locationsList.
    let newLocationsList = locationsList.filter(removeUnknown);

    console.log('Locations Filtered:', newLocationsList)

    // Sort the locations alphabetically.
    newLocationsList.sort();

    console.log('Locations Sorted:', newLocationsList);

    // Find all unique locations.
    const uniqueLocations = new Set(newLocationsList);

    console.log('Unique Locations:', uniqueLocations);

    // Find count of each location. Add the types and their counts to popularTypes and popTypeCounts lists, respectively.
    allLocations = [];
    allLocCounts = [];

    uniqueLocations.forEach((location) => {
        const start = typesList.indexOf(location);
        const end = typesList.lastIndexOf(location);
        const count = end - start + 1;
        allLocations.push(location);
        allLocCounts.push(count);
    });

    console.log('Locations:', allLocations);
    console.log('Counts:', allLocCounts);





    var map = L.map('map').setView([37.8, -96], 4);

    // Add a tile layer.
    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.geoJson(statesData).addTo(map);





});
