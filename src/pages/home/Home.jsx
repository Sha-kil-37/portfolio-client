import { Fragment } from "react";
import Banner from "../../components/Banner";
import MainLayout from "../../layout/MainLayout";
import LightningCanvas from "../../components/LightningCanvas";
//
export default function Home() {
  return (
    <MainLayout>
      <Fragment>
        <Banner />
        <LightningCanvas/>
      </Fragment>
  
    </MainLayout>
  );
}
