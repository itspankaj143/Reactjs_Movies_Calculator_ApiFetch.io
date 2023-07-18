import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Api from "./components/Api";
import Form from "./components/Form";
import Movies from "./components/Movies";

import Calculator from "./Caculator/Calculator";
import ToDOList from "./TODOLIST/ToDOList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="/about/contact" element={<Contact />} />
          </Route>

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/form" element={<Form />} />
          <Route path="/service" element={<Services />} />
          <Route path="/api" element={<Api />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todolist" element={<ToDOList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
