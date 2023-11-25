import React, { useState } from 'react'
import './style.css'
import Menu from '../Menu/Menu'

function ContactUs() {

  return (
    <div className='contact-us-container'>
      <Menu />
      <section className="contact-us-content">
        <div className="contact-us-description">
      <span>Estamos comprometidos em proporcionar a você o melhor em cuidados de saúde. Agradecemos por escolher nossos serviços para proteger e promover seu bem-estar.
        Nosso time de atendimento está aqui para ajudar com qualquer dúvida, sugestão ou necessidade que você possa ter. Valorizamos cada interação e buscamos garantir que sua experiência conosco seja excepcional.</span>
      <span>Seu feedback é vital para aprimorarmos constantemente nossos serviços. Contamos com você para compartilhar suas experiências, nos ajudando a entender suas expectativas e aperfeiçoar ainda mais a qualidade do atendimento.</span>
      <span>Para questões urgentes ou específicas relacionadas ao seu plano de saúde, nossa equipe especializada está pronta para fornecer suporte personalizado. Estamos comprometidos em oferecer soluções rápidas e eficientes, garantindo sua tranquilidade.</span>
        </div>
      <div className="contact-us-video">
        {/* <div className="video"> <iframe width="560" height="315" src="https://www.youtube.com/watch?v=0nQVInQFA48" frameborder="0" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" arrowfullscreen></iframe></div> */}
        <div className="video-content">
        <span className='title'>Descubra o Futuro da Saúde com o nosso aplicativo vinculado a sua Smart Watch! 🌟</span>
        <span>Levando o cuidado com a sua saúde a um novo patamar, te convidamos a conhecer nosso mais recente lançamento: o aplicativo Health Watch em perfeita sintonia com o seu Smart Watch! <a className='link-video' href='https://www.youtube.com/watch?v=0nQVInQFA48'>Confira aqui</a> mais detalhes sobre este projeto</span>
        <span>
          ✨ <strong>Praticidade em Suas Mãos:</strong>
          Acesse seus dados de saúde, agende consultas, e receba lembretes diretamente do seu pulso. O futuro do atendimento médico está agora ao alcance do seu Smart Watch!</span>
          <span>
          🌡️ <strong>Monitoramento em Tempo Real:</strong>
          Mantenha-se informado sobre seus indicadores de saúde, como batimentos cardíacos e atividade física, com atualizações em tempo real. Seu bem-estar nunca foi tão acessível.</span>
          <span>
          👩‍⚕️ <strong>Consulta Virtual Simplificada:</strong>
          Consulte-se com médicos especializados de forma remota, aproveitando a comodidade da videochamada diretamente do seu Smart Watch. Cuidados médicos personalizados, a qualquer hora, em qualquer lugar.</span>
          <span>
          ⚙️ <strong>Inteligência Artificial a Seu Favor:</strong>
          Receba insights personalizados sobre sua saúde com a poderosa IA integrada ao aplicativo. Prevenção e monitoramento contínuo para garantir que você esteja sempre no controle.</span>
          <span>
            
          Descubra o poder da tecnologia aliada à sua saúde! Baixe agora o Aplicativo Health Watch e sincronize com seu Smart Watch para uma experiência única e revolucionária.

Seu bem-estar, nossa prioridade. 💙🌐
          </span>
        </div>
      </div>
      </section>

    </div>
  )
}

export default ContactUs