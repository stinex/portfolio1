/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef, useContext } from "react"
import FacebookIcon from './img/Facebook'
import GitHubIcon from './img/GitHub'
import InstagramIcon from './img/Instagram'
import LinkedinIcon from './img/Linkedin'
import Footer from './components/footer'
import Header from './components/header'
import Loading from "./components/loading"
import Man from './img/man.png'
import { LanguageContext } from './contexts/LanguageContext';

function App() {
  const [animation, setAnimation] = useState(false)
  const [loading, setLoading] = useState(false)
  const text = useRef(null)
  const [textCount, setTextCount] = useState()
  const { langs } = useContext(LanguageContext);


  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => setLoading(!loading), 1000)
    text.current.innerHTML = ''
  }, []);

  useEffect(() => {
    if (loading)
      setTimeout(() => { setAnimation(!animation); document.body.style = ''; setTextCount(0); }, 2100)
  }, [loading]);

  useEffect(() => {
    if (text.current.innerHTML !== '') {
      text.current.innerHTML = ''
      setTextCount(0)
    }
  }, [langs])

  useEffect(() => {
    let mainText = langs.decription_bottom
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
                  <span className="top">{langs.decription_top}</span>
                  <span className="bottom" ref={text}></span>
                </div>
                <div className="description">
                  {langs.title}
                </div>

                <div className="socials">
                  <a href="https://www.linkedin.com/in/vladislav-a-9597b3253/">
                    <LinkedinIcon color='#363636' />
                  </a>
                  <a href="https://www.facebook.com/aparin.vladislav27">
                    <FacebookIcon color='#363636' />
                  </a>
                  <a href="https://github.com/stinex">
                    <GitHubIcon color='#363636' />
                  </a>
                  <a href="https://www.instagram.com/vlad_aparin/">
                    <InstagramIcon color='#363636' />
                  </a>
                </div>
              </div>
              <div className="icon">
                <img src={Man} alt="" className="man" />
              </div>
            </section>
            <section className="section_skills">
              <div className="section_title">
                &#60; {langs.my_skills} /&#62;
              </div>
              <div className="skills_block">
                <div className="skill">
                  <div className="skills_title">
                    {langs.hard_skills}
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
                    {langs.tools_skills}
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
                    {langs.soft_skills}
                  </div>
                  <div className="skills_block">
                    <div className="skills">{langs.hard_skills_one}</div>
                    <div className="skills">{langs.hard_skills_two}</div>
                    <div className="skills">{langs.hard_skills_three}</div>
                    <div className="skills">{langs.hard_skills_four}</div>
                    <div className="skills">{langs.hard_skills_five}</div>
                    <div className="skills">{langs.hard_skills_six}</div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section_experience">
              <div className="section_title">
                &#60; {langs.experience} /&#62;
              </div>
              <div className="experience_blocks">
                <div className="item">
                  <div className="experience_block date">
                    2021 — Present
                  </div>
                  <div className="experience_block text">
                    <div className="title">Ergonova / Frontend Developer / Full-time </div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorem asperiores ea dolor doloribus adipisci vitae, quidem quisquam suscipit ipsum esse velit possimus quibusdam earum repudiandae ratione molestias ut illum!
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="experience_block date">
                    2019 — Present
                  </div>
                  <div className="experience_block text">
                    <div className="title">SIA Berry White / Frontend Developer / Freelance</div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorem asperiores ea dolor doloribus adipisci vitae, quidem quisquam suscipit ipsum esse velit possimus quibusdam earum repudiandae ratione molestias ut illum!
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="experience_block date">
                    2021 — 2021
                  </div>
                  <div className="experience_block text">
                    <div className="title">INDEX / Frontend Developer / Full-time</div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorem asperiores ea dolor doloribus adipisci vitae, quidem quisquam suscipit ipsum esse velit possimus quibusdam earum repudiandae ratione molestias ut illum!
                    </div>
                  </div>
                </div>
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
