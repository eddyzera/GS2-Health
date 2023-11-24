import React from 'react';
import './style.css';
import Menu from '../../components/Menu/Menu';

import diseases from "../../assets/images/diseases.png"
import covid from "../../assets/images/covid.png"
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';

export const CommunicableDiseases = () => {
  return (
    <section className="communicable-diseases-container">
      <Menu />
      <h1>Combate a doenças transmissívies</h1>
      <section className="communicable-diseases-intro">
        <div className="intro-description">

          <span>
            As doenças transmissíveis representam uma constante ameaça à saúde global, variando desde infecções respiratórias até enfermidades transmitidas por <strong>vetores</strong>. Entre as causas preponderantes, a falta de acesso a cuidados de saúde desponta como um desafio significativo. Comunidades carentes muitas vezes enfrentam barreiras no acesso a serviços médicos, aumentando a prevalência de doenças.
          </span>

          <span>
            Uma estratégia efetiva para combater essas doenças requer ações preventivas e corretivas. Investir em educação em saúde é crucial, capacitando as comunidades a adotar práticas de higiene e promovendo a conscientização sobre a importância da vacinação. No caso de doenças transmitidas por vetores, como a malária, medidas de controle de vetores, como mosquitos, e o uso de redes mosquiteiras são fundamentais para interromper a transmissão.
          </span>
          <span className="italic">
            <i>Vetores: enfermidades transmitidas por vetores são doenças causadas por microrganismos, como vírus e parasitas, que são transmitidos de uma pessoa para outra por meio de organismos que carregam e transmitem esses agentes infecciosos. Geralmente, os vetores mais comuns são insetos, como mosquitos, carrapatos e pulgas.</i>
          </span>
        </div>
        <div className="intro-img">
          <img src={diseases} alt="Ilustração de um pesquisador com remedios e virus ao redor" />
        </div>
      </section>
      <div className="communicable-diseases-highlight-info">
        <div className="malaria">
          <h3>400 mil pessoas</h3>
          <span>morrem por ano por Malária</span>
        </div>
        <div className="covid">
          <h3>5 milhões de pessoas</h3>
          <span>morreram de COVID-19</span>
        </div>
        <div className="tuberculosis">
          <h3>1,5 millhão de pessoas</h3>
          <span>morrem por ano por Tuberculose</span>

        </div>
      </div>
      <section className="communicable-diseases-content">
        <div className="content-img">
          <img src={covid} alt="Ilustração de uma criança com mascara" />
        </div>
        <div className="content-description">
          <span>
            A pandemia de COVID-19 destacou de maneira inequívoca a importância do combate a doenças transmissíveis e a necessidade crucial da vacinação. Enquanto esforços globais foram direcionados para conter a propagação do coronavírus, enfrentamos um desafio adicional - o movimento antivacina.
          </span>
          <span>
            A COVID-19, causada pelo vírus SARS-CoV-2, evidenciou como a rápida disseminação de uma doença pode impactar sociedades inteiras. A resposta a essa pandemia foi moldada pela pesquisa científica ágil e pela produção de vacinas eficazes em tempo recorde. No entanto, o movimento antivacina tem desafiado esses avanços, disseminando desinformação que ameaça minar a confiança na imunização.
          </span>
          <span>

            A vacinação desempenha um papel crucial não apenas na proteção individual, mas na criação de barreiras coletivas contra a propagação de doenças. No contexto da COVID-19, as vacinas têm demonstrado ser uma ferramenta eficaz na prevenção de casos graves e na redução da transmissão do vírus.
          </span>
        </div>
      </section>
      <footer className="communicable-diseases-footer">
        <div className="footer-description">
          <span>
          O movimento antivacina, por outro lado, baseia-se frequentemente em informações infundadas e mitos que questionam a segurança e eficácia das vacinas. Abordar essa hesitação exige uma abordagem multifacetada, envolvendo educação pública, divulgação de informações baseadas em evidências e promoção do diálogo aberto entre profissionais de saúde e comunidades.
          </span>
          <span>
          Além da COVID-19, outras doenças transmissíveis continuam a representar ameaças significativas. Reforçar a importância da vacinação não apenas para a COVID-19, mas também para doenças como sarampo, poliomielite e influenza, é vital. Essas vacinas não apenas protegem os indivíduos, mas também contribuem para a construção de uma sociedade mais saudável e resistente.
          </span>
        </div>
      </footer>
    </section>
  )
}