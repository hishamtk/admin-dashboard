import HeadStatCard from "../Cards/HeadStatCard.js";

const HeadStat = () => {
  const data = [
    {
      title: "Completed Project",
      background: "arrow-first",
      value: "500",
      msg: "total this number of work completed",
      color: "text-blue-350",
    },
    {
      title: "Work hours",
      background: "arrow-second",
      value: "900",
      msg: "total Work houre",
      color: "text-blue-850",
    },
    {
      title: "Payment balance",
      background: "arrow-third",
      value: "$5000",
      msg: "in your account",
      color: "text-blue-750",
    },
  ];
  return (
    <>
      <div className="flex flex-row  justify-around">
        {data.map((card) => {
          return <HeadStatCard data={card} />;
        })}
      </div>
    </>
  );
};

export default HeadStat;
