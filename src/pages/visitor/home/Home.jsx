import { Fragment } from "react";
import Banner from "../../../components/Banner";
import MainLayout from "../../../layout/visitor/MainLayout";
import StormAnimation from "../../../components/StormAnimation";
//
export default function Home() {
  return (
    <MainLayout>
      <Fragment>
        <Banner />
        <StormAnimation />
      </Fragment>
    </MainLayout>
  );
}
