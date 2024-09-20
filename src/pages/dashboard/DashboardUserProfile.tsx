import { Tabs } from "@mantine/core";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const DashboardUserProfile = () => {
    const [activeTab, setActiveTab] = useState<string | null>("user-details");
    const { user } = useAuth()
  return (
    <div>
      <h1 className="font-semibold text-xl">Your Profile</h1>
      <Tabs value={activeTab} onChange={setActiveTab} classNames={{root:"mt-3"}} color="#004010">
        <Tabs.List className="text-base">
          <Tabs.Tab value="user-details" classNames={{tabLabel: `${activeTab == "user-details" && 'font-medium'} text-base`}}>Your details</Tabs.Tab>
          <Tabs.Tab value="user-preferences" classNames={{tabLabel: 'text-base'}}>Preferences</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="user-details" classNames={{panel: "py-5"}}>
            <form action="" className="flex flex-col gap-4 lg:w-1/2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-medium text-base">Name</label>
                    <p className="text-sm text-[#5f6561]">The name associated with this account</p>
                    <input type="text" value={user?.name} className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px] "/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-medium text-base">Email</label>
                    <p className="text-sm text-[#5f6561]">The email associated with this account</p>
                    <input type="text" value={user?.email} className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px] "/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-medium text-base">Phone Number</label>
                    <p className="text-sm text-[#5f6561]">The phone number associated with this account</p>
                    <input type="text" value={""} className="border border-[#cfd4d0] outline-none rounded-lg py-2 px-4 placeholder:text-[15px] "/>
                </div>
                <button className="bg-primary-color w-fit text-white px-4 py-2 rounded-lg">Save</button>
            </form>
        </Tabs.Panel>

        <Tabs.Panel value="user-preferences">Messages tab content</Tabs.Panel>

      </Tabs>
    </div>
  );
};

export default DashboardUserProfile;
