import { Fragment, lazy, Suspense } from "react";
import Banner from "../../../components/Banner";
import Loader from "../../../components/Loader";
import SmoothScroll from "../../../components/SmoothScroll";
const HomePage = lazy(() => import("../../../layout/visitor/MainLayout"));
//
export default function Home() {
  //
  return (
    <Suspense fallback={<Loader />}>
      <SmoothScroll>
        <HomePage>
          <Fragment>
            <Banner />
          </Fragment>
        </HomePage>
      </SmoothScroll>
    </Suspense>
  );
}
