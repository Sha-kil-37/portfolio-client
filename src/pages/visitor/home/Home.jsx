import { Fragment, lazy, Suspense } from "react";
import Banner from "../../../components/Banner";
import SmoothScroll from "../../../components/SmoothScroll";
import Loader from "../../../components/Loader";

const HomePage = lazy(() => import("../../../layout/visitor/MainLayout"));
//
export default function Home() {

  //
  return (
    <Suspense fallback={<Loader />}>
      <HomePage>
        <Fragment>
          <SmoothScroll>
            <Banner />
          </SmoothScroll>
        </Fragment>
      </HomePage>
    </Suspense>
  );
}
