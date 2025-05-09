import { lazy, Suspense } from "react";
import Banner from "../../../components/Banner";
import Loader from "../../../components/Loader";
import SmoothScroll from "../../../hooks/visitor/SmoothScroll";
const HomePage = lazy(() => import("../../../layout/visitor/MainLayout"));
//
export default function Home() {
  //
  return (
    <Suspense fallback={<Loader />}>
      <HomePage>
        <SmoothScroll>
          <Banner />
        </SmoothScroll>
      </HomePage>
    </Suspense>
  );
}
