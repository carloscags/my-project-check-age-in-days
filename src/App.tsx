import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
import TitleContainer from './TitleContainer'
import Container from './NavegationBarHeader'

function App(){
    return(
        <>
           <GlobalStyle/>
           <Container />
           <TitleContainer/>
        </>
    )
}

export default App;