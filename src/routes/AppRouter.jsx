import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import One from "../components/One";
import Two from "../components/Two";
import Home from "../pages/visitor/home/Home";
import Test from "../components/Test";
import About from "../pages/visitor/about/About";
import Contact from "../pages/visitor/contact/Contact";
//
export default function AppRouter() {
  const location = useLocation();
  //
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          {/* visitor route */}
          <Route path="/" element={<Home />}>
            <Route path="one" element={<One />} />
            <Route path="two" element={<Two />} />
          </Route>
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* visitor route */}
          {/* admin route */}
          {/* admin route */}
          {/* not found route */}
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
