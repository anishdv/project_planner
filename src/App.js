import Navbar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectDetails from "./components/projects/projectDetails";
import Signin from "./components/auth/signin";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route exact path='/project/:id' element={<ProjectDetails/>}></Route>
          <Route exact path='/signin' element={<Signin/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
