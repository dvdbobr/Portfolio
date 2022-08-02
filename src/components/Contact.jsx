import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { contact } from "../data";

const Contact = () => {
  const form = useRef();
  const [sentEmail, setSentEmail] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_804rx49", form.current, "oTJqfQ10QR1o-e3-l")
      .then(
        (result) => {
          setSentEmail(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="section bg-tertiary">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:gap-x-8 lg:flex-row sm:justify-center">
          <div className="flex flex-col items-start justify-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, description } = item;
              return (
                <div className="flex " key={index}>
                  <div className="text-accent  w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div className="px-4">
                    <h4 className="font-body text-xl ">{title}</h4>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {sentEmail ? (
            <div className="space-y-8 w-full  max-w-[780px]">
              <h1 className="text-white text-center text-4xl">
                Thank you for contacting me!
              </h1>
            </div>
          ) : (
            <form
              className="space-y-8 w-full max-w-[780px]"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex gap-8">
                <input
                  className="input"
                  type="text"
                  placeholder="Your name"
                  name="name"
                />
                <input
                  className="input"
                  type="email"
                  placeholder="Your email"
                  name="email"
                />
              </div>
              <input
                className="input"
                type="text"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="textarea"
                placeholder="Your message"
                name="message"
              ></textarea>
              <button className="btn btn-lg bg-accent hover:bg-secondary-hover w-full">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
