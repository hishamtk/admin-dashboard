const HeadStatCard = (props) => {
  const { title, background, value, msg,color } = props.data;
  return (
    <>
      <div className="w-1/3 overflow-y-hidden">
        <h1 className="text-white-350 font-bold text-opacity-90 pl-5 pb-12">
          {title}
        </h1>
        <div className="mx-4 py-4 bg-white relative overflow-hidden shadow-md">
          <div class={`arrow ${background}`}></div>
          <div className="pl-6 pt-3">
            <h3 className={`text-4xl font-medium ${color}`}>{value}</h3>
            <p className="text-xs pt-2 text-white-350">{msg}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadStatCard;
