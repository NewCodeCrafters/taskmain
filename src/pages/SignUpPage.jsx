import React, { useState } from "react";
import TextInput from "../components/Input";
import userIcon from "../assets/user-01.svg";
import lock from "../assets/lock-03.svg";
import mail from "../assets/mail-01.svg";
import eyeon from "../assets/eye-on.svg";
import eyeoff from "../assets/eye-off.svg";
import Button from "../components/Button";
import { Link } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth.schema";
import { useForm } from "react-hook-form";
import OrSignIn from "../components/OrSignIn";
import { signup } from "../utils/api";
import Logo from "../components/Logo";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    values: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    },
  });

  const submitHandler = async (val) => {
    try {
      setIsLoading(true);

      await signup(val);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const errorHandler = (val) => {
    console.log("Validation Errors:", val);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-[550px]">
      <Logo className="md:hidden" />
      <div className="flex flex-col gap-3 items-center ">
        <h1 className="heading-4 md:heading-3">Create Your Account</h1>
        <span className="text-paragraph body-medium-medium">
          Please input to your account
        </span>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler, errorHandler)}
        className="flex flex-col flex-1 gap-3 w-full"
      >
        <section className="flex flex-col lg:flex-row gap-3 w-full">
          <TextInput
            {...register("first_name")}
            label="First name"
            leftIcon={<img src={userIcon} />}
            placeholder="Input your first name"
            className="w-full"
            error={errors.first_name?.message}
          />

          <TextInput
            {...register("last_name")}
            label="Last name"
            leftIcon={<img src={userIcon} />}
            placeholder="Input your last name"
            className="w-full"
            error={errors.last_name?.message}
          />
        </section>
        <TextInput
          {...register("email")}
          label="Email"
          leftIcon={<img src={mail} />}
          placeholder="Your email"
          className="w-full"
          error={errors.email?.message}
        />
        {/* {errors.email && <span>{errors.email.message}</span>} */}
        <TextInput
          {...register("password")}
          label="Password"
          leftIcon={<img src={lock} />}
          rightIcon={
            <img
              src={showPassword ? eyeon : eyeoff}
              onClick={handleShowPassword}
            />
          }
          placeholder="Your password"
          type={showPassword ? "text" : "password"}
          error={errors.password?.message}
        />

        {isLoading ? (
          <Button className="mt-3 h-10" type="submit" isLoading>
            Register
          </Button>
        ) : (
          <Button className="mt-3" type="submit">
            Register
          </Button>
        )}
      </form>
      <OrSignIn />
      <div className="flex items-center gap-2">
        <span className="body-small-medium">Already have an account?</span>
        <Link to="/login" className="text-primary-300 body-medium-semibold">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
