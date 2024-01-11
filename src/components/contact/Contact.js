import React, { useState } from "react";
import Navbar from "../../common/navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btnClass, setBtnClass] = useState("enable");

  async function sendEmail(event) {
    event.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      if (btnClass === "enable") {
        setBtnClass("disable");
        const url = "https://iap-backend.onrender.com/sendEmail";
        const data = {
          name: name,
          email: email,
          message: message,
        };

        try {
          axios.post(url, data).then(
            (res) => {
              toast.success(res.data.message);
              setBtnClass("enable");
              setName("");
              setEmail("");
              setMessage("");
            },
            (error) => {
              toast.error("internal error has occured !");
              setBtnClass("enable");
            }
          );
        } catch (error) {
          toast.error("internal error has occured !");
          setBtnClass("enable");
        }
      }
    }
  }

  return (
    <>
      <Navbar navStyle="withBackground" profile="none" />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "18px",
            textAlign: "center",
          },
        }}
        reverseOrder={false}
      />
      <div className="contact-section">
        <form id="form" className="contact-form">
          <h1>Contact</h1>
          <div className="name-email">
            <input
              value={name}
              name="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
              className="contact-field"
            />
            <input
              value={email}
              name="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Your Email"
              className="contact-field"
            />
          </div>
          <textarea
            value={message}
            name="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="your message here"
            className="contact-message"
          />
          <button
            onClick={(e) => {
              sendEmail(e);
            }}
            className={btnClass}
          >
            Send
          </button>
        </form>
        <div className="contact-infos">
          <div className="contact-info">
            <FontAwesomeIcon icon={faEnvelope} className="contact-info-icon" />
            <Link
              target="_blank"
              className="contact-info-link"
              to="mailto:imadahddad02@gmail.com"
            >
              imadahddad02@gmail.com
            </Link>
          </div>
          <div className="contact-info">
            <FontAwesomeIcon icon={faPhone} className="contact-info-icon" />
            <Link
              target="_blank"
              className="contact-info-link"
              to="https://wa.me/212617643201"
            >
              +212 617 643 201
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
