# Redux Challenge 1 — Todo App

This is a working todo app. You can add, complete, and delete todos. It works fine.

The problem: all the state lives in `App.jsx` using `useState`, and every action is passed down through props. Your job is to refactor this app to use Redux Toolkit for state management.

## Setup

```
npm install
npm run dev
```

## What you need to do

1. Create a Redux store and a `todosSlice` that manages the todos array.
2. Wrap the app with the Redux Provider.
3. Move all the state logic (add, toggle, delete) out of `App.jsx` and into the slice as reducers.
4. Update every component so it reads from the store and dispatches actions directly instead of receiving props.
5. The stats bar in `App.jsx` should also read from the store instead of computing from local state.

When you're done, the app should work exactly the same as it does now — but no component should receive todos, onAdd, onToggle, or onDelete as props.

## Rules

- Don't touch the CSS.
- Don't change how the UI looks or behaves.
- No AI tools. Redux Toolkit docs are fair game: https://redux-toolkit.js.org
- If you're stuck, check `hints.md` — but try for at least 10 minutes first.

## Time

45 minutes.
