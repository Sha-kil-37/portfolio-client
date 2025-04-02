import { lazy, Suspense } from "react";
import Banner from "../../../components/Banner";
import Loader from "../../../components/Loader";
const HomePage = lazy(() => import("../../../layout/visitor/MainLayout"));
//
export default function Home() {
  //
  return (
    <Suspense fallback={<Loader />}>
      <HomePage>
        <Banner />
      </HomePage>
    </Suspense>
  );
}
