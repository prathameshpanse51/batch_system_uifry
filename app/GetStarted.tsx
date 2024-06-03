import { Button } from "@/components/ui/button";
import React from "react";
import phone from "./getStartedPhone.png";
import Image from "next/image";

export default function GetStarted() {
  return (
    <>
      <div className="flex md:flex-row items-center justify-center w-full md:hidden bg-black dark:bg-white relative top-[50px]">
        <div className="text-white dark:text-black flex flex-col items-center gap-4 items-start py-10 px-4">
          <h1 className="font-bold text-2xl text-center">
            Ready To Get Started?
          </h1>
          <p className="text-base font-thin ">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <Button className="text-sm font-medium bg-white dark:bg-black text-black dark:text-white hover:bg-none rounded px-6 py-4">
            Download App{" "}
            <svg
              width="20"
              height="28"
              viewBox="0 0 26 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M21.5273 17.5307C21.4939 13.536 24.8032 11.5889 24.9573 11.5019C23.0815 8.77184 20.1742 8.39714 19.1492 8.37037C16.7041 8.11614 14.3393 9.82909 13.0933 9.82909C11.8271 9.82909 9.91117 8.39714 7.84121 8.43732C5.18165 8.47743 2.69631 10.0164 1.33641 12.3985C-1.4772 17.263 0.61963 24.4092 3.31934 28.3436C4.6658 30.2707 6.24014 32.4186 8.30346 32.3449C10.3198 32.2646 11.0768 31.0602 13.5086 31.0602C15.9203 31.0602 16.6303 32.3449 18.7339 32.2981C20.8977 32.2646 22.2643 30.3643 23.5639 28.4239C25.1248 26.2158 25.7478 24.0412 25.7746 23.9341C25.721 23.9006 21.5676 22.3149 21.5273 17.5307ZM17.5548 5.78089C18.6401 4.42259 19.3836 2.58252 19.176 0.708984C17.6084 0.77586 15.6389 1.79292 14.5134 3.11782C13.5153 4.28877 12.6176 6.20242 12.8521 8.00237C14.6072 8.12949 16.4227 7.11242 17.5548 5.78089Z"
                fill="black"
                className="dark:fill-white"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="relative top-[130px]">
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[200px] left-[50px] hidden md:block"
        >
          <path
            d="M40.9117 4.6793L25.8375 21.3495L45.3253 32.5456L24.8128 23.3606L20.1867 45.3544L22.5835 23.0075L0.236642 25.4043L22.2304 20.7782L13.0454 0.265709L24.2415 19.7535L40.9117 4.6793Z"
            fill="black"
            className="dark:fill-white"
          />
        </svg>

        <svg
          width="62"
          height="59"
          viewBox="0 0 62 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[90%] bottom-[530px] hidden md:block"
        >
          <path
            d="M31.0001 0.70874L32.5049 30.6377L61.4339 22.8202L33.4348 33.4998L49.8092 58.5973L31.0001 35.2687L12.191 58.5973L28.5654 33.4998L0.566313 22.8202L29.4954 30.6377L31.0001 0.70874Z"
            fill="black"
            className="dark:fill-white"
          />
        </svg>

        <svg
          width="465"
          height="445"
          viewBox="0 0 465 445"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-[-1] bottom-[250px] hidden md:block"
        >
          <g filter="url(#filter0_f_101_92)">
            <ellipse
              cx="183.574"
              cy="262.051"
              rx="149.574"
              ry="78.9132"
              fill="#FDE598"
            />
          </g>
          <g filter="url(#filter1_f_101_92)">
            <ellipse
              cx="214.52"
              cy="182.622"
              rx="146.479"
              ry="78.9132"
              fill="#FF5555"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_101_92"
              x="-69.1546"
              y="79.9834"
              width="505.457"
              height="364.136"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="51.5773"
                result="effect1_foregroundBlur_101_92"
              />
            </filter>
            <filter
              id="filter1_f_101_92"
              x="-35.1138"
              y="0.55442"
              width="499.268"
              height="364.136"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="51.5773"
                result="effect1_foregroundBlur_101_92"
              />
            </filter>
          </defs>
        </svg>

        <div className="md:flex md:flex-row items-center justify-center absolute w-full hidden">
          <div className="text-white dark:text-black relative left-[50px] flex flex-col gap-8 items-start">
            <h1 className="font-bold text-5xl ">Ready To Get Started?</h1>
            <p className="text-lg font-thin ">
              Risus habitant leo egestas mauris diam eget morbi tempus
              vulputate.
            </p>
            <Button className="text-lg font-medium bg-white dark:bg-black text-black dark:text-white hover:bg-none rounded px-10 py-8">
              Download App{" "}
              <svg
                width="26"
                height="33"
                viewBox="0 0 26 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M21.5273 17.5307C21.4939 13.536 24.8032 11.5889 24.9573 11.5019C23.0815 8.77184 20.1742 8.39714 19.1492 8.37037C16.7041 8.11614 14.3393 9.82909 13.0933 9.82909C11.8271 9.82909 9.91117 8.39714 7.84121 8.43732C5.18165 8.47743 2.69631 10.0164 1.33641 12.3985C-1.4772 17.263 0.61963 24.4092 3.31934 28.3436C4.6658 30.2707 6.24014 32.4186 8.30346 32.3449C10.3198 32.2646 11.0768 31.0602 13.5086 31.0602C15.9203 31.0602 16.6303 32.3449 18.7339 32.2981C20.8977 32.2646 22.2643 30.3643 23.5639 28.4239C25.1248 26.2158 25.7478 24.0412 25.7746 23.9341C25.721 23.9006 21.5676 22.3149 21.5273 17.5307ZM17.5548 5.78089C18.6401 4.42259 19.3836 2.58252 19.176 0.708984C17.6084 0.77586 15.6389 1.79292 14.5134 3.11782C13.5153 4.28877 12.6176 6.20242 12.8521 8.00237C14.6072 8.12949 16.4227 7.11242 17.5548 5.78089Z"
                  fill="black"
                  className="dark:fill-white"
                />
              </svg>
            </Button>
          </div>
          <div>
            <Image src={phone} alt={""} />
          </div>
        </div>
        <svg
          width="1092"
          height="509"
          viewBox="0 0 1092 509"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto hidden md:block"
        >
          <g clip-path="url(#clip0_101_136)">
            <rect
              y="0.708984"
              width="1090"
              height="508"
              rx="8"
              fill="black"
              className="dark:fill-white"
            />
            <path
              d="M133.741 450.456C187.082 503.797 220.337 567.094 231.002 626.292C241.667 685.492 229.736 740.542 192.784 777.493C155.833 814.445 100.783 826.376 41.5826 815.711C-17.6151 805.046 -80.9116 771.791 -134.253 718.45C-187.594 665.109 -220.849 601.812 -231.514 542.614C-242.179 483.414 -230.248 428.364 -193.296 391.413C-156.345 354.461 -101.295 342.53 -42.0947 353.195C17.1031 363.86 80.3996 397.115 133.741 450.456Z"
              stroke="white"
              className="dark:stroke-black"
            />
            <path
              d="M165.741 418.456C219.082 471.797 252.337 535.094 263.002 594.292C273.667 653.492 261.736 708.542 224.784 745.493C187.833 782.445 132.783 794.376 73.5826 783.711C14.3849 773.046 -48.9116 739.791 -102.253 686.45C-155.594 633.109 -188.849 569.812 -199.514 510.614C-210.179 451.414 -198.248 396.364 -161.296 359.413C-124.345 322.461 -69.2946 310.53 -10.0947 321.195C49.1031 331.86 112.4 365.115 165.741 418.456Z"
              stroke="white"
              className="dark:stroke-black"
            />
            <path
              d="M197.741 386.456C251.082 439.797 284.337 503.094 295.002 562.292C305.667 621.492 293.736 676.542 256.784 713.493C219.833 750.445 164.783 762.376 105.583 751.711C46.3849 741.046 -16.9116 707.791 -70.2527 654.45C-123.594 601.109 -156.849 537.812 -167.514 478.614C-178.179 419.414 -166.248 364.364 -129.296 327.413C-92.3446 290.461 -37.2946 278.53 21.9053 289.195C81.1031 299.86 144.4 333.115 197.741 386.456Z"
              stroke="white"
              className="dark:stroke-black"
            />
            <path
              d="M1191.74 10.4564C1245.08 63.7975 1278.34 127.094 1289 186.292C1299.67 245.492 1287.74 300.542 1250.78 337.493C1213.83 374.445 1158.78 386.376 1099.58 375.711C1040.38 365.046 977.088 331.791 923.747 278.45C870.406 225.109 837.151 161.812 826.486 102.614C815.821 43.4145 827.752 -11.6355 864.704 -48.5871C901.655 -85.5386 956.705 -97.4698 1015.91 -86.8048C1075.1 -76.1403 1138.4 -42.8848 1191.74 10.4564Z"
              stroke="white"
              className="dark:stroke-black"
            />
            <path
              d="M1223.74 -21.5436C1277.08 31.7975 1310.34 95.094 1321 154.292C1331.67 213.492 1319.74 268.542 1282.78 305.493C1245.83 342.445 1190.78 354.376 1131.58 343.711C1072.38 333.046 1009.09 299.791 955.747 246.45C902.406 193.109 869.151 129.812 858.486 70.6144C847.821 11.4145 859.752 -43.6355 896.704 -80.5871C933.655 -117.539 988.705 -129.47 1047.91 -118.805C1107.1 -108.14 1170.4 -74.8848 1223.74 -21.5436Z"
              stroke="white"
              className="dark:stroke-black"
            />
            <path
              d="M1255.74 -53.5436C1309.08 -0.202534 1342.34 63.094 1353 122.292C1363.67 181.492 1351.74 236.542 1314.78 273.493C1277.83 310.445 1222.78 322.376 1163.58 311.711C1104.38 301.046 1041.09 267.791 987.747 214.45C934.406 161.109 901.151 97.8122 890.486 38.6144C879.821 -20.5855 891.752 -75.6355 928.704 -112.587C965.655 -149.539 1020.71 -161.47 1079.91 -150.805C1139.1 -140.14 1202.4 -106.885 1255.74 -53.5436Z"
              stroke="white"
              className="dark:stroke-black"
            />
            <g filter="url(#filter0_f_101_136)">
              <ellipse
                cx="140.33"
                cy="74.036"
                rx="140.33"
                ry="74.036"
                transform="matrix(0.767494 0.641056 0.641056 -0.767494 779.771 213.353)"
                fill="#FDE598"
              />
            </g>
            <g filter="url(#filter1_f_101_136)">
              <ellipse
                cx="137.426"
                cy="74.036"
                rx="137.426"
                ry="74.036"
                transform="matrix(0.767494 0.641056 0.641056 -0.767494 756.511 291.02)"
                fill="#FF5555"
              />
            </g>
            <path
              d="M681 34.709L682.505 64.6379L711.434 56.8204L683.435 67.5001L699.809 92.5975L681 69.269L662.191 92.5975L678.565 67.5001L650.566 56.8204L679.495 64.6379L681 34.709Z"
              fill="white"
              className="dark:fill-black"
            />
            <path
              d="M462.912 355.68L447.838 372.35L467.325 383.546L446.813 374.361L442.187 396.355L444.584 374.008L422.237 376.405L444.23 371.778L435.045 351.266L446.242 370.754L462.912 355.68Z"
              fill="white"
              className="dark:fill-black"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_101_136"
              x="714.055"
              y="36.9197"
              width="441.76"
              height="419.141"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="51.5773"
                result="effect1_foregroundBlur_101_136"
              />
            </filter>
            <filter
              id="filter1_f_101_136"
              x="690.603"
              y="114.296"
              width="437.687"
              height="416.001"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="51.5773"
                result="effect1_foregroundBlur_101_136"
              />
            </filter>
            <clipPath id="clip0_101_136">
              <rect
                y="0.708984"
                width="1090"
                height="508"
                rx="8"
                fill="white"
                className="dark:fill-black"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
}
