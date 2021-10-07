import "../Styles/Banner.css";
import logo1 from "../assets/logo1.png";
function Banner({children}) {
  const titel = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo1} alt="logo jungel" className="lmj-logo" />
      <h1 className="lmj-title ">{titel}</h1>
    </div>
  );
}
export default Banner;
