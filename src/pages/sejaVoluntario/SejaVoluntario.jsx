import S from "./sejaVoluntario.module.scss";
import Sucesso from "../../assets/img/check.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SejaVoluntario() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      navigate("/");
    }, 3000)
  }

  return (
    <main>
      <section className={S.voluntario}>
        <div className={S.voluntario_head}>
          <h2>Seja Voluntário</h2>
          <p className={S.voluntario_head_text}>
            Junte-se a nós e faça a diferença na vida de pessoas que precisam
          </p>
        </div>
        <div className={S.voluntario_cards}>
          <article className={S.voluntario_card}>
            <h3>Impacto Direto</h3>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
          </article>
          <article className={S.voluntario_card}>
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </article>
          <article className={S.voluntario_card}>
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </article>
        </div>
      </section>

      <section className={S.formulario}>
        {sent && (
          <section className={S.sucessScream}>
            <img src={Sucesso} alt="" />
            <p>
              Cadastro realizado com sucesso. Entraremos em contato para mais
              informações.
            </p>
          </section>
        )}

        {!sent && (
          <>
            <article className={S.formulario_card}>
              <h3>Inscrição para Voluntários</h3>

              <form onSubmit={handleSubmit}>
                <div className={S.formulario_secao}>
                  <h4>Dados pessoais</h4>

                  <div className={S.formulario_secao_inputRow}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu Nome *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Seu Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    className={S.fullWidth}
                    placeholder="Seu Telefone *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={S.formulario_secao}>
                  <h4>Mensagem Adicional</h4>
                  <textarea
                    name="message"
                    placeholder="Conte-nos porque você quer ser voluntario..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                  ></textarea>
                </div>

                <div className={S.button_container}>
                  <p className={S.button_container_text}>
                    Entraremos em contato para mais informações
                  </p>
                  <button type="submit">Enviar Inscrição</button>
                </div>
              </form>
            </article>
          </>
        )}
      </section>
    </main>
  );
}
