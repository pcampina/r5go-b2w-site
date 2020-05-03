import React from "react";

import MainHeader from "./MainHeader";
import FullBanner from "./FullBanner";
import Section from "./Section";

import AddToCartImage from "./assets/images/add-to-cart.svg";

function App() {
  return (
    <>
      <MainHeader />
      <FullBanner />

      <Section img={AddToCartImage} title="GO Scan">
        <p>
          Tecnologia de leitura de código de barras para compra de produtos
          disponibilizados nas lojas de conveniência para entrega no mesmo dia.
          Buscando atuar inclusive na compra reativa, ou seja, naquela compra
          que o cliente só lembra de comprar quando acaba ou quando ele tem
          desejo de consumir ou comprar algo que não tem em casa como, por
          exemplo, chocolates, café, folha A4. Qualquer produto cadastrado na
          base de dados com código de barras será fácil, prático e sem muito
          segredo para comprar. Depois lançado todos os produtos só decidir a
          quantidade e clicar em confirmar e go! No mesmo dia entregue na sua
          casa.
        </p>
      </Section>

      <Section img={AddToCartImage} title="GO Bot" reverse>
        <p>
          Chatbot para o atendimento ao consumidor com automação e inteligência
          artificial que interpreta o que o cliente digita ou diz sendo canal
          direto a qualquer hora para esclarecer dúvidas, dar informações e
          solucionar problemas com a compra e/ou pós venda.
        </p>
        <p>
          Foram produtos desenvolvidos na maratona de tecnologia (Mega Hack)
          para atender o Grupo B2W.
        </p>
      </Section>

      <Section img={AddToCartImage} title="O Que é GO Scan">
        <p>
          Tecnologia de leitura de código de barras para compra de produtos
          disponibilizados nas lojas de conveniência para entrega no mesmo dia.
          Buscando atuar inclusive na compra reativa, ou seja, naquela compra
          que o cliente só lembra de comprar quando acaba ou quando ele tem
          desejo de consumir ou comprar algo que não tem em casa como, por
          exemplo, chocolates, café, folha A4. Qualquer produto cadastrado na
          base de dados com código de barras será fácil, prático e sem muito
          segredo para comprar. Depois lançado todos os produtos só decidir a
          quantidade e clicar em confirmar e go! No mesmo dia entregue na sua
          casa.
        </p>
      </Section>

      <Section img={AddToCartImage} title="O Que é GO Bot" reverse>
        <p>
          Chatbot para o atendimento ao consumidor com automação e inteligência
          artificial que interpreta o que o cliente digita ou diz sendo canal
          direto a qualquer hora para esclarecer dúvidas, dar informações e
          solucionar problemas com a compra e/ou pós venda.
        </p>
      </Section>
    </>
  );
}

export default App;
