const Pagination = () => {
  return (
    <div>
      <div className="flex w-auto flex-col items-center justify-center gap-10 border-b-1 border-t-1 border-slate-400 py-4 md:flex-row">
        <button className="hidden h-[24px] min-w-[110px] max-w-[165px] items-center justify-center border-[1px] border-black text-[14px] font-extralight md:flex">
          Previous
        </button>
        <div className=" hidden w-auto gap-4 md:flex md:gap-1 lg:gap-6">
          {new Array(10).fill(0).map((index) => {
            return (
              <div
                className={`h-[36px] w-[36px] ${index + 1 == 1 ? "flex  items-center justify-center rounded-full bg-black text-[13px] font-light text-white" : " flex  items-center justify-center rounded-full"}`}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
        <div className="flex w-auto gap-4 md:hidden md:gap-6">
          {new Array(5).fill(0).map((index) => {
            return (
              <div
                className={`h-[36px] w-[36px] ${index + 1 == 1 ? "flex  items-center justify-center rounded-full bg-black text-[13px] font-light text-white" : " flex  items-center justify-center rounded-full"}`}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
        <button className="hidden h-[24px] min-w-[110px] max-w-[165px] items-center justify-center border-[1px] border-black text-[14px] font-extralight md:flex">
          Next
        </button>
        <div className="flex md:hidden  justify-center gap-4">
          <button className=" flex h-[28px] min-w-[110px] max-w-[165px] items-center justify-center border-[1px] border-black text-[14px] font-extralight">
            Next
          </button>
          <button className=" flex h-[28px] min-w-[110px] max-w-[165px] items-center justify-center border-[1px] border-black text-[14px] font-extralight">
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
