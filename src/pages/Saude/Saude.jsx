import React from "react";
import { Link } from 'react-router-dom';
import Menu from "../../components/components/Menu";
import '../../../node_modules/bootstrap/';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap'
import './style.css';

import Saude1 from '../../assets/images/channels4_profile.jpg';
import Cerebro from '../../assets/images/cerebro-humano.png';
import MausHabitos from '../../assets/images/maus-habitos.png';
import Refeicao from '../../assets/images/restaurante.png';
import Cama from '../../assets/images/cama.png';
import Meditacao from '../../assets/images/meditacao.png';
import RedeSocial from '../../assets/images/rede.png';

function Saude(){
    return(
        <>
            <Menu/>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <h1>Melhoria Geral da Saúde: Um Caminho para o Bem-Estar Integral</h1>
                        <div id="Texto1">
                            <p>A busca pela melhoria geral da saúde é um compromisso contínuo e essencial para o bem-estar integral. Esse processo envolve não apenas a ausência de doenças, mas também a promoção de hábitos saudáveis e a atenção à saúde física, mental e emocional.</p>
                        </div>
                    </div>

                    <div class="col-6">
                        <div id="Saude-1">
                            <img src={Saude1} alt="" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="img1">
                        <div class="col-4">
                            <img src={Refeicao} alt="" />
                            <h3>Alimentação Balanceada:</h3>
                            <ul>
                                <li>-Consumir uma variedade de alimentos frescos, como frutas, vegetais, grãos integrais e proteínas magras.</li>
                                <li>-Evitar o consumo excessivo de alimentos processados, ricos em açúcares, gorduras saturadas e sódio.</li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                                <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
                            </svg>
                                <h3>Hidratação Adequada:</h3>
                                <ul>
                                    <li>-Beber água suficiente ao longo do dia para manter o corpo hidratado e apoiar funções metabólicas.</li>              
                                </ul>
                        </div>

                        <div class="col-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bicycle" viewBox="0 0 16 16">
                                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
                            </svg>
                                <h3>Atividade Física Regular:</h3>
                                <ul>
                                    <li>-Incorporar pelo menos 150 minutos de atividade física moderada por semana, como caminhadas, corridas, natação ou ciclismo.</li>
                                    <li>-Incluir exercícios de fortalecimento muscular pelo menos duas vezes por semana.</li>
                                </ul>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="img1">
                        <div class="col-4">
                            <img src={Cama} alt="" />
                            <h3>Rotina de Sono Consistente:</h3>
                            <ul>
                                <li>-Estabelecer horários regulares para dormir e acordar.</li>
                                <li>-Criar um ambiente propício ao sono, como um quarto escuro, silencioso e confortável.</li>
                            </ul>
                            </div>                    
                            <div class="col-4">
                                <img src={Meditacao} alt="" />
                                <h3>Gestão do Estresse:</h3>
                                <ul>
                                    <li>-Praticar técnicas de relaxamento, como meditação, ioga ou respiração profunda.</li>
                                    <li>-Identificar e abordar fontes de estresse, procurando equilíbrio entre trabalho e lazer.</li>
                                </ul>

                            </div>
                            <div class="col-4">
                                <img src={MausHabitos} alt="" />
                                <h3>Controle do Consumo de Álcool e Tabaco:</h3>
                                <ul>
                                    <li>-Limitar o consumo de álcool a quantidades moderadas.</li>
                                    <li>-Evitar o tabagismo e buscar ajuda para parar, se necessário.</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                <div class="row">
                    <div class="img1">
                        <div class="col-4">
                            <img src={Cerebro} alt="" />
                            <h3>Cuidados com a Saúde Mental:</h3>
                            <ul>
                                <li>-Priorizar o autocuidado e dedicar tempo para atividades prazerosas.</li>
                                <li>-Procurar apoio profissional quando necessário, como terapia ou aconselhamento.</li>
                            </ul>

                        </div>

                        <div class="col-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-pulse" viewBox="0 0 16 16">
                                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
                                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
                                <path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128z"/>
                            </svg>
                            <h3>Exames de Rotina e Check-ups Médicos:</h3>
                            <ul>
                                <li>-Realizar exames médicos regulares para monitorar a saúde e identificar precocemente possíveis problemas.</li>
                                <li>-Manter as vacinações em dia.</li>
                            </ul>

                        </div>

                        <div class="col-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                            <h3>Limitação do Tempo de Tela:</h3>
                            <ul>
                                <li>-Reduzir o tempo gasto em dispositivos eletrônicos, especialmente antes de dormir.</li>
                                <li>-Estabelecer pausas durante o dia para evitar longos períodos de exposição à tela.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="img1">
                            <div class="col-4">
                                <img src={RedeSocial} alt="" />
                                <h3>Práticas Sociais e Emocionais:</h3>
                                <ul>
                                    <li>-Cultivar relacionamentos saudáveis e passar tempo com entes queridos.</li>
                                    <li>-Desenvolver habilidades de comunicação e expressão emocional.</li>
                                </ul>

                            </div>
                        
                            <div class="col-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-standing" viewBox="0 0 16 16">
                                    <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0"/>
                                </svg>
                                <h3>Desenvolvimento Pessoal:</h3>
                                <ul>
                                    <li>-Buscar aprendizado contínuo e desenvolvimento pessoal.</li>
                                    <li>-Estabelecer metas realistas e celebrar conquistas, por menores que sejam.</li>
                                </ul>

                            </div>

                            <div class="col-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
                                    <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                    <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.492 1.492 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.72.72 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.72.72 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                                </svg>
                                <h3>Contribuição Social:</h3>
                                <ul>
                                    <li>-Envolvimento em atividades voluntárias ou comunitárias.</li>
                                    <li>-Fazer parte de redes de apoio social.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p>Em primeiro lugar, é crucial adotar um estilo de vida saudável, que inclua uma dieta equilibrada, rica em nutrientes, e a prática regular de atividades físicas. Uma alimentação adequada fornece ao corpo os elementos essenciais para seu funcionamento otimizado, enquanto o exercício físico não só fortalece os músculos e o sistema cardiovascular, mas também contribui para a liberação de endorfinas, promovendo o bem-estar mental.</p>
                            <p>A qualidade do sono é outra peça-chave no que diz respeito à saúde geral. Uma boa noite de sono é fundamental para a recuperação do corpo, a consolidação da memória e o equilíbrio hormonal. Estabelecer rotinas regulares de sono, criar um ambiente propício ao descanso e limitar o uso de dispositivos eletrônicos antes de dormir são práticas que podem contribuir significativamente para a qualidade do sono.</p>
                        </div>

                        <div class="col-6">
                            <p>Além disso, não se pode negligenciar a importância da saúde mental. O estresse e a ansiedade podem ter impactos significativos na saúde física, por isso é fundamental encontrar formas de gerenciá-los. Práticas como meditação, yoga e a busca por apoio psicológico são ferramentas valiosas para promover o equilíbrio emocional e mental.</p>
                            <p>A prevenção é um pilar fundamental na melhoria da saúde. Realizar exames regulares, manter as vacinas em dia e adotar práticas de segurança, como o uso de protetor solar e a adoção de hábitos saudáveis, são medidas preventivas que podem evitar o desenvolvimento de diversas doenças.</p>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="textoDoenca2">
                            <div class="col-12">
                                <p>A conscientização sobre a importância da saúde e a educação contínua são igualmente essenciais. Compreender o funcionamento do próprio corpo, os fatores de risco e a importância das escolhas diárias para a saúde pode empoderar as pessoas a adotarem um estilo de vida mais saudável.</p>
                                <p>Em síntese, a melhoria geral da saúde é um compromisso pessoal e coletivo. Ao adotarmos hábitos saudáveis, promovermos a prevenção e cuidarmos da nossa saúde mental, estamos investindo não apenas em uma vida mais longa, mas também em uma vida mais plena e satisfatória. A saúde é um bem precioso, e cada passo em direção à sua melhoria é um investimento no nosso próprio bem-estar e felicidade.</p>
                            </div>
                        </div>

                        </div>
                </div>
            </div>
        </>
    )
}

export default Saude;