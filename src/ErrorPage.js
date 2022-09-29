import React from 'react'
import styled from 'styled-components'

function ErrorPage() {


  return (
    <Container>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>     
        <h2>404 Page not found</h2>
    </Container>
  )
}

export default ErrorPage

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: red;
  }
`