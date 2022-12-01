/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react"

import Footer from './components/footer'
import Header from './components/header'
import Loading from "./components/loading"
import Man from './img/man.png'

function App() {

  const [animation, setAnimation] = useState(false)
  const [loading, setLoading] = useState(false)
  const text = useRef(null)
  const [textCount, setTextCount] = useState()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => setLoading(!loading), 1000)
  }, []);

  useEffect(() => {
    if (loading)
      setTimeout(() => { setAnimation(!animation); document.body.style = ''; setTextCount(0) }, 2100)
  }, [loading]);

  const mainText = 'frontend developer'

  useEffect(() => {
    if (textCount >= 0) {
      setTimeout(() => {
        if (textCount < mainText.length) {
          text.current.innerHTML += mainText.charAt(textCount);
          setTextCount(textCount + 1)
        }
      }, 60);
    }
  }, [textCount])

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
                  Hello 👋, I`m Vlad Aparin
                </div>
              </div>
              <div className="icon">
                <img src={Man} alt="" className="man" />
              </div>
            </section>
            <section className="section_skills">
              <div className="section_title">
                &#60; My skills /&#62;
              </div>
              <div className="skills_block">
                <div className="skill">
                  <div className="skills_title">
                    Hard skills
                  </div>
                  <div className="skills_block">
                    <div className="skills">HTML</div>
                    <div className="skills">CSS</div>
                    <div className="skills">JavaScript</div>
                    <div className="skills">React</div>
                    <div className="skills">Next.js</div>
                    <div className="skills">Node.js</div>
                    <div className="skills">Sequelize</div>
                    <div className="skills">Express</div>
                    <div className="skills">Material-UI</div>
                    <div className="skills">Materialize</div>
                    <div className="skills">Bootstrap</div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skills_title">
                    Software / Tools
                  </div>
                  <div className="skills_block">
                    <div className="skills">GitHub</div>
                    <div className="skills">Bitbucket</div>
                    <div className="skills">Jira</div>
                    <div className="skills">Figma</div>
                    <div className="skills">Adobe  Photoshop</div>
                    <div className="skills">Adobe Illustrator</div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skills_title">
                    Soft skills
                  </div>
                  <div className="skills_block">
                    <div className="skills">Punctual</div>
                    <div className="skills">Self-direction</div>
                    <div className="skills">Disciplined</div>
                    <div className="skills">Communicable</div>
                    <div className="skills">Team player</div>
                    <div className="skills">Stress resistant</div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section_experience">
              <div className="section_title">
                &#60; Experience /&#62;
              </div>
              <div className="experience_block">

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
