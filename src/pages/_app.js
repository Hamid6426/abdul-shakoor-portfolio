import MainNavbar from "@/components/navigation/MainNavbar";
import MainFooter from "@/components/navigation/MainFooter";
import { ThemeProvider } from 'next-themes'
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MainNavbar />
      <Component {...pageProps} />
      <MainFooter />
    </ThemeProvider>
  );
}