import React from "react";
import Navbar from "../../../../components/navbar/navbar";
import Nextbar from "../../../../components/nextbar/nextbar";
import WorkspacePage1 from "../../../../components/workspace/workspacePage1";
import { pages } from "@/utils/pages";

const TourPage = () => {
  return (
    <>
      <Navbar />
      <WorkspacePage1 />
      <Nextbar />
    </>
  );
}

export default TourPage;


