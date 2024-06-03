import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <section className="w-full bg-white dark:bg-black relative top-[100px] md:top-[200px]">
        <div className="px-6 md:px-24 py-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 mb-10 md:grid-cols-3 lg:grid-cols-12 lg:gap-2">
            <div className="col-span-3 mx-auto md:mx-0">
              <Link href="#" prefetch={false}>
                <svg
                  width="117"
                  height="35"
                  viewBox="0 0 117 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M108.83 14V11.4683H108.046V10.908H110.245V11.4683H109.473V14H108.83ZM110.564 14V10.908H111.186L112.344 12.4436H112.054L113.179 10.908H113.801V14H113.158V11.6177L113.415 11.6758L112.224 13.2114H112.141L110.991 11.6758L111.207 11.6177V14H110.564Z"
                    fill="black"
                    className="dark:fill-white"
                  />
                  <path
                    d="M46.5863 28.1301C47.6222 28.1301 48.5386 27.9408 49.3355 27.5623C50.1324 27.1639 50.74 26.5662 51.1583 25.7693V27.7715H55.3419V11.4555H50.8595V20.9881C50.8595 21.9244 50.5806 22.6815 50.0228 23.2592C49.465 23.817 48.7478 24.0959 47.8713 24.0959C46.9947 24.0959 46.2775 23.817 45.7197 23.2592C45.1619 22.6815 44.883 21.9244 44.883 20.9881V11.4555H40.4006V21.3467C40.4006 23.3787 40.9285 25.0223 41.9844 26.2773C43.0601 27.5125 44.5941 28.1301 46.5863 28.1301Z"
                    fill="black"
                    className="dark:fill-white"
                  />
                  <path
                    d="M58.6181 9.99127H63.1005V5.50886H58.6181V9.99127ZM58.6181 27.7715H63.1005V11.4555H58.6181V27.7715Z"
                    fill="black"
                    className="dark:fill-white"
                  />
                  <path
                    d="M68.3528 27.7715H72.8352V15.3403H76.3315V11.4555H72.8352V11.2165C72.8352 9.76217 73.6819 9.03502 75.3752 9.03502C75.6541 9.03502 75.9829 9.0649 76.3614 9.12467V5.29968C75.9032 5.20007 75.3752 5.15027 74.7776 5.15027C72.7456 5.15027 71.1618 5.6782 70.0262 6.73405C68.9106 7.78991 68.3528 9.28404 68.3528 11.2165V11.4555H65.6036V15.3403H68.3528V27.7715Z"
                    fill="black"
                    className="dark:fill-white"
                  />
                  <path
                    d="M78.6371 27.7715H83.1195V18.986C83.1195 17.7707 83.4582 16.8344 84.1355 16.177C84.8129 15.4996 85.6994 15.161 86.7951 15.161H88.1996V11.2762H87.2433C86.2473 11.2762 85.3607 11.4655 84.5838 11.844C83.8268 12.2026 83.2391 12.8899 82.8207 13.9059V11.4555H78.6371V27.7715Z"
                    fill="black"
                    className="dark:fill-white"
                  />
                  <path
                    d="M92.7042 34.4054C95.6924 34.4054 97.854 32.7021 99.1887 29.2955L106.181 11.4555H101.37L97.5153 21.9443L93.6604 11.4555H88.8493L95.2741 27.7715L94.9753 28.4588C94.7362 28.9967 94.4274 29.4748 94.0489 29.8932C93.6704 30.3115 93.0428 30.5207 92.1663 30.5207C91.4491 30.5207 90.7718 30.4211 90.1343 30.2219V33.8974C90.4729 34.0767 90.8614 34.2062 91.2997 34.2859C91.7579 34.3656 92.2261 34.4054 92.7042 34.4054Z"
                    fill="black"
                    className="dark:fill-white"
                  />
                  <path
                    d="M26.3829 10.8852C26.1564 10.6651 25.8387 10.5651 25.5277 10.6163C25.2162 10.6672 24.9472 10.8628 24.8027 11.1434C24.3057 12.1089 23.6745 12.9961 22.9318 13.7805C23.0058 13.2139 23.0431 12.6439 23.0431 12.0724C23.0431 10.9759 22.8961 9.84742 22.6061 8.71805C21.6527 5.00853 19.1525 1.87144 15.7468 0.111205C15.4503 -0.0419942 15.097 -0.0366153 14.8053 0.125549C14.5136 0.287779 14.3226 0.585213 14.2964 0.917908C14.0309 4.28895 12.2945 7.35586 9.52981 9.33424C9.49322 9.3606 9.4569 9.38729 9.42057 9.41386C9.34534 9.46891 9.27441 9.52097 9.20814 9.56467C9.19778 9.57157 9.18749 9.57861 9.17739 9.58585C7.43861 10.8308 6.00391 12.4903 5.0282 14.3854C4.03675 16.3131 3.53406 18.3818 3.53406 20.5336C3.53406 21.6299 3.68101 22.7583 3.97088 23.8879C5.50055 29.8417 10.8585 33.9999 17.0004 33.9999C24.4253 33.9999 30.4659 27.9589 30.4659 20.5336C30.4659 16.872 29.0159 13.4454 26.3829 10.8852Z"
                    fill="#FF5555"
                  />
                  <circle cx="16" cy="20" r="4" fill="white" />
                </svg>

                <span className="sr-only">uifry</span>
              </Link>
              <div className="my-4 flex flex-col gap-4">
                <p className="text-base flex flex-row gap-2">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9394 0.708984C16.2804 0.708984 17.5704 1.23898 18.5194 2.18998C19.4694 3.13898 20.0004 4.41898 20.0004 5.75898V13.659C20.0004 16.449 17.7304 18.709 14.9394 18.709H5.06043C2.26943 18.709 0.000427246 16.449 0.000427246 13.659V5.75898C0.000427246 2.96898 2.25943 0.708984 5.06043 0.708984H14.9394ZM16.0704 5.90898C15.8604 5.89798 15.6604 5.96898 15.5094 6.10898L11.0004 9.70898C10.4204 10.19 9.58943 10.19 9.00043 9.70898L4.50043 6.10898C4.18943 5.87898 3.75943 5.90898 3.50043 6.17898C3.23043 6.44898 3.20043 6.87898 3.42943 7.17898L3.56043 7.30898L8.11043 10.859C8.67043 11.299 9.34943 11.539 10.0604 11.539C10.7694 11.539 11.4604 11.299 12.0194 10.859L16.5304 7.24898L16.6104 7.16898C16.8494 6.87898 16.8494 6.45898 16.5994 6.16898C16.4604 6.01998 16.2694 5.92898 16.0704 5.90898Z"
                      fill="#FF5555"
                    />
                  </svg>
                  help@frybix.com
                </p>
                <p className="text-base flex flex-row gap-2">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5317 13.1814C15.5208 17.1693 16.4258 12.5557 18.9656 15.0938C21.4143 17.5417 22.8216 18.0322 19.7192 21.1337C19.3306 21.446 16.8616 25.2032 8.1846 16.5287C-0.493478 7.85298 3.26158 5.38143 3.57397 4.99293C6.68387 1.88283 7.16586 3.29837 9.61449 5.74631C12.1544 8.28548 7.54266 9.1934 11.5317 13.1814Z"
                      fill="#FF5555"
                    />
                  </svg>
                  +1 234 456 678 89
                </p>
              </div>
            </div>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-3xl font-medium tracking-wider ">Links</p>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                Home
              </a>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                About Us
              </a>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                Bookings
              </a>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                Bolg
              </a>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-3xl font-medium tracking-wider ">Legal</p>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                Terms Of Issue
              </a>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                Cookie Policy
              </a>
            </nav>
            <nav className="col-span-2 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-3xl font-medium tracking-wider ">
                Product
              </p>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                Take Tour
              </a>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                Live Chat
              </a>
              <a
                href="#"
                className="flex mb-3 text-base font-medium  transition hover:text-gray-700 md:mb-4 hover:text-primary"
              >
                Reviews
              </a>
            </nav>
            <div className="col-span-3">
              <p className="mb-3 text-3xl font-medium tracking-wider ">
                Newsletter
              </p>
              <p className="text-base font-medium mb-4">Stay Up To Date</p>
              <form action="#" className="mb-2">
                <div
                  className="relative flex items-center overflow-hidden rounded-lg"
                  style={{
                    boxShadow: "-13.01px 13.01px 104.09px 0px #A1A1A11A",
                  }}
                >
                  <input
                    className="w-full px-2 py-4 text-base placeholder:text-black dark:placeholder:text-white dark:bg-black leading-normal transition duration-150 ease-in-out bg-white appearance-none focus:outline-none"
                    type="email"
                    placeholder="your email"
                  />
                  <button
                    className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded text-base font-medium text-center text-white no-underline "
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <svg
            width="1090"
            height="105"
            viewBox="0 0 1090 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block"
          >
            <mask
              id="path-1-inside-1_101_432"
              fill="white"
              className="dark:fill-black"
            >
              <path d="M0 0.708984H1090V104.709H0V0.708984Z" />
            </mask>
            <path
              d="M0 1.70898H1090V-0.291016H0V1.70898Z"
              fill="url(#paint0_linear_101_432)"
              mask="url(#path-1-inside-1_101_432)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_101_432"
                x1="-1.19122e-06"
                y1="-155.302"
                x2="1090"
                y2="-155.302"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#161616" stop-opacity="0" />
                <stop offset="0.515625" stop-color="#696969" />
                <stop offset="1" stop-color="#161616" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex flex-col items-start justify-between md:flex-row md:items-center relative md:bottom-[50px] border-t-[1px] border-black md:border-none">
            <p className="mb-6 text-base text-center w-full md:mb-0 pt-6 md:pt-0">
              Copyright 2022 Uifry.Com All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
