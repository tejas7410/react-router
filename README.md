# React Router Practice Project

This is a practice project created to demonstrate and sharpen my skills with **React Router v6**. The app showcases basic and advanced routing techniques including dynamic routes, nested routes, route parameters, and layout-based routing in a React application.

---

## 🚀 Features

- 📁 **Nested Routing**
- 🔗 **Dynamic Routing with URL Params**
- 📄 **Shared Layout using `<Outlet>`**
- ❌ **404 Handling with React Router's default error boundary**
- 📦 **Component-based route definitions**
- 🎯 Built using **Vite** and **React Router DOM**

---

## 🛠️ Technologies Used

- React
- React Router DOM v6
- Vite
- Tailwind CSS (optional — remove if not used)

---

## 📂 Project Structure

src/
│
├── Components/
│ ├── Layout.jsx
│ ├── Header.jsx
│ ├── Home/
│ │ └── Home.jsx
│ ├── About/
│ │ └── About.jsx
│ ├── Contact/
│ │ └── Contact.jsx
│ └── User/
│ └── User.jsx
│
├── App.jsx
├── main.jsx
└── index.css

---

## 🧭 Routing Setup

Routes are defined using `createBrowserRouter` and `createRoutesFromElements`:

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
);
📦 Installation & Running
Clone the repo

git clone https://github.com/your-username/react-router-practice.git
cd react-router-practice
Install dependencies

npm install
Start the development server

npm run dev
📝 Notes
This project is not meant for production, but rather as a learning sandbox.

It handles route errors and 404s using React Router’s default Error Boundary.

You can easily extend it by adding authentication, route protection, or custom error pages.

📸 Screenshots
You can add screenshots here showing the Home, About, Contact, and dynamic User page.

🧠 What I Learned
Setting up and managing routes in React using react-router-dom

Nested layout structures with <Outlet />

Passing and reading route parameters with useParams()

Using Link and NavLink for navigation

Debugging common router issues like unmatched routes

📌 Author
Made with ❤️ by Tejas Kangule
```
