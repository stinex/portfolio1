import { useEffect, useState, useRef } from "react"

import Footer from './components/footer'
import Header from './components/header'
import Loading from "./components/loading"
import Man from './img/man.png'

function App() {

  const [animation, setAnimation] = useState(false)
  const [loading, setLoading] = useState(false)
  const text = useRef(null)


  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => setLoading(!loading), 1000)
  }, []);

  useEffect(() => {
    if (loading)
      setTimeout(() => { setAnimation(!animation); document.body.style = ''; textWriter() }, 2100)
  }, [loading]);


  let i = 0
  var speed = 60
  const mainText = 'frontend developer'

  const textWriter = () => {
    if (i < mainText.length) {
      text.current.innerHTML += mainText.charAt(i);
      i++;
      setTimeout(textWriter, speed);
    }
  }




  return (
    <>
      <Loading animation={animation} loading={loading} />
      <div className={!animation ? 'animation' : ''}>
        <Header />
        <main>
          <div className="container">
            <section className="section_main">
              <div className="text">
                <div className="title">
                  <span className="top">self-taught</span>
                  <span className="bottom" ref={text}></span>
                  {/* self-taught frontend developer */}
                </div>
                <div className="description">
                  Hello 👋, I`m Vladislav Aparin / <span>male</span>, 24
                </div>
              </div>

              <div className="icon">
                <img src={Man} alt="" className="man" />
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App
