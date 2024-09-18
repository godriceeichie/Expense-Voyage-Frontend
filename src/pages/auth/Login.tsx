import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Loader } from "@mantine/core";
import { loginVal } from "../../schema";


const Login = () => {
    const [loading, setLoading] = useState(false);
    const {handleSubmit, formState: {errors}, register } = useForm<z.infer<typeof loginVal>>({
        resolver: zodResolver(loginVal)
    })

    const submitData : SubmitHandler<z.infer<typeof loginVal>> = (data, e) => {
        setLoading(true)
        e?.preventDefault()
        console.log(data)
    }

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-[400px] mx-auto rounded-lg ring-1 ring-slate-900/5 shadow py-6 px-5 sm:w-4/5 md:w-3/5 lg:w-2/5 flex flex-col items-center">
        {/* <img src={nnpcLogo} alt="" className="w-14" /> */}
        <header className="mt-2 mb-4">
          <h1 className="text-center text-text-color-900 font-bold text-xl">
            Welcome Back, Admin
          </h1>
          <p className="text-sm text-[#8a8e8b] ">Enter your credentials to continue</p>
        </header>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(submitData)}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 "
              {...register("email")}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-4"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>
          <button type="submit" className={`${loading ? "bg-[#00401053]" : "bg-primary-color hover:bg-[#003a0e]"} transition text-white py-2 rounded-lg font-medium flex items-center justify-center`}>
            {
                loading ? <Loader size={'sm'} color="white"/> : "Login"
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
