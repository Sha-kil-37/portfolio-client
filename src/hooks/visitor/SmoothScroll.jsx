import { ReactLenis, useLenis } from "lenis/react";
import { useRef } from "react";
//
function SmoothScroll({ children }) {
  //
  const lenisRef = useRef();
  const lenis = useLenis((lenis) => {
    console.log("lenis in callback", lenis);
  });
  //

  //
  return (
    <>
      {/* <ReactLenis root /> */}
      <ReactLenis
        root
        ref={lenisRef}
        // style={{ height: "100vh", overflowY: "auto" }}
      >
        {children}
      </ReactLenis>
    </>
  );
}

export default SmoothScroll;
