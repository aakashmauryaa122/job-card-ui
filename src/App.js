import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="container">
      {users.map((user) => (
        <JobCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;
