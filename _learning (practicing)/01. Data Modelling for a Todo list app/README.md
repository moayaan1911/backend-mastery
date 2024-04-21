<!-- @format -->

## README.md for Data Modelling for a Todo List App

# Data Modelling for a Todo List App

This project provides a basic implementation of data models using Mongoose for a Todo List application. It is designed to help beginners understand the fundamentals of data modelling and how it is done in a Node.js environment with MongoDB as the database.

## Features

- 📝 **Simple and Clear Models**: The `users.models.js`, `todos.models.js`, and `sub_todos.models.js` files define clear and concise Mongoose schemas for the application's data structure.

- 🔗 **Relationships and References**: Demonstrates the use of Mongoose's `ref` to create relationships between different data models, allowing for a structured and relational approach to data.

- 🕒 **Timestamps**: Each todo item schema includes automatic timestamps, providing created and updated time records for better data tracking.

- 🛠️ **Scalable Structure**: The modular structure of the models directory makes it easy to understand and expand upon, perfect for those looking to build upon a solid foundation.

## Getting Started

To get started with this example, you will need to have Node.js and MongoDB installed on your system. Clone the repository, navigate to the project's root directory, and install the required dependencies:

```bash
npm install
```

Once the dependencies are installed, you can start exploring the models and how they are structured. Feel free to modify the schemas to experiment with different data types and relationships.

## Understanding the Models

The `todos.models.js` file, as shown in the context provided, creates a schema for todo items. Each todo has a title, content, a reference to the user who created it (`createdBy`), and an array of sub-todos (`subTodos`). This structure allows for a nested list of todos, where each todo can have its own sub-tasks.

The `users.models.js` and `sub_todos.models.js` files follow a similar pattern, defining the necessary fields and relationships for the user and sub-todo models, respectively.

## Contributing

Contributions to this project are welcome. If you have suggestions on how to improve the models or the documentation, please feel free to fork the repository, make your changes, and submit a pull request.
