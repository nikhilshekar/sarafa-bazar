import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      <NavLink to={"/product?type=gold"}>
        <div className="flexCenter gap-x-1">Gold</div>
      </NavLink>
      <NavLink to={"/product?type=diamond"}>
        <div className="flexCenter gap-x-1">Diamond</div>
      </NavLink>
      <NavLink to={"/product?type=czcasting"}>
        <div className="flexCenter gap-x-1">Plain/CZCasting</div>
      </NavLink>
      <NavLink to={"/product?type=turkish"}>
        <div className="flexCenter gap-x-1">Turkish/Italian</div>
      </NavLink>
      <NavLink to={"/product?type=antique"}>
        <div className="flexCenter gap-x-1">Antique/Kundan</div>
      </NavLink>
      <NavLink to={"/product?type=stone"}>
        <div className="flexCenter gap-x-1">Stone</div>
      </NavLink>
      <NavLink to={"/product?type=platinum"}>
        <div className="flexCenter gap-x-1">Platinum</div>
      </NavLink>
      <NavLink to={"/product?type=silver"}>
        <div className="flexCenter gap-x-1">Silver</div>
      </NavLink>
      <NavLink to={"/product?type=gemstone"}>
        <div className="flexCenter gap-x-1">Gemstone</div>
      </NavLink>
      <NavLink to={"/comapnies"}>
        <div className="flexCenter gap-x-1">Sellers</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
