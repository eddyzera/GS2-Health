import React from 'react';
import './style.css';
import Menu from '../../components/components/Menu';

import banner from '../../assets/images/banner_top.jpg'
import intro from '../../assets/images/intro.jpg'
import criancas from '../../assets/images/criancas.jpg'
import africa from '../../assets/images/africa.jpg'
import sulasia from '../../assets/images/sul-asia.jpg'
import latina from '../../assets/images/latina.jpg'
import sudesteasia from '../../assets/images/sudeste-asia.jpg'
import orientemedio from '../../assets/images/oriente-medio.jpg'

function App() {
    return(
      <>
        <Menu/>
        <div className="container class-body">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="image-text-container d-flex align-items-center">
                <img src={banner} className="img-fluid" alt="mão de um bebê"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="jumbotron text-center">
                <h1 className="display-4">Desvendando a Mortalidade Infantil:</h1>
                <p className="lead">Neste espaço, mergulharemos nas causas e prevenções. Cada linha revela uma parte crucial de um quebra-cabeça global. Sua curiosidade é a chave para desbloquear um entendimento mais profundo.</p>
              </div>
            </div>
          </div>

          <div className="welcome-section">
            <h1>Bem-Vindo à Jornada pela Saúde Infantil: Reduzindo a Mortalidade para um Futuro Promissor</h1>
            <p>Seja bem-vindo a este espaço dedicado à conscientização e ação na busca por um futuro onde cada criança tenha a oportunidade de prosperar. A mortalidade infantil persiste como um desafio global, mas através da compreensão, colaboração e ação, podemos transformar essa realidade.</p>
          </div>

          <div className="row feature-section">

            <div className="col-md-6 feature-content">
              <h2>O Desafio da Mortalidade Infantil:</h2>
              <p>A perda de vidas precoces de crianças é um obstáculo que transcende fronteiras, afetando comunidades em todos os cantos do mundo. No entanto, é uma barreira que podemos superar com esforços coordenados e estratégias eficazes.</p>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          
              <h2>Nossa Missão:</h2>
              <p>Este espaço é mais do que uma página informativa; é um convite à ação. Exploraremos as causas da mortalidade infantil, as estratégias comprovadas para prevenção e histórias de comunidades que transformaram desafios em triunfos.</p>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          
              <h2>Seu Papel na Transformação:</h2>
              <p>Você é parte fundamental dessa jornada. Ao se informar, compartilhar conhecimentos e contribuir com iniciativas, você desempenha um papel vital na criação de um ambiente onde cada criança possa crescer saudável e plena.</p>
            </div>

            <div className="col-md-6 feature-image">
              <img src={intro} className="img-fluid" alt="irmãos crianças"/>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2><strong>Redução da Mortalidade Infantil: Um Guia Informativo</strong></h2>
                <br/>
                <h3>Visão Geral:</h3>
                <p>A mortalidade infantil, um desafio global, reflete não apenas a fragilidade da saúde infantil, mas também a complexidade de fatores que contribuem para essa realidade. Estamos diante de um panorama onde milhões de crianças enfrentam ameaças que vão desde doenças infecciosas evitáveis até complicações no parto e desnutrição. Este espaço é dedicado a desvendar essas causas, explorar estratégias eficazes de prevenção e compartilhar narrativas que ilustram tanto os obstáculos quanto os triunfos. Cada dado apresentado é um convite à reflexão sobre o papel que todos nós desempenhamos na construção de um mundo onde a mortalidade infantil seja uma preocupação do passado. Junte-se a nós nesta jornada, onde conhecimento e ação se entrelaçam para moldar um futuro mais saudável e promissor para as crianças em todo o mundo.</p>

                <h3>Por Que Isso Importa:</h3>
          
                <p> A mortalidade infantil transcende as estatísticas e se manifesta como um reflexo direto da qualidade de vida de comunidades ao redor do mundo. Cada criança perdida representa não apenas uma estatística, mas um futuro interrompido e potencial não realizado. Compreender a importância desse desafio é essencial para mobilizar esforços eficazes na sua redução.</p>
          
                <h3>5 Tópicos para Compreender a Mortalidade Infantil:</h3>
                <ol>
                  <li><strong>Impacto nas Comunidades:</strong></li>
                    <ul>
                        <li><strong>Econômico:</strong> A perda de vidas infantis resulta em uma diminuição da força de trabalho futura e coloca pressão adicional nos sistemas de saúde e assistência social.</li>
                        <li><strong>Social:</strong> Afeta o tecido social das comunidades, gerando tristeza, desespero e interrompendo o ciclo de desenvolvimento.</li>
                    </ul>
                  <li><strong>Indicador de Qualidade de Vida:</strong></li>
                    <ul>
                        <li><strong>Saúde Materna:</strong> A mortalidade infantil muitas vezes está ligada à saúde materna precária, destacando a necessidade de melhorias nos cuidados pré-natais e durante o parto.</li>
                        <li><strong>Acesso a Serviços de Saúde:</strong> É um indicativo direto do acesso limitado a serviços de saúde de qualidade, incluindo vacinação, cuidados pediátricos e tratamento de doenças.</li>
                    </ul>
                  <li><strong>Desafios Sistêmicos:</strong></li>
                    <ul>
                        <li><strong>Desigualdades Regionais:</strong> A disparidade nas taxas de mortalidade infantil entre regiões destaca as desigualdades sistêmicas em acesso a recursos e cuidados médicos.</li>
                        <li><strong>Ciclo Intergeracional:</strong> A mortalidade infantil pode perpetuar um ciclo de pobreza e desvantagens, afetando gerações futuras.</li>
                    </ul>
                  <li><strong>Potencial para Mudança:</strong></li>
                    <ul>
                        <li><strong>Indicador de Progresso:</strong>Reduzir a mortalidade infantil é um indicador claro de progresso nas condições de saúde e bem-estar em uma comunidade.</li>
                        <li><strong>Investimento no Futuro:</strong> Investir na saúde infantil é investir no futuro, pois crianças saudáveis contribuem para sociedades mais resilientes e prósperas.</li>
                    </ul>
                  <li><strong>Compromisso Global:</strong></li>
                    <ul>
                        <li><strong>Metas de Desenvolvimento Sustentável:</strong> A comunidade global reconhece a redução da mortalidade infantil como uma meta chave nos Objetivos de Desenvolvimento Sustentável.</li>
                    </ul>
                </ol>
                <p>Compreender por que a mortalidade infantil importa vai além das estatísticas, envolvendo uma análise profunda das dinâmicas sociais, econômicas e de saúde que moldam o presente e o futuro das comunidades. Esta compreensão é o primeiro passo vital para a criação de estratégias eficazes que levem a um mundo onde cada criança tenha a chance de florescer.</p>
          
                <h3>Estatísticas Atuais:</h3>
                <ul>
                  <li><strong>Dados Globais:</strong> Em 2022, estima-se que cerca de 5,4 milhões de crianças menores de 5 anos morreram em todo o mundo.</li>
                    <ul>
                        <li><strong>No Brasil:</strong> Até o início de 2022, o Brasil testemunhou melhorias significativas em suas taxas de mortalidade infantil, refletindo avanços nos cuidados de saúde materno infantil ao longo das últimas décadas. Com uma taxa média de 11 a 12 mortes por 1.000 nascidos vivos, o país evidenciou um compromisso em fornecer condições adequadas para o desenvolvimento saudável de seus cidadãos mais jovens. Essas estatísticas, baseadas em dados do Instituto Brasileiro de Geografia e Estatística (IBGE) e do Ministério da Saúde, indicam progressos notáveis. No entanto, é importante destacar que as taxas de mortalidade infantil variam entre diferentes regiões do país, refletindo disparidades socioeconômicas e desafios persistentes de acesso a serviços de saúde.</li>
                    </ul>
                  <li><strong>Desigualdades Regionais:</strong> As taxas de mortalidade infantil variam significativamente entre regiões, refletindo disparidades socioeconômicas e desafios persistentes de acesso a serviços de saúde. Destacando a necessidade de abordagens específicas para cada contexto.</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="image-container d-flex justify-content-center">
                          <img src={criancas} className="img-fluid" alt="crianças desenhada"/>
                      </div>
                  </div>
              </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2><strong>Soluções Integradas para Mortalidade Infantil: Abordagens Convencionais e Tecnológicas por Região</strong></h2>
                <br/><br/>
              </div>
            </div>
          
            <div className="row solution-div">
              <div className="col-md-6 order-md-1 blue-bg-1">
                <h2 className="text-center">África</h2>
                <br/><br/>
                <ul>
                    <h3>Desafios:</h3>
                    <li>Elevadas taxas de mortalidade infantil devido a doenças infecciosas, desnutrição e falta de acesso a serviços de saúde.</li>
                    <br /><br /><br /><br />
                    <h3>Soluções Tradicionais:</h3>
                    <li><strong>Acesso a Água Potável e Saneamento:</strong> Investir em infraestrutura para garantir acesso a água potável e instalações sanitárias.</li>
                    <li><strong>Programas de Vacinação:</strong> Implementar campanhas de vacinação em larga escala.</li>
                    <br /><br /><br /><br />
                    <h3>Soluções Tecnológicas:</h3>
                    <li><strong>Telemedicina para Regiões Remotas:</strong> Facilitar o acesso a cuidados médicos através de consultas virtuais.</li>
                    <li><strong>Aplicativos de Educação em Saúde:</strong> Fornecer informações sobre saúde materno infantil diretamente para comunidades remotas.</li>
                </ul>
              </div>
              <div className="col-md-6 order-md-2 image-side blue-bg-1">
                <img src={africa} className="img-fluid" alt="criança africana"/>
              </div>
          </div>
          
            <div className="row solution-div">
              <div className="col-md-6 order-md-2 text-side blue-bg-2">
                <h2 className="text-center">Sul da Ásia</h2>
                <br/><br/>
                <ul>
                    <h3>Desafios:</h3>
                    <li>Altas taxas de mortalidade infantil relacionadas a complicações no parto, desnutrição e falta de cuidados neonatais.</li>
                    <br/><br/><br/><br/><br/><br/>
                    <h3>Soluções Tradicionais:</h3>
                    <li><strong>Melhoria da Nutrição Materna e Infantil:</strong>  Implementar programas de educação nutricional e fornecer suplementos alimentares.</li>
                    <li><strong>Cuidados Neonatais Intensivos:</strong> Estabelecer unidades especializadas para cuidados neonatais.</li>
                    <br/><br/><br/><br/><br/><br/>
                    <h3>Soluções Tecnológicas:</h3>
                    <li><strong>Aplicativos de Rastreamento Pré-natal:</strong> Facilitar o monitoramento remoto da gravidez.</li>
                    <li><strong>Sistemas de Informação em Saúde:</strong> Melhorar o compartilhamento de informações entre profissionais de saúde.</li>
                </ul>
              </div>
              <div className="col-md-6 order-md-1 image-side blue-bg-2">
                <img src={sulasia} className="img-fluid" alt="criança asiatica" />
              </div>
            </div>

            <div className="row solution-div">
                <div className="col-md-6 order-md-1 text-side blue-bg-3">
                  <h2 className="text-center">América Latina</h2>
                  <br/><br/>
                  <ul>
                    <h3>Desafios:</h3>
                    <li>Desigualdades regionais nas taxas de mortalidade infantil e acesso variável a serviços de saúde.</li>
                    <br /><br /><br /><br /><br /><br />
                    <h3>Soluções Tradicionais:</h3>
                    <li><strong>Acesso Universal à Saúde:</strong> Fortalecer sistemas de saúde para proporcionar acesso igualitário a serviços médicos de qualidade.</li>
                    <li><strong>Educação Materna:</strong> Implementar programas de educação para gestantes e mães sobre cuidados infantis.</li>
                    <br /><br /><br /><br /><br /><br />
                    <h3>Soluções Tecnológicas:</h3>
                    <li><strong>Prontuários Eletrônicos:</strong> Facilitar o compartilhamento de informações de saúde entre diferentes unidades.</li>
                    <li><strong>Aplicativos de Promoção de Saúde:</strong> Fornecer orientações personalizadas sobre cuidados infantis.</li>
                </ul>
                </div>
                <div className="col-md-6 order-md-2 image-side blue-bg-3">
                  <img src={latina} className="img-fluid" alt="criança latina" />
                </div>
              </div>

              <div className="row solution-div">
                <div className="col-md-6 order-md-2 text-side blue-bg-4">
                  <h2 className="text-center">Sudeste Asiático</h2>
                  <br/><br/>
                  <ul>
                    <h3>Desafios:</h3>
                    <li>Elevada mortalidade infantil relacionada a doenças infecciosas, complicações neonatais e subnutrição.</li>
                    <br /><br /><br /><br /><br /><br />
                    <h3>Soluções Tradicionais:</h3>
                    <li><strong>Campanhas de Vacinação e Controle de Doenças:</strong> Implementar programas de vacinação e estratégias para o controle de doenças infecciosas.</li>
                    <li><strong>Fortalecimento dos Sistemas de Saúde:</strong> Investir em infraestrutura e treinamento de profissionais de saúde.</li>
                    <br /><br /><br /><br /><br /><br />
                    <h3>Soluções Tecnológicas:</h3>
                    <li><strong>Aplicativos de Monitoramento de Saúde Infantil:</strong> Facilitar o acompanhamento remoto da saúde das crianças.</li>
                    <li><strong>Uso de Drones para Entrega de Suprimentos Médicos:</strong> Agilizar a entrega de medicamentos e suprimentos em áreas remotas.</li>
                </ul>
                </div>
                <div className="col-md-6 order-md-1 image-side blue-bg-4">
                  <img src={sudesteasia} className="img-fluid" alt="criança asiatica" />
                </div>
              </div>

              <div className="row solution-div">
                <div className="col-md-6 order-md-1 text-side blue-bg-5">
                  <h2 className="text-center">Oriente Médio</h2>
                  <br /><br />
                  <ul>
                    <h3>Desafios:</h3>
                    <li>Variações nas taxas de mortalidade infantil devido a conflitos, deslocamento populacional e infraestrutura de saúde fragilizada.</li>
                    <br /><br />
                    <h3>Soluções Tradicionais:</h3>
                    <li><strong>Acesso a Serviços de Saúde em Zonas de Conflito:</strong> Garantir acesso contínuo a cuidados de saúde em áreas afetadas por conflitos.</li>
                    <li><strong>Apoio Psicossocial:</strong> Implementar programas de apoio psicossocial para famílias afetadas por conflitos.</li>
                    <br /><br />
                    <h3>Soluções Tecnológicas:</h3>
                    <li><strong>Registros de Saúde Eletrônicos em Situações de Emergência:</strong> Facilitar o acesso a históricos médicos durante deslocamentos.</li>
                    <li><strong>Plataformas de Telepsicologia:</strong> Oferecer serviços de apoio psicológico remotamente.</li>
                </ul>
                </div>
                <div className="col-md-6 order-md-2 image-side blue-bg-5">
                  <img src={orientemedio} className="img-fluid" alt="duas crianças do oriente-medio" />
                </div>
              </div>
          
          </div>
          
          
          
          

        </div>
      </>
    )
}

export default App