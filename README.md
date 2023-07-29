# Notepad React App

This is a simple Notepad application built with React. It allows users to type and save text data, and view previously saved texts.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   git clone <https://github.com/alphadevking/notepad.git>

2. Install dependencies:

   cd notepad
   npm install

3. Start the development server:

   npm start

## Project Structure

The project structure is organized as follows:

notepad/
├── src/
│   ├── components/
│   │   ├── Notepad.tsx
│   ├── data/
│   │   └── savedText.json
│   ├── hooks/
│   │   └── convertTimestamp.ts
├── public/
│   └── index.html
├── package.json

## Functionality

- Users can type their text in the textarea provided.
- Clicking the "Save" button saves the entered text to the server using the API endpoint and displays a success message if the save operation is successful. If there is an error during the save operation, an error message is displayed.
- Previously saved texts are fetched from the `savedText.json` file and displayed in a grid layout, along with the date of each saved entry.

## Styling

The app uses Tailwind CSS for styling. Styling classes can be found in the respective JSX elements.

---

This markdown file provides an overview of your React Notepad app, including instructions on how to set it up locally, a project structure overview, functionality description, and information about the used API endpoint and data structure.

Feel free to modify the content according to your specific project details or add any other relevant information you'd like to include. Once you've created the markdown file, you can use it to provide documentation or a project overview for your Notepad React App hosted on the GitHub repository.

**Note:** This project is a on-browser feature, meaning if close browser tab or window, saved data is cleaned. This is because it utilizes a json and not a backend, database or local-storage for storing data.
