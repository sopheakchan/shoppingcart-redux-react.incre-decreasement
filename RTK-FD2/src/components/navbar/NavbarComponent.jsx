import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectorTotalItems } from "../../redux/feature/cart/cartSlide";

export function NavbarComponent() {
  const location = useLocation();
  const pathname = location?.pathname;
  const totalItems = useSelector(selectorTotalItems)
  console.log("totalItems", totalItems)
  // console.log(pathname);
  console.log("location", location);
  const [navbarList, setNavbarList] = useState([
    { title: "Home", path: "/" },
    { title: "Count", path: "/count" },
  ]);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          React Toolkit
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        <Link to="/cart" className="relative">
        <FaShoppingCart className="m-5" />
        <p className="absolute -top-0 right-3 text-blue-700 font-semibold">{totalItems}</p>
        </Link>
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navbarList?.map((item, index) => {
          return (
            <Navbar.Link
              key={index}
              as={Link}
              to={item.path}
              active={pathname === item.path}
            >
              {item.title}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
