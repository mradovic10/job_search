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

// Preview 'Applications' json file in console.
console.log('Applications:', applications)

// Preview 'Interviews' json file in console.
console.log('Interviews:', interviews)

//APPLICATIONS COUNT
// Show the number of applications sent.
const appCount = document.getElementById('appCount');

appCount.innerHTML = applications.length;

// INTERVIEWS COUNT
// Show the number of interviews that occured.
const intCount = document.getElementById('intCount');

intCount.innerHTML = interviews.length;

// MOST POPULAR FIELDS
// Loop through applications table and add each field to fieldsList.
let fieldsList = [];

for (let i = 0; i < applications.length; i++) {
    fieldsList.push(applications[i].field);
};

console.log('Fields:', fieldsList);


// Create function to remove unknown fields (field = '?') from fieldsList.
function removeUnknown(field) {
    return field != '?';
};

// Remove unknown fields from fieldsList.
let newFieldsList = fieldsList.filter(removeUnknown);

console.log('Filtered:', newFieldsList)

// Sort the fields alphabetically.
newFieldsList.sort();

console.log('Sorted:', newFieldsList);

// Find all unique fields.
const uniqueFields = new Set(newFieldsList);

console.log('Unique fields:', uniqueFields);

// Find count of each field. Add the most popular fields and their counts to popularFields and popFieldCounts lists, respectively.
popularFields = [];
popFieldCounts = [];

uniqueFields.forEach((field) => {
    const start = newFieldsList.indexOf(field);
    const end = newFieldsList.lastIndexOf(field);
    const count = end - start + 1;
    console.log(field, ':', count);
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
    title: 'Most Popular Fields',
    yaxis: {
        title: 'Number of Applications'
    }
};

// Render the plot to the div tag with id "fieldBar".
Plotly.newPlot("fieldBar", trace1Data, layout1);

// JOB TYPES
// Loop through applications table and add each job type to typesList.
let typesList = [];

for (let i = 0; i < applications.length; i++) {
    typesList.push(applications[i].type);
};

console.log('Job Types:', typesList);

// Sort the types alphabetically.
typesList.sort();

console.log('Sorted:', typesList);

// Find all unique types.
const uniqueTypes = new Set(typesList);

console.log('Unique types:', uniqueTypes);

// Find count of each type. Add the types and their counts to popularTypes and popTypeCounts lists, respectively.
popularTypes = [];
popTypeCounts = [];

uniqueTypes.forEach((type) => {
    const start = typesList.indexOf(type);
    const end = typesList.lastIndexOf(type);
    const count = end - start + 1;
    console.log(type, ':', count);
    if (count >= 10) {
        popularTypes.push(type);
        popTypeCounts.push(count);
    };
});

console.log('Types:', popularTypes);
console.log('Counts:', popTypeCounts);

// Trace for all types.
let trace2 = {
    x: popularTypes,
    y: popTypeCounts,
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