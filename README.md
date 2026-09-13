# DevStack

DevStack is a responsive web application where developers can explore different technologies and build their own development stack. Users can browse technologies, add them to their stack, remove them, and receive notifications for different actions.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Toastify
* Vite
* JSON
* React Icons

## Features

### 1. Explore Technologies

Users can browse different frontend, backend, database, programming language, styling, and DevOps technologies with their descriptions, ratings, and difficulty levels.

### 2. Build Your Own Stack

Users can add technologies to their own stack. Duplicate technologies are prevented, and users can remove individual technologies or remove all technologies.

### 3. Responsive Design and Notifications

The website is responsive for mobile, tablet, and desktop devices. React Toastify is used to show notifications when technologies are added, duplicated, or removed.

---

# React Questions and Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe the user interface in an easy and readable way.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. Props are read-only.

State is data managed inside a component and it can change when the user interacts with the application.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component.

I used `useState` in the `Technologies` component to store the selected technologies. I also used it in the `Navber` component to control the mobile menu.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run side effects after a component renders, such as fetching data.

In this project, I did not need `useEffect` because I loaded the JSON data using `fetch()` with a Promise and React's `use()` hook.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React know which item has changed, been added, or removed.

In this project, I used the technology `id` as the unique key.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it for the empty stack message. When the stack is empty, the message is shown. Otherwise, the selected technologies are displayed.

```tsx
{cart.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.

In this project, the `Technologies` component passes `technology`, `cart`, and `setCart` to `TechnologyCard`.

The child can communicate with the parent by calling a function passed through props. Here, `setCart` allows the child component to update the parent's stack.

---

## Project Author

**Fouzia Nusrath Chowdhury**

Built with React, TypeScript, and Tailwind CSS.
