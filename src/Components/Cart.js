import { Fragment } from "react";

function Cart() {
  const monstera = 8;
  const lierre = 10;
  const bouquet = 15;
  return (
    <Fragment>
      <ul>
        <li>
          <p>monstera {monstera}$</p>
        </li>

        <li>
          <p>lierre {lierre}$</p>
        </li>

        <li>
          <p>bouquet {bouquet}$</p>
        </li>
      </ul>
      <p>Total : {monstera + lierre + bouquet} $</p>
    </Fragment>
  );
}

export default Cart;
