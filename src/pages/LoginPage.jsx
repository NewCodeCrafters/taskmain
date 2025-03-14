import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginschema } from "../schemas/auth.schema";
import TextInput from "../components/Input";
import Button from "../components/Button";
import mail from "../assets/mail.svg";
import lock from "../assets/lock-03.svg";
import google from "../assets/google icon.svg";
import apple from "../assets/apple icon.svg";

const LoginPage = () => {
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
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="heading-3">Hi, Welcome</div>
      <p className="text-neutral-black-9 body-medium-medium">
        Please login your account
      </p>
      <div className="body-small-meduim">
        <form className=" w-full body-small-meduim text-neutral-900 ">
          <TextInput
            leftIcon={<img src={mail} />}
            placeholder="Your email"
            className={"w-full body-small-meduim text-neutral-900 "}
            {...register("email")}
            label="Email"
          />
          <TextInput
            leftIcon={<img src={lock} />}
            placeholder="Your password"
            className={"w-full body-small-meduim text-neutral-900"}
            {...register("password")}
            label="password"
            type={"password"}
          />
          <Button className="" type={"submit"}>
            {" "}
            Login
          </Button>
        </form>
      </div>

      <div>
        <label className="flex gap-2">
          <TextInput className="" type="checkbox" />
          Remember me
        </label>
      </div>
      <div>
        <span>or sign in with</span>
      </div>
      <div className="flex gap-4">
        <Button type={"submit"}>
          {" "}
          <img src={google} /> Sign in with Google
        </Button>
        <Button type={"submit"}>
          {" "}
          <img src={apple} /> Sign in with Apple
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
