import MainNavbar from "../components/navigation/MainNavbar";
import MainFooter from "../components/navigation/MainFooter";

export default function Layout({ children }) {
  return (
    <main>
      <MainNavbar />
      {children}
      <MainFooter />
    </main>
  );
}
