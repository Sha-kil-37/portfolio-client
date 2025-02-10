import { Routes, Route } from "react-router-dom";
import One from "../components/One";
import Two from "../components/Two";
import Home from "../pages/visitor/home/Home";
import Test from "../components/Test";

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

      {/* visitor route */}
      {/* admin route */}
      {/* admin route */}
    </Routes>
  );
}
