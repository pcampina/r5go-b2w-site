import React from 'react';

import './style.css';

function MissionVision({ id }) {
  return (
    <section className="section" id={id}>
      <div className="container mission-vision">
        <div className="content-box">
          <div className="content">
            <h3>Missão</h3>

            <p>
              Nascemos com intuito de criar soluções tecnológicas e disruptivas para multinacionais do segmento do e-commerce para que aprimorem os gaps de processos que essas instituições têm com seus clientes.
              Fornecemos nossas soluções por meio do modelo SAAS, permitindo assim o uso das soluções desenvolvidas de forma customizáveis.
            </p>
          </div>

          <div className="content">
            <h3>Visão</h3>

            <p>Ser referência no segmento de soluções de tecnológicas para multinacionais do segmento do e-commerce resolvendo os gaps de processos que essas instituições têm na atuação com seus clientes.</p>
            <p>Upgrade das soluções para versão Beta.</p>
            <p>Inclusões de inteligência artificial e big data com objetivo de ser assertivo na forma de atuar com o público reativo (são o público que compra de última hora, já que compra no ato da finalização do produto que consumiram) que nossos clientes atendem. Essas inclusões nos permite traçar um perfil previsível de compra desse público para que sejam avisados antes quando seus produtos estiverem para acabar e assim comprarem antes de finalizar aumentando a eficiência da compra, bem como facilitando a logística de entrega (não ter falta de estoque desses produtos consumidos nas lojas de conveniência).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
