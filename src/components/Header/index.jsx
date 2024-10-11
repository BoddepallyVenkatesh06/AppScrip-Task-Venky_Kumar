import React from "react";
import { Heading, Img, Text } from "./..";
import Link from "next/link";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex justify-center self-stretch bg-black-900 py-[7px]">
        <div className="container-xs flex justify-between gap-5 px-[178px] md:p-5 md:px-5 sm:flex-col">
          <div className="flex items-center gap-2.5">
            <Link href="#">
              <Img
                src="img_grid.svg"
                width={16}
                height={16}
                alt="grid"
                className="h-[16px] w-[16px]"
              />
            </Link>
            <Text
              size="xs"
              as="p"
              className="self-end tracking-[1.00px] !text-pink-400"
            >
              Lorem ipsum dolor
            </Text>
          </div>
          <div className="flex items-center gap-2.5">
            <Link href="#">
              <Img
                src="img_grid.svg"
                width={16}
                height={16}
                alt="grid"
                className="h-[16px] w-[16px]"
              />
            </Link>
            <Text
              size="xs"
              as="p"
              className="self-end tracking-[1.00px] !text-pink-400"
            >
              Lorem ipsum dolor
            </Text>
          </div>
          <div className="flex items-center gap-2.5">
            <Link href="#">
              <Img
                src="img_grid.svg"
                width={16}
                height={16}
                alt="grid"
                className="h-[16px] w-[16px]"
              />
            </Link>
            <Text
              size="xs"
              as="p"
              className="self-end tracking-[1.00px] !text-pink-400"
            >
              Lorem ipsum dolor
            </Text>
          </div>
        </div>
      </div>
      <div className="flex justify-center self-stretch border-b border-solid border-gray-300 bg-white-A700 py-[25px] sm:py-5">
        <div className="container-xs mt-2.5 flex flex-col items-center gap-[59px] md:p-5 sm:gap-[29px]">
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            <Img
              src="img_header_logo.svg"
              width={36}
              height={36}
              alt="headerlogo"
              className="h-[36px] w-[36px]"
            />
            <div className="flex w-[54%] items-center justify-between gap-5 md:w-full">
              <Text size="2xl" as="p" className="!text-gray-900">
                LOGO
              </Text>
              <div className="flex w-[36%] items-center justify-between gap-5">
                <Link href="#">
                  <Img
                    src="img_contrast.svg"
                    width={24}
                    height={24}
                    alt="contrast"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="img_favorite.svg"
                    width={24}
                    height={24}
                    alt="favorite"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="img_bag.svg"
                    width={24}
                    height={24}
                    alt="bag"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="img_lock.svg"
                    width={24}
                    height={24}
                    alt="lock"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
                <div className="flex items-center gap-[5px]">
                  <Heading size="s" as="h6" className="tracking-[1.00px]">
                    ENG
                  </Heading>
                  <Link href="#">
                    <Img
                      src="img_checkmark.svg"
                      width={16}
                      height={16}
                      alt="checkmark"
                      className="h-[16px] w-[16px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex flex-wrap gap-[63px] md:gap-5">
            <li>
              <Link href="#">
                <Heading size="lg" as="h5" className="tracking-[1.00px]">
                  SHOP
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Heading size="lg" as="h5" className="tracking-[1.00px]">
                  SKILLS
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Heading size="lg" as="h5" className="tracking-[1.00px]">
                  STORIES
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Heading size="lg" as="h5" className="tracking-[1.00px]">
                  ABOUT
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Heading size="lg" as="h5" className="tracking-[1.00px]">
                  CONTACT US
                </Heading>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
