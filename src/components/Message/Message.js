import MessageCard from "../Cards/MessageCard";

const Message = () => {
  const totalMessge = "05";
  let data = [
    {
      url: "https://pixomatic.us/blog/wp-content/uploads/2019/11/pixomatic_1572877090227.png",
      author: "Brennen Bliss",
      msgHead: "an exceptional UI designer",
      msgBody:
        "Hi Zihad I came across your shots featured on Dribble and Behance ..",
      time: "4:30",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/VIJAYENDER_GOUD_PROFILE_PICTURE.jpg/400px-VIJAYENDER_GOUD_PROFILE_PICTURE.jpg",
      author: "Justin Mezzell",
      msgHead: "Design Project",
      msgBody:
        "Hi Zihad I came across your shots featured on Dribble and Behance ..",
      time: "9:30",
    },
    {
      url: "https://pixomatic.us/blog/wp-content/uploads/2019/11/pixomatic_1572877090227.png",
      author: "Focus Lab",
      msgHead: "UI/UX Work",
      msgBody:
        "Hi Zihad I came across your shots featured on Dribble and Behance ..",
      time: "11:30",
    },
    {
      url: "http://vividity.com.au/blog/wp-content/uploads/2016/03/moi_0050_72dpi_2048crop(pp_w568_h568).jpg",
      author: "George Bokhud",
      msgHead: "Design Work",
      msgBody:
        "Hi Zihad I came across your shots featured on Dribble and Behance ..",
      time: "3:30",
    },
    {
      url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Bromada Philips",
      msgHead: "Web App Interface Project",
      msgBody:
        "Hi Zihad I came across your shots featured on Dribble and Behance ..",
      time: "6:30",
    },
  ];
  return (
    <>
      <div className="w-1/3 flex flex-col">
        <div className="relative border-bottom pb-8">
          <h1 className="text-white-350 font-bold text-opacity-90 pl-2">Recent mail</h1>
          <div className="absolute right-2 top-1 text-sm bg-opacity-10 bg-white-350 rounded-lg px-3">
            {totalMessge}
          </div>
        </div>
        {data.map((msg) => {
          return <MessageCard data={msg} />;
        })}
      </div>
    </>
  );
};

export default Message;
