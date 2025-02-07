import { lazy, Suspense } from "react";
import Loader from "../../../components/Loader";
const Welcome = lazy(() => import("./welcome"));
//
export default function welcome() {
  //
  return (
    <Suspense fallback={<Loader />}>
      <Welcome />
    </Suspense>
  );
}
