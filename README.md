

## Simple Todo App with Recoil

This is a simple React application that allows users to manage a list of todos. The app includes features such as adding todos, searching for content within todos, and utilizes Recoil for state management.


**Features:**

 - Add Todo
   Users can input a title and description for a todo.
  Clicking the "Add Todo" button will add the todo to the list.
 - Search Todos
     Users can input a search term to filter todos.
    The list will dynamically update to show only the todos that match the search term.

**Technologies Used:**

 - React
 - Recoil (for state management)

  

## Getting Started

**Clone the Repository**

    git clone https://github.com/svk091/simple-todo-app.git
    
    cd simple-todo-app
**Install Dependencies**

    npm install


**Run the Application**

    npm run dev

  

## Usage


**Add Todo**
Enter a title and description in the respective input fields.
Click the "Add Todo" button.

**Search Todos**

Enter a search term in the search input.

The list will update to show only the todos containing the search term.

  

## Project Structure


**src Directory**

Contains the source code for the React application.

  

**components Directory**

Holds the different components used in the app, such as AddTodoForm and FilteredTodos.

  

**store Directory**

Includes Recoil atoms and selectors for managing state.