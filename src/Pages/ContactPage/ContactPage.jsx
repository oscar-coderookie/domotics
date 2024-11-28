import React, { useState } from 'react';
import './ContactPage.scss';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario o mostrar los datos.
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);
  };

  const SocialBar = () => {
    return (
      <div className="socialbar">
        <h3 className="socialbar__title">Síguenos en:</h3>
        <div className="socialbar__block">
          <FaInstagram className='socialbar__icons' />
          <FaFacebook className='socialbar__icons' />
          <FaTwitter className='socialbar__icons' />
          <FaYoutube className='socialbar__icons' />
        </div>
        <h3 className="socialbar__title">Hablemos por:</h3>
        <FaWhatsapp className='socialbar__icons'/>
      </div>

    )
  }


  return (
    <div className="contact-container">
      <h2 className='contact__title'>Contacta al Director del Club:</h2>
      <div className="contact__block1">
        <form onSubmit={handleSubmit}>
          <div className="campo-formulario">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              placeholder='Tu nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className='form__input'
            />
          </div>
          <div className="campo-formulario">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              placeholder='Tu email'
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              className='form__input'
            />
          </div>
          <div className="campo-formulario">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
              maxLength={500}
              className='form__textarea'
              placeholder='Escribe brevemente tu mensaje..'
            />
          </div>
          <button className='submit__btn' type="submit">Enviar Mensaje</button>
        </form>
      </div>
      <div className="location__info">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7218.121025057547!2d-4.464156575257963!3d36.708672584697524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1704158853935!5m2!1ses!2sco"
          width="300"
          height="250"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className='location__info__map'></iframe>
          <SocialBar/>
      </div>
    </div>
  );
};

export default ContactPage