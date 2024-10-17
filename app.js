Q1
function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTime").textContent = dateTimeString;
}

// Update the date and time every second
setInterval(displayDateTime, 1000);

Q2
// Function to get the current month in words
function alertCurrentMonth() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()]; // getMonth() returns 0 for January, 1 for February, etc.
    alert("The current month is: " + currentMonth);
}

// Call the function to display the alert
alertCurrentMonth();


Q3
// Function to get the first 3 letters of the current day
function alertCurrentDay() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = new Date();
    const currentDay = days[currentDate.getDay()]; // getDay() returns 0 for Sunday, 1 for Monday, etc.
    alert("The first 3 letters of the current day are: " + currentDay);
}

// Call the function to display the alert
alertCurrentDay();


Q4
// Function to check if today is Saturday or Sunday and display a message
function displayFunDayMessage() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // getDay() returns 0 for Sunday, 6 for Saturday

    if (currentDay === 0 || currentDay === 6) { // 0 = Sunday, 6 = Saturday
        document.getElementById("message").textContent = "It’s Fun day!";
    } else {
        document.getElementById("message").textContent = "It’s not Fun day.";
    }
}

// Call the function to display the message
displayFunDayMessage();
