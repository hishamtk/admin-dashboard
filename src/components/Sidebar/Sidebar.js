/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 z-20 flex flex-col items-center p-4">
        <div className="h-52 mt-10 ">
          <div className="flex relative flex-col justify-center items-center">
            
            <img
              src="https://corsopacific.com.au/wp-content/uploads/2019/01/Chris-Profile-BW-400px.png"
              alt="profile pic"
              className="rounded-full w-20 z-10 h-20"
            />
            <h1 className="text-lg pt-4 z-10">Matt jonson</h1>
            <p className="text-sm z-10">Creative Ui/Ux Designer</p>
          </div>
          {/* <div className="absolute top-14 left-7 h-72 w-72 rounded-full bg-blue-450 z-0 overflow-hidden"></div> */}
        </div>
        <div className="flex-1 w-full">
          <div className="flex  flex-col w-full justify-start items-center">
            <div className="text-white-350 py-4 hover:bg-white-450  flex justify-center w-full relative pr-16 ">
              <a>
                <div
                  className={
                    window.location.href.indexOf("/admin") > 0
                      ? "bg-blue-650 absolute w-2 h-12 top-1 -left-4"
                      : ""
                  }
                ></div>
                Home
              </a>
            </div>
            <div className="text-white-350 py-4 hover:bg-white-450 h flex justify-center w-full relative pr-16">
              <a>
                <div
                  className={
                    window.location.href.indexOf("/mailbox") > 0
                      ? "bg-blue-650 absolute w-2 h-12 top-1 -left-4"
                      : ""
                  }
                ></div>
                <div className="absolute right-2 top-5 text-sm bg-opacity-10 bg-white-350 rounded-lg px-3">
                  05
                </div>
                Mail box
              </a>
            </div>
            <div className="text-white-350 py-4 hover:bg-white-450 flex justify-center w-full relative pr-16">
              <a>
                <div
                  className={
                    window.location.href.indexOf("/payment") > 0
                      ? "bg-blue-650 absolute w-2 h-12 top-1 -left-4"
                      : ""
                  }
                ></div>
                Payment
              </a>
            </div>
            <div className="text-white-350 py-4 hover:bg-white-450 flex justify-center w-full relative pr-16">
              <a>
                <div
                  className={
                    window.location.href.indexOf("/task") > 0
                      ? "bg-blue-650 absolute w-2 h-12 top-1 -left-4"
                      : ""
                  }
                ></div>
                Task view
              </a>
            </div>
            <div className="text-white-350 py-4 hover:bg-white-450 flex justify-center w-full relative pr-16">
              <a>
                <div
                  className={
                    window.location.href.indexOf("/reminder") > 0
                      ? "bg-blue-650 absolute w-2 h-12 top-1 -left-4"
                      : ""
                  }
                ></div>
                Reminder
              </a>
            </div>
            <div className="text-white-350 py-4 hover:bg-white-450 flex justify-center w-full relative pr-16">
              <a>
                <div
                  className={
                    window.location.href.indexOf("/analytic") > 0
                      ? "bg-blue-650 absolute w-2 h-12 top-1 -left-4"
                      : ""
                  }
                ></div>
                Analytic
              </a>
            </div>
            <div className="text-white-350 py-4 hover:bg-white-450 flex justify-center w-full relative pr-16">
              <a>
                <div
                  className={
                    window.location.href.indexOf("/store") > 0
                      ? "bg-blue-650 absolute w-2 h-12 top-1 -left-4"
                      : ""
                  }
                ></div>
                Store room
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
