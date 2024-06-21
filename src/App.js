import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DefaultView from "../src/pages/DefaultView";
import HomePage from "../src/pages/HomePage";
import ContactUsPage from "../src/pages/ContactUs";
import ContactUsNewPage from "../src/pages/ContactUsNew";
import AboutUsPage from "./pages/AboutUs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultView />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/contactnew" element={<ContactUsNewPage />} />

          <Route path="/about" element={<AboutUsPage />} />
        </Route>
        {/* <Route path="homepage" element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
