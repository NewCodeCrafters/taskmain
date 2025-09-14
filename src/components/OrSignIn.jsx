import React, { useEffect } from "react";
import googleImg from "../assets/google.svg";
import apple from "../assets/aaaple.svg";
import Button from "./Button";
import { googleLogin } from "../utils/api";

/* global google */
const OrSignIn = () => {
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
  }, []);

  const handleCallbackResponse = async (response) => {
    const idToken = response.credential;
    try {
      const data = await googleLogin(idToken);
      console.log("Backend response:", data);
      // Example: localStorage.setItem("accessToken", data.token);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleCustomSignIn = () => {
    google.accounts.id.prompt();
  };

  return (
    <>
      <section className="flex  items-center my-2 w-full">
        <div className="flex-1 border-t border-neutral-black-8"></div>
        <span className="px-3 dark:text-neutral-400 text-neutral-black-8 text-sm">
          Or Sign in with
        </span>
        <div className="flex-1 border-t border-neutral-black-8"></div>
      </section>
      <section className="flex flex-col md:flex-row justify-between w-full mt-4 gap-3 ">
        <Button
          onClick={handleCustomSignIn}
          className="w-full md:auto "
          variant="signIn"
          leftIcon={<img src={apple} alt="Google" className="w-5 h-5 " />}
        >
          Sign Up with Google
        </Button>

        <Button
          variant="signIn"
          className="w-full md:auto"
          leftIcon={<img src={googleImg} alt="Apple" className="w-5 h-5" />}
        >
          Sign Up with Apple
        </Button>
      </section>
    </>
  );
};

export default OrSignIn;
