import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="[ bg-gray-400 ][ text-center ]">
    <div>
      <h1 className="pb-2">
        <Link to="/" className="[ font-bold text-2xl ]">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
