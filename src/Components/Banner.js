import react, { Fragment } from "react";
import Header from "./Header";
import Description from "./Description";
import Cart from './Cart'
function Banner() {
  return (
    <Fragment>
      <Header />
      <Description />
      <Cart />
    </Fragment>
  );
}
export default Banner;
