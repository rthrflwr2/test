import React from "react";

import {
  Img,
  Text,
  Line,
  Button,
  Input,
  Stack,
  List,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const Desktop1920pxPage = () => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-playfairdisplay items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gray_400 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[182px] pb-[353px] rounded-bl-[62px] rounded-br-[62px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
          <div className="flex flex-col justify-start w-[100%]">
            <header className="w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1920px] ml-[auto] mr-[auto] md:p-[13px] p-[26px] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] sm:py-[10px] w-[100%]">
                <div className="header-row w-[8%] max-w-[100%]">
                  <Img
                    src="images/img_logo1.png"
                    className="max-w-[100%]"
                    alt="LogoOne"
                  />
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-col sm:hidden sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Text
                    className="text-teal_900 tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    <span className="text-teal_900 text-[20px] font-playfairdisplay font-bold">
                      Home{" "}
                    </span>
                    <span className="text-teal_900 text-[20px] font-playfairdisplay font-normal not-italic">
                      Products Categories About Contact Us
                    </span>
                  </Text>
                  <Line className="bg-teal_900 h-[3px] mt-[2px] w-[10%]" />
                </div>
                <Img
                  src="images/img_icons.svg"
                  className="sm:hidden max-w-[100%] mr-[124px] sm:mr-[49px] md:mr-[64px] w-[11%]"
                  alt="Icons"
                />
              </div>
            </header>
            <div className="flex flex-col justify-start max-w-[668px] md:ml-[77px] ml-[auto] mr-[auto] md:mt-[126px] mt-[245px] sm:mt-[97px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-bold font-playfairdisplay leading-[normal] text-shadow-ts text-teal_900 w-[100%]"
                as="h2"
                variant="h2"
              >
                Exclusive Deals of  Furniture Collection
              </Text>
              <Text
                className="font-normal font-opensans sm:mt-[24px] md:mt-[31px] mt-[61px] text-teal_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Explore different categories. Find the best deals.
              </Text>
              <Button
                className="cursor-pointer font-bold font-opensans min-w-[35%] sm:mt-[21px] md:mt-[27px] mt-[54px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_51 w-[max-content]"
                shape="RoundedBorder10"
                size="xl"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-[100px] md:p-[51px] sm:px-[15px] sm:py-[39px] w-[100%]">
          <Text
            className="font-bold text-teal_900 w-[auto]"
            as="h2"
            variant="h2"
          >
            Explore by Category
          </Text>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center max-w-[1620px] ml-[auto] mr-[auto] sm:mt-[39px] md:mt-[51px] mt-[99px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[20px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex w-[100%]"
                name="Searchbar"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer ml-[6px] mr-[18px] sm:mr-[7px] sm:ml-[2px] md:mr-[9px] md:ml-[3px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#6e757e"
                      className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[8px] sm:ml-[3px] md:mr-[11px] md:ml-[5px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcRoundedBorder10"
              ></Input>
              <Stack className="h-[694px] md:ml-[12px] ml-[25px] sm:ml-[9px] sm:mt-[31px] md:mt-[41px] mt-[80px] relative sm:w-[100%] w-[93%]">
                <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Text
                    className="font-normal leading-[normal] sm:mx-[0] not-italic text-teal_900 sm:w-[100%] w-[54%]"
                    as="h6"
                    variant="h6"
                  >
                    Bedroom
                    <br />
                    Dinning Room
                    <br />
                    Meeting Room
                    <br />
                    Workspace
                    <br />
                    Living Room
                    <br />
                    Kitchen
                    <br />
                    Living Space
                  </Text>
                  <Line className="bg-teal_900 sm:h-[231px] md:h-[298px] h-[577px] mb-[111px] sm:mb-[44px] md:mb-[57px] ml-[140px] sm:ml-[55px] md:ml-[72px] sm:mt-[2px] md:mt-[3px] mt-[6px] w-[1px]" />
                  <Line className="bg-bluegray_400 sm:h-[24px] md:h-[31px] h-[60px] sm:mb-[253px] md:mb-[327px] mb-[634px] ml-[1px] w-[5px]" />
                </div>
                <Img
                  src="images/img_arrow.svg"
                  className="absolute bottom-[0] h-[104px] max-w-[100%] right-[0] w-[13%]"
                  alt="Arrow"
                />
              </Stack>
              <div className="bg-bluegray_400 flex flex-row md:flex-wrap sm:flex-wrap font-opensans items-center sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:p-[15px] md:p-[16px] p-[32px] rounded-radius10 sm:w-[100%] w-[76%]">
                <Text
                  className="flex-grow font-bold ml-[18px] sm:ml-[7px] md:ml-[9px] text-white_A700"
                  variant="body3"
                >
                  All Categories{" "}
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="flex-shrink-0 max-w-[100%] md:ml-[10px] ml-[20px] sm:ml-[7px] w-[10%]"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:ml-[30px] ml-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <div className="bg-gray_500 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[43px] p-[85px] rounded-radius10 shadow-bs sm:w-[100%] w-[49%]">
                    <Text
                      className="font-normal font-playfairdisplay not-italic text-gray_51 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Bedroom
                    </Text>
                    <Button
                      className="cursor-pointer font-normal font-opensans min-w-[36%] sm:mt-[14px] md:mt-[18px] mt-[36px] text-[18px] text-center text-teal_900 w-[max-content]"
                      size="sm"
                      variant="FillTeal50"
                    >
                      Explore
                    </Button>
                  </div>
                  <div className="bg-bluegray_100 sm:h-[129px] md:h-[166px] h-[321px] my-[12px] sm:my-[4px] md:my-[6px] rounded-radius10 sm:w-[100%] w-[49%]"></div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[26px] w-[100%]">
                  <div className="bg-bluegray_100 sm:h-[129px] md:h-[166px] h-[321px] rounded-radius10 sm:w-[100%] w-[49%]"></div>
                  <div className="bg-bluegray_100 sm:h-[129px] md:h-[166px] h-[321px] rounded-radius10 sm:w-[100%] w-[49%]"></div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[26px] w-[100%]">
                  <div className="bg-bluegray_100 sm:h-[129px] md:h-[166px] h-[321px] rounded-radius10 sm:w-[100%] w-[49%]"></div>
                  <div className="bg-bluegray_100 sm:h-[129px] md:h-[166px] h-[321px] rounded-radius10 sm:w-[100%] w-[49%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stack className="h-[973px] mt-[100px] sm:mt-[39px] md:mt-[51px] relative w-[100%]">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] p-[4px] sm:px-[0] top-[0] sm:w-[100%] w-[28%]">
            <Text
              className="font-bold text-teal_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Popular Products
            </Text>
          </div>
          <Stack className="absolute font-opensans h-[973px] overflow-auto w-[100%]">
            <Img
              src="images/img_imagecontainer.png"
              className="absolute h-[973px] left-[0] max-w-[100%] w-[24%]"
              alt="Imagecontainer Five"
            />
            <div className="absolute bg-teal_51 flex flex-col items-center justify-center left-[10%] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[40px] rounded-radius16 top-[15%] sm:w-[100%] w-[23%]">
              <Stack className="h-[270px] sm:mt-[17px] md:mt-[22px] mt-[44px] relative sm:w-[100%] w-[59%]">
                <Img
                  src="images/img_485502chaird.png"
                  className="absolute h-[270px] max-w-[100%] w-[100%]"
                  alt="485502chaird"
                />
              </Stack>
              <div className="flex flex-col justify-start md:mb-[10px] mb-[20px] sm:mb-[7px] sm:mt-[15px] md:mt-[20px] mt-[40px] md:pr-[3px] pr-[6px] sm:pt-[2px] md:pt-[3px] pt-[6px] sm:px-[0] w-[100%]">
                <Text
                  className="font-bold font-opensans text-bluegray_400 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Armchair
                </Text>
                <Text
                  className="font-normal font-roboto leading-[normal] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[68%]"
                  variant="body3"
                >
                  <span className="text-bluegray_400 text-[18px] font-opensans">
                    Light single chair
                    <br />
                  </span>
                  <span className="text-bluegray_400 text-[24px] font-opensans font-bold sm:text-[20px] md:text-[22px]">
                    $145
                  </span>
                </Text>
              </div>
            </div>
            <List
              className="absolute sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] right-[0] top-[15%] sm:w-[100%] w-[71%]"
              orientation="horizontal"
            >
              <div className="bg-teal_50 flex flex-col items-center justify-center sm:p-[15px] md:p-[20px] p-[40px] rounded-radius16 w-[100%]">
                <Stack className="h-[294px] md:mt-[10px] mt-[20px] sm:mt-[7px] relative sm:w-[100%] w-[71%]">
                  <Img
                    src="images/img_chair2.png"
                    className="absolute h-[294px] max-w-[100%] w-[100%]"
                    alt="chairTwo"
                  />
                </Stack>
                <div className="flex flex-col justify-start md:mb-[10px] mb-[20px] sm:mb-[7px] sm:mt-[15px] md:mt-[20px] mt-[40px] md:pr-[2px] pr-[5px] sm:pt-[1px] md:pt-[2px] pt-[5px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold font-opensans text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Premium Sofa
                  </Text>
                  <Text
                    className="font-normal font-roboto leading-[normal] md:mt-[12px] mt-[25px] sm:mt-[9px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[68%]"
                    variant="body3"
                  >
                    <span className="text-bluegray_400 text-[18px] font-opensans">
                      Light single chair
                      <br />
                    </span>
                    <span className="text-bluegray_400 text-[24px] font-opensans font-bold sm:text-[20px] md:text-[22px]">
                      $145
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-deep_purple_50 flex flex-col items-center justify-center sm:p-[15px] md:p-[20px] p-[40px] rounded-radius16 w-[100%]">
                <Stack className="h-[279px] sm:mt-[13px] md:mt-[18px] mt-[35px] relative sm:w-[111px] md:w-[144px] w-[279px]">
                  <Img
                    src="images/img_unnamed1.png"
                    className="absolute h-[279px] max-w-[100%] sm:w-[111px] md:w-[144px] w-[279px]"
                    alt="unnamedOne"
                  />
                </Stack>
                <div className="flex flex-col justify-start md:mb-[10px] mb-[20px] sm:mb-[7px] sm:mt-[15px] md:mt-[20px] mt-[40px] md:pr-[2px] pr-[5px] sm:pt-[1px] md:pt-[2px] pt-[5px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold font-opensans text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Minimal Sofa
                  </Text>
                  <Text
                    className="font-normal font-roboto leading-[normal] md:mt-[12px] mt-[25px] sm:mt-[9px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[68%]"
                    variant="body3"
                  >
                    <span className="text-bluegray_400 text-[18px] font-opensans">
                      Light single chair
                      <br />
                    </span>
                    <span className="text-bluegray_400 text-[24px] font-opensans font-bold sm:text-[20px] md:text-[22px]">
                      $145
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-orange_50 flex flex-col items-center justify-center sm:p-[15px] md:p-[20px] p-[40px] rounded-radius16 w-[100%]">
                <Stack className="h-[280px] sm:mt-[13px] md:mt-[17px] mt-[34px] relative sm:w-[100%] w-[48%]">
                  <Img
                    src="images/img_11chairpngim.png"
                    className="absolute h-[280px] max-w-[100%] w-[100%]"
                    alt="11chairpngim"
                  />
                </Stack>
                <div className="flex flex-col justify-start md:mb-[10px] mb-[20px] sm:mb-[7px] sm:mt-[15px] md:mt-[20px] mt-[40px] md:pr-[4px] pr-[8px] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold font-opensans text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dining Chair
                  </Text>
                  <Text
                    className="font-normal font-roboto leading-[normal] md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[68%]"
                    variant="body3"
                  >
                    <span className="text-bluegray_400 text-[18px] font-opensans">
                      Light single chair
                      <br />
                    </span>
                    <span className="text-bluegray_400 text-[24px] font-opensans font-bold sm:text-[20px] md:text-[22px]">
                      $145
                    </span>
                  </Text>
                </div>
              </div>
            </List>
            <Img
              src="images/img_slider.svg"
              className="absolute bottom-[13%] h-[60px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[85%]"
              alt="Slider"
            />
            <div className="absolute bg-bluegray_400 flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center justify-center sm:mx-[0] mx-[auto] md:p-[12px] sm:p-[15px] p-[24px] rounded-radius10 sm:w-[100%] w-[14%]">
              <Text
                className="flex-grow font-bold ml-[14px] sm:ml-[5px] md:ml-[7px] text-white_A700"
                variant="body3"
              >
                Explore all items
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="flex-shrink-0 max-w-[100%] ml-[18px] sm:ml-[7px] md:ml-[9px] mr-[14px] sm:mr-[5px] md:mr-[7px] w-[10%]"
                alt="arrowright One"
              />
            </div>
          </Stack>
        </Stack>
        <div className="flex flex-col items-center justify-end mt-[100px] sm:mt-[39px] md:mt-[51px] p-[100px] md:p-[51px] sm:px-[15px] sm:py-[39px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[529px] ml-[auto] mr-[auto] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text className="text-teal_900 w-[auto]" as="h1" variant="h1">
              Special Package
            </Text>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap font-opensans items-center max-w-[1619px] ml-[auto] mr-[auto] mt-[103px] sm:mt-[41px] md:mt-[53px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
              <div className="bg-bluegray_100 flex flex-col items-end justify-end sm:pl-[15px] md:pl-[261px] pl-[506px] sm:pt-[15px] md:pt-[261px] pt-[506px] rounded-radius16 w-[100%]">
                <Button
                  className="flex items-center justify-center w-[16%]"
                  shape="icbRoundedBorder16"
                  size="smIcn"
                  variant="icbFillTeal900"
                >
                  <Img
                    src="images/img_close.svg"
                    className="h-[18px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                    alt="close"
                  />
                </Button>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[32px] sm:px-[0] w-[100%]">
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                  <Text
                    className="font-normal font-opensans text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Larkin Wood Full Set
                  </Text>
                  <Img
                    src="images/img_star.svg"
                    className="max-w-[100%] md:mt-[10px] mt-[21px] sm:mt-[8px] sm:w-[100%] w-[73%]"
                    alt="Star"
                  />
                  <Text
                    className="font-roboto md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic text-teal_900 tracking-ls056 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-teal_900 text-[28px] font-opensans font-bold sm:text-[24px] md:text-[26px]">
                      $729.
                    </span>
                    <span className="text-teal_900 text-[28px] font-opensans font-bold sm:text-[24px] md:text-[26px]">
                      99
                    </span>
                  </Text>
                </div>
                <Button
                  className="flex items-center justify-center mb-[96px] md:mb-[49px] min-w-[24%] sm:mb-[38px] text-center w-[max-content]"
                  rightIcon={
                    <Img
                      src="images/img_cart.svg"
                      className="ml-[20px] sm:ml-[7px] md:ml-[10px] text-center"
                      alt="cart"
                    />
                  }
                  shape="RoundedBorder10"
                  size="lg"
                >
                  <div className="bg-transparent cursor-pointer font-normal text-[18px] text-gray_51">
                    Add to cart
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center ml-[100px] md:ml-[51px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                  <Text
                    className="font-normal leading-[115.00%] text-teal_900 tracking-ls036 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                    variant="body3"
                  >
                    <span className="text-teal_900 text-[24px] font-opensans font-bold sm:text-[20px] md:text-[22px]">
                      Description
                      <br />
                    </span>
                    <span className="text-teal_900 text-[18px] font-opensans font-bold">
                      <br />
                    </span>
                    <span className="text-teal_900 text-[18px] font-opensans">
                      Cast Aluminum Outdoor Chaise Lounge As an elegant and
                      classic touch to your outdoor space, this cast Aluminum
                      Chaise Lounge combines the appearance, function and
                      quality all together, offering you with the best
                      experience.
                    </span>
                  </Text>
                  <SelectBox
                    className="font-semibold md:mt-[12px] mt-[25px] sm:mt-[9px] sm:mx-[0] text-[18px] text-black_900 tracking-ls036 md:tracking-ls11 sm:tracking-ls11 sm:w-[100%] w-[17%]"
                    placeholderClassName="text-black_900"
                    name="Seemore"
                    placeholder="See More"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[14px] mr-[0] sm:w-[5px] md:w-[7px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[40px] w-[100%]">
                  <div className="bg-bluegray_100 h-[183px] sm:h-[74px] md:h-[95px] rounded-radius10 sm:w-[100%] w-[42%]"></div>
                  <div className="bg-teal_52 flex flex-col items-end sm:mx-[0] md:pl-[10px] sm:pl-[15px] pl-[20px] md:py-[10px] sm:py-[15px] py-[20px] rounded-radius10 sm:w-[100%] w-[57%]">
                    <div className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[9px] mt-[17px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                        <Text
                          className="font-normal font-opensans mt-[4px] text-teal_900 w-[auto]"
                          variant="body1"
                        >
                          Living Room Family Set
                        </Text>
                        <Text
                          className="font-normal font-roboto mb-[2px] sm:ml-[14px] md:ml-[19px] ml-[37px] not-italic text-teal_900 tracking-ls044 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body1"
                        >
                          <span className="text-teal_900 text-[22px] font-opensans font-bold sm:text-[18px] md:text-[20px]">
                            $229.
                          </span>
                          <span className="text-teal_900 text-[22px] font-opensans font-bold sm:text-[18px] md:text-[20px]">
                            99
                          </span>
                        </Text>
                      </div>
                      <Img
                        src="images/img_star.svg"
                        className="max-w-[100%] md:mt-[12px] mt-[24px] sm:mt-[9px] w-[31%]"
                        alt="Star One"
                      />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[17px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                        <a
                          href={"javascript:"}
                          className="font-normal text-[16px] text-teal_900 tracking-ls032 md:tracking-ls11 sm:tracking-ls11 underline w-[auto]"
                          rel="noreferrer"
                        >
                          See Details
                        </a>
                        <Img
                          src="images/img_zoom.svg"
                          className="max-w-[100%] rounded-radius10 w-[10%]"
                          alt="Zoom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
                <List
                  className="sm:gap-[13px] md:gap-[17px] gap-[34px] grid min-h-[auto] sm:w-[100%] w-[90%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:pr-[15px] md:pr-[33px] pr-[65px] w-[100%]">
                    <div className="bg-bluegray_100 h-[149px] sm:h-[60px] md:h-[77px] rounded-radius10 sm:w-[100%] w-[45%]"></div>
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Text
                          className="font-playfairdisplay mt-[2px] not-italic text-teal_900 tracking-ls032 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body4"
                        >
                          Living Room Special Set
                        </Text>
                        <Text
                          className="font-normal font-roboto not-italic text-teal_900 tracking-ls044 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body1"
                        >
                          <span className="text-teal_900 text-[22px] font-opensans font-bold sm:text-[18px] md:text-[20px]">
                            $329.
                          </span>
                          <span className="text-teal_900 text-[22px] font-opensans font-bold sm:text-[18px] md:text-[20px]">
                            99
                          </span>
                        </Text>
                      </div>
                      <Img
                        src="images/img_star.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[9px] w-[37%]"
                        alt="GroupTwo"
                      />
                      <Text
                        className="leading-[115.00%] mt-[12px] sm:mt-[4px] md:mt-[6px] text-teal_900 tracking-ls028 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                        variant="body5"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <SelectBox
                        className="font-semibold mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] text-[14px] text-teal_900 tracking-ls028 md:tracking-ls11 sm:tracking-ls11 sm:w-[100%] w-[29%]"
                        placeholderClassName="text-teal_900"
                        name="Btnseemore"
                        placeholder="See More"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_teal_900.svg"
                            className="w-[14px] mr-[0] sm:w-[5px] md:w-[7px] max-w-[100%]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:pr-[15px] md:pr-[33px] pr-[65px] w-[100%]">
                    <div className="bg-bluegray_100 h-[149px] sm:h-[60px] md:h-[77px] rounded-radius10 sm:w-[100%] w-[45%]"></div>
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Text
                          className="font-playfairdisplay mt-[2px] not-italic text-teal_900 tracking-ls032 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body4"
                        >
                          Living Room Special Set
                        </Text>
                        <Text
                          className="font-bold font-opensans text-teal_900 tracking-ls044 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body1"
                        >
                          $587.99
                        </Text>
                      </div>
                      <Img
                        src="images/img_star.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[9px] w-[37%]"
                        alt="GroupTwo One"
                      />
                      <Text
                        className="leading-[115.00%] mt-[12px] sm:mt-[4px] md:mt-[6px] text-teal_900 tracking-ls028 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                        variant="body5"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <SelectBox
                        className="font-semibold mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] text-[14px] text-teal_900 tracking-ls028 md:tracking-ls11 sm:tracking-ls11 sm:w-[100%] w-[29%]"
                        placeholderClassName="text-teal_900"
                        name="Btnseemore One"
                        placeholder="See More"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_teal_900.svg"
                            className="w-[14px] mr-[0] sm:w-[5px] md:w-[7px] max-w-[100%]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                  </div>
                </List>
                <Img
                  src="images/img_arrowslider.svg"
                  className="max-w-[100%] w-[6%]"
                  alt="ArrowSlider"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="font-roboto mt-[100px] sm:mt-[39px] md:mt-[51px] overflow-x-auto w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between overflow-auto w-[100%]">
            <div className="bg-bluegray_400 flex flex-col max-w-[575px] ml-[auto] mr-[auto] sm:mx-[0] my-[17px] sm:my-[6px] md:my-[8px] p-[100px] sm:p-[15px] md:p-[51px] sm:pl-[15px] sm:pr-[15px] rounded-bl-[0] rounded-br-[16px] rounded-tl-[0] rounded-tr-[16px] w-[100%]">
              <Text
                className="font-bold font-playfairdisplay leading-[120.60%] md:ml-[24px] ml-[48px] sm:mt-[11px] md:mt-[15px] mt-[30px] sm:mx-[0] text-gray_51 sm:w-[100%] w-[88%]"
                as="h3"
                variant="h3"
              >
                Our
                <br />
                Own Creation
              </Text>
              <Text
                className="font-opensans font-semibold sm:ml-[19px] md:ml-[24px] ml-[48px] sm:mt-[12px] md:mt-[16px] mt-[32px] text-gray_51 w-[auto]"
                as="h6"
                variant="h6"
              >
                Designed in our studio
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center justify-end md:ml-[24px] ml-[48px] sm:mx-[0] sm:my-[11px] md:my-[14px] my-[29px] sm:px-[0] sm:w-[100%] w-[85%]">
                <Text
                  className="font-bold text-gray_51 w-[auto]"
                  variant="body3"
                >
                  More
                </Text>
                <Img
                  src="images/img_slider_teal_900.svg"
                  className="max-w-[100%] sm:ml-[16px] md:ml-[21px] ml-[42px] w-[28%]"
                  alt="Slider One"
                />
                <Img
                  src="images/img_arrow_red_100.svg"
                  className="max-w-[100%] sm:ml-[16px] md:ml-[21px] ml-[42px] w-[33%]"
                  alt="Arrow One"
                />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1540px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="bg-bluegray_100 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[20px] p-[40px] rounded-radius10 shadow-bs1 sm:w-[100%] w-[25%]">
                <Button
                  className="cursor-pointer font-normal min-w-[65%] sm:mt-[159px] md:mt-[206px] mt-[400px] not-italic text-[18px] text-black_900 text-center w-[max-content]"
                  variant="FillWhiteA700"
                >
                  Explore All Rooms
                </Button>
              </div>
              <div className="bg-bluegray_100 sm:h-[203px] md:h-[262px] h-[507px] my-[15px] sm:my-[5px] md:my-[7px] rounded-radius16 w-[24%]"></div>
              <div className="bg-bluegray_100 sm:h-[203px] md:h-[262px] h-[507px] my-[15px] sm:my-[5px] md:my-[7px] rounded-radius16 w-[24%]"></div>
              <Img
                src="images/img_imagecontainer_507X360.png"
                className="max-w-[100%] rounded-radius16 w-[24%]"
                alt="Imagecontainer Eleven"
              />
            </div>
          </div>
        </div>
        <div className="bg-teal_50 flex flex-col font-playfairdisplay items-center justify-start mt-[100px] sm:mt-[39px] md:mt-[51px] p-[100px] sm:p-[15px] md:p-[51px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[1348px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-bold text-teal_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Benefits for your expediency
            </Text>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[104px] sm:mt-[41px] md:mt-[53px] w-[100%]">
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                <Stack className="bg-deep_purple_50 h-[108px] md:p-[10px] sm:p-[15px] p-[20px] relative rounded-radius24 w-[108px] sm:w-[43px] md:w-[55px]">
                  <Img
                    src="images/img_cut.svg"
                    className="absolute h-[68px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[27px] md:w-[35px] w-[68px]"
                    alt="cut"
                  />
                </Stack>
                <div className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[42px] w-[100%]">
                  <Text
                    className="font-bold font-playfairdisplay text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Payment Method
                  </Text>
                  <Text
                    className="font-normal font-opensans leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[32px] text-center text-teal_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    We offer flexible payment
                    <br />
                    options, to make easier.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                <Stack className="bg-orange_50 h-[107px] md:p-[10px] sm:p-[15px] p-[20px] relative rounded-radius24 w-[107px] sm:w-[42px] md:w-[55px]">
                  <Img
                    src="images/img_car.svg"
                    className="absolute h-[67px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[26px] md:w-[34px] w-[67px]"
                    alt="car"
                  />
                </Stack>
                <Text
                  className="font-bold font-playfairdisplay sm:mt-[16px] md:mt-[21px] mt-[42px] text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Return policy
                </Text>
                <Text
                  className="font-normal font-opensans leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[32px] text-center text-teal_900 w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  You can return a product <br />
                  within 30 days.
                </Text>
              </div>
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                <Stack className="bg-teal_51 h-[108px] md:p-[10px] sm:p-[15px] p-[20px] relative rounded-radius24 w-[108px] sm:w-[43px] md:w-[55px]">
                  <Img
                    src="images/img_music.svg"
                    className="absolute h-[67px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[55%]"
                    alt="music"
                  />
                </Stack>
                <Text
                  className="font-bold font-playfairdisplay sm:mt-[21px] md:mt-[27px] mt-[53px] text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Customer Support
                </Text>
                <Text
                  className="font-normal font-opensans leading-[normal] sm:mt-[16px] md:mt-[21px] mt-[41px] sm:mx-[0] text-center text-teal_900 sm:w-[100%] w-[84%]"
                  as="h6"
                  variant="h6"
                >
                  Our customer support <br />
                  is 24/7.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-opensans items-center justify-start p-[100px] md:p-[51px] sm:px-[15px] sm:py-[39px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[1620px] ml-[auto] mr-[auto] sm:mx-[0] pb-[10px] sm:pb-[3px] md:pb-[5px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] px-[10px] md:px-[5px] w-[100%]">
            <Text
              className="font-bold font-playfairdisplay text-teal_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Testimonials
            </Text>
            <Text
              className="font-normal font-roboto sm:mt-[13px] md:mt-[18px] mt-[35px] not-italic text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Over 15,000 happy customers.
            </Text>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1620px] ml-[auto] mr-[auto] mt-[107px] sm:mt-[42px] md:mt-[55px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Stack className="bg-bluegray_100 h-[410px] sm:pb-[15px] md:pb-[175px] pb-[340px] sm:pr-[15px] md:pr-[175px] pr-[340px] relative rounded-radius20 w-[26%]">
              <Img
                src="images/img_facebook.svg"
                className="common-pointer absolute h-[44px] max-w-[100%] w-[20%]"
                onClick={handleNavigate}
                alt="facebook"
              />
            </Stack>
            <div className="flex flex-col md:ml-[50px] ml-[97px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
              <Text
                className="font-normal leading-[normal] text-teal_900 w-[100%]"
                as="h4"
                variant="h4"
              >
                “My experience with Mark is a complete
                <br />
                sucess, from customer service, wide range of
                <br />
                products, clean store, purchasing experience, the
                <br />
                newsletter.Thank you.”
              </Text>
              <div className="flex flex-col font-roboto justify-start sm:mt-[25px] md:mt-[33px] mt-[65px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                <Text
                  className="font-bold text-teal_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Leona Paul
                </Text>
                <Text
                  className="font-light mt-[4px] text-teal_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  CEO of Floatcom
                </Text>
              </div>
            </div>
            <Img
              src="images/img_arrow_red_100_104X40.svg"
              className="max-w-[100%] sm:ml-[38px] md:ml-[50px] ml-[97px] w-[3%]"
              alt="Arrow Two"
            />
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-end max-w-[1620px] ml-[auto] mr-[auto] mt-[107px] sm:mt-[42px] md:mt-[55px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Img
              src="images/img_slider_teal_900_1X1397.svg"
              className="max-w-[100%] md:mt-[10px] mt-[21px] sm:mt-[8px] sm:w-[100%] w-[87%]"
              alt="Slider Two"
            />
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[40px] ml-[78px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
              <Text
                className="flex-grow font-normal not-italic text-teal_900"
                variant="body3"
              >
                See all review
              </Text>
              <Img
                src="images/img_arrowright_12X19.svg"
                className="flex-shrink-0 max-w-[100%] w-[14%]"
                alt="arrowright Two"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center justify-evenly mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]">
          <div className="bg-bluegray_100 sm:h-[240px] md:h-[310px] h-[600px] max-w-[960px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"></div>
          <div className="bg-teal_52 flex flex-col max-w-[960px] ml-[auto] mr-[auto] sm:mx-[0] sm:p-[15px] md:p-[42px] p-[83px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <div className="flex flex-col justify-start md:ml-[34px] ml-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
              <Text
                className="font-normal leading-[normal] not-italic text-teal_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls32 w-[100%]"
                as="h2"
                variant="h2"
              >
                <span className="text-teal_900 text-[64px] font-playfairdisplay sm:text-[48px] md:text-[48px]">
                  Join Our <br />
                </span>
                <span className="text-teal_900 text-[64px] font-playfairdisplay font-bold sm:text-[48px] md:text-[48px]">
                  Newsletter
                </span>
              </Text>
              <Text
                className="font-normal md:mt-[12px] mt-[25px] sm:mt-[9px] not-italic text-teal_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Receive exclusive deals, discounts and many offers.
              </Text>
            </div>
            <div className="flex flex-col justify-start md:ml-[34px] ml-[66px] sm:mt-[16px] md:mt-[21px] mt-[41px] sm:mx-[0] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] sm:w-[100%] w-[67%]">
              <Text
                className="font-normal ml-[4px] not-italic text-gray_400 w-[auto]"
                as="h6"
                variant="h6"
              >
                Enter your email
              </Text>
            </div>
            <Button className="cursor-pointer font-normal min-w-[32%] sm:ml-[26px] md:ml-[34px] ml-[66px] sm:mt-[16px] md:mt-[21px] mt-[41px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_51 w-[max-content]">
              Subscribe
            </Button>
          </div>
        </div>
        <footer className="bg-gray_100 font-opensans w-[100%]">
          <div className="flex flex-col justify-start max-w-[1620px] sm:mb-[12px] md:mb-[16px] mb-[32px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] mx-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:pr-[2px] md:pr-[3px] pr-[7px] w-[100%]">
              <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%] common-column-list">
                <ul className="flex flex-col">
                  <li className="w-[40%] sm:w-[100%] max-w-[100%]">
                    <Img
                      src="images/img_logo2.png"
                      className="cursor-pointer max-w-[100%]"
                      alt="LogoTwo"
                    />
                  </li>
                  <li className="w-[82%] mt-[21px] sm:mt-[8px] sm:w-[100%] md:mt-[10px] max-w-[100%]">
                    <Img
                      src="images/img_socialmedia.svg"
                      className="cursor-pointer max-w-[100%]"
                      alt="Socialmedia"
                    />
                  </li>
                  <li className="w-[auto] mt-[21px] sm:mt-[8px] md:mt-[10px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal leading-[normal] text-[18px] text-teal_900"
                      rel="noreferrer"
                    >
                      Address
                      <br />
                      +123 654 987
                      <br />
                      877 The Bronx, NY
                      <br />
                      14568, USA
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-start ml-[156px] md:ml-[80px] sm:mx-[0] md:pr-[2px] pr-[5px] sm:pt-[1px] md:pt-[2px] pt-[5px] sm:px-[0] sm:w-[100%] w-[14%]">
                <Text
                  className="font-bold text-teal_900 w-[auto]"
                  variant="body3"
                >
                  My Account
                </Text>
                <Text
                  className="font-normal leading-[normal] sm:mt-[11px] md:mt-[15px] mt-[30px] sm:mx-[0] text-teal_900 sm:w-[100%] w-[51%]"
                  variant="body3"
                >
                  Sign in
                  <br />
                  Register
                  <br />
                  Order status
                </Text>
              </div>
              <div className="flex flex-col justify-start ml-[100px] md:ml-[51px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                <Text
                  className="font-bold text-teal_900 w-[auto]"
                  variant="body3"
                >
                  Help
                </Text>
                <Text
                  className="font-normal leading-[normal] sm:mt-[11px] md:mt-[15px] mt-[30px] text-teal_900 w-[100%]"
                  variant="body3"
                >
                  Shipping
                  <br />
                  Returns
                  <br />
                  Sizing
                </Text>
              </div>
              <div className="flex flex-col justify-start md:ml-[128px] ml-[248px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                <Text
                  className="font-bold text-teal_900 w-[auto]"
                  variant="body3"
                >
                  Shop
                </Text>
                <Text
                  className="font-normal leading-[normal] sm:mt-[11px] md:mt-[15px] mt-[30px] text-teal_900 w-[100%]"
                  variant="body3"
                >
                  All Products
                  <br />
                  Bedroom
                  <br />
                  Dinning Room
                </Text>
              </div>
              <div className="flex flex-col justify-start ml-[171px] md:ml-[88px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                <Text
                  className="font-bold text-teal_900 w-[auto]"
                  variant="body3"
                >
                  Legal Stuff
                </Text>
                <Text
                  className="font-normal leading-[normal] sm:mt-[11px] md:mt-[15px] mt-[30px] text-teal_900 w-[100%]"
                  variant="body3"
                >
                  Shipping & Delivery
                  <br />
                  Terms & Conditions
                  <br />
                  Privacy & Policy
                </Text>
              </div>
            </div>
            <Text
              className="font-normal sm:mt-[27px] md:mt-[35px] mt-[69px] text-teal_900 w-[auto]"
              variant="body3"
            >
              Copyright ©2020 INWOOD. All Rights Reserved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Desktop1920pxPage;
