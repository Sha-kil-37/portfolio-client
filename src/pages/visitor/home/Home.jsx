import { Fragment, lazy, Suspense, useState } from "react";
import Banner from "../../../components/Banner";
import SmoothScroll from "../../../components/SmoothScroll";
import PercentageLoader from "../../../components/PercentageLoader";
//
const HomePage = lazy(() => import("../../../layout/visitor/MainLayout"));
//
export default function Home() {
  //
  const [isLoaded, setIsLoaded] = useState(false);
  for (let index = 0; index < 500; index++) {
    console.log(index);
  }
  //
  return (
    <Suspense
      fallback={<PercentageLoader onComplete={() => setIsLoaded(true)} />}
    >
      {isLoaded ? (
        <HomePage>
          <Fragment>
            <SmoothScroll>
              <Banner />
            </SmoothScroll>
          </Fragment>
        </HomePage>
      ) : (
        <PercentageLoader onComplete={() => setIsLoaded(true)} />
      )}
    </Suspense>
  );
}
