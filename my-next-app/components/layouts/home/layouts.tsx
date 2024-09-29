import Footer from "./footer/footer";
import Header from "./header/header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <>{children}</>
      <Footer/>
    </div>
  );
};
export default HomeLayout;
