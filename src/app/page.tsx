import Head from "next/head";
import RootLayout from "./layout";
import "./globals.css"
import Nextbar from "../../components/nextbar/nextbar";
import Workspace from "../../components/workspace/workspace";
import Navbar from "../../components/navbar/navbar";

export default function Home() {
  return (
    // <RootLayout>
      <>
      <Navbar />
      <Workspace />
      <Nextbar />
      </>
    // </RootLayout>
  );
}
