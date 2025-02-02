import { Fragment, useState } from "react";
import AnimatedSection from "./AnimatedSection";
//
export default function Welcome() {
  const [role, setRole] = useState(false);
  return (
    <Fragment>{role ? <h1>welcome admin</h1> : <AnimatedSection />}</Fragment>
  );
}
