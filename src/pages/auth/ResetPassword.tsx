import { Logo } from "../../components";
import { MdError } from "react-icons/md";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordVal } from "../../schema";
import { ResetPasswordFieldType } from "../../types";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordFieldType>({
    resolver: zodResolver(resetPasswordVal),
  });

  const { token } = useParams();
  const navigate = useNavigate();

  const submitData: SubmitHandler<ResetPasswordFieldType> = (data, e) => {
    e?.preventDefault();
    setLoading(true);
    api
      .post(`/auth/reset-password/${token}`, {
        new_password: data.password,
        confirm_password: data.confirmPassword,
      })
      .then(() => {
        setLoading(false);
        navigate("/auth/login?from=forgot-password");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="signup flex flex-col items-center justify-center gap-2 h-full min-h-screen">
      <Logo />

      <div className="relative opacity-90 w-[90%] max-w-lg mx-auto px-6 lg:px-10 py-6 flex flex-col rounded-md ring-1 ring-slate-900/5 shadow">
        <h1 className="text-center text-2xl mb-2 font-semibold">
          Create New Password
        </h1>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(submitData)}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            {/* className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-3 placeholder:text-[15px]" */}
            <div className="bg-transparent border border-[#cfd4d0] rounded has-[:focus]:border-none has-[:focus]:ring-2 has-[:focus]:ring-[#1a6d2e] px-3 flex items-center">
              <input
                type={visibility ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-transparent placeholder:text-[15px] placeholder:text-[#b2b7b3] py-2 focus:outline-none w-full"
                {...register("password")}
              />
              {visibility ? (
                <button type="button" onClick={() => setVisibility(false)}>
                  <IoEyeOffOutline size={20} className="text-[#545654]"/>
                </button>
              ) : (
                <button type="button" onClick={() => setVisibility(true)}>
                  <IoEyeOutline size={20} />
                </button>
              )}
            </div>
            {errors.password && (
              <p className="text-sm text-error-color flex items-center gap-1">
                <MdError />
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Confirm Password</label>
            <div className="bg-transparent border border-[#cfd4d0] rounded has-[:focus]:border-none has-[:focus]:ring-2 has-[:focus]:ring-[#1a6d2e] px-3 flex items-center">
              <input
                type={visibility2 ? "text" : "password"}
                placeholder="Enter your password again"
                className="bg-transparent placeholder:text-[15px] placeholder:text-[#b2b7b3] py-2 focus:outline-none w-full"
                {...register("confirmPassword")}
              />
              {visibility2 ? (
                <button type="button" onClick={() => setVisibility2(false)}>
                  <IoEyeOffOutline size={20} />
                </button>
              ) : (
                <button type="button" onClick={() => setVisibility2(true)}>
                  <IoEyeOutline size={20} />
                </button>
              )}
            </div>
            {errors.confirmPassword?.message && (
              <p className="text-sm text-error-color flex items-center gap-1">
                <MdError />
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
          <button
            className={`${
              loading ? "bg-[#00401053]" : "bg-primary-color hover:bg-[#003a0e]"
            } transition text-white py-2 rounded-lg font-medium flex items-center justify-center w-full mt-3`}
            data-testid="acceptable-use-continue"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
