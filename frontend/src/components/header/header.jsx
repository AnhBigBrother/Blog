import React from "react";
import { useNavigate } from "react-router-dom";


const Header = (props) => {
  const navigate = useNavigate();
  return (
    <header className="font-lexend w-full flex flex-col justify-start items-start py-3 gap-2">
      <h1
        className="cursor-pointer text-4xl font-bold lg:text-6xl"
        onClick={() => navigate("/")}
      >
        Tien Anh Tran
      </h1>
      <ul className="flex flex-row gap-10 justify-start w-auto">
        <li
          className="cursor-pointer text-lg flex flex-row items-center gap-1"
          onClick={() => navigate("/about")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 lg:h-5 w-auto">
            <path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z" />
          </svg>
          <p>About me</p>
        </li>
        <li
          className="cursor-pointer text-lg flex flex-row items-center gap-1"
          onClick={() => navigate("/blogs")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4 lg:h-5 w-auto">
            <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
          </svg>
          <p>Blog</p>
        </li>
      </ul>
    </header>
  );
};

export default Header;
