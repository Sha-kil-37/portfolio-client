import { lazy, Suspense } from "react";
import Banner from "../../../components/Banner";
import Loader from "../../../components/Loader";
import SmoothScroll from "../../../utils/visitor/smoothScroll/SmoothScroll";
const HomePage = lazy(() => import("../../../layout/visitor/MainLayout"));
//
export default function Home() {
  //
  return (
    <Suspense fallback={<Loader />}>
      <SmoothScroll>
        <HomePage>
          <Banner />
        </HomePage>
      </SmoothScroll>
    </Suspense>
  );
}
