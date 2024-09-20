import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import { loginVal } from "../../schema";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../../api";
import { MdError } from "react-icons/md";
import { Logo } from "../../components";
import toast from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setAccessToken, setUser, setCSRFToken } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const [queryParams] = useSearchParams();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<z.infer<typeof loginVal>>({
    resolver: zodResolver(loginVal),
  });

  const submitData: SubmitHandler<z.infer<typeof loginVal>> = (data, e) => {
    e?.preventDefault();
    setLoading(true);
    api
      .post("/auth/login", data)
      .then((res) => {
        setAccessToken(res.data.access_token);
        setUser(res.data);
        setCSRFToken(res.headers["x-csrftoken"]);

        api
          .get("/auth/user", {
            headers: {
              Authorization: `Bearer ${res.data.access_token}`,
            },
          })
          .then(() => {
            let fromParam = queryParams.get("from");
            if (fromParam) {
              navigate(fromParam);
            }
            if (fromParam == "forgot-password") {
              navigate("/dashboard/home/");
            } else {
              navigate("/dashboard/home/");
            }
            setLoading(false);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.data.detail) {
          setErrorMsg(err.response.data.detail);
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    let fromParam = queryParams.get("from");

    if (fromParam == "forgot-password") {
      toast.success("Your password has been successfully reset");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-[400px] mx-auto rounded-lg ring-1 ring-slate-900/5 shadow py-6 px-5 sm:w-4/5 md:w-3/5 lg:w-2/5 flex flex-col items-center">
        {/* <img src={nnpcLogo} alt="" className="w-14" /> */}
        <Logo />
        <header className="mt-2 mb-4">
          <h1 className="text-center text-text-color-900 font-semibold text-xl">
            Welcome Back
          </h1>
          <p className="text-sm text-[#8a8e8b]">
            Enter your credentials to continue
          </p>
        </header>
        {errorMsg && (
          <div
            className="bg-[rgba(249,58,55,0.11)] border border-red-500 text-white px-2 py-1.5 
          rounded-md flex items-center gap-1 my-3"
          >
            <MdError className="text-red-500" size={20} />
            <p className="text-gray-500">{errorMsg}</p>
          </div>
        )}
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit(submitData)}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-3 placeholder:text-[15px]"
              {...register("email")}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-error-color flex gap-1 items-center">
                <MdError /> {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-3 placeholder:text-[15px]"
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-error-color flex gap-1 items-center">
                  <MdError /> {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-end mt-1">
              <Link
                to={"/auth/forgot-password"}
                className="text-sm underline transition-all w-full text-right hover:font-medium"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className={`${
              loading ? "bg-[#00401053]" : "bg-primary-color hover:bg-[#003a0e]"
            } transition text-white py-2 rounded-lg font-medium flex items-center justify-center`}
          >
            {loading ? <Loader size={"sm"} color="white" /> : "Login"}
          </button>
        </form>
        <p className="text-gray-500 text-center mt-1 text-sm">
          Don't have an account?{" "}
          <Link
            to={"/auth/signup"}
            className="text-primary-color font-semibold hover:underline"
          >
            {"Signup here"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
