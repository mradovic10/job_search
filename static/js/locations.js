// // API Link
// var url = 'https://api.jsonbin.io/v3/b/650dd2bf54105e766fb842dd/latest';

// d3.json(url).then(function(data) {

//     let apps = data.record.applications;




//     let locationsList = [];

// for (let i = 0; i < apps.length; i++) {
//     locationsList.push(apps[i].location);
// };

// console.log('Locations:', locationsList);

// // Create function to remove unknown data (data = '?') from a list, in addition to international locations.
// function removeUnknown(x) {
//     return x != '?' && x != 'France' && x != 'Singapore' && x != 'UK' && x != 'Ireland';
// };

// // Remove unknown and international locations from locationsList.
// let newLocationsList = locationsList.filter(removeUnknown);

// console.log('Locations Filtered:', newLocationsList);

// // Changing Ohio cities to just Ohio, in addition to the name of Washington, D.C. to reflect how it is written in statesData.

// for (let i = 0; i < newLocationsList.length; i++) {
//     if (newLocationsList[i].includes('OH')) {
//         newLocationsList.splice(i, 1, 'Ohio');
//     };
//     if (newLocationsList[i].includes('Washington, D.C.')) {
//         newLocationsList.splice(i, 1, 'District of Columbia');
//     };
// };

// console.log('Locations Filtered and Updated for Ohio and D.C.:', newLocationsList);

// // Sort the locations alphabetically.
// newLocationsList.sort();

// console.log('Locations Sorted:', newLocationsList);

// // Find all unique locations.
// const uniqueLocations = new Set(newLocationsList);

// console.log('Unique Locations:', uniqueLocations);

// // Find count of each location. Add the types and their counts to popularTypes and popTypeCounts lists, respectively.

// let allLocations = [];
// let allLocCounts = [];

// uniqueLocations.forEach((location) => {
//     const start = newLocationsList.indexOf(location);
//     const end = newLocationsList.lastIndexOf(location);
//     const count = end - start + 1;
//     allLocations.push(location);
//     allLocCounts.push(count);
// });

// //console.log('Locations:', allLocations);
// //console.log('Counts:', allLocCounts);

// var locationsObj = {};

// allLocations.forEach((k, i) => {
//     locationsObj[k] = allLocCounts[i]
// });

// console.log('HERE: ' + locationsObj);



// });