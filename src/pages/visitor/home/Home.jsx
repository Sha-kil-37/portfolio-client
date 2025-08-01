import { lazy, Suspense } from "react";
import Banner from "../../../components/Banner";
import Loader from "../../../components/Loader";
import SmoothScroll from "../../../utils/visitor/smoothScroll/SmoothScroll";
const HomePage = lazy(() => import("../../../layout/visitor/MainLayout"));
import { useSelector } from "react-redux";

export default function Home() {
  //
  console.log(useSelector((state) => state));

  return (
    <Suspense fallback={<Loader />}>
      <SmoothScroll>
        <HomePage>
          <Banner />
          <img
            src="https://github-readme-stats.vercel.app/api?username=Sha-kil-37&theme=react&show_icons=true&hide_border=true&count_private=true"
            alt=""
          />
        </HomePage>
      </SmoothScroll>
    </Suspense>
  );
}
