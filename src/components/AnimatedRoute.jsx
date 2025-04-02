import { Route, useLocation } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import { AnimatePresence } from "framer-motion";
import One from "../components/One";
import Two from "../components/Two";
import Home from "../pages/visitor/home/Home";
import Test from "../components/Test";
import About from "../pages/visitor/about/About";
import Contact from "../pages/visitor/contact/Contact";
//
const AnimatedRoutes = () => {
  const location = useLocation();
  //
  return (
    <AnimatePresence mode="wait">
      {/* visitor route */}
      <Route
        path="/"
        element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        }
        location={location}
        key={location.pathname}
      >
        <Route path="one" element={<One />} />
        <Route path="two" element={<Two />} />
      </Route>
      <Route
        location={location}
        key={location.pathname}
        path="/test"
        element={
          <PageWrapper>
            <Test />
          </PageWrapper>
        }
      ></Route>
      <Route
        location={location}
        key={location.pathname}
        path="/about"
        element={<About />}
      ></Route>
      <Route
        location={location}
        key={location.pathname}
        path="/contact"
        element={
          <PageWrapper>
            <Contact />
          </PageWrapper>
        }
      ></Route>

      {/* visitor route */}
      {/* admin route */}

      {/* admin route */}
      {/* not found page */}
      <Route path="*" element={<div>Not found</div>} />
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
