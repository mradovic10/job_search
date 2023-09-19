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
console.log(applications)

// Show the number of applications sent.
const appCount = document.getElementById('appCount');

appCount.innerHTML = applications.length;

// Show the number of interviews that occured.
const intCount = document.getElementById('intCount');

intCount.innerHTML = interviews.length;