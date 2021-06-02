import AdminHeading from "../components/Navbar/AdminHeading.js";
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import CardBarChart from "../components/Cards/CardBarChart.js";
import HeadStat from "../components/HeadStat/HeadStat.js";
import Message from "../components/Message/Message.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

const Admin = () => {
  return (
    <>
      <div className="main-bg  py-24 px-20 mx-auto">
        <div className="flex flex-row overflow-hidden  rounded-sm bg-white">
          <Sidebar />

          <div className="flex-auto admin-bg h-full">
            <AdminNavbar />

            <div className="px-16 py-2 mx-auto">
              <AdminHeading />

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
