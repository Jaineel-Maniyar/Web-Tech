import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "", email: "", age: "" });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // Track index of the user being edited

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(user.age) < 0) {
      setError("Age cannot be negative!");
      return;
    }

    if (editingIndex !== null) {
      // Update existing user
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = user;
      setUsers(updatedUsers);
      setEditingIndex(null); // Reset editing mode
    } else {
      // Add new user
      setUsers([...users, user]);
    }

    setUser({ name: "", email: "", age: "" });
    setError("");
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleEdit = (index) => {
    setUser(users[index]); // Load user data into the form
    setEditingIndex(index); // Set index for editing
  };

  return (
    <div className="container">
      {/* Form Section */}
      <div className="form-container">
        <h2 className="title">{editingIndex !== null ? "Edit User" : "User Details Form"}</h2>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange} required />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">{editingIndex !== null ? "Update" : "Submit"}</button>
        </form>
      </div>

      {/* Display User Details */}
      {users.length > 0 && (
        <div className="users-container">
          <h3 className="subtitle">Entered Users:</h3>
          <div className="grid-container">
            {users.map((u, index) => (
              <div key={index} className="user-box">
                <p className="user-name">{u.name}</p>
                <p><strong>Email:</strong> {u.email}</p>
                <p><strong>Age:</strong> {u.age}</p>
                <div className="buttons">
                  <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
