import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";

// window.onscroll = function() {scrollFunction()};

// function scrollFunction(){
//   if (document.body.scrollTop > 50 || 
//     document.documentElement.scrollTop > 50) {
//       document.getElementById("header").style.boxShadow = "0 0 0.5em rgba(0, 0, 0, 0.5)";
//     } else document.getElementById("header").style.boxShadow = "0px"
// }

export default function Home() {

  return (
    <div className="page">
      <Head>
      <link
            rel="preload"
            href="/fonts/Kiona/Kiona-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Metropolis/Metropolis-Black.oft"
            as="font"
            crossOrigin=""
          />
      </Head>
      <Header id="header"/>
      <div>
        <h1>Hi, I'm Cindy,<br/>I code and design.</h1>
      </div>
      <Footer />
    </div>
  )
}
