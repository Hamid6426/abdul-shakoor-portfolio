import MainNavbar from "@/components/navigation/MainNavbar";
import MainFooter from "@/components/navigation/MainFooter";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import Hero from "@/components/Hero";
import Connect from "@/components/Connect";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname?.startsWith("/admin");
  const isContactPage = router.pathname === "/contact";

  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen">
      {!isAdminRoute && <MainNavbar />}
      <div className="w-full flex flex-col items-center justify-start gap-8">
        {!isAdminRoute && <Hero />}
        <div className="px-6 md:px-0 w-full">
          <Component {...pageProps} />
        </div>
        {!isAdminRoute && !isContactPage && <Connect />}
      </div>
      {!isAdminRoute && <MainFooter />}
    </div>
  );
}
