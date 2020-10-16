import React from "react"

const Footer = () => (
  <footer className="[ bg-gray-400 ][ text-center ][ py-4 ]">
    © {new Date().getFullYear()}, A fun site developed for fun - {` `}
    <a href="chrisramosdev.com">ChrisRamosDev</a>
  </footer>
)

export default Footer
