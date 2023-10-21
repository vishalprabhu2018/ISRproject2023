// react imports
import React from "react";
import { useRouteError, Link, useNavigate } from "react-router-dom";

// library imports
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Oh no! I think we have a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowUturnLeftIcon width={20} />
        <span>Return</span>
      </button>
      <Link to="/">
        <HomeIcon width={20} />
        <span>Home page</span>
      </Link>
    </div>
  );
};

export default Error;
