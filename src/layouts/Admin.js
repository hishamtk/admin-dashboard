import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import CardBarChart from "../components/Cards/CardBarChart.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeadStat from "../components/HeadStat/HeadStat.js";
import Message from "../components/Message/Message.js";

const Admin = () => {
  return (
    <>
      <div className="main-bg  py-24 px-20 mx-auto">
        <div className="flex flex-row  rounded-sm bg-white">
          <Sidebar />

          <div className="flex-auto admin-bg h-full">
            <AdminNavbar />

            <div className="px-16 py-2 mx-auto">
              <div className="flex flex-auto h-32 text-white-350 ">
                <div className="">
                  <h1 className="text-5xl py-2">Welcome back, Matt jonson</h1>
                  <p className="text-lg py-2">
                    {" "}
                    You have 7 Notifications and 5 New Mail
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-2/3 flex flex-col">
                  <HeadStat />

                  <div className="p-3 ">
                    <CardBarChart />
                  </div>
                </div>
                <Message />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
