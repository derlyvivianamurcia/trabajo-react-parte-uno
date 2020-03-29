import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Main from '../components/Main'




const App = () => {
  return (
    //hay que acoplarlo en un div, porque el return no va a pintar solo el header, footer...entonces lo acoplo en un div
    //react fragment <> </> sin ningun contenido  o <React.Fragment> </React.Fragment> capsular componentes singlo si solo una pagina se pinta
    <>
      <Header />
      <Main />
      <Footer />
    </>

  );
}


export default App;