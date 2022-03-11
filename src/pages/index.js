import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {

  const defaultLanguage = window.navigator.language

  return (
    <main style={pageStyles}>
      Your default language is: {defaultLanguage}
    </main>
  )
}

export default IndexPage
