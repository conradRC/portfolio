import React from "react"
import illustration from "../../../images/undraw_responsive.svg"
import "./css/index.css"
import ItemService from "./item"
import services from "../es/index.js"

export default () => (
  <div className="my-12">
    {services.map(item => (
      <ItemService key={item.title} {...item} />
    ))}

    <div className="flex justify-center items-center pt-20 mx-5">
      <img
        src={illustration}
        draggable="false"
        alt="Computadora de escritorio"
        style={{ height: "220px" }}
      ></img>
    </div>
  </div>
)
