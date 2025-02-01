import { Fragment } from "react";
import Banner from "../../../components/Banner";
import MainLayout from "../../../layout/visitor/MainLayout";
import LightningCanvas from "../../../components/LightningCanvas";
//
export default function Home() {
  return (
    <MainLayout>
      <Fragment>
        <div className="flex">
          <Banner />
          <LightningCanvas />
        </div>
      </Fragment>
    </MainLayout>
  );
}
