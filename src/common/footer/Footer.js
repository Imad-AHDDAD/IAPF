import React from 'react'

function Footer() {
    const date = (new Date()).getFullYear()
  return (
    <div className='footer'>
        <p className="footer-sentence">
            Imad AHDDAD - All rights reserved <br/> {date}
        </p>
    </div>
  )
}

export default Footer