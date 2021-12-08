import React from 'react'
import './style.css'


export default function ErrorPage({text}) {
      return (
            <div className="errorpage-container">
                  <div className="errorpage-card">
                        {text}
                  </div>
            </div>
      )
}
