const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-[100px] m-[10px] shadow-md border-1 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default Card;
