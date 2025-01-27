"use client";
import { useState, useEffect, useRef } from "react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]); // In-memory user storage

  const linkRef = useRef(null);
  const adminRef = useRef(null);

  // Load users from localStorage on initial load
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password || (isSignUp && !name)) {
      setMessage("Name, email, and password are required");
      return;
    }

    if (isSignUp) {
      // Signup logic
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        setMessage("User already exists");
      } else {
        const newUser = { name, email, password };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers)); // Store updated users in localStorage
        setMessage("Account created successfully!");
        setIsSignUp(false); // Switch to signin after successful registration
      }
    } else {
      // Signin logic
      const user = users.find((user) => user.email === email);
      if (!user) {
        setMessage("User not found");
      } else if (user.password !== password) {
        setMessage("Invalid password");
      } else {
        setMessage("Login successful!");
        // Store the logged-in user in localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        // Trigger the link click with a delay
        setTimeout(() => {
          if (linkRef.current) {
            if (email === "anshisham123@gmail.com") {
              adminRef.current.click();
            } else {
              linkRef.current.click();
            }
          }
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <div className="w-full max-w-md p-8 bg-black shadow-md rounded-xl">
        <h1 className="text-2xl font-bold mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md focus:ring "
              />
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md focus:ring "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md focus:ring  "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 duration-300"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setMessage("");
            }}
            className="text-indigo-600 hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>

        {message && (
          <p
            className={`mt-4 text-center ${message.includes("success") ? "text-green-500" : "text-red-500"
              }`}
          >
            {message}
          </p>
        )}
      </div>
      <a ref={linkRef} className="anaa hidden" href="/pages/account"></a>
      <a ref={adminRef} className="anaa hidden" href="/pages/admin"></a>
    </div>
  );
}
