import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import One from "../components/One";
import Two from "../components/Two";
//
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="one" element={<One />} />
        <Route path="two" element={<Two />} />
      </Route>
    </Routes>
  );
}
