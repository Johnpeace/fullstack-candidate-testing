import React from "react";

const Footer = () => (
  <div
    className="flex w-full p-8 flex-col lg:flex-row bg-white mt-5 border border-gray-200"
    style={{ display: "flex", flexDirection: "row" }}
  >
    <div className="flex flex-col lg:w-1/2 text-xs m-3">
      <span className="break-word font-medium text-xl mb-2">About us</span>
      <p className="mb-2">
        We are a teams of nurses, doctors, technologists and executives
        dedicated to help nurses find jobs that they love.
      </p>
      <span>All copyrights reserved © 2020 - Health Explore</span>
    </div>
    <div className="flex flex-col flex-1 m-3">
      <span className="break-word font-medium text-xl mb-2">Sitemap</span>
      <ul className="flex flex-col text-xs">
        <li className="mb-2">
          <a href="#">Nurses</a>
        </li>
        <li className="mb-2">
          <a href="#">Employers</a>
        </li>
        <li className="mb-2">
          <a href="#">Social networking</a>
        </li>
        <li className="mb-2">
          <a href="#">Jobs</a>
        </li>
      </ul>
    </div>
    <div className="flex flex-col flex-1 m-3">
      <span className="break-word font-medium text-xl mb-2">Privacy</span>
      <ul className="flex flex-col text-xs">
        <li className="mb-2">
          <a href="#">Terms of use</a>
        </li>
        <li className="mb-2">
          <a href="#">Privacy policy</a>
        </li>
        <li className="mb-2">
          <a href="#">Cookie policy</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
