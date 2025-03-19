import React from "react";
import google from "../assets/google.svg";
import apple from "../assets/aaaple.svg";
import Button from "./Button";

const OrSignIn = () => {
  return (
    <>
      <section className="flex  items-center my-2 w-full">
        <div className="flex-1 border-t border-neutral-black-8"></div>
        <span className="px-3 text-neutral-black-8 text-sm">
          Or Sign in with
        </span>
        <div className="flex-1 border-t border-neutral-black-8"></div>
      </section>
      <section className="flex flex-col lg:flex-row md:justify-between w-full gap-3 ">
        <Button
          className="w-full text-base font-semibold border border-neutral-black-5"
          variant="signIn"
          leftIcon={<img src={google} alt="Google" className="w-5 h-5 " />}
        >
          Sign Up with Google
        </Button>

        <Button
          variant="signIn"
          className="w-full text-base font-semibold border border-neutral-black-5"
          leftIcon={<img src={apple} alt="Apple" className="w-5 h-5 " />}
        >
          Sign Up with Apple
        </Button>
      </section>
    </>
  );
};

export default OrSignIn;
