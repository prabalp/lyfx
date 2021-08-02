import { useState } from "react";
import "./App.css";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import Navbar from './components/Navbar/Navbar'

function App() {
  const [user, setuser] = useState(true);
  return (
    <div className="App">
      {/* {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )} */}

      <Navbar/>
      <Feed/>
    </div>
  );
}

export default App;
