import Banner from "../../../components/Banner";
import MainLayout from "../../../layout/visitor/MainLayout";
import { Fragment } from "react";
//
export default function Home() {
  return (
    <MainLayout>
      <Fragment>
        <Banner />
      </Fragment>
    </MainLayout>
  );
}
