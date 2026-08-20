# Counter App

A simple and beginner-friendly **Counter App built with React and Vite**.

This project is created to learn the fundamentals of React, including components, state management, event handling, and CSS styling.

## 🚀 Features

* Display the current counter value
* Increment the counter
* Decrement the counter
* Reset the counter to `0`
* Simple and responsive UI

## 🛠️ Technologies Used

* React
* JavaScript
* CSS
* Vite
* Git & GitHub

## 📁 Project Structure

```text
counter-app/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Arun-Tharu/counter-app.git
```

Go into the project directory:

```bash
cd counter-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🎯 React Concepts Practiced

### Components

The application is created using a functional React component.

```jsx
function App() {
  // component code
}
```

### useState

The counter uses React's `useState` Hook:

```jsx
const [count, setCount] = useState(0);
```

* `count` stores the current value.
* `setCount` updates the value.
* `0` is the initial value.

### Event Handling

The buttons use React's `onClick` event:

```jsx
<button onClick={() => setCount(count + 1)}>
  +
</button>
```

### JSX

The UI is written using JSX:

```jsx
<h1>Counter App</h1>
<h2>{count}</h2>
```

## 📌 Learning Goal

This project is part of my React learning journey.

The goal is to understand React fundamentals by building small projects step by step before moving to larger applications.

## 🔄 Git Workflow

Each completed feature is committed separately using meaningful Git commit messages.

Example:

```bash
git add .
git commit -m "feat: add counter increment functionality"
git push
```

## 👨‍💻 Author

**Arun Tharu**

---

⭐ This project is for learning and practicing React fundamentals.
