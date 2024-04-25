import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import InitAuth from "./components/Auth/InitAuth";

const Layout = () => {
  return (
    <>
      <InitAuth />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
