import { lazy, Suspense } from "react";
import Loader from "../../../components/Loader";
const WelcomePage = lazy(() => import("../../../components/Welcome"));
//
export default function welcome() {
  //
  return (
    <Suspense fallback={<Loader />}>
      <WelcomePage />
    </Suspense>
  );
}
