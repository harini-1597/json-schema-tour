import "./globals.css";
import Head from "next/head";
import Nextbar from "../../components/nextbar/nextbar";
import Workspace from "../../components/workspace/workspace";
import Navbar from "../../components/navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <title>JSON Schema Tour</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='logo.png' />
				<meta
					name='description'
					content='An interactive learning material for JSON Schema'
				/>
      </head>
      <body>
        <main className="fixed min-h-screen">
          {/* <Navbar />
          <Workspace />
          <Nextbar /> */}
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
