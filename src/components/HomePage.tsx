import Photo1 from "../assets/photo1.png";
import ImageBanner1 from "../assets/imgaebanner1.png";
import ImageBanner2 from "../assets/imagebanner2.png";
import ImageBanner4 from "../assets/imagebanner4.png";
import ImageBanner5 from "../assets/imagebanner5.png";
import ImageBanner11 from "../assets/imagebannner11.png";
import ImageBanner6 from "../assets/imagebanner6.png";
import ImageBanner10 from "../assets/imagebanner10.png";
import ImageBanner8 from "../assets/imagebanner8.png";
import ImageBanner7 from "../assets/imagebanner7.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";
import Updown from "../assets/Icons/Updown";
import Lines from "../assets/Icons/Lines";
import Downarrow from "../assets/Icons/Downarrow";
import Brand from "./Brand";
import FaqTabContainer from "./Tab";
import Banner from "./Banner";
import Footer from "./Footer";

const HomePage = () => {
  const products = [
    {
      imageUrl: Photo1,
      name: "Mad Beauty",
      color: "Black",
      rating: "4.8",
    },
    {
      imageUrl: ImageBanner11,
      name: "ALL THE WAY TO SAY",
      color: "Black",
      rating: "4.8",
    },
    {
      imageUrl: ImageBanner2,
      name: "Hindbag",
      color: "Black",
      rating: "4.8",
    },
    {
      imageUrl: ImageBanner1,
      name: "the K2 yak chews",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl: ImageBanner4,
      name: "Sophie's Barn",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl: ImageBanner5,
      name: "Rockahula Kids",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl: ImageBanner6,
      name: "FROM YOU TO ME",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl: ImageBanner10,
      name: "Kate Broughton",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl: ImageBanner8,
      name: "Corinee Lapierre Limited",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl: ImageBanner7,
      name: "VIE",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/17e2a035cceb91043f99e8e4e0eac716bc90a304bda780a601770a036fea2231.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=770,770,x98,y0,safe&width=720",
      name: "Lisa Angel",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/534268250cf9bdc48fe4e7eeebadc309bb4e2d76e44e7677d00e8a816b7cf60f.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=900,900,x0,y0,safe&width=720",
      name: "Ohh Deer UK +EU",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/e480b42c96249a6b1465b6eef38619fb7d3185d64921251fe0a10570f1abcfa1.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1080,1080,x0,y0,safe&width=720",
      name: "Coral and Mint",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl: "",
      name: "",
      color: "Black",
      rating: "5.0",
      isCol2: true,
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/6bf683fd7b82aec93fe577cb4773636e22872171b34e46156a7929ab9d7ea6fb.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=2262,2262,x136,y59,safe&width=720",
      name: "Hawthorn Handmade",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/f65333be02c229028367c3917a81620b97ea3256826c23a866549caa96a4b935.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1450,1450,x50,y392,safe&width=720",
      name: "MDV Shop",
      color: "Black",
      rating: "4.6",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/7e5fe32098c6c785bd92fdcc170db398123ef70ac7b1dbc21507ae0feb8c0271.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "Kapelki Art",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/06fc10a9cd9098fbb782ed6914c828c24de42da13fa35310bbb44db4fbf4b957.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "MoYou London",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/e174f1851c13b707d0c1e896799620b71ef3403b5d539b6c3eeb5758af913c84.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "MoYou London",
      color: "Black",
      rating: "4.7",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/200f0a5ada7690c5773a6cc0b0fe782bae6f4391ab85242aa77282b4db04cba2.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=2048,2048,x0,y0,safe&width=720",
      name: "Pink Stories",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/5e0ea8e0aff8482c366e66ba56f54db7fed14454aeb6fc4d988f25655bfae472.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "Lula Natura",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/f7facddaac27443893c3a811ec3b304f34de339d641649cefd74ff498db316ee.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1293,1293,x623,y0,safe&width=720",
      name: "Ask Mummy & Daddy",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/ee5e869e89ca5961fd75b65b55d0d6bcb02c29f2efde9dd7a1ebc10867605e9a.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=3000,3000,x0,y0,safe&width=720",
      name: "Another Studio",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/7606371fc26cf226371c4f116548a4959ad8a2793ba2364c764ef7ff52fe37ad.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "Colour Addict Jewellery ",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/c2c03e525c633b69179b474a3b10810522e7b106682ea045f0310dd9ffa1b3e8.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "Mifkins",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/a92d570b28629cbe14745bddb3e1cd847c2e488e4abaa8446c190204ea726607.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1367,1367,x0,y0,safe&width=720",
      name: "Bazou",
      color: "Black",
      rating: "4.8",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/89be0604b5b79eec0ac03e12cc421a43d882b9bc632d097fce49893cc71ab75f.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=500,500,x0,y0,safe&width=720",
      name: "BillyBELT",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl: "",
      name: "Rockahula kids",
      color: "Black",
      rating: "5.0",
      isCol2: true,
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/42a0094d189bfed1090563bbfe419e27d64936d7b21b3ce3df2e94f2d4a4471c.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=2000,2000,x0,y0,safe&width=720",
      name: "Ginger Fox USA",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/3da6e3d770e70d53262c85cee8bfa2f33a7a26e4e0407086c95e6bdc5af2e3a7.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "BEAU Kid",
      color: "Black",
      rating: "4.7",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/1dc44ee766c578c9fb27b6fe3c0a183a77ef8dd704be3ebe9c06ee45c9a67fd0.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1064,1064,x0,y78,safe&width=720",
      name: "PETITE EvelinaApparel",
      color: "Black",
      rating: "4.7",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/064aab63dc6a9b43767e89d4469b3f6233d484c6ee7af73dfe331212748facbe.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "wxy. ",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/694ee1bb28229f68df8412d1114a63bbbf0fef26357feb1e9e363a10c966d81f.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "Big Metal London",
      color: "Black",
      rating: "4.9",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/784a9bf97c58323469171929f4a5027c0309b4fb2a8871aeb839038b9c364f00.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=5755,5755,x0,y959,safe&width=720",
      name: "Mirins",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/2829ad911766c3d5a71e7e237de0c3a6a7fa056e37d5c572752fc85d01e32392.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "DreamBuy",
      color: "Black",
      rating: "4.8",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/654336f28d2f719d355e77445ce3ec8bbf135220cf62962ab2fa52afb49044a1.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=2205,2205,x298,y278,safe&width=720",
      name: "Coulson Macleod",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl:
        "https://cdn.faire.com/fastly/18bda979d9a01b10ff96ae85889591f9cf96303092292580d40d55156743f567.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      name: "Studio Wald",
      color: "Black",
      rating: "5.0",
    },
    {
      imageUrl: ImageBanner4,
      name: "Daimon Barber ",
      color: "Black",
      rating: "4.9",
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className=" mx-auto max-w-full px-[10px] md:px-[0px] lg:max-w-[1120px] ">
        <div className="flex w-auto flex-col items-center justify-center py-16">
          <span className="w-auto text-[24px] font-extralight">
            All European brands
          </span>
          <span className="w-auto text-center font-extralight">
            <p> Shop independent brands from around the world at</p>
            <p> wholesale prices.</p>
          </span>
        </div>
        <div className="flex gap-2">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gray-100">
            <Updown />
          </div>
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gray-100">
            <Lines />
          </div>
          <div className="flex h-[42px] w-fit items-center justify-center rounded-full bg-gray-100  px-3">
            <p className="pr-4 text-[14px] font-extralight">Values</p>
            <Downarrow />
          </div>
          <div className="flex h-[42px] w-fit items-center justify-center rounded-full bg-gray-100  px-3">
            <p className="whitespace-nowrap pr-4 text-[14px] font-extralight">
              Lead Time
            </p>
            <Downarrow />
          </div>
        </div>
        <div className="mt-6 flex w-full flex-wrap justify-between">
          {products.map((product, index) => (
            <div
              className={`mb-4 ${product?.isCol2 ? "w-[50%] lg:w-[39.5%]" : "w-[49%] md:w-[25%] lg:w-[19.5%]"} border-[1px] border-gray-300`}
              key={index}
            >
              {!product?.isCol2 ? (
                <>
                  <div className="aspect-h-1 aspect-w-1 lg:aspect-none h-[230px] w-full overflow-hidden bg-gray-200 group-hover:opacity-75">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-0 flex w-full flex-col items-center justify-center ">
                    <div className="text-center">
                      <span className="text-black"> &bull; </span>
                      <span className="text-gray-300"> &bull; </span>
                      <span className="text-gray-300"> &bull; </span>
                      <span className="text-gray-300"> &bull; </span>
                      <span className="text-gray-300"> &bull; </span>
                    </div>
                    <div className="flex">
                      <p className="text-center text-sm text-gray-700">
                        {product?.name}
                      </p>
                    </div>
                    <p className="mb-2 mt-1 flex w-fit items-center gap-1 text-sm font-light text-gray-900">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{
                          color: "black",
                          height: "12px",
                          width: "12px",
                        }}
                      />
                      {product.rating}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-[14px]">
                  <h1 className="text-center text-[22px] font-light">
                    Get 50% off your first order
                  </h1>
                  <p className="text-center text-[14px]">
                    Shop from more than 100,000 independent brands.
                  </p>
                  <div className="flex w-fit items-center justify-center bg-black px-8 py-3 text-center text-xs text-white">
                    Sign up to Shop
                  </div>
                  <p className="text-center text-[12px]">
                    Maximum discount $100. Offer ends 7 days after sign-up.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Pagination />
      </div>
      <div className="mx-auto max-w-full lg:max-w-[1120px]">
        <Brand />
      </div>
      <div className="mx-auto max-w-full lg:max-w-[1120px]">
        <FaqTabContainer />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
