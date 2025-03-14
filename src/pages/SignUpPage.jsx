import React from "react";
import TextInput from "../components/Input";
import userIcon from "../assets/user-01.svg";
import lock from "../assets/lock-03.svg";
import mail from "../assets/mail-01.svg";
import eye from "../assets/eye.svg";
import google from "../assets/google.svg";
import apple from "../assets/aaaple.svg";
import Button from "../components/Button";
import { Link } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth.schema";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
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

  const submitHandler = (val) => {
    console.log(val);
  };
  const errorHandler = (val) => {
    console.log("Validation Errors:", val);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-[550px]">
      <div className="flex flex-col gap-3 items-center ">
        <h1 className="heading-3">Create Your Account</h1>
        <span className="text-paragraph body-medium-medium">
          Please input to your account
        </span>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler, errorHandler)}
        className="flex flex-col flex-1 gap-3 w-full"
      >
        <section className="flex gap-3 w-full">
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
          rightIcon={<img src={eye} />}
          placeholder="Your password"
          type="password"
          error={errors.password?.message}
        />
        <Button className="mt-3" type="submit">
          Register
        </Button>
      </form>
      <section className="flex items-center my-2 w-full">
        <div className="flex-1 border-t border-neutral-black-8"></div>
        <span className="px-3 text-neutral-black-8 text-sm">
          Or Sign in with
        </span>
        <div className="flex-1 border-t border-neutral-black-8"></div>
      </section>
      <section className="flex justify-between w-full gap-3 ">
        <Button
          className="w-full"
          variant="signIn"
          leftIcon={<img src={google} alt="Google" className="w-5 h-5" />}
        >
          Sign Up with Google
        </Button>

        <Button
          variant="signIn"
          className="w-full"
          leftIcon={<img src={apple} alt="Apple" className="w-5 h-5" />}
        >
          Sign Up with Apple
        </Button>
      </section>
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
