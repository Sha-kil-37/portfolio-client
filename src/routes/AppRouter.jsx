import { Routes, Route } from "react-router-dom";
import One from "../components/One";
import Two from "../components/Two";
import Home from "../pages/visitor/home/Home";
import Welcome from "../pages/visitor/welcome/welcome";
//
export default function AppRouter() {
  return (
    <Routes>
      {/* visitor route */}
      <Route path="/" element={<Welcome />}></Route>
      <Route path="/home" element={<Home />}>
        <Route path="one" element={<One />} />
        <Route path="two" element={<Two />} />
      </Route>
      {/* visitor route */}
      {/* admin route */}
      {/* admin route */}
    </Routes>
  );
}
