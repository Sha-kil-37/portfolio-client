import { lazy, Suspense, useEffect } from "react";
import Banner from "../../../components/Banner";
import Loader from "../../../components/Loader";
import SmoothScroll from "../../../utils/visitor/smoothScroll/SmoothScroll";
const HomePage = lazy(() => import("../../../layout/visitor/MainLayout"));
import { useSelector, useDispatch } from "react-redux";
import { fetchAdminGithubData } from "../../../redux/api/visitor/fetchAdminGithubData";
//
export default function Home() {
  //
  const dispatch = useDispatch();
  // call footer API to get the footer data
  useEffect(() => {
    dispatch(fetchAdminGithubData());
  }, [dispatch]);
  const { github, loading, error } = useSelector(
    (state) => state.adminGithubDataReducer
  );

 
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
