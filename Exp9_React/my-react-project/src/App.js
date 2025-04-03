import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const renderContent = () => {
    switch (page) {
      case "home":
        return <><h2>Home Page</h2><p>Welcome to Amazon's homepage.</p></>;
      case "about":
        return <><h2>About Amazon</h2><p>Amazon is a global e-commerce company.</p></>;
      case "contact":
        return <><h2>Contact Amazon</h2><p>Email: support@amazon.com <br /> Phone: +1 888-280-4331</p></>;
      default:
        return <><h2>Welcome to Amazon</h2><p>Select a page from the sidebar.</p></>;
    }
  };

  return (
    <div className="app">
      <header className="header">Amazon</header>
      <div className="container">
        <nav className="sidebar">
          <ul>
            <li><button onClick={() => setPage("home")}>Home</button></li>
            <li><button onClick={() => setPage("about")}>About</button></li>
            <li><button onClick={() => setPage("contact")}>Contact</button></li>
          </ul>
        </nav>
        <main className="content">
          {renderContent()}
        </main>
      </div>
      <footer className="footer">
        Contact Us: support@amazon.com | Phone: +1 888-280-4331
      </footer>
    </div>
  );
}

export default App;
