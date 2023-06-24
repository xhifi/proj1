import { Navigation, Footer } from "../../components";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
export default RootLayout;
