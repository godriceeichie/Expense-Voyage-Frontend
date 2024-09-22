import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "@mantine/core";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoArrowBack, IoMailOpenSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import { EmailType } from "../../types";
import { emailValidation } from "../../schema";
import { api } from "../../api";

const ForgotPassword = () => {
  const [slide, setSlide] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<EmailType>({
    resolver: zodResolver(emailValidation),
  });

  const sendEmail: SubmitHandler<EmailType> = (data, e) => {
    e?.preventDefault();
    setLoading(true);
    api
      .post("/email/reset-password-link", data)
      .then(() => {
        setLoading(false);
        setSlide(true);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (err.response.status == 404) {
          setError(
            "email",
            { message: "User with email does not exist" },
            { shouldFocus: true }
          );
        }
      });
  };

  return (
    <div className="signup flex flex-col items-center justify-center gap-2 min-h-screen">
      {/* <Logo /> */}
      {/* <button onClick={() => setSlide(!slide)}>Slide</button> */}
      <div className="relative rounded-lg ring-1 ring-slate-900/5 shadow  opacity-90 w-[90%] max-w-lg mx-auto px-5 lg:px-10 py-8 flex flex-col overflow-hidden">
        <div
          className={`transition-transform duration-500 ease-in-out ${
            slide
              ? "transform translate-x-0"
              : "transform translate-x-[150%] absolute"
          }`}
        >
          <button
            className="group flex items-center gap-2 text-sm mb-2"
            onClick={() => setSlide(!slide)}
          >
            <IoArrowBack />
            <span className="group-hover:-translate-x-1 transition-all">
              Back
            </span>
          </button>
          <div className="flex flex-col items-center">
            <IoMailOpenSharp size={40} />
            <h1 className="font-medium text-2xl text-text-color-900">Check your mail</h1>
            <p className="text-[#707070] text-center">
              We have sent a password reset link to your mail
            </p>
            <Link
              className="w-full my-4 inline-flex items-center justify-center relative shrink-0
              ring-offset-2 ring-offset-bg-300 ring-accent-main-100
              focus-visible:outline-none focus-visible:ring-1
              disabled:pointer-events-none disabled:opacity-50
              disabled:shadow-none disabled:drop-shadow-none
              bg-primary-color text-white
              bg-[length:200%_100%] hover:bg-right
              active:bg-accent-main-000 border-0.5 border-border-300
              text-oncolor-100 text-base font-medium drop-shadow-sm
              transition-all duration-300 ease-in-out
              shadow-[inset_0_0.5px_0px_rgba(255,255,0,0.15)]
              [text-shadow:_0_1px_2px_rgb(0_00/_10%)]
              active:shadow-[inset_0_1px_6px_rgba(0,0,0,0.2)]
              hover:from-[#7459ff] hover:to-[#7459ff] h-10 rounded-md px-5 active:scale-[0.985] whitespace-nowrap"
              to={"https://mail.google.com/mail/u/0/#inbox"}
              target="_blank"
            >
              Open Mail
            </Link>

            <span className="inline-block w-full text-center text-gray-500 text-sm mt-4">
              Did not receive the email? Check your spam filter, or{" "}
              <button
                onClick={() => setSlide(!slide)}
                className="text-primary-color inline hover:font-medium"
              >
                try another email address
              </button>
            </span>
          </div>
        </div>
        <div
          className={` transition-transform duration-500 ease-in-out${
            slide
              ? "transform -translate-x-[150%] absolute"
              : "transform translate-x-0"
          }`}
        >
          <Link
            to={"/auth/login"}
            className="group flex items-center gap-2 text-sm mb-2"
          >
            <IoArrowBack />
            <span className="group-hover:-translate-x-1 transition-all">
              Back
            </span>
          </Link>
          <h1 className="text-center text-2xl mb-1 mt-4 font-semibold text-text-color-900">
            Reset Password
          </h1>
          <p className="text- text-center text-[15px] text-[#707070]">
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password.
          </p>
          {/* <button onClick={() => setSlide(true)}>SLide</button> */}
          <form action="" className="mt-4" onSubmit={handleSubmit(sendEmail)}>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-[#cfd4d0] placeholder:text-[#b2b7b3] focus:outline-primary-color outline-none rounded-lg py-2 px-4 placeholder:text-[15px] "
                {...register("email")}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-error-color flex gap-1 items-center">
                  <MdError /> {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`${
                loading
                  ? "bg-[#00401053]"
                  : "bg-primary-color hover:bg-[#003a0e]"
              } transition text-white py-2 rounded-lg font-medium flex items-center justify-center w-full mt-3`}
            >
              {loading ? <Loader size={"sm"} color="white" /> : "Send Email"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
