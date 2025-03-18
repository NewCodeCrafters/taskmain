import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginschema } from "../schemas/auth.schema";
import TextInput from "../components/Input";
import Button from "../components/Button";
import mail from "../assets/mail.svg";
import lock from "../assets/lock-03.svg";
import OrSignIn from "../components/OrSignIn";
import { Link } from "react-router";
import eyeon from "../assets/eye-on.svg";
import eyeoff from "../assets/eye-off.svg";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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
  const submitHandler = (val) => {
    console.log(val);
    toast.error("Your username or Password is incorrect");
  };
  const errorHandler = (val) => {
    console.log(val);
  };

  return (
    <div className="h-full flex flex-col w-full justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" flex flex-col gap-3 items-center">
        <div className="heading-3">Hi, Welcome</div>
        <p className="text-neutral-black-9 body-medium-medium">
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
            label="password"
            type={showPassword ? "text" : "password"}
            error={errors.password?.message}
          />
          <Button className="w-full mt-3" type="submit">
            {" "}
            Login
          </Button>
        </form>

        <div className="flex justify-between gap-4">
          <label className="flex gap-2  border-hidden body-small-medium text-paragraph ">
            <TextInput className="" type="checkbox" />
            Remember me
          </label>
          <Link
            to="/forgotpassword"
            className="body-small-medium text-paragraph"
          >
            forgot password?
          </Link>
        </div>
      </div>

      <OrSignIn />
      <div className="flex justify-center gap-2 mt-6">
        <span className="text-neutral-900 body-small-medium ">
          Don't have an account?
        </span>
        <Link to="/signup" className="text-primary-300 body-medium-semibold ">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
