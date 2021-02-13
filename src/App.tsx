import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
import TitleContainer from './Components/TitleContainer'
import NavegationBar from './Components/NavegationBarHeader'
import ContainerButtonReady from './Components/ButtonReady'



function App(){
    return(
        <>
           <GlobalStyle/>
           <NavegationBar />
           <ContainerButtonReady />
           <TitleContainer/>
        </>
    )
}

export default App;