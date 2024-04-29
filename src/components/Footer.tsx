const Footer = () => {
  return (
    <div className="w-full">
      <footer className=" w-full">
        <div className="flex w-full justify-center border-y ">
          <div className="container mx-[10%] px-[8px] md:px-[0px] my-10 md:my-16 h-auto w-full">
            <div className="mx-auto flex flex-wrap md:flex-nowrap w-full items-center justify-between">
              <div className="flex">
                <div className="w-[30] sm:w-36">
                  <h5 className="my-3 text-[15px] font-medium">Company</h5>
                  <ul className="my-3 flex flex-col gap-1 font-sans text-[14px] font-light">
                    <li>About Us</li>
                    <li>Newsroom</li>
                    <li>Career</li>
                  </ul>
                </div>
                <div className="w-[30] sm:w-36 ">
                  <h5 className="my-3 text-[15px] font-medium">Support</h5>
                  <ul className="flex flex-col gap-1 font-sans text-[14px] font-light">
                    <li>About Us</li>
                    <li>Newsroom</li>
                    <li>Career</li>
                  </ul>
                </div>
                <div className="w-[30] sm:w-36 ">
                  <h5 className="my-3 text-[15px] font-medium">Connect</h5>
                  <ul className="flex flex-col gap-1 font-sans text-[14px] font-light">
                    <li>About Us</li>
                    <li>Newsroom</li>
                    <li>Career</li>
                  </ul>
                </div>
              </div>
              <div className="flex w-auto flex-col justify-end">
                <h2 className="mb-2 w-fit text-right text-3xl font-thin">
                  Get the Faire app
                </h2>
                <p className="w-fit">
                  Shop on the go, message brands, and track orders with the
                  Faire app.
                </p>
                <div className="flex flex-wrap w-fit justify-end gap-3">
                  <img
                    className="h-14 w-36"
                    src={
                      "https://cdn.faire.com/static/download-badges/app-store-en.svg"
                    }
                  />

                  <div className="mt-1 h-12 w-36 rounded-md bg-black">
                    <img
                      className="h-full w-40 object-cover"
                      src={
                        "	https://cdn.faire.com/static/download-badges/google-play-en.png"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto my-12">
            <div className="flex justify-between">
              <div className="flex px-[8px] md:px-[0px] gap-2 flex-col">
                <p className="text-[15px] font-extralight">©2024 Faire Wholesale, Inc.</p>
                <p className="text-[14px] font-extralight text-gray-400">
                  Terms of Service • Privacy Policy • Cookie policy • IP policy
                  • Sitemap
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
