## Step One: Define the Problem
The goal is to create a feature that: 

* Combines two calendar arrays into a single merged calendar using the spread operator.
* Converts date and time values into a readable format using the DateJS library.

Calendars often handle large datasets with varied information (i.e., events, dates, times). By using JavaScript modules and modern syntax, we can write code that is reusable, easy to maintain, and scalable for future features.

## Step Two: Design and Develop the Code

### Create Two Calendar Arrays

Open the index.js file and define two arrays, each representing a different calendar.

Each array should contain objects with two keys: 

date: A string representing the event's date and time in ISO format.
event: A string describing the event.

```
const calendarA = [{"date": "2024-06-15T12:00:00", "event":"Wedding"}, {"date": "2024-07-03T19:00:00", "event":"Dinner Reservations"}, {"date": "2024-07-20T08:00:00", "event":"Doctors Appointment"}];

const calendarB = [{"date": "2024-05-15T09:00:00", "event":"Interview"}, {"date": "2024-06-22T20:00:00", "event":"Concert"}, {"date": "2024-07-01T14:00:00", "event":"Coffee Date"}];

function mergeCalendars(c1, c2){
    // We will write code here later
	return()
}

console.log("Welcome to flatcalendar!");
```

Explanation: Each array represents a unique calendar. These datasets will later be merged into one comprehensive calendar.

### Write a Function to Merge Arrays

Add a function named mergeCalendars that takes two parameters: c1 and c2 (representing the two calendars).
Inside the function, use the spread operator (...) to combine the two arrays into a new array.
Return the new array.

```
function mergeCalendars(c1, c2) {
  return [...c1, ...c2]; // Combine arrays using the spread operator
}
```

Explanation: The spread operator allows us to deconstruct both arrays and create a new array with all the elements from c1 and c2. This approach is concise, readable, and efficient.

### Merge and Log the Combined Calendar

Call the mergeCalendars function, passing in calendarA and calendarB as arguments.
Store the returned array in a variable named newCalendar.
Use console.log to print the merged calendar and verify the results. 

```
const calendarA = [{"date": "2024-06-15T12:00:00", "event":"Wedding"}, {"date": "2024-07-03T19:00:00", "event":"Dinner Reservations"}, {"date": "2024-07-20T08:00:00", "event":"Doctors Appointment"}];


const calendarB = [{"date": "2024-05-15T09:00:00", "event":"Interview"}, {"date": "2024-06-22T20:00:00", "event":"Concert"}, {"date": "2024-07-01T14:00:00", "event":"Coffee Date"}];

function mergeCalendars(c1, c2){
    // We will write code here later
	const newCalendar = [...c1, ...c2]
	return newCalendar
}

const newCalendar = mergeCalendars(calendarA,calendarB)

console.log(newCalendar)

console.log("Welcome to flatcalendar!");
```

Explanation: At this point, you should see both calendar datasets combined into a single array. This sets the foundation for the next steps, where we’ll format the dates.

### Install and Import the DateJS Module

In the previous steps, we successfully combined two calendar arrays into one. However, one challenge remains: the dates in the merged calendar are in ISO format (e.g., 2024-07-03T19:00:00), which is not user-friendly. Making dates more readable is a common problem in coding and can be a pain point for many developers.

To solve this, we’ll convert the ISO date strings into a more human-readable format, such as 07:00PM July 3rd, 2024. While this might seem daunting, we can use the popular DateJS module to simplify the task.

Install DateJS: open the terminal in your flatcalendar directory and run the following command: 

`npm install datejs`

Import DateJS: Add the following line at the top of your index.js file to load the library: 

`require('datejs');`

Explanation: Handling dates is a recurring challenge in development, and many developers struggle with parsing and formatting date-time values. Using a well-established library like DateJS helps simplify these tasks and ensures consistency across your application.

### Create a Function to Format Dates

Add a new function named readCalendarDates that accepts one parameter: calendar.

Inside the function, use a forEach loop to iterate through the calendar array.

For each event, use Date.parse and the .toString method to format the date.

```
require('datejs');

const calendarA = [{"date": "2024-06-15T12:00:00", "event":"Wedding"}, {"date": "2024-07-03T19:00:00", "event":"Dinner Reservations"}, {"date": "2024-07-20T08:00:00", "event":"Doctors Appointment"}];

const calendarB = [{"date": "2024-05-15T09:00:00", "event":"Interview"}, {"date": "2024-06-22T20:00:00", "event":"Concert"}, {"date": "2024-07-01T14:00:00", "event":"Coffee Date"}];

function mergeCalendars(c1, c2){
    // We will write code here later
	const newCalendar = [...c1, ...c2]
	return newCalendar
}

const newCalendar = mergeCalendars(calendarA,calendarB)

console.log(newCalendar)


console.log("Welcome to flatcalendar!");

function readCalendarDates(calendar){
	calendar.forEach(item => {
console.log(Date.parse(item.date).toString("hh:mmtt MMMM dS, yyyy"))
})
}

readCalendarDates(newCalendar)
```

Explanation:

The forEach loop processes each object in the calendar array.
The Date.parse method converts the ISO date string into a Date object.
The .toString method formats the date into a readable string (i.e., "07:00PM July 3rd, 2024").

## Step Three: Testing and Debugging

Test each function as you write it by using console.log() to display outputs at key points.

Ensure that: 
* The arrays are merged correctly.
* Dates are formatted as expected.

Debugging Tip: If the formatted dates don't display correctly, double-check: 
* That DateJS is installed and imported correctly.
* The syntax in the .toString method.

## Step Four: Document and Maintain

Add comments to your code to explain the purpose of each function and variable and how or why modules and the spread operator are used. 

It can be overwhelming using a new JS module, make sure to spend some time reading the documentation of it as they are powerful tools that can help simplify our lives.
