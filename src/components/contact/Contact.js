import React, { useState } from "react";
import Navbar from "../../common/navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import loadingImg from "../../images/loading3.gif";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail(event) {
    event.preventDefault();
    if (name !== "" && email !== "" && message !== "") {

        showLoading()
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
              hideLoading()
              setName("");
              setEmail("");
              setMessage("");
            },
            (error) => {
              toast.error("internal error has occured !");
              hideLoading()
            }
          );
        } catch (error) {
          toast.error("internal error has occured !");
          hideLoading()
        }
      
    } else {
      toast.error("please fill all fields !");
    }
  }

  function showLoading() {
    document.getElementById("loading").style.display = "block";
    document.getElementById("sendBtn").style.display = "none";
  }
  function hideLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("sendBtn").style.display = "block";
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
          <div className="send-btn-div">
            <button
            id="sendBtn"
              onClick={(e) => {
                sendEmail(e);
              }}
              className="enable"
            >
              Send
            </button>
            <img src={loadingImg} id="loading" alt="loading" />
          </div>
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
