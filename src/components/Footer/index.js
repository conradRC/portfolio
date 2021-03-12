import React from "react"
import github from "../../images/icons/github-32.png"
import email from "../../images/icons/email-32.png"

export default () => (
  <div className="bg-blue-500">
    <div className="text-center text-white flex-wrap">
      <div className="flex justify-center bg-blue-500 pt-8 pb-3">
        <a
          href={"https://github.com/conradrc27"}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 mx-2 hover:bg-blue-700"
        >
          <img
            src={github}
            draggable="false"
            alt="icono de github"
            className="m-1 p-2 pointer"
            style={{ height: "40px" }}
          ></img>
        </a>
        <a
          href={"mailto:conrado27cym@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 mx-2 hover:bg-blue-700"
        >
          <img
            src={email}
            draggable="false"
            alt="icono linkedin"
            className="m-1 p-2 pointer"
            style={{ height: "38px", with: "38px" }}
          ></img>
        </a>
      </div>
      <div className="text-center flex justify-center pb-8 pt-4">
        <p className="">
          Made with &nbsp;
          <i className="fa fa-heart" style={{ color: "white" }}></i>
          &nbsp; by Conrado Cruz
        </p>
      </div>
    </div>
  </div>
)

