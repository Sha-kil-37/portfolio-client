import { Routes, Route } from "react-router-dom";
import One from "../components/One";
import Two from "../components/Two";
import Home from "../pages/visitor/home/Home";
import Test from "../components/Test";
import About from "../pages/visitor/about/About";
import Contact from "../pages/visitor/contact/Contact";

//
export default function AppRouter() {
  return (
    <Routes>
      {/* visitor route */}

      <Route path="/" element={<Home />}>
        <Route path="one" element={<One />} />
        <Route path="two" element={<Two />} />
      </Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>

      {/* visitor route */}
      {/* admin route */}

      {/* admin route */}
      {/* not found route */}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
