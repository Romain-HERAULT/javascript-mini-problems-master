# JAVASCRIPT MINI PROBLEMS
- Choose a problem and solve it in the `index.html` and `main.js` files ;)

## PROBLEM 1 :  THE TASK MANAGER

### Context :
You have to develop a task manager in javascript using the localstorage.

### Goal :
Create a simple web application :

- Add a new task
- Delete a task
- Mark a task as done
- Save the tasks in localstorage


### STEPS
#### Step 1: Creating the User Interface
- Design and structure a straightforward HTML/CSS user interface that includes an input field for tasks and a button to add them.

#### Step 2: Capturing DOM Elements
- Use JavaScript to capture necessary DOM elements such as the input field, add button, and task list.

#### Step 3: Adding a New Task
- Create a function that gets triggered upon the add button click, to create a new task using the input field value.

#### Step 4: Displaying Tasks
- Ensure each new task is displayed on the user interface, preferably in a list (`<ul>` or `<ol>`).

#### Step 5: Storing Tasks
- Store tasks in a JavaScript array to keep track of all added tasks.

#### Step 6: Deleting Tasks
- Add a delete button to each task and create a function that will remove the corresponding task from the UI and array when this button is clicked.

#### Step 7: Marking Tasks as Completed
- Add functionality to mark tasks as completed (perhaps by clicking on them), and visualize this on the UI (e.g., by striking through the task).

#### Step 8: Input Field Validation
- Ensure the input field is not empty before adding a task and display an error message if needed.

#### Step 9: Task Persistence
- Use `localStorage` to store tasks persistently in the user’s browser, so they are retrieved even after the page reloads.

#### Step 10: Testing and Debugging
- Perform testing to ensure all functionalities (adding, deleting, marking as completed, validating, and data persistence) work as expected and debug if necessary.
Each of these steps involves skills in DOM manipulation, event handling, and programming logic in JavaScript. Ensure students comprehend each step before moving to the next, building their confidence and understanding as they progress through the problem.







## PROBLEM 2 : THE SUBMARINES

### Problem statement
- Thanks to our mathematicians, the British have decrypted the entire German communication!
- Now we can spot the exact location of their submarines.
- You’ll be given an NxM matrix containing the allied ships and the enemy submarines.
- Tile description follows as:
```
*=empty
0=allied ship
1=enemy submarine
```
- Enemy submarines can shoot at 4 directions at once but they can’t hit more than one ship in a single direction.
- Enemy torpedos will ignore and pass thru enemy submarines.
- For every enemy submarine, calculate the count of allied ships it can hit and print the total.


### Example
```
**0*
1*10
**0*
0*0*
```

- There are 2 enemy submarines at coordinates (0,1) and (2,1).
- First submarine can hit 2 allied ships at locations (0,3) and (3,1).
- Second submarine can hit (2,0), (3,1) and (2,2). 2+3=5 allied ships at total, print 5.
- Notice how second submarine couldn’t hit the target at (2,3) because they can’t hit more than one ship in a single direction.

### STEPS

#### Step 1: Understand and Define the Problem
Ensure you fully understand the problem requirements, constraints, and desired outputs. Define your problem-solving approach, taking into account enemy submarines, allied ships, and empty tiles.

#### Step 2: Read and Parse the Input
Create a function to read the NxM matrix input. Parse the input into a data structure that allows you to determine the type of tile (empty, allied ship, or enemy submarine) at any (x, y) coordinate in the matrix.

#### Step 3: Identify Submarine Positions
Iterate through the matrix and find the positions of all enemy submarines (tiles marked with "1"). Store these positions for later use.

#### Step 4: Function to Calculate Hits
Create a function that, given the position of a submarine, calculates how many allied ships it can hit, considering the constraints provided. This function will need to check for hits in all four directions (up, down, left, right).

#### Step 5: Handle Multiple Ship Constraints
In the function created in step 4, ensure that it respects the constraint that only one allied ship can be hit in each direction. If the function finds one allied ship, it should not look further in that direction.

#### Step 6: Ignoring Enemy Submarines
Ensure your function from step 4 ignores enemy submarines when counting potential hits. It should not consider an enemy submarine as an obstacle and torpedoes should pass through them.

#### Step 7: Aggregate Hits
Iterate through all identified submarine positions and use the function from step 4 to calculate the total number of allied ships that can be hit by each submarine. Sum up these values to get the total number of potential hits.

#### Step 8: Validate Solution
Create some test cases with known solutions to validate the functionality of your program. Ensure that it can handle various scenarios and edge cases, respecting all the given constraints.

#### Step 9: Optimize if Necessary
If the solution from step 7 is not efficient enough for larger matrices, look for optimization opportunities, such as avoiding recalculating hits in the same direction for different submarines or using more efficient data structures.

#### Step 10: Output and Document
Ensure your solution provides output in the format requested in the problem statement. Additionally, document your code properly to explain the logic and any assumptions made, ensuring it is understandable to others and yourself in the future.