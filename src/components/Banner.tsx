import Right from "../assets/Icons/Right";

const Banner = () => {
  const dummyArray = [
    {
      id: 1,
      text: "60-day payment terms",
    },
    {
      id: 2,
      text: "Free returns on all opening orders",
    },
    {
      id: 3,
      text: "Unique products curated for your store",
    },
  ];
  return (
    <div className="border-b-1 pb-10">
      <div className="bg-[#595540] py-12">
        <p className="text-center font-sans text-[32px] font-extralight text-white">
          Ready to start buying
          <p>wholesale online?</p>
        </p>
        <div className="mt-4 flex flex-col items-center justify-center gap-3">
          <div className="w-auto">
            {dummyArray?.map((data) => {
              return (
                <div className="mt-2 flex w-auto">
                  <div className="w-[70px]">
                    <Right />
                  </div>
                  <div className="w-auto whitespace-normal sm:whitespace-nowrap font-extralight text-white">
                    <p>{data?.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mb-4 w-auto">
            <button className="h-10 w-full whitespace-nowrap bg-white px-3 text-[11px] sm:px-12 sm:text-[15px]">
              {" "}
              Sign up to Shop
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-full lg:max-w-[1120px]">
        <div className="mt-12 px-[8px] md:px-[0px] flex flex-col gap-2">
          <p className="font-sans text-[15px] font-extralight">
            Discover products for your shop on the Faire wholesale marketplace
          </p>
          <p className="font-sans text-[15px] font-extralight text-gray-500">
            At Faire, we’re empowering small business owners and independent
            brands to buy and sell wholesale goods online. If you’re a retailer
            shopping for wholesale products, Faire offers you straight-forward
            financial terms and logistics that were previously only available to
            large retail chains. We also provide powerful sales, marketing and
            analytics tools for brands, so sellers can simplify their wholesale
            businesses and expand their reach of independent shop owners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
