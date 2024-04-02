import Navbar from "../../components/navbar/navbar";
import "./globals.css";
import Head from "next/head";

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
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
