import { ReactLenis, useLenis } from "lenis/react";
import { useRef } from "react";
//
function SmoothScroll({ children }) {
  //
  const lenisRef = useRef();
  const lenis = useLenis((lenis) => {
   /* console.log("lenis in callback", lenis); */
    // console.log("lenis in callback", lenis.scroll.instance.scroll.y);
    // console.log("lenis in callback", lenis.scroll.instance.limit);
    // console.log("lenis in callback", lenis.scroll.instance.delta.y);
    // console.log("lenis in callback", lenis.scroll.instance.delta.x);
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
