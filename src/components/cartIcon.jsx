import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
function CartIcon(props) {
  return (
    <Svg
      width={wp(20)}
      height={hp(5)}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.25 18.75c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm4.48-9.57l-2 8a.75.75 0 01-.73.57H8c-.36 0-.67-.26-.74-.62L5.37 5.25H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.36 0 .67.26.74.62l.43 2.38H20a.754.754 0 01.73.93zm-1.69.57H7.44l1.18 6.5h8.79l1.63-6.5z"
        fill="#000"
      />
      <Circle cx={20} cy={6} r={3} fill="#ED5E5E" />
    </Svg>
  );
}

export default CartIcon;
