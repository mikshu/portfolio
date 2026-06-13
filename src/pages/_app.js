import Head from "next/head";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { HydrationProvider, Client } from "react-hydration-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <HydrationProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Client>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </Client>
      </main>
    </HydrationProvider>
  );
}
