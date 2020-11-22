import React from "react";

import Header from "../components/Header";
import Vision from "../components/Vision";
import OurValues from "../components/OurValues";
import Enquery from "../components/Enquery";
import Forex from "../components/Forex";
import Services from "../components/Services";
import Layout from "../layouts/Layout";

function Home() {
  return (
    <Layout>
      <Header />
      <Vision />
      <OurValues />
      <Enquery />
      <Forex />
      <Services />
    </Layout>
  );
}

export default Home;
