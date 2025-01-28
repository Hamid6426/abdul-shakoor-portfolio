import MainNavbar from "@/components/navigation/MainNavbar";
import MainFooter from "@/components/navigation/MainFooter";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <mian>
      <MainNavbar/>
      <Component {...pageProps} />
      <MainFooter/>
    </mian>
  );
}
