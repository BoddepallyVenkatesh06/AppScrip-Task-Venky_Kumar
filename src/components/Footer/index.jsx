import React from "react";
import { Text, Heading, Img, Button, Input } from "./..";
import Link from "next/link";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="mt-[53px] flex w-[90%] flex-col items-center gap-[39px] md:w-full">
        <div className="relative h-[591px] self-stretch">
          <div className="absolute bottom-[14%] left-0 right-0 m-auto flex w-full flex-col items-end">
            <div className="mt-6 h-px w-full self-stretch bg-white-A700" />
            <div className="mr-28 mt-[231px] flex gap-2 md:mr-0">
            <div className="flex rounded-[5px] border border-solid border-red-50 bg-white-A700 p-2">
                <Img
                  src="img_gpay.svg"
                  width={39}
                  height={16}
                  alt="settings"
                  className="h-[16px] self-start"
                />
              </div>
              <div className="flex rounded-[5px] border border-solid border-red-50 bg-white-A700 p-2">
                <Img
                  src="img_mastercard.svg"
                  width={40}
                  height={16}
                  alt="settings"
                  className="h-[16px] self-start"
                />
              </div>
              <div className="flex rounded-[5px] border border-solid border-red-50 bg-white-A700 p-2">
                <Img
                  src="img_paypal.svg"
                  width={40}
                  height={16}
                  alt="settings"
                  className="h-[16px] self-start"
                />
              </div> 
              <div className="flex rounded-[5px] border border-solid border-red-50 bg-light_blue-800 p-1.5">
                <Img
                  src="img_amex.svg"
                  width={42}
                  height={11}
                  alt="vector"
                  className="my-[5px] h-[11px]"
                />
              </div>
              <div className="flex rounded-[5px] border border-solid border-red-50 bg-white-A700 p-2">
                <Img
                  src="img_apple.svg"
                  width={39}
                  height={16}
                  alt="settings"
                  className="h-[16px] self-start"
                />
              </div>
              <div className="flex rounded-[5px] border border-solid border-red-50 bg-deep_purple-A400 p-[7px]">
                <Img
                  src="img_opay.svg"
                  width={40}
                  height={16}
                  alt="settings"
                  className="h-[16px] self-start"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-full max-w-[983px] md:p-5">
            <div className="flex w-full items-start justify-between gap-5 md:flex-col">
              <div className="flex w-[59%] flex-col items-start md:w-full">
                <Heading
                  size="lg"
                  as="h5"
                  className="uppercase !text-white-A700"
                >
                  Be the first to know
                </Heading>
                <Text size="md" as="p" className="mt-6 !text-white-A700">
                  Sign up for updates from metta muse.
                </Text>
                <div className="mt-[50px] flex items-center gap-4 self-stretch sm:flex-col">
                  <Input
                    shape="square"
                    name="email"
                    placeholder={`Enter your e-mail...`}
                    className="sm:px-5"
                  />
                  <Button
                    shape="round"
                    className="min-w-[184px] border border-solid border-white-A700_75 font-medium opacity-0.3 sm:px-5"
                  >
                    Subscribe
                  </Button>
                </div>
                <div className="mt-[126px] flex w-[92%] items-start justify-between gap-5 md:w-full">
                  <div className="flex flex-col items-start gap-[18px]">
                    <Heading
                      size="xl"
                      as="h4"
                      className="!text-[24.71px] !text-white-A700"
                    >
                      metta muse
                    </Heading>
                    <ul className="flex flex-col items-start gap-[15px]">
                      <li>
                        <Link href="#">
                          <Text size="lg" as="p" className="!text-white-A700">
                            About Us
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="Stories" target="_blank" rel="noreferrer">
                          <Text size="lg" as="p" className="!text-white-A700">
                            Stories
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="Artisans" target="_blank" rel="noreferrer">
                          <Text size="lg" as="p" className="!text-white-A700">
                            Artisans
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="Boutiques" target="_blank" rel="noreferrer">
                          <Text size="lg" as="p" className="!text-white-A700">
                            Boutiques
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Text size="lg" as="p" className="!text-white-A700">
                            Contact Us
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Text size="lg" as="p" className="!text-white-A700">
                            EU Compliances Docs
                          </Text>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-[25px]">
                    <Heading
                      size="lg"
                      as="h5"
                      className="uppercase !text-white-A700"
                    >
                      Quick Links
                    </Heading>
                    <ul className="flex flex-col items-start gap-[15px]">
                      <li>
                        <Link href="#">
                          <Text size="lg" as="p" className="!text-white-A700">
                            Orders & Shipping
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="Join/Login as a Seller"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text size="lg" as="p" className="!text-white-A700">
                            Join/Login as a Seller
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Text size="lg" as="p" className="!text-white-A700">
                            Payment & Pricing
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Text size="lg" as="p" className="!text-white-A700">
                            Return & Refunds
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="FAQs" target="_blank" rel="noreferrer">
                          <Text size="lg" as="p" className="!text-white-A700">
                            FAQs
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Text size="lg" as="p" className="!text-white-A700">
                            Privacy Policy
                          </Text>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Text size="lg" as="p" className="!text-white-A700">
                            Terms & Conditions
                          </Text>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-[454px] w-[23%] md:h-auto md:w-full">
                <div className="flex flex-col items-start gap-[15px]">
                  <Heading
                    size="lg"
                    as="h5"
                    className="uppercase !text-white-A700"
                  >
                    CONTACT US
                  </Heading>
                  <ul className="flex flex-col items-start">
                    <li>
                      <Link href="#">
                        <Text size="md" as="p" className="!text-white-A700">
                          +44 221 133 5360
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="customercare@mettamuse.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4"
                      >
                        <Text size="md" as="p" className="!text-white-A700">
                          customercare@mettamuse.com
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="Currency"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-[22px]"
                      >
                        <Heading
                          size="lg"
                          as="h5"
                          className="uppercase !text-white-A700"
                        >
                          Currency
                        </Heading>
                      </Link>
                    </li>
                    <li>
                      <div className="mt-[152px] flex flex-col items-start gap-[25px]">
                        <Link href="#">
                          <Heading
                            size="lg"
                            as="h5"
                            className="uppercase !text-white-A700"
                          >
                            Follow Us
                          </Heading>
                        </Link>
                        <div className="flex items-center gap-4">
                          <Img
                            src="img_info.svg"
                            width={32}
                            height={32}
                            alt="info"
                            className="h-[32px] w-[32px]"
                          />
                          <Img
                            src="img_mdi_linkedin.svg"
                            width={24}
                            height={24}
                            alt="mdilinkedin"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link href="#" className="mt-[55px]">
                        <Heading size="lg" as="h5" className="!text-white-A700">
                          <span className="text-white-A700">
                            metta muse&nbsp;
                          </span>
                          <span className="uppercase text-white-A700">
                            Accepts
                          </span>
                        </Heading>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Heading
                  size="s"
                  as="h6"
                  className="absolute left-[18%] top-[35%] m-auto tracking-[1.00px] !text-white-A700"
                >
                  <p>
                     <Img src="img_usd.svg" width={24} height={24} />
                     +USD 
                  </p>
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <Text as="p" className="text-center !text-white-A700">
          Copyright © 2023 mettamuse. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
