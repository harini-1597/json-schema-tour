// pages/index.tsx
import Head from "next/head";
import RootLayout from "./layout";
import Nextbar from "../../components/nextbar/nextbar";
import Workspace from "../../components/workspace/workspace";

export default function Home() {
  return (
    // <RootLayout>
      <>
      <Nextbar />
      <Workspace />
      </>
    // </RootLayout>
  );
}
