import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const style = {
    Typography: "p-1 font-normal hover:border-b-4 border-blue-500 rounded-sm",
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col justify-center items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={style.Typography}
      >
        <Link className="flex items-center">About Us</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={style.Typography}
      >
        <Link className="flex items-center">Governing Body</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={style.Typography}
      >
        <Link to="#" className="flex items-center">
          Membership
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={style.Typography}
      >
        <Link className="flex items-center">Events</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={style.Typography}
      >
        <Link className="flex items-center">Publications</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={style.Typography}
      >
        <Link className="flex items-center">Gallery</Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky bg-white text-black overflow-hidden shadow-lg block inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img
              src={logo}
              alt=""
              className="object-contain h-12 w-12 border-3 rounded-sm"
            />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className={`${style.Typography} hidden lg:inline-block text-black`}
            >
              <span>Login</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className={`${style.Typography} hidden lg:inline-block text-black`}
            >
              <span>Register</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 text-black"
          >
            <span>Login</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 text-black"
          >
            <span>Register</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}
