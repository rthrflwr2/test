import React from "react";

import { Img, Text, Button, Input, Stack, Line, Grid } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const Laptop1024pxPage = () => {
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-opensans items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gray_400 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[170px] pb-[176px] rounded-bl-[50px] rounded-br-[50px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
          <div className="flex flex-col justify-start w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[25px] p-[26px] sm:px-[15px] sm:py-[19px] w-[100%]">
              <Img
                src="images/img_logo1.png"
                className="max-w-[144px] sm:ml-[10px] md:ml-[13px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                alt="LogoOne"
              />
              <Img
                src="images/img_menu.svg"
                className="max-w-[31px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                alt="menu"
              />
              <Img
                src="images/img_icons.svg"
                className="max-w-[196px] ml-[auto] sm:mr-[10px] md:mr-[13px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                alt="Icons"
              />
            </div>
            <div className="flex flex-col justify-start max-w-[668px] md:ml-[38px] ml-[auto] mr-[auto] sm:mt-[65px] md:mt-[85px] mt-[88px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <Text
                  className="font-bold font-playfairdisplay leading-[62.00px] md:leading-[normal] sm:leading-[normal] text-shadow-ts text-teal_900 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Exclusive Deals of  Furniture Collection
                </Text>
                <Text
                  className="font-normal font-opensans sm:mt-[17px] md:mt-[22px] mt-[23px] text-teal_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Explore different categories. Find the best deals.
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[35%] sm:mt-[38px] md:mt-[50px] mt-[52px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_51 w-[max-content]"
                shape="RoundedBorder10"
                size="xl"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-playfairdisplay items-center justify-center md:p-[38px] p-[40px] sm:px-[15px] sm:py-[29px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[791px] ml-[auto] mr-[auto] sm:mt-[54px] md:mt-[70px] mt-[73px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-bold font-playfairdisplay text-teal_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Explore by Category
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal font-roboto not-italic p-[0] text-[20px] placeholder:text-gray_600 text-gray_600 w-[100%]"
              wrapClassName="flex md:mt-[34px] mt-[36px] sm:mt-[26px] sm:mx-[0] sm:w-[100%] w-[59%]"
              name="Searchbar"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[9px] mr-[18px] sm:mr-[13px] sm:ml-[6px] md:mr-[17px] md:ml-[8px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#6e757e"
                    className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[16px] sm:ml-[7px] md:mr-[21px] md:ml-[9px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder10"
              size="mdSrc"
            ></Input>
            <Stack className="font-roboto h-[136px] sm:mt-[26px] md:mt-[34px] mt-[36px] relative w-[100%]">
              <Text
                className="absolute font-normal leading-[normal] not-italic text-center text-teal_900 w-[100%]"
                as="h6"
                variant="h6"
              >
                Bedroom Dinning Room Meeting Room Workspace
                <br />
                Living Room Room Kitchen Living Space
              </Text>
              <Line className="absolute bg-teal_900 h-[3px] left-[8%] top-[24%] w-[12%]" />
            </Stack>
            <div className="bg-bluegray_400 flex flex-row md:flex-wrap sm:flex-wrap font-opensans items-center justify-center sm:mt-[26px] md:mt-[34px] mt-[36px] sm:mx-[0] sm:p-[15px] md:p-[30px] p-[32px] rounded-radius10 sm:w-[100%] w-[34%]">
              <Text
                className="flex-grow font-bold sm:ml-[13px] md:ml-[17px] ml-[18px] text-white_A700"
                variant="body3"
              >
                All Categories{" "}
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="flex-shrink-0 max-w-[100%] sm:mx-[14px] md:mx-[18px] mx-[19px] w-[10%]"
                alt="arrowright"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[944px] sm:mb-[44px] md:mb-[58px] mb-[60px] ml-[auto] mr-[auto] sm:mt-[74px] md:mt-[95px] mt-[99px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <div className="bg-gray_500 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[34px] p-[36px] rounded-radius10 shadow-bs sm:w-[100%] w-[49%]">
                <Text
                  className="font-normal font-playfairdisplay sm:mt-[49px] md:mt-[63px] mt-[66px] not-italic text-gray_51 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Bedroom
                </Text>
                <Button
                  className="cursor-pointer font-normal font-opensans min-w-[39%] sm:mt-[17px] md:mt-[23px] mt-[24px] text-[18px] text-center text-teal_900 w-[max-content]"
                  size="sm"
                  variant="FillTeal50"
                >
                  Explore
                </Button>
              </div>
              <div className="bg-bluegray_100 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[72px] p-[75px] rounded-radius10 sm:w-[100%] w-[49%]">
                <Text
                  className="font-normal sm:my-[23px] md:my-[30px] my-[32px] not-italic text-gray_51 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Dinning Room
                </Text>
              </div>
            </div>
            <Grid className="sm:gap-[14px] md:gap-[19px] gap-[20px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[19px] md:mt-[25px] mt-[26px] w-[100%]">
              <div className="bg-bluegray_100 flex flex-col items-center justify-start sm:p-[15px] md:p-[71px] p-[74px] rounded-radius10 w-[100%]">
                <Text
                  className="font-normal sm:my-[24px] md:my-[31px] my-[33px] not-italic text-gray_51 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Meeting Room
                </Text>
              </div>
              <div className="bg-bluegray_100 flex flex-col items-center justify-start md:p-[103px] p-[107px] sm:p-[15px] rounded-radius10 w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_51 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Workspace
                </Text>
              </div>
              <div className="bg-bluegray_100 flex flex-col items-center justify-center sm:p-[15px] md:p-[91px] p-[95px] rounded-radius10 w-[100%]">
                <Text
                  className="font-normal md:my-[11px] my-[12px] sm:my-[8px] not-italic text-gray_51 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Living Room
                </Text>
              </div>
              <div className="bg-bluegray_100 flex flex-col items-center justify-center sm:p-[15px] md:p-[75px] p-[78px] rounded-radius10 w-[100%]">
                <Text
                  className="font-normal sm:my-[21px] md:my-[28px] my-[29px] not-italic text-gray_51 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Kitchen Room
                </Text>
              </div>
            </Grid>
          </div>
        </div>
        <div className="flex flex-col font-playfairdisplay justify-start max-w-[984px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[74px] md:mt-[96px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[973px] relative w-[100%]">
            <div className="absolute flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] sm:px-[0] top-[0] sm:w-[100%] w-[96%]">
              <Text
                className="font-bold text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Popular Products
              </Text>
            </div>
            <div className="absolute bottom-[0] overflow-x-auto w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between overflow-auto w-[100%]">
                <Stack className="h-[909px] relative w-[100%]">
                  <Img
                    src="images/img_imagecontainer_909X417.png"
                    className="absolute h-[909px] left-[0] max-w-[100%] sm:w-[100%] w-[43%]"
                    alt="Imagecontainer"
                  />
                  <div className="absolute bg-teal_51 flex flex-col items-center justify-center left-[2%] sm:mx-[0] sm:p-[15px] md:p-[38px] p-[40px] rounded-radius16 top-[14%] sm:w-[100%] w-[43%]">
                    <Stack className="h-[270px] sm:mt-[32px] md:mt-[42px] mt-[44px] relative sm:w-[100%] w-[61%]">
                      <Img
                        src="images/img_485502chaird.png"
                        className="absolute h-[270px] max-w-[100%] w-[100%]"
                        alt="485502chaird"
                      />
                    </Stack>
                    <div className="flex flex-col justify-start sm:mb-[14px] md:mb-[19px] mb-[20px] sm:mt-[29px] md:mt-[38px] mt-[40px] md:pr-[5px] pr-[6px] sm:pt-[4px] md:pt-[5px] pt-[6px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-bold font-opensans text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Armchair
                      </Text>
                      <Text
                        className="font-normal font-roboto leading-[normal] sm:mt-[17px] md:mt-[23px] mt-[24px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[71%]"
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
                  <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] right-[0] top-[14%] sm:w-[100%] w-[53%]">
                    <div className="bg-teal_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[38px] p-[40px] rounded-radius16 sm:w-[100%] w-[81%]">
                      <Stack className="h-[294px] sm:mt-[14px] md:mt-[19px] mt-[20px] relative sm:w-[100%] w-[74%]">
                        <Img
                          src="images/img_chair2.png"
                          className="absolute h-[294px] max-w-[100%] w-[100%]"
                          alt="chairTwo"
                        />
                      </Stack>
                      <div className="flex flex-col justify-start sm:mb-[14px] md:mb-[19px] mb-[20px] sm:mt-[29px] md:mt-[38px] mt-[40px] md:pr-[4px] pr-[5px] sm:pt-[3px] md:pt-[4px] pt-[5px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold font-opensans text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Premium Sofa
                        </Text>
                        <Text
                          className="font-normal font-roboto leading-[normal] sm:mt-[18px] md:mt-[24px] mt-[25px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[71%]"
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
                    <div className="bg-deep_purple_50 flex flex-col items-center sm:p-[15px] md:p-[38px] p-[40px] rounded-radius16 w-[100%]">
                      <Stack className="h-[279px] sm:mt-[26px] md:mt-[33px] mt-[35px] relative sm:w-[208px] md:w-[270px] w-[279px]">
                        <Img
                          src="images/img_unnamed1_279X279.png"
                          className="absolute h-[279px] max-w-[100%] sm:w-[208px] md:w-[270px] w-[279px]"
                          alt="unnamedOne"
                        />
                      </Stack>
                      <div className="flex flex-col justify-start sm:mb-[14px] md:mb-[19px] mb-[20px] sm:mt-[29px] md:mt-[38px] mt-[40px] md:pr-[4px] pr-[5px] sm:pt-[3px] md:pt-[4px] pt-[5px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold font-opensans text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Minimal Sofa
                        </Text>
                        <Text
                          className="font-normal font-roboto leading-[normal] sm:mt-[18px] md:mt-[24px] mt-[25px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[47%]"
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
                  </div>
                  <Img
                    src="images/img_slider_teal_900_1X1397.svg"
                    className="absolute bottom-[10%] h-[1px] left-[0] max-w-[100%] sm:w-[100%] w-[96%]"
                    alt="Line"
                  />
                </Stack>
                <div className="bg-orange_50 flex flex-col items-center justify-center sm:mb-[146px] md:mb-[188px] mb-[195px] md:mt-[124px] mt-[129px] sm:mt-[96px] sm:mx-[0] sm:p-[15px] md:p-[38px] p-[40px] rounded-radius16 sm:w-[100%] w-[60%]">
                  <Stack className="h-[280px] sm:mt-[25px] md:mt-[32px] mt-[34px] relative w-[33%]">
                    <Img
                      src="images/img_11chairpngim_280X165.png"
                      className="absolute h-[280px] max-w-[100%] w-[100%]"
                      alt="11chairpngim"
                    />
                  </Stack>
                  <div className="flex flex-col justify-start sm:mb-[14px] md:mb-[19px] mb-[20px] sm:mt-[29px] md:mt-[38px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                    <Text
                      className="font-bold font-opensans leading-[36.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_400 sm:w-[100%] w-[86%]"
                      as="h6"
                      variant="h6"
                    >
                      Dining Chair
                    </Text>
                    <Text
                      className="font-normal font-roboto leading-[normal] not-italic text-bluegray_400 w-[100%]"
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
              </div>
            </div>
          </Stack>
          <div className="flex flex-col font-opensans items-center justify-start md:ml-[328px] ml-[339px] sm:mt-[3px] md:mt-[4px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
            <div className="bg-bluegray_400 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[23px] p-[24px] rounded-radius10 w-[100%]">
              <Text
                className="flex-grow font-bold sm:ml-[10px] md:ml-[13px] ml-[14px] text-white_A700"
                variant="body3"
              >
                Explore all items
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="flex-shrink-0 max-w-[100%] sm:ml-[13px] md:ml-[17px] ml-[18px] w-[10%]"
                alt="arrowright One"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-playfairdisplay items-center justify-end mt-[100px] sm:mt-[74px] md:mt-[96px] md:p-[38px] p-[40px] sm:px-[15px] sm:py-[29px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[529px] ml-[auto] mr-[auto] sm:mt-[59px] md:mt-[77px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text className="text-teal_900 w-[auto]" as="h1" variant="h1">
              Special Package
            </Text>
          </div>
          <div className="flex flex-col font-opensans items-center justify-start max-w-[944px] sm:mb-[44px] md:mb-[58px] mb-[60px] ml-[auto] mr-[auto] mt-[103px] sm:mt-[77px] md:mt-[99px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <div className="bg-bluegray_100 flex flex-col items-end sm:mx-[0] sm:pl-[15px] md:pl-[333px] pl-[345px] sm:pt-[15px] md:pt-[333px] pt-[345px] rounded-radius24 sm:w-[100%] w-[62%]">
                <Button
                  className="flex items-center justify-center w-[21%]"
                  shape="icbRoundedBorder24"
                  size="smIcn"
                  variant="icbFillTeal900"
                >
                  <Img
                    src="images/img_close.svg"
                    className="h-[18px] sm:h-[14px] flex items-center justify-center"
                    alt="close"
                  />
                </Button>
              </div>
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-normal font-opensans text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Larkin Wood Full Set
                  </Text>
                  <Img
                    src="images/img_star.svg"
                    className="max-w-[100%] sm:mt-[15px] md:mt-[20px] mt-[21px] sm:w-[100%] w-[54%]"
                    alt="Star"
                  />
                  <Text
                    className="font-roboto sm:mt-[15px] md:mt-[20px] mt-[21px] not-italic text-teal_900 tracking-ls056 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
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
                  className="flex items-center justify-center md:mt-[30px] min-w-[53%] mt-[32px] sm:mt-[23px] text-center w-[max-content]"
                  rightIcon={
                    <Img
                      src="images/img_cart.svg"
                      className="ml-[20px] sm:ml-[14px] md:ml-[19px] text-center"
                      alt="cart"
                    />
                  }
                  shape="RoundedBorder10"
                  size="sm"
                >
                  <div className="bg-transparent cursor-pointer font-normal text-[16px] text-gray_51">
                    Add to cart
                  </div>
                </Button>
                <Text
                  className="font-bold leading-[115.00%] sm:mt-[23px] md:mt-[30px] mt-[32px] text-teal_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-teal_900 text-[24px] font-opensans sm:text-[20px] md:text-[22px]">
                    Description
                    <br />
                    <br />
                  </span>
                  <span className="text-teal_900 text-[18px] font-opensans font-normal not-italic">
                    Cast Aluminum Outdoor Chaise Lounge As an elegant and
                    classic touch to your outdoor space, this cast...
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-start mt-[100px] sm:mt-[74px] md:mt-[96px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <div className="sm:mx-[0] overflow-x-auto sm:px-[0] sm:w-[100%] w-[79%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between overflow-auto w-[100%]">
                    <div className="bg-bluegray_100 sm:h-[138px] md:h-[178px] h-[183px] rounded-radius10 w-[33%]"></div>
                    <div className="bg-teal_52 flex flex-col sm:mx-[0] sm:pl-[15px] md:pl-[19px] pl-[20px] sm:pt-[15px] md:pt-[19px] pt-[20px] rounded-radius10 sm:w-[100%] w-[66%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[17px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-normal font-opensans mt-[4px] text-teal_900 w-[auto]"
                          variant="body1"
                        >
                          Living Room Family Set
                        </Text>
                        <Text
                          className="font-normal font-roboto mb-[2px] not-italic text-teal_900 tracking-ls044 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
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
                        className="max-w-[100%] sm:mt-[17px] md:mt-[23px] mt-[24px] w-[25%]"
                        alt="Star One"
                      />
                      <a
                        href={"javascript:"}
                        className="font-normal sm:mt-[17px] md:mt-[23px] mt-[24px] text-[16px] text-teal_900 tracking-ls032 md:tracking-ls11 sm:tracking-ls11 underline w-[auto]"
                        rel="noreferrer"
                      >
                        See Details
                      </a>
                      <Img
                        src="images/img_zoom.svg"
                        className="max-w-[100%] sm:ml-[317px] md:ml-[410px] ml-[424px] mt-[4px] rounded-radius10 w-[8%]"
                        alt="Zoom"
                      />
                    </div>
                    <Img
                      src="images/img_imagecontainer_183X248.png"
                      className="max-w-[100%] rounded-radius10 w-[34%]"
                      alt="ImageContainer Two"
                    />
                  </div>
                </div>
                <div className="sm:h-[138px] md:h-[178px] h-[183px] w-[20%]"></div>
              </div>
              <Img
                src="images/img_slider_teal_900_2X437.svg"
                className="max-w-[100%] sm:mt-[23px] md:mt-[30px] mt-[32px] sm:w-[100%] w-[47%]"
                alt="Slider"
              />
            </div>
          </div>
        </div>
        <div className="font-roboto overflow-auto overflow-x-auto w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[2149px] ml-[auto] mr-[auto] sm:pl-[15px] pr-[100px] sm:pr-[15px] md:pr-[96px] py-[100px] sm:py-[74px] md:py-[96px] w-[100%]">
            <div className="bg-bluegray_400 flex flex-col sm:mx-[0] sm:my-[12px] md:my-[16px] my-[17px] sm:p-[15px] md:p-[38px] p-[40px] rounded-bl-[0] rounded-br-[16px] rounded-tl-[0] rounded-tr-[16px] sm:w-[100%] w-[20%]">
              <Text
                className="font-bold font-playfairdisplay leading-[120.60%] sm:mt-[67px] md:mt-[87px] mt-[90px] text-gray_51 w-[100%]"
                as="h3"
                variant="h3"
              >
                Our
                <br />
                Own Creation
              </Text>
              <Text
                className="font-opensans font-semibold sm:mt-[23px] md:mt-[30px] mt-[32px] text-gray_51 w-[auto]"
                as="h6"
                variant="h6"
              >
                Designed in our studio
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center justify-between sm:mb-[67px] md:mb-[87px] mb-[90px] sm:mt-[20px] md:mt-[27px] mt-[28px] sm:px-[0] w-[100%]">
                <Text
                  className="font-bold text-gray_51 w-[auto]"
                  variant="body3"
                >
                  More
                </Text>
                <Img
                  src="images/img_slider_teal_900.svg"
                  className="max-w-[100%] w-[28%]"
                  alt="Slider One"
                />
                <Img
                  src="images/img_arrow_red_100.svg"
                  className="max-w-[100%] w-[33%]"
                  alt="Arrow"
                />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mr-[74px] mr-[77px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
              <div className="bg-bluegray_100 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[38px] p-[40px] rounded-radius10 shadow-bs1 sm:w-[100%] w-[25%]">
                <Button
                  className="cursor-pointer font-normal min-w-[65%] sm:mt-[299px] md:mt-[387px] mt-[400px] not-italic text-[18px] text-black_900 text-center w-[max-content]"
                  variant="FillWhiteA700"
                >
                  Explore All Rooms
                </Button>
              </div>
              <Img
                src="images/img_imagecontainer_1.png"
                className="max-w-[100%] sm:ml-[19px] md:ml-[25px] ml-[26px] rounded-radius16 w-[24%]"
                alt="Imagecontainer Three"
              />
              <Img
                src="images/img_imagecontainer_2.png"
                className="max-w-[100%] sm:ml-[19px] md:ml-[25px] ml-[26px] rounded-radius16 w-[24%]"
                alt="Imagecontainer Four"
              />
              <Img
                src="images/img_imagecontainer_3.png"
                className="max-w-[100%] sm:ml-[19px] md:ml-[25px] ml-[26px] rounded-radius16 w-[24%]"
                alt="Imagecontainer Five"
              />
            </div>
          </div>
        </div>
        <div className="bg-teal_50 flex flex-col font-playfairdisplay items-center justify-start sm:p-[15px] md:p-[38px] p-[40px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[944px] ml-[auto] mr-[auto] sm:my-[44px] md:my-[58px] my-[60px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-bold text-teal_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Benefits for your expediency
            </Text>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[100px] mt-[104px] sm:mt-[77px] w-[100%]">
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                <Stack className="bg-deep_purple_50 h-[108px] sm:p-[15px] md:p-[19px] p-[20px] relative rounded-radius24 md:w-[104px] w-[108px] sm:w-[80px]">
                  <Img
                    src="images/img_cut.svg"
                    className="absolute h-[68px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[50px] md:w-[65px] w-[68px]"
                    alt="cut"
                  />
                </Stack>
                <Text
                  className="font-bold font-playfairdisplay sm:mt-[29px] md:mt-[38px] mt-[40px] text-teal_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Payment Method
                </Text>
                <Text
                  className="font-normal font-opensans leading-[23.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[23px] md:mt-[30px] mt-[32px] text-center text-teal_900 w-[100%]"
                  variant="body3"
                >
                  We offer flexible payment
                  <br />
                  options, to make easier.
                </Text>
              </div>
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                <Stack className="bg-orange_50 h-[107px] sm:p-[15px] md:p-[19px] p-[20px] relative rounded-radius24 md:w-[103px] w-[107px] sm:w-[80px]">
                  <Img
                    src="images/img_car.svg"
                    className="absolute h-[67px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[50px] md:w-[64px] w-[67px]"
                    alt="car"
                  />
                </Stack>
                <Text
                  className="font-bold font-playfairdisplay sm:mt-[29px] md:mt-[38px] mt-[40px] text-teal_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Return policy
                </Text>
                <Text
                  className="font-normal font-opensans leading-[23.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[23px] md:mt-[30px] mt-[32px] text-center text-teal_900 w-[100%]"
                  variant="body3"
                >
                  You can return a product <br />
                  within 30 days.
                </Text>
              </div>
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                <Stack className="bg-teal_51 h-[108px] sm:p-[15px] md:p-[19px] p-[20px] relative rounded-radius24 md:w-[104px] w-[108px] sm:w-[80px]">
                  <Img
                    src="images/img_music.svg"
                    className="absolute h-[67px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[55%]"
                    alt="music"
                  />
                </Stack>
                <Text
                  className="font-bold font-playfairdisplay sm:mt-[38px] md:mt-[49px] mt-[51px] text-teal_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Customer Support
                </Text>
                <Text
                  className="font-normal font-opensans leading-[23.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[30px] md:mt-[39px] mt-[41px] text-center text-teal_900 w-[100%]"
                  variant="body3"
                >
                  Our customer support <br />
                  is 24/7.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-opensans items-center justify-start md:p-[38px] p-[40px] sm:px-[15px] sm:py-[29px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[939px] ml-[auto] mr-[auto] sm:mt-[44px] md:mt-[58px] mt-[60px] sm:pb-[14px] md:pb-[19px] pb-[20px] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] md:px-[19px] px-[20px] w-[100%]">
            <Text
              className="font-bold font-playfairdisplay text-teal_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Testimonials
            </Text>
            <Text
              className="font-normal font-roboto sm:mt-[17px] md:mt-[22px] mt-[23px] not-italic text-teal_900 w-[auto]"
              as="h6"
              variant="h6"
            >
              Over 15,000 happy customers.
            </Text>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[939px] ml-[auto] mr-[auto] md:mt-[103px] mt-[107px] sm:mt-[80px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Stack className="bg-bluegray_100 h-[410px] sm:pb-[15px] md:pb-[329px] pb-[340px] sm:pr-[15px] md:pr-[329px] pr-[340px] relative rounded-radius20 sm:w-[100%] w-[45%]">
              <Img
                src="images/img_facebook_teal_50.png"
                className="common-pointer absolute h-[44px] max-w-[100%] w-[20%]"
                onClick={handleNavigate1}
                alt="facebook"
              />
            </Stack>
            <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text
                className="font-normal leading-[23.00px] md:leading-[normal] sm:leading-[normal] text-teal_900 w-[100%]"
                variant="body3"
              >
                “My experience with Mark is a complete
                <br />
                sucess, from customer service, wide range of
                <br />
                products, clean store, purchasing experience, the
                <br />
                newsletter.Thank you.”
              </Text>
              <div className="flex flex-col font-roboto justify-start sm:mt-[48px] md:mt-[62px] mt-[65px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
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
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-end justify-between max-w-[939px] sm:mb-[44px] md:mb-[58px] mb-[60px] ml-[auto] mr-[auto] md:mt-[103px] mt-[107px] sm:mt-[80px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Img
              src="images/img_slider_teal_900_1X1397.svg"
              className="max-w-[100%] sm:mt-[15px] md:mt-[20px] mt-[21px] sm:w-[100%] w-[77%]"
              alt="Slider Two"
            />
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
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
        <div className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center justify-evenly mt-[100px] sm:mt-[74px] md:mt-[96px] w-[100%]">
          <div className="bg-bluegray_100 sm:h-[450px] md:h-[581px] h-[600px] max-w-[512px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"></div>
          <div className="bg-teal_52 flex flex-col max-w-[512px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] md:pl-[38px] pl-[40px] sm:pr-[15px] sm:py-[15px] md:py-[38px] py-[40px] w-[100%]">
            <div className="flex flex-col justify-start sm:mt-[51px] md:mt-[66px] mt-[69px] sm:px-[0] w-[100%]">
              <Text
                className="font-normal leading-[62.00px] md:leading-[normal] sm:leading-[normal] not-italic text-teal_900 sm:tracking-ls1 md:tracking-ls2 tracking-ls24000000000000004 w-[100%]"
                as="h3"
                variant="h3"
              >
                <span className="text-teal_900 text-[48px] font-playfairdisplay sm:text-[38px] md:text-[44px]">
                  Join Our <br />
                </span>
                <span className="text-teal_900 text-[48px] font-playfairdisplay font-bold sm:text-[38px] md:text-[44px]">
                  Newsletter
                </span>
              </Text>
              <Text
                className="font-normal sm:mt-[18px] md:mt-[24px] mt-[25px] not-italic text-teal_900 w-[auto]"
                variant="body3"
              >
                Receive exclusive deals, discounts and many offers.
              </Text>
            </div>
            <Input
              className="font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-gray_400 text-gray_400 w-[100%]"
              wrapClassName="md:mt-[39px] mt-[41px] sm:mt-[30px] sm:mx-[0] sm:w-[100%] w-[92%]"
              type="email"
              name="Emailbox"
              placeholder="Enter your email"
              size="sm"
              variant="OutlineBlack900"
            ></Input>
            <Button className="cursor-pointer font-normal sm:mb-[51px] md:mb-[66px] mb-[69px] min-w-[53%] sm:mt-[30px] md:mt-[39px] mt-[41px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_51 w-[max-content]">
              Subscribe
            </Button>
          </div>
        </div>
        <footer className="bg-gray_100 font-opensans w-[100%]">
          <div className="flex flex-col justify-start max-w-[944px] sm:mb-[23px] md:mb-[30px] mb-[32px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[74px] md:mt-[96px] sm:mx-[0] mx-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Stack className="h-[238px] relative w-[100%]">
              <Stack className="absolute h-[238px] left-[0] sm:w-[100%] w-[89%]">
                <Stack className="absolute h-[238px] left-[0] sm:w-[100%] w-[83%]">
                  <Stack className="absolute h-[238px] left-[0] sm:w-[100%] w-[81%]">
                    <div className="absolute flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[40%] sm:w-[100%] max-w-[100%]">
                          <Img
                            src="images/img_logo2.png"
                            className="cursor-pointer max-w-[100%]"
                            alt="LogoTwo"
                          />
                        </li>
                        <li className="w-[82%] mt-[21px] sm:mt-[15px] sm:w-[100%] md:mt-[20px] max-w-[100%]">
                          <Img
                            src="images/img_socialmedia.svg"
                            className="cursor-pointer max-w-[100%]"
                            alt="Socialmedia"
                          />
                        </li>
                        <li className="w-[auto] mt-[21px] sm:mt-[15px] md:mt-[20px]">
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
                    <div className="absolute flex flex-col justify-start sm:mx-[0] md:pr-[4px] pr-[5px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[5px] right-[0] sm:w-[100%] w-[39%]">
                      <Text
                        className="font-bold text-teal_900 w-[auto]"
                        variant="body3"
                      >
                        My Account
                      </Text>
                      <Text
                        className="font-normal leading-[normal] sm:mb-[61px] md:mb-[79px] mb-[82px] sm:mt-[22px] md:mt-[29px] mt-[30px] sm:mx-[0] text-teal_900 sm:w-[100%] w-[51%]"
                        variant="body3"
                      >
                        Sign in
                        <br />
                        Register
                        <br />
                        Order status
                      </Text>
                    </div>
                  </Stack>
                  <div className="absolute flex flex-col justify-start sm:mx-[0] sm:pb-[65px] md:pb-[84px] pb-[87px] sm:pl-[0] sm:pr-[15px] md:pr-[84px] pr-[87px] right-[0] sm:w-[100%] w-[29%]">
                    <Text
                      className="font-bold text-teal_900 w-[auto]"
                      variant="body3"
                    >
                      Help
                    </Text>
                    <Text
                      className="font-normal leading-[normal] sm:mt-[22px] md:mt-[29px] mt-[30px] sm:mx-[0] text-teal_900 sm:w-[100%] w-[72%]"
                      variant="body3"
                    >
                      Shipping
                      <br />
                      Returns
                      <br />
                      Sizing
                    </Text>
                  </div>
                </Stack>
                <div className="absolute flex flex-col justify-start sm:mx-[0] sm:pb-[62px] md:pb-[80px] pb-[83px] sm:pl-[0] sm:pr-[15px] md:pr-[80px] pr-[83px] right-[0] sm:w-[100%] w-[26%]">
                  <Text
                    className="font-bold text-teal_900 w-[auto]"
                    variant="body3"
                  >
                    Shop
                  </Text>
                  <Text
                    className="font-normal leading-[normal] sm:mt-[22px] md:mt-[29px] mt-[30px] sm:mx-[0] text-teal_900 sm:w-[100%] w-[95%]"
                    variant="body3"
                  >
                    All Products
                    <br />
                    Bedroom
                    <br />
                    Dinning Room
                  </Text>
                </div>
              </Stack>
              <div className="absolute flex flex-col justify-start sm:mx-[0] sm:pb-[5px] md:pb-[6px] pb-[7px] md:pr-[6px] pr-[7px] sm:px-[0] right-[0] sm:w-[100%] w-[19%]">
                <Text
                  className="font-bold text-teal_900 w-[auto]"
                  variant="body3"
                >
                  Legal Stuff
                </Text>
                <Text
                  className="font-normal leading-[normal] sm:mb-[60px] md:mb-[78px] mb-[81px] sm:mt-[22px] md:mt-[29px] mt-[30px] text-teal_900 w-[100%]"
                  variant="body3"
                >
                  Shipping & Delivery
                  <br />
                  Terms & Conditions
                  <br />
                  Privacy & Policy
                </Text>
              </div>
            </Stack>
            <Text
              className="font-normal sm:mt-[51px] md:mt-[66px] mt-[69px] text-teal_900 w-[auto]"
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

export default Laptop1024pxPage;
