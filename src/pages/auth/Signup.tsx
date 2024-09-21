import { SubmitHandler, useForm } from "react-hook-form";
import { SignupFieldType } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupVal } from "../../schema";
import { useState } from "react";
import { api } from "../../api";
import { Loader } from "@mantine/core";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { MdError } from "react-icons/md";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  //   const [signupDetails, setSignupDetails] = useState<SignupFieldType>();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<SignupFieldType>({
    resolver: zodResolver(signupVal),
  });

  const navigate = useNavigate();
  const convertToTitleCase = (word: string) => {
    return word
      .split(" ")
      .map((word, index) => {
        let newWord = word.split("");
        if (index == 0) {
          let firstletter = newWord[0].toUpperCase();
          newWord.splice(0, 1, firstletter);
        }
        return newWord.join("");
      })
      .join(" ");
  };

  const submitData: SubmitHandler<SignupFieldType> = (data, e) => {
    e?.preventDefault();
    setLoading(true);
    // setSignupDetails(data);
    // const secretKey = import.meta.env.VITE_APP_EMAIL_SECRET_KEY;
    // navigate(`/auth/verify-email?state=${encryptData(data.email, secretKey)}`);

    api
      .post("/auth/signup", data)
      .then(() => {
        setLoading(false);
        navigate("/dashboard/home");
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status == 500) {
          toast.error("No Internet Connection. Please try again");
        } else {
          for (const key in err.response.data) {
            const errMsg = convertToTitleCase(err.response.data[key][0]);
            setError(
              key as keyof SignupFieldType, // Type assertion here
              { type: "manual", message: errMsg }, // Use "manual" for the type
              { shouldFocus: true }
            );
          }
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-[400px] mx-auto rounded-lg ring-1 ring-slate-900/5 shadow py-6 px-5 sm:w-4/5 md:w-3/5 lg:w-2/5 flex flex-col items-center">
        {/* <img src={nnpcLogo} alt="" className="w-14" /> */}
        <header className="mt-2 mb-4 flex flex-col items-center">
          <h1 className="text-center text-text-color-900 font-bold text-xl">
            Welcome to Expense Voyage
          </h1>
          <p className="text-sm text-[#8a8e8b] ">Enter your details</p>
        </header>
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit(submitData)}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px]"
              {...register("name")}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm text-error-color flex gap-1 items-center">
                <MdError /> {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px]"
              {...register("email")}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px]"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-error-color flex gap-1 items-center">
                <MdError /> {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`${
              loading ? "bg-[#00401053]" : "bg-primary-color hover:bg-[#003a0e]"
            } transition text-white py-2 rounded-lg font-medium flex items-center justify-center`}
          >
            {loading ? <Loader size={"sm"} color="white" /> : "Signup"}
          </button>
        </form>
        <p className="text-gray-500 text-center mt-1 text-sm">
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className="text-primary-color font-semibold hover:underline"
          >
            {"Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
