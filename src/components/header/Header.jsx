import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import S from "./header.module.scss";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
  <header className={S.header}>
      <div className={S.top}>
        <div className={S.boxLogo}>
          <img src={Logo} alt="logo" />
          <Link to="/">Médicos & Dentistas</Link>
        </div>

        <div className={S.rightArea}>
          <button className={S.hamburger} onClick={() => setOpen(!open)}>
            {open ? '✕' : '☰'}
          </button>

          <nav className={`${S.menu} ${open ? S.open : ""}`}>
            <Link to="/">Home</Link>
            <Link className={S.primaryBtn} to="/voluntario">
              Seja Voluntário
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
