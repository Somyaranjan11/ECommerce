import Hamburger from "../assets/Icons/Hamburger";
const Header = () => {
  const menuItems: string[] = [
    "Featured",
    "New",
    "Home Decor",
    "Food & drink",
    "Women",
    "Beauty & wellness",
    "Jewelry",
    "Paper & novelty",
    "Kids & baby",
    "Pets",
    "Men",
  ];
  // API URL
  // https://662b7fc9de35f91de15879c6.mockapi.io/api/v1/products
  return (
    <div className="w-full  text-primary">
      <div className="flex w-full flex-row items-center justify-between gap-4 p-2 md:p-3">
        <div className="flex w-auto items-center gap-2">
          <div className="flex w-auto md:hidden">
            <Hamburger />
          </div>
          <div className="ml-1 w-fit md:ml-3">
            {" "}
            {/* Change h-9 to adjust height */}
            <img
              src={`https://cdn.faire.com/static/logo.svg`}
              alt="Faire Logo"
              className="h-[15px] w-full"
            />
          </div>
        </div>
        <div className=" hidden h-12 w-[65%] items-center justify-between rounded-full border-1 border-primary p-2 md:flex">
          <div className="flex h-12 w-full items-center justify-center">
            {/* <span className="text-xs">Search products or brands</span> */}
            <input
              type="text"
              placeholder="Search products or brands"
              className="h-10 w-full rounded-full border-none outline-none"
            />
          </div>
          <div className="w-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search "
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
        <div className="flex h-12 w-[35%] flex-row items-center justify-end gap-1 lg:justify-between">
          <div className=" hidden w-auto items-center justify-center gap-2 lg:flex">
            <span className="w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <p className="w-auto whitespace-nowrap">EN-GB</p>
          </div>
          <div className="hidden w-auto whitespace-nowrap lg:flex">|</div>
          <div className=" hidden w-auto items-center lg:flex">
            <p className="w-auto  whitespace-nowrap">Blog</p>
          </div>
          <div className=" hidden w-auto items-center lg:flex">
            <p className="w-auto whitespace-nowrap">Sell on Faire</p>
          </div>
          <div className=" hidden w-auto items-center whitespace-nowrap lg:flex">
            <p>Sign in</p>
          </div>
          <div className="flex gap-3 w-fit items-center justify-center text-center text-black">
            <div className="flex w-[50px] justify-end md:hidden">
              <div className="w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-search "
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <button className="h-10 w-full whitespace-nowrap bg-black text-white px-3 text-[11px] sm:px-6 sm:text-[15px]">
              {" "}
              Sign up to Shop
            </button>
          </div>
        </div>
      </div>
      <div className=" hidden w-full items-center justify-center gap-4 p-3 text-xs lg:flex">
        {menuItems.map((menuItem) => (
          <div key={menuItem} className="w-fit">
            <span className="text-[15px] font-light">{menuItem}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 border-b-1 border-t-1 border-slate-400 py-4">
        <p className="pl-6 font-light">Home / All European brands</p>
      </div>
    </div>
  );
};

export default Header;
