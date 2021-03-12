import React from "react"

export default function ItemService({
  title,
  description,
  image,
  alt,
  size,
  invert,
}) {
  return (
    <div className="w-4/5 m-auto bg-gray-10 my-6 p-6 rounded-lg">
      <div className={`md:flex items-center ${!invert ? "flex-row-reverse" : ""}`}>
        <div className="w-full">
          <h3 className="font-bold text-2xl flex">
            {title}
          </h3>
          <p className="my-6">{description}</p>
        </div>
        <div className="w-full flex justify-center">
          <img src={image} alt={alt} width={size} />
        </div>
      </div>
    </div>
  )
}
