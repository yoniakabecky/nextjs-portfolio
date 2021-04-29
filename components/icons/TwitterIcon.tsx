import React, { ReactElement } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function TwitterIcon(props: Props): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.51009 20H8.43009C6.81845 19.9859 5.23012 19.6136 3.78009 18.91C3.51336 18.7847 3.29375 18.5773 3.1534 18.3182C3.01304 18.0591 2.95932 17.7619 3.00009 17.47C3.04444 17.1762 3.18048 16.9039 3.3888 16.692C3.59712 16.4801 3.86706 16.3394 4.16009 16.29C5.0587 16.1701 5.92318 15.8672 6.70009 15.4C5.35125 14.3454 4.31284 12.9456 3.69491 11.3488C3.07698 9.75206 2.90254 8.01786 3.19009 6.33002C3.22908 6.06267 3.34406 5.81216 3.52134 5.60828C3.69862 5.4044 3.93075 5.25575 4.19009 5.18002C4.44241 5.10078 4.71244 5.09739 4.96666 5.17028C5.22088 5.24317 5.4481 5.38912 5.62009 5.59002C6.20409 6.3558 6.93799 6.99458 7.777 7.46739C8.61601 7.94019 9.54255 8.2371 10.5001 8.34002C10.5458 7.16187 11.0521 6.04874 11.9101 5.24002C12.3385 4.82979 12.8443 4.50893 13.3979 4.29613C13.9516 4.08333 14.542 3.98284 15.1349 4.00052C15.7278 4.01821 16.3112 4.15371 16.8512 4.39913C17.3912 4.64455 17.8769 4.99499 18.2801 5.43002C18.3851 5.52289 18.5156 5.58207 18.6547 5.5999C18.7938 5.61773 18.935 5.59339 19.0601 5.53002C19.2985 5.41757 19.564 5.37524 19.8256 5.40796C20.0872 5.44069 20.3341 5.54713 20.5374 5.71487C20.7408 5.8826 20.8923 6.10471 20.9742 6.35528C21.0561 6.60585 21.0651 6.87454 21.0001 7.13002C20.7694 8.08014 20.3324 8.96781 19.7201 9.73002C19.5851 12.5748 18.331 15.2508 16.231 17.1746C14.1311 19.0985 11.3558 20.1141 8.51009 20ZM8.51009 18H8.59009C9.75276 18.04 10.9118 17.8488 12 17.4375C13.0882 17.0262 14.084 16.4029 14.9295 15.6039C15.7751 14.8049 16.4536 13.8459 16.9257 12.7827C17.3979 11.7195 17.6543 10.5731 17.6801 9.41002C17.6966 9.09127 17.828 8.7893 18.0501 8.56002C18.294 8.25127 18.502 7.91578 18.6701 7.56002C18.3098 7.56071 17.9535 7.48535 17.6244 7.33888C17.2952 7.19241 17.0007 6.97812 16.7601 6.71002C16.5287 6.48057 16.2538 6.2996 15.9516 6.17768C15.6494 6.05577 15.3259 5.99537 15.0001 6.00002C14.671 5.99151 14.3435 6.04808 14.0363 6.16649C13.7291 6.2849 13.4483 6.46282 13.2101 6.69002C12.8887 6.99502 12.653 7.37909 12.5266 7.80379C12.4003 8.22849 12.3877 8.67892 12.4901 9.11002L12.7501 10.25L11.5801 10.33C10.3812 10.4278 9.17535 10.2638 8.04611 9.84938C6.91686 9.43498 5.89118 8.78007 5.04009 7.93002C5.00359 9.24642 5.33289 10.5471 5.99139 11.6876C6.64988 12.828 7.61176 13.7635 8.77009 14.39L9.72009 14.93L9.09009 15.83C8.40878 16.7235 7.47528 17.3923 6.41009 17.75C7.0934 17.9213 7.79566 18.0053 8.50009 18H8.51009Z" />
    </svg>
  );
}