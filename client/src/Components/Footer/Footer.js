import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Digital Cards. All Rights Reserved.</p>
    </footer>
    </div>
  )
}

export default Footer
