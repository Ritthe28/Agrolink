import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* Push content below fixed navbar */}
      <main className="pt-[10vh]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
