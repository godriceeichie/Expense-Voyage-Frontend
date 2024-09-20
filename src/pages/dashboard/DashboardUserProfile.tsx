import { ComboboxItem, Loader, Select, Tabs } from "@mantine/core";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import { UserProfileFieldType } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileVal } from "../../schema";
import usePrivateApi from "../../hooks/usePrivateApi";
import toast from "react-hot-toast";

const DashboardUserProfile = () => {
  const [activeTab, setActiveTab] = useState<string | null>("user-details");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [value, setValue] = useState<ComboboxItem | null>(null);

  const { user, setUser } = useAuth();
  const privateApi = usePrivateApi();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<UserProfileFieldType>({
    resolver: zodResolver(userProfileVal),
    defaultValues: {
      name: user?.name,
      phone_number: user?.phone_number || "",
    },
  });

  const submitData: SubmitHandler<UserProfileFieldType> = (data, e) => {
    e?.preventDefault();
    console.log(data);
    setLoading(true);

    privateApi
      .put("/auth/user", data)
      .then((res) => {
        setUser(res.data);
        toast.success("Your profile has been updated");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1 className="font-semibold text-xl">Your Profile</h1>
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        classNames={{ root: "mt-3" }}
        color="#004010"
      >
        <Tabs.List className="text-base">
          <Tabs.Tab
            value="user-details"
            classNames={{
              tabLabel: `${
                activeTab == "user-details" && "font-medium"
              } text-base`,
            }}
          >
            Your details
          </Tabs.Tab>
          <Tabs.Tab
            value="user-preferences"
            classNames={{ tabLabel: "text-base" }}
          >
            Preferences
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="user-details" classNames={{ panel: "py-5" }}>
          <form
            action=""
            onSubmit={handleSubmit(submitData)}
            className="flex flex-col gap-4 lg:w-1/2"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-medium text-base">
                Name
              </label>
              <p className="text-sm text-[#5f6561]">
                The name associated with this account
              </p>
              <input
                type="text"
                className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px] "
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-error-color flex gap-1 items-center">
                  <MdError /> {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-medium text-base">
                Email
              </label>
              <p className="text-sm text-[#5f6561]">
                The email associated with this account
              </p>
              <input
                type="text"
                value={user?.email}
                disabled
                className=" bg-gray-100 border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px] text-[#8e8ea0]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-medium text-base">
                Phone Number
              </label>
              <p className="text-sm text-[#5f6561]">
                The phone number associated with this account
              </p>
              <input
                type="text"
                value={user!?.phone_number ?? ""}
                disabled={user?.phone_number !== null}
                className={`border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px] ${
                  user?.phone_number && "text-[#8e8ea0] bg-gray-100 "
                } `}
                {...register}
              />
              {errors.phone_number && (
                <p className="text-sm text-error-color flex gap-1 items-center">
                  <MdError /> {errors.phone_number.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading || !isDirty}
              className={`${
                loading || !isDirty
                  ? "bg-[#00401053]"
                  : "bg-primary-color hover:bg-[#003a0e]"
              } transition text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center w-fit`}
            >
              {loading ? <Loader size={"sm"} color="white" /> : "Save"}
            </button>
          </form>
        </Tabs.Panel>

        <Tabs.Panel value="user-preferences" classNames={{ panel: "py-5" }}>
          <div className="flex flex-col gap-1 lg:w-1/2">
            <label htmlFor="" className="font-medium text-base">
              Currency
            </label>
            {/* <input
              type="text"
              value={user?.email}
              disabled
              className=" bg-gray-100 border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px] text-[#8e8ea0]"
            /> */}
            <Select
              data={[
                { value: "ngn", label: "Naira (NGN)" },
                { value: "usd", label: "United States Dollar (USD)" },
                { value: "euro", label: "Euro (EURO)" },
                { value: "gbp", label: "Great Britain Pounds (GBP)" },
              ]}
              value={value ? value.value : null}
              onChange={(_value, option) => setValue(option)}
              classNames={{
                input:
                  "rounded-lg border border-[#cfd4d0] py-3 px-4 font-poppins font-medium",
                option: "text-black",
              }}
            />

            <button
              disabled={loading2 || !isDirty}
              className={`${
                loading || !isDirty
                  ? "bg-[#00401053]"
                  : "bg-primary-color hover:bg-[#003a0e]"
              } transition text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center w-fit`}
            >
              {loading ? <Loader size={"sm"} color="white" /> : "Save"}
            </button>
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default DashboardUserProfile;
