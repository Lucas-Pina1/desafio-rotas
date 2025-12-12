import S from "./sejaVoluntario.module.scss";

export default function SejaVoluntario() {
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
        <article className={S.formulario_card}>
          <h3>Inscrição para Voluntários</h3>

          <form>
            <div className={S.formulario_secao}>
              <h4>Dados pessoais</h4>

              <div className={S.formulario_secao_inputRow}>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome *"
                  value=""
                  onChange=""
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email *"
                  value=""
                  onChange=""
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                className={S.fullWidth}
                placeholder="Seu Telefone *"
                value=""
                onChange=""
                required
              />
            </div>

            <div className={S.formulario_secao}>
              <h4>Mensagem Adicional</h4>
              <textarea
                name="message"
                placeholder="Conte-nos porque você quer ser voluntario..."
                value=""
                onChange=""
                rows="5"
              ></textarea>
            </div>

            <div className={S.button_container}>
              <p className={S.button_container_text}>Entraremos em contato para mais informações</p>
              <button type="submit">Enviar Inscrição</button>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
}
