# Hints

Only read these if you've been stuck for more than 10 minutes on a specific step.

---

**Hint 1 — Where does the store go?**

Create a new file for your store. The store needs to be created with `configureStore` and it needs to know about your slice's reducer. The Provider that wraps your app lives in `main.jsx`, not `App.jsx`.

---

**Hint 2 — What goes in the slice?**

Your slice replaces everything `useState` was doing in App.jsx. The initial todos array becomes `initialState`. Each function that was modifying todos (add, toggle, delete) becomes a reducer. Redux Toolkit lets you write "mutating" code inside reducers — it handles immutability for you.

---

**Hint 3 — How do components get the data?**

Instead of receiving `todos` as a prop, a component can pull it directly from the store. Instead of calling `onToggle(id)` from a prop, a component can dispatch the action itself. You need two hooks from react-redux to do this.

---

**Hint 4 — The stats bar**

The stats don't need their own slice. You can compute them from the same todos array in the store. You can do the filtering right where you read the data.

---

**Hint 5 — addTodo needs an id**

When you move `addTodo` into a reducer, you'll notice reducers shouldn't have side effects like `Date.now()`. Redux Toolkit has a way to handle this using `prepare` callbacks, but for this exercise it's fine to generate the id in the component before dispatching, or to use `nanoid` which RTK exports.
