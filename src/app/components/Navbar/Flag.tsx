const Flag = ({ code }: { code: string }) => {
  return (
    <div
      className="w-full h-full bg-white dark:bg-gray-900"
      style={{
        backgroundImage: `url(/assets/flags/${code}.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
};

export default Flag;
