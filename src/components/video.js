import React from "react"

import Factorymp4 from "../media/coverr-wood-factory.mp4"

export default function Video() {
  return (
    <video autoplay="" loop="" muted="muted" width="800" className="mx-auto">
      <source src={Factorymp4} type="video/mp4" />
    </video>
  )
}
