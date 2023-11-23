import React from "react";
import Bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Dcnt.css";
import { Link } from 'react-router-dom';
import Menu from "../../components/components/Menu";

import Logo from "../../assets/images/channels4_profile-removebg-preview(1).png";
import Coracao from "../../assets/images/coracao.png";
import Cancer from "../../assets/images/cancer.png";
import Cerebro from "../../assets/images/cerebro-humano.png";
import Estomago from "../../assets/images/estomago.png"
import Obesidade from "../../assets/images/corpo.png";
import Diabete from "../../assets/images/teste-de-diabetes.png";
import Pulmao from "../../assets/images/pulmao.png";
import ExameMedico from "../../assets/images/istockphoto-1026367516-612x612.jpg";
import FatorRisco from "../../assets/images/risk-factors-1-removebg-preview.png";



function Dcnt(){
    return(
        <>
        <Menu/>

        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <div class="text">
                        <h1>Doenças Crônicas Não Transmissíveis (DCNT): Um Desafio Global para a Saúde</h1>
                        <p>As Doenças Crônicas Não Transmissíveis (DCNT) representam um dos principais desafios para a saúde pública em escala global. Essas doenças têm características distintas, sendo prolongadas e muitas vezes de evolução lenta. Diferentemente das doenças transmissíveis, como gripes e infecções, as DCNT não são causadas por agentes infecciosos, mas sim por fatores comportamentais, genéticos e ambientais.</p>
                        <p>As principais categorias de DCNT incluem doenças cardiovasculares, câncer, doenças respiratórias crônicas e diabetes. Estas condições de saúde têm impacto significativo na qualidade de vida dos afetados, gerando também um ônus econômico substancial para os sistemas de saúde.</p>            
                    </div>
                </div>
                <div class="col-6">
                    <div class="exameMedico">
                        <img src={ExameMedico} alt=""/>
                    </div>

                </div>
            <div class="row">
                <div class="background-1">
                    <div class="col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hospital" viewBox="0 0 16 16">
                        <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/>
                        <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/>
                    </svg>
                        <h3>Impacto Global</h3>
                        <p>As DCNT afetam pessoas de todas as idades, etnias e classes sociais, mas são particularmente prevalentes em países de baixa e média renda. A transição epidemiológica, que ocorre à medida que as sociedades passam de problemas de saúde predominantemente infecciosos para crônicos, destaca a necessidade urgente de estratégias abrangentes de prevenção e controle.</p>

                        
                    </div>

                    <div class="col-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                        </svg>
                        <h3>Fatores de Risco</h3>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                            </svg>Estilo de Vida: <p>Hábitos de vida inadequados, como dieta pobre em nutrientes, falta de atividade física, consumo excessivo de álcool e tabagismo, estão entre os principais fatores de risco para o desenvolvimento de DCNT.</p></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                            <   path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                            </svg>Genética: <p>Alguns indivíduos possuem predisposição genética para certas DCNT, o que pode aumentar sua suscetibilidade a essas condições.</p></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                            </svg>Ambiente: <p>Fatores ambientais, como poluição do ar, exposição a substâncias tóxicas e condições socioeconômicas desfavoráveis, também desempenham um papel significativo.</p></li>
                        </ul>
                    </div>

                    <div class="col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-pulse" viewBox="0 0 16 16">
                        <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
                        <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
                        <path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z"/>
                    </svg>
                        <h3>Prevenção e Controle</h3>        
                            <ul>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                                </svg>Promoção de Estilos de Vida Saudáveis: <p>Campanhas educativas para incentivar uma dieta equilibrada, atividade física regular e a cessação de hábitos prejudiciais são fundamentais.</p></li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                                </svg>Acesso a Cuidados de Saúde: <p>Garantir o acesso equitativo a serviços de saúde é crucial, facilitando o diagnóstico precoce e o manejo adequado das DCNT.</p></li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                                </svg>Regulação e Políticas Públicas: <p>Implementação de políticas que promovam ambientes saudáveis, como regulamentações sobre publicidade de alimentos não saudáveis e impostos sobre produtos prejudiciais à saúde.</p></li>
                            </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="background-2">
                        <div class="col-6">
                            <h2>Desafios Futuros</h2>
                            <p>À medida que a população mundial envelhece e os padrões de vida se transformam, a carga das DCNT continua a aumentar. Abordar efetivamente esse desafio requer uma abordagem interdisciplinar, envolvendo governos, profissionais de saúde, setores privados e a sociedade civil.</p>
                            <p>Em resumo, as DCNT representam uma ameaça significativa para a saúde global. A prevenção efetiva e o controle dessas condições exigem esforços coordenados em várias frentes, visando modificar fatores de risco, melhorar o acesso aos cuidados de saúde e promover políticas públicas saudáveis.</p>
                            <p>As Doenças Crônicas Não Transmissíveis (DCNT) abrangem um grupo de condições de saúde de longa duração e progressão geralmente lenta, que não são transmitidas de uma pessoa para outra. As principais categorias de DCNT incluem:</p>
                        </div>

                        <div class="col-6">
                            <div class="fatorRisco"> 
                                <img src={FatorRisco} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
               
            </div>
        </div>
            
            <div class="container-fluid">
                <div class="row">
                    <div class="background-1">
                        <div class="col-6">
                            <div class="iconeDoenca">
                                <img src={Coracao} alt="Coração-Icone"/> 
                            </div>
                            <div class="textoDoenca">
                                Doenças Cardiovasculares:
                            </div>
                            <ul>
                                <li>
                                    <li>Doenças cardíacas coronária</li>
                                    <li>Insuficiência cardíaca</li>
                                    <li>Acidente vascular cerebral(AVC)</li>
                                    <li>Hipertensão arterial</li>
                                </li>
                            </ul>

                        </div>
                    
                    <div class="col-6">
                        <div class="iconeDoenca">
                            <img src={Cancer} alt="Cancer-Icone"/>
                        </div>

                        <div class="textoDoenca">
                            Câncer:
                        </div>
                        <ul>
                            <li>Diversos tipos de câncer, como câncer de pulmão, mama, próstata, cólon, entre outros.</li>
                        </ul>
                    </div>
                </div>

                <div class="row">    
                    <div class="background-1">
                        <div class="col-6">
                            <div class="iconeDoenca">
                                <img src={Pulmao} alt="Pulmão-Icone"/>
                            </div>
                            <div class="textoDoenca">
                                Doenças Respiratórias Crônicas:
                            </div>
                            <ul>
                                <li>Doença pulmonar obstrutiva crônica (DPOC)</li>
                                <li>Asma</li>
                            </ul>
                        </div>
                        
                        <div class="col-6">
                            <div class="iconeDoenca">
                                <img src={Diabete} alt="Diabete-Icone"/>
                            </div>
                            <div class="textoDoenca">
                                Diabete:
                            </div>
                            <ul>
                                <li>Diabete Mellitus tipo 1</li>
                                <li>Diabete Mellitus tipo 2</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="background-1">
                        <div class="col-6">
                            <div class="iconeDoenca">
                                <img src={Cerebro} alt="Cerebro-Icone"/>
                            </div>

                            <div class="textoDoenca">
                                Doenças Neuropsiquiátricas:
                            </div>
                            <ul>
                                <li>Doença de Alzheimer e outras demências</li>
                                <li>Transtornos mentais, como depressão e ansiedade</li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <div class="iconeDoenca">
                                <img src={Estomago} alt="Estomago-Icone"/>
                            </div>
                            <div class="textoDoenca">
                                Doenças Digestiva Crônicas:
                            </div>
                            <ul>
                                <li>Doença inflamatória intestinal(Como doença de Crohn e retocolite ulcerativa)</li>                            <li>Cirrose hepática</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="background-1">
                        <div class="col-6 ">

                            <div class="iconeDoenca">
                                <img src={Obesidade} alt="Obesidade-Icone"/>
                            </div>

                            <div class="textoDoenca">
                                Obesidade: 
                            </div>
                            <ul>
                                <li>A obesidade em si é considerada uma condição crônica e está associada a várias outras doenças, como diabetes tipo 2 e doenças cardiovasculares. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div class="row">
                        <div class="col-4">
                            <p>Essas doenças compartilham fatores de risco comuns, incluindo hábitos de vida pouco saudáveis, como dieta inadequada, sedentarismo, tabagismo e consumo excessivo de álcool. O impacto das DCNT na saúde global é significativo, representando uma carga substancial para os sistemas de saúde e contribuindo para a morbidade e a mortalidade em todo o mundo. Portanto, a prevenção, o diagnóstico precoce e o manejo eficaz dessas condições são de extrema importância para a promoção da saúde pública.</p>
                        </div>

                        <div class="col-4">
                        <p>Portanto, a prevenção, o diagnóstico precoce e o manejo eficaz dessas condições são de extrema importância para a promoção da saúde pública. Estratégias abrangentes que visam modificar os comportamentos de risco, promover estilos de vida saudáveis e facilitar o acesso a cuidados médicos preventivos são fundamentais. Além disso, investimentos contínuos em pesquisas para compreender melhor os mecanismos subjacentes e desenvolver tratamentos inovadores são cruciais para enfrentar o desafio crescente apresentado pelas DCNT.</p>
                        </div>

                        <div class="col-4">
                            <p>É imperativo que os esforços de saúde pública se concentrem não apenas na gestão das doenças, mas também na criação de ambientes que incentivem escolhas saudáveis. Isso inclui iniciativas para melhorar a educação sobre saúde, políticas de preços que tornem alimentos saudáveis mais acessíveis, espaços públicos que promovam a atividade física e campanhas anti-tabagismo eficazes. Ao abordar esses aspectos de maneira integrada, é possível reduzir a incidência de DCNT e, consequentemente, aliviar a pressão sobre os sistemas de saúde, proporcionando uma melhoria substancial na qualidade de vida da população mundial.</p>
                        </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="textoDoenca2">
                                <p>Doenças Crônicas Não Transmissíveis (DCNT), como diabetes, doenças cardiovasculares e câncer, compartilham fatores de risco associados a hábitos de vida prejudiciais, incluindo dieta inadequada, sedentarismo, tabagismo e consumo excessivo de álcool. Essas condições representam uma carga substancial para os sistemas de saúde global, contribuindo para morbidade e mortalidade. A abordagem eficaz dessas doenças requer estratégias abrangentes, desde a promoção de estilos de vida saudáveis até o investimento em pesquisas para desenvolvimento de tratamentos inovadores. A prevenção, diagnóstico precoce e manejo integrado, com enfoque na saúde mental, são cruciais. A conscientização, acesso facilitado a serviços de saúde, tecnologias inovadoras e abordagens multidisciplinares são fundamentais para enfrentar esse desafio de maneira holística, visando não apenas a gestão clínica, mas também a transformação de ambientes sociais e comportamentais.</p>
                            </div>
                        </div>
                        
                    </div>
                        
                    </div>
                </div>
            </div>
        
            
        </>
    );
}

export default Dcnt;