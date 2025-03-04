Fetch Tasks Data
use a GET Request in App.js to tasks end-point in our json server.
keep data in Parent Component App.js
  

TaskList
 we'll want to display all the tasks in our app. Pass down the task data from App to TaskList, and display each task using the Task component.

Task
Set up the Task component so that it shows the task's text and category.

Add a delete button in the same div.

When the delete button is clicked, Send a DELETE request to our server and also the task should be removed from the list(without a refresh).

CategoryFilter
copy and paste  ["All", "Code", "Food", "Money", "Misc"] set to categories state.

Pass the list of categories to this component from App. Then, update this component to display <button> elements for each category. 

When a button is clicked, the following should happen:

Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned. The selected classname should have some css to make selected button pop out in contrast to the others. 
The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
If the button for "All" is selected, all the tasks should be displayed.

NewTaskForm
Pass the list of categories to this component from App.  This component will display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task.

Next, update this form to be a controlled component, so that all form inputs are captured in state.

When the form is submitted, add a new task to the list with the text and category from the form. The form submition will trigger a POST request to the server.

EditTaskForm
 create a controller form and Send a Patch request to the json-server with the new data.
 This component will display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when updating a new task      .
