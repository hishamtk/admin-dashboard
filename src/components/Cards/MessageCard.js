const MessageCard = (props) => {
  const { url, author, msgHead, msgBody, time } = props.data;
  return (
    <>
      <div className="flex flex-row py-3  justify-center overflow-hidden shadow-inner">
        <div className="w-2/12 relative ">
          <img
            src={`${url}`}
            alt="name"
            className="absolute right-3 rounded-full w-10 h-10"
          />
        </div>
        <div className="w-8/12">
          <p className="text-opacity-60 text-white-350 text-sm"> {author}</p>
          <h1 className="text-white-350 text-lg">{msgHead}</h1>
          <p className="text-opacity-60 text-white-350 text-sm">{msgBody}</p>
        </div>
        <div className="w-2/12">
          <div className="text-opacity-60 text-white-350 text-sm">{time}</div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
