import S from "./footer.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Email from "../../assets/email.svg";
import Telefone from "../../assets/telefone.svg";
import Localizacao from "../../assets/localizacao.svg";

export default function Footer() {
  return (
    <footer>
      <section className={S.boxFooter}>
        <section className={S.boxFooter_boxMarca}>
          <div className={S.boxFooter_logo}>
            <img
              src={Logo}
              alt="logo do site, coração branco em um fundo verde"
            />
            <Link to="/">Médicos & Dentistas</Link>
          </div>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </section>
        
        <section className={S.boxFooter_contato}>
          <h3>Contato</h3>
          <ul className={S.boxFooter_contato_lista}>
            <li className={S.boxFooter_contato_lista__item}>
              <img src={Email} alt="icone de um email" />
              <p>contato@medico-dentista.org</p>
            </li>
            <li className={S.boxFooter_contato_lista__item}>
              <img src={Telefone} alt="icone de um telefone" />
              <p>(11) 3000-0000</p>
            </li>
            <li className={S.boxFooter_contato_lista__item}>
              <img src={Localizacao} alt="icone de uma ponto de localização" />
              <p>São Paulo, Brasil</p>
            </li>
          </ul>
        </section>
        <section className={S.boxFooter_contato}>
          <h3>Redes Sociais</h3>
          <ul className={S.boxFooter_contato_lista}>
            <li className={S.boxFooter_contato_lista__item}>
              <p>Facebook</p>
            </li>
            <li className={S.boxFooter_contato_lista__item}>
              <p>Instagram</p>
            </li>
            <li className={S.boxFooter_contato_lista__item}>
              <p>LinkedIn</p>
            </li>
          </ul>
        </section>
      </section>
      <section className={S.copywrite}>
        <p>
          © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
          reservados.
        </p>
      </section>
    </footer>
  );
}
