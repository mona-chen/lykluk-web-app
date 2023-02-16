import Image from 'next/image'
import env from '../../env'

export const mobileIcons = {
  like: (
    <svg
      width="31"
      height="27"
      viewBox="0 0 31 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M27.6207 2.50521C24.2167 -0.966199 20.2749 0.497872 17.8342 2.04614C16.455 2.92098 14.5446 2.92098 13.1655 2.04615C10.7247 0.49789 6.78296 -0.966161 3.37894 2.50521C-4.70171 10.7457 9.1559 26.625 15.4999 26.625C21.8438 26.625 35.7014 10.7457 27.6207 2.50521Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  dislike: (
    <svg
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.75"
        d="M27.28 2.8615C24.8791 0.357216 21.4279 -0.581892 18.1267 0.357216L14.0752 10.2178L18.2767 11.3135C19.027 11.47 19.6272 12.4091 19.3271 13.1917C19.3271 13.3482 19.3271 13.3482 19.1771 13.5047L16.176 19.7654C16.0259 20.3915 15.5758 20.7045 14.9756 20.7045C14.6754 20.7045 14.5254 20.7045 14.3753 20.548C13.6251 20.235 13.325 19.2959 13.6251 18.5133L15.7258 13.9743L11.6744 12.8787C10.774 12.5656 10.3239 11.783 10.4739 11.0004C10.4739 10.8439 10.4739 10.8439 10.4739 10.8439L14.2253 1.76588C10.0238 -1.36448 4.17168 0.0441799 1.47071 4.5832C-0.930155 8.49615 -0.329939 13.5047 2.82119 16.7916L14.0752 28.5304C14.6754 29.1565 15.5758 29.1565 16.176 28.5304L27.43 16.7916C30.8813 12.8786 30.8813 6.77445 27.28 2.8615Z"
        fill="white"
      />
    </svg>
  ),
  comment: (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9727 19.9012C30.7972 14.4911 28.1083 8.07366 25.0175 4.98282C19.4851 -0.549611 10.5152 -0.549611 4.98282 4.98282C-0.549611 10.5152 -0.549611 19.4851 4.98282 25.0175C8.20515 28.2398 14.5128 30.8192 19.9032 27.976C20.4571 27.6838 20.7343 27.5376 20.8697 27.4831C21.4417 27.2531 21.7426 27.218 22.3521 27.3105C22.4964 27.3325 22.6853 27.3814 23.0629 27.4793C24.1958 27.7729 24.7625 27.9198 25.1754 27.9049C26.6602 27.8514 27.8514 26.6602 27.9049 25.1754C27.9198 24.7625 27.773 24.196 27.4793 23.0631C27.3815 22.6855 27.3325 22.4966 27.3106 22.3531C27.2178 21.7436 27.2512 21.4514 27.4791 20.8786C27.5328 20.7437 27.6794 20.4629 27.9727 19.9012ZM10.5489 14.7989C10.5489 15.5813 9.91461 16.2155 9.1322 16.2155C8.3498 16.2155 7.71554 15.5813 7.71554 14.7989C7.71554 14.0165 8.3498 13.3822 9.1322 13.3822C9.91461 13.3822 10.5489 14.0165 10.5489 14.7989ZM16.2155 14.7989C16.2155 15.5813 15.5813 16.2155 14.7989 16.2155C14.0165 16.2155 13.3822 15.5813 13.3822 14.7989C13.3822 14.0165 14.0165 13.3822 14.7989 13.3822C15.5813 13.3822 16.2155 14.0165 16.2155 14.7989ZM20.4655 16.2155C21.2479 16.2155 21.8822 15.5813 21.8822 14.7989C21.8822 14.0165 21.2479 13.3822 20.4655 13.3822C19.6831 13.3822 19.0489 14.0165 19.0489 14.7989C19.0489 15.5813 19.6831 16.2155 20.4655 16.2155Z"
        fill="white"
        fillOpacity="0.75"
      />
    </svg>
  ),
  share: (
    <svg
      width="500"
      height="500"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M17.875 19.7024C11.5583 19.7024 6.18888 22.9515 4.125 27.5V26.1154C4.125 17.8434 10.2039 11.0963 17.875 10.5903V4.125L28.875 15.125L17.875 26.125V19.7079"
          fill="white"
          fillOpacity="0.75"
        />
      </g>
    </svg>
  ),
}

export const Sound = (props) => {
  return (
    <div className="">
      <svg
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3538_8856)">
          <path
            d="M34.8262 4.05077L31.6387 5.11327V8.63076C31.6387 9.4937 31.0091 10.1933 30.2324 10.1933C29.4558 10.1933 28.8262 9.4937 28.8262 8.63076C28.8262 7.76781 29.4558 7.06826 30.2324 7.06826C30.549 7.06826 30.8411 7.18449 31.0762 7.38064V3.42601C31.0762 2.91442 31.3814 2.46481 31.8241 2.32426L32.5899 2.08115L34.3079 1.49382C34.8449 1.3102 35.3887 1.75641 35.3887 2.38076V7.38076C35.3887 8.2437 34.7591 8.94326 33.9824 8.94326C33.2058 8.94326 32.5762 8.2437 32.5762 7.38076C32.5762 6.51781 33.2058 5.81826 33.9824 5.81826C34.299 5.81826 34.5911 5.93449 34.8262 6.13064V4.05077Z"
            fill="#8E00FE"
            fillOpacity="0.09"
          />
        </g>
        <g clipPath="url(#clip1_3538_8856)">
          <path
            d="M2.86743 27.5886L6.21567 27.8685L7.60211 24.6358C7.94224 23.8427 8.79661 23.4479 9.51038 23.7541C10.2242 24.0602 10.5271 24.9513 10.1869 25.7443C9.84678 26.5374 8.99242 26.9322 8.27864 26.6261C7.9877 26.5013 7.76502 26.2793 7.62633 26.0064L6.06759 29.6409C5.86594 30.1111 5.4082 30.404 4.94593 30.3586L4.14629 30.2802L2.33592 30.1429C1.76996 30.0999 1.44613 29.4755 1.69222 28.9017L3.663 24.3065C4.00314 23.5134 4.8575 23.1187 5.57127 23.4248C6.28505 23.7309 6.58795 24.622 6.24781 25.4151C5.90767 26.2081 5.05331 26.6029 4.33954 26.2968C4.04859 26.172 3.82591 25.95 3.68722 25.6771L2.86743 27.5886Z"
            fill="#8E00FE"
            fillOpacity="0.09"
          />
        </g>
        <g clipPath="url(#clip2_3538_8856)">
          <path
            d="M18.4729 54.9573L21.8211 55.2372L23.2076 52.0044C23.5477 51.2113 24.4021 50.8166 25.1159 51.1227C25.8296 51.4288 26.1325 52.3199 25.7924 53.113C25.4523 53.9061 24.5979 54.3008 23.8841 53.9947C23.5932 53.8699 23.3705 53.648 23.2318 53.3751L21.6731 57.0095C21.4714 57.4797 21.0137 57.7726 20.5514 57.7273L19.7518 57.6489L17.9414 57.5115C17.3754 57.4686 17.0516 56.8442 17.2977 56.2704L19.2685 51.6751C19.6086 50.8821 20.463 50.4873 21.1767 50.7934C21.8905 51.0995 22.1934 51.9906 21.8533 52.7837C21.5131 53.5768 20.6588 53.9716 19.945 53.6654C19.6541 53.5407 19.4314 53.3187 19.2927 53.0458L18.4729 54.9573Z"
            fill="#8E00FE"
            fillOpacity="0.09"
          />
        </g>
        <g clipPath="url(#clip3_3538_8856)">
          <path
            d="M51.4729 48.9573L54.8211 49.2372L56.2076 46.0044C56.5477 45.2113 57.4021 44.8166 58.1159 45.1227C58.8296 45.4288 59.1325 46.3199 58.7924 47.113C58.4523 47.9061 57.5979 48.3008 56.8841 47.9947C56.5932 47.8699 56.3705 47.648 56.2318 47.3751L54.6731 51.0095C54.4714 51.4797 54.0137 51.7726 53.5514 51.7273L52.7518 51.6489L50.9414 51.5115C50.3754 51.4686 50.0516 50.8442 50.2977 50.2704L52.2685 45.6751C52.6086 44.8821 53.463 44.4873 54.1767 44.7934C54.8905 45.0995 55.1934 45.9906 54.8533 46.7837C54.5131 47.5768 53.6588 47.9716 52.945 47.6654C52.6541 47.5407 52.4314 47.3187 52.2927 47.0458L51.4729 48.9573Z"
            fill="#8E00FE"
            fillOpacity="0.09"
          />
        </g>
        <circle cx="32" cy="31" r="17" fill="#545454" fillOpacity="0.55" />
        <circle cx="32" cy="31" r="12" fill="white" />
        <defs>
          <clipPath id="clip0_3538_8856">
            <rect
              width="9"
              height="10"
              fill="white"
              transform="translate(27.6074 0.931641)"
            />
          </clipPath>
          <clipPath id="clip1_3538_8856">
            <rect
              width="9"
              height="10"
              fill="white"
              transform="translate(8.27148 33.3008) rotate(-156.787)"
            />
          </clipPath>
          <clipPath id="clip2_3538_8856">
            <rect
              width="9"
              height="10"
              fill="white"
              transform="translate(23.877 60.6694) rotate(-156.787)"
            />
          </clipPath>
          <clipPath id="clip3_3538_8856">
            <rect
              width="9"
              height="10"
              fill="white"
              transform="translate(56.877 54.6694) rotate(-156.787)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}