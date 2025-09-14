import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginschema } from "../schemas/auth.schema";
import TextInput from "../components/Input";
import Button from "../components/Button";
import mail from "../assets/mail.svg";
import lock from "../assets/lock-03.svg";
import OrSignIn from "../components/OrSignIn";
import { Link, useNavigate } from "react-router";
import eyeon from "../assets/eye-on.svg";
import eyeoff from "../assets/eye-off.svg";
// import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { logIn } from "../utils/api";
// import { setProjectAnnotations } from "@storybook/react";
import { ACCESS_TOKEN_KEY, routes } from "../utils/constant";
import logo from "../assets/logo.svg";
import Modal from "../components/SuccessfulModal";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginschema),
    values: {
      email: "",
      password: "",
    },
  });
  const submitHandler = async (val) => {
    try {
      setIsLoading(true);
      await logIn(val);
      setSuccess(true);
      setError(null);
      localStorage.setItem(ACCESS_TOKEN_KEY, Response.accessToken);
    } catch (error) {
      console.error(error);
      setSuccess(false);
      setError(error.response?.data || "Error dey");
    } finally {
      setIsLoading(false);
    }
  };
  // logIn();
  // console.log(val);
  // toast.error("Your username or Password is incorrect");

  const errorHandler = (val) => {
    console.log(val);
  };

  const navigate = useNavigate();

  function handleDashboard() {
    setSuccess(false);
    navigate(routes.home);
  }
  return (
    <div className="h-full flex flex-col w-full justify-center max-w-[550px] ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" flex flex-col gap-3 items-center">
        <figure className="flex justify-center lg:hidden md:hidden">
          <img src={logo} alt="" />
        </figure>
        <div className="heading-3">Hi, Welcome</div>
        <p className="text-neutral-black-9 dark:text-neutral-400 body-medium-medium">
          Please login your account
        </p>
      </div>

      <div className="body-small-medium flex flex-col gap-6">
        <form
          onSubmit={handleSubmit(submitHandler, errorHandler)}
          className=" w-full body-small-medium text-neutral-black-12 mt-6 "
        >
          <TextInput
            {...register("email")}
            leftIcon={<img src={mail} />}
            placeholder="Your email"
            className="w-full body-small-medium text-neutral-900 "
            errorBorder=" border-error-100"
            label="Email"
            error={errors.email?.message}
          />
          <TextInput
            {...register("password")}
            leftIcon={<img className="neutral-black-7" src={lock} />}
            rightIcon={
              <img
                src={showPassword ? eyeon : eyeoff}
                onClick={handleShowPassword}
              />
            }
            placeholder="Your password"
            className={"w-full body-small-medium text-neutral-900"}
            errorBorder={`${error ? "bor" : ""}`}
            label="password"
            type={showPassword ? "text" : "password"}
            error={errors.password?.message}
          />
          <Button
            className="w-full mt-3 h-10"
            type="submit"
            isLoading={isLoading}
          >
            {" "}
            Login
          </Button>
        </form>

        <div className="flex justify-between gap-4">
          <label className="flex gap-2  border-hidden body-small-medium dark:text-neutral-400 text-paragraph ">
            <TextInput className="" type="checkbox" />
            Remember me
          </label>
          <Link
            to="/forgotpassword"
            className="body-small-medium dark:text-neutral-400 text-paragraph"
          >
            forgot password?
          </Link>
        </div>
      </div>

      <OrSignIn />
      <div className="flex justify-center gap-2 mt-6">
        <span className="text-neutral-900  dark:text-white body-small-medium ">
          Don't have an account?
        </span>
        <Link to="/signup" className="text-primary-500 body-medium-semibold ">
          Sign Up
        </Link>
      </div>
      <div>
        {success && <Modal isOpen={success} onClose={handleDashboard} />}
      </div>
    </div>
  );
};

export default LoginPage;
