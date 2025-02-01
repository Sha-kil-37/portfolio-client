import { useState } from "react";
import { Fragment } from "react";
import AnimatedSection from "../components/AnimatedSection";
//
export default function Welcome() {
  const [role, setRole] = useState(false);
  return (
    <Fragment>{role ? <h1>welcome admin</h1> : <AnimatedSection />}</Fragment>
  );
}
