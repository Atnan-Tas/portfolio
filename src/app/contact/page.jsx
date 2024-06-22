"use client";
import React, { useState } from "react";
import InstaIcon from "../../../public/images/insta_icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Etoiles from "../components/etoiles";


const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(false);
    setSubmitError('');
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

   try {
      const response = await fetch('/api/send', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        const resData = await response.json();
        setSubmitError(resData.message || 'Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      setSubmitError('Une erreur est survenue.');
    }
  };

  return (
    <main id="contact" className="md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <Etoiles />

      <div className="relative z-30">
      <Header />
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
          <div className="z-10">
          <h5 className="text-xl font- ml-4 text-white my-2">
            Contactez-moi !
          </h5>
          <p className="text-[#ADB7BE] ml-4 mb-4 max-w-md">
            {" "}
            Je suis actuellement étudiant en BUT Métier Multimédia Internet a Montbéliard, ma boîte de réception est toujours ouverte.
            Que vous ayez une question ou une proposition, je ferai de mon mieux pour vous répondre !
          </p>
          <div className="socials align-middle flex flex-row gap-2">
            <Link className="ml-4  w-9" href="https://instagram.com/atnanzer/">
              <Image src={InstaIcon} alt="Insta Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/atnan-tas-8a4b82257/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div className="ml-4 mr-4">
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Votre mail a été envoyé !
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
  <div className="mb-6">
    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
      Votre adresse mail
    </label>
    <input
      name="email"
      type="email"
      id="email"
      required
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="ex:bonjour@gmail.com"
    />
  </div>
  <div className="mb-6">
    <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
      Sujet
    </label>
    <input
      name="subject"
      type="text"
      id="subject"
      required
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="ex:Proposition de collaboration"
    />
  </div>
  <div className="mb-6">
    <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="ex:Je vous contact pour..."
    />
  </div>
  <button type="submit" className="bg-purple-500 text-white font-medium py-2.5 px-5 rounded-lg w-80 mx-auto mb-4">
    Envoyer
  </button>
</form>

          )}
        </div>
        <Footer />
      </div>
      {submitError && <p className="text-red-500">{submitError}</p>}
    </main>
  );
};

export default Contact;