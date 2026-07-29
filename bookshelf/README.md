# My BookShelf

My BookShelf is a simple React + Vite project for tracking the books you are reading, have finished, or want to read next. It helps you manage your reading list in one place and view a quick summary of your reading progress.

## Features

- Add new books with title, author, pages, genre, and status
- Mark books as finished or still reading
- Filter books by All, Reading, or Finished
- Remove books from your shelf
- View stats for total books, completed books, and pages read

## Tech Stack

- React
- Vite
- CSS
- ESLint

## Getting Started

### Create a React + Vite project

If you want to start a new Vite React app from scratch, run:

```bash
npm create vite@latest bookshelf -- --template react
cd bookshelf
npm install
```

### Run the project

From the project folder, start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev` — starts the Vite development server
- `npm run build` — builds the app for production
- `npm run preview` — previews the production build locally
- `npm run lint` — runs ESLint checks

## Project Structure

- `src/App.jsx` — main app component and state management
- `src/components/BookForm.jsx` — form for adding books
- `src/components/BookList.jsx` — displays the book list
- `src/components/BookCard.jsx` — renders each book item
- `src/components/ShelfStats.jsx` — shows reading statistics

## About the Project

This app is a beginner-friendly React project that demonstrates how to build a small interactive dashboard with components, state, filters, and simple CRUD-style actions for managing a personal bookshelf.
