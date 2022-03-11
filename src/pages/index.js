import *  as React from "react"
import { useState, useEffect } from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  const [defaultLanguage, setDefaultLanguage] = useState("")
  

  useEffect(()=>{
    const defaultLanguage = window.navigator.language
    setDefaultLanguage(defaultLanguage)
  }, [])

  return (
    <main style={pageStyles}>
      Your default language is: {defaultLanguage}
    </main>
  )
}

export default IndexPage
