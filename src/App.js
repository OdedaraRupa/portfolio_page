
import './assets/css/main.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import About from './pages/About';
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <>
      <div className="container-fluid wrapper">
        <div className="row wrapper">
          <BrowserRouter>

            <Navbar title="TextUtils" ></Navbar>
            <Routes>
              <Route path="/" element={<Main heading="Enter the text to analyze below "  ></Main>} />
              <Route path="/about" element={<About   ></About>} />
              <Route path="/contact" element={<Contact  ></Contact>} />
              <Route path="/resume" element={<Resume  ></Resume>} />
              <Route path="/portfolio" element={<Portfolio  ></Portfolio>} />

            </Routes>
          </BrowserRouter>
        </div>
      </div>

    </>
  );
}

export default App;
