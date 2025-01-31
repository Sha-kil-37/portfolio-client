import { Fragment } from "react";
import Banner from "../../components/Banner";
import MainLayout from "../../layout/MainLayout";
import CloudLightningCanvas from "../../components/CloudLightningCanvas";
//
export default function Home() {
  return (
    <MainLayout>
      <Fragment>
        <Banner />
        <CloudLightningCanvas/>
      </Fragment>
  
    </MainLayout>
  );
}
