import Topbar from "./Topbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="text-neutral-900">
      <Topbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
