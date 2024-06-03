import React from "react";

export default function Faq() {
  return (
    <>
      <div className="px-6 md:px-56 h-[100vh] relative bottom-[500px] md:bottom-[100px]">
        <div>
          <p className="font-medium text-lg text-[#ff5555] tracking-widest">
            FAQ
          </p>
          <h3 className="font-bold text-2xl md:text-5xl mt-2 mb-6 md:mb-0">
            Frequently Asked <br /> Questions
            <svg
              width="62"
              height="59"
              viewBox="0 0 62 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative left-[600px] bottom-[60px] hidden md:block"
            >
              <path
                d="M31 0.70874L32.5047 30.6377L61.4338 22.8202L33.4347 33.4998L49.8091 58.5973L31 35.2687L12.1909 58.5973L28.5653 33.4998L0.566191 22.8202L29.4953 30.6377L31 0.70874Z"
                fill="black"
                className="dark:fill-white"
              />
            </svg>
          </h3>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="bg-[#ff5555] text-white rounded-lg p-4 md:p-6">
              <h4 className="md:text-3xl font-semibold">
                The Best Financial Accounting <br />
                App Ever!
              </h4>
              <p className="text-sm md:text-lg font-medium text-justify">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="p-4">
              <h4 className="md:text-3xl font-semibold">
                The Best Financial Accounting <br />
                App Ever!
              </h4>
              <p className="text-sm md:text-lg font-medium text-justify">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10">
            <div className="bg-[#ff5555] text-white rounded-lg p-4 md:p-6">
              <h4 className="md:text-3xl font-semibold">
                The Best Financial Accounting <br />
                App Ever!
              </h4>
              <p className="text-sm md:text-lg font-medium text-justify">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="p-4">
              <h4 className="md:text-3xl font-semibold">
                The Best Financial Accounting <br />
                App Ever!
              </h4>
              <p className="text-sm md:text-lg font-medium text-justify">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="bg-[#ff5555] text-white rounded-lg p-4 md:p-6">
              <h4 className="md:text-3xl font-semibold">
                The Best Financial Accounting <br />
                App Ever!
              </h4>
              <p className="text-sm md:text-lg font-medium text-justify">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="p-4">
              <h4 className="md:text-3xl font-semibold">
                The Best Financial Accounting <br />
                App Ever!
              </h4>
              <p className="text-sm md:text-lg font-medium text-justify">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
