const AdminNavbar = () => {
  return (
    <>
      <div className="flex flex-row-reverse justify-space-around">
        <div className="flex relative flex-row justify-center space-x-6 items-center w-72 nav-height swatch_5 text-white-250 px-7">
          <span className="absolute w-2 h-2 left-16 top-6 rounded-full bg-green-150"></span>
          <i class="far fa-square fa-lg flex-1 "></i>

          <i class="fas fa-search fa-lg flex-1"></i>
          <i class="fas fa-ellipsis-h fa-lg flex-auto"></i>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
