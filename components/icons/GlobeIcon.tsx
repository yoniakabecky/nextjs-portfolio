import React, { ReactElement } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function GlobeIcon(props: Props): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2ZM12 4C12.6026 4.00394 13.2029 4.07436 13.79 4.21C13.6162 4.60239 13.3483 4.94587 13.01 5.21C12.79 5.38 12.55 5.52 12.31 5.67C11.5502 6.04408 10.9096 6.62234 10.46 7.34C9.96744 8.36657 9.75361 9.50466 9.84 10.64C9.84 12 9.84 12.8 8.89 13.51C7.52 14.58 5.43 13.98 4.13 13.44C4.04502 12.9647 4.00152 12.4829 4 12C4 9.87827 4.84286 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4V4ZM5 15.8C5.65344 15.9699 6.32492 16.0605 7 16.07C8.1296 16.1011 9.23641 15.7486 10.14 15.07C11.85 13.73 11.85 12.01 11.85 10.63C11.7742 9.83128 11.9014 9.02635 12.22 8.29C12.5094 7.89592 12.895 7.58261 13.34 7.38C13.6579 7.1942 13.9651 6.99054 14.26 6.77C14.8815 6.27912 15.364 5.63455 15.66 4.9C17.067 5.61986 18.2292 6.74032 19 8.12C17.57 8.32 15.54 8.79 15.14 10.65C15.0497 11.0944 15.0028 11.5465 15 12C15.0324 12.5069 14.9324 13.0134 14.71 13.47L14.61 13.64C13.96 14.72 13.23 15.95 14.22 17.64C14.34 17.85 14.47 18.05 14.6 18.25C14.8662 18.5574 15.0456 18.9302 15.12 19.33C14.1365 19.7635 13.0748 19.9915 12 20C10.5636 19.9928 9.15568 19.5991 7.92398 18.86C6.69228 18.121 5.68227 17.064 5 15.8V15.8ZM16.93 18.32C16.757 17.9207 16.546 17.5389 16.3 17.18C16.19 17.02 16.08 16.86 15.98 16.69C15.59 16.01 15.73 15.69 16.36 14.69L16.46 14.52C16.8519 13.7721 17.0383 12.9335 17 12.09C16.999 11.7546 17.0291 11.4198 17.09 11.09C17.25 10.36 18.8 10.16 19.76 10.09C20.148 11.5985 20.0837 13.1878 19.5752 14.6601C19.0667 16.1324 18.1363 17.4225 16.9 18.37L16.93 18.32Z" />
    </svg>
  );
}