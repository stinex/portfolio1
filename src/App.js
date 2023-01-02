/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef, useContext } from "react"
import FacebookIcon from './img/Facebook'
import GitHubIcon from './img/GitHub'
import InstagramIcon from './img/Instagram'
import LinkedinIcon from './img/Linkedin'
import Footer from './components/Footer'
import Header from './components/Header'
import Loading from "./components/Loading"
import Man from './img/man.png'
import { LanguageContext } from './contexts/LanguageContext'
import Particle from "./components/Particle"

function App() {
  const [animation, setAnimation] = useState(false)
  const [loading, setLoading] = useState(false)
  const text = useRef(null)
  const [textCount, setTextCount] = useState()
  const { langs } = useContext(LanguageContext)


  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => setLoading(!loading), 1000)
    text.current.innerHTML = ''

    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById(anchor.getAttribute('href').slice(1)).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }

  }, []);

  useEffect(() => {
    if (loading)
      setTimeout(() => { setAnimation(!animation); document.body.style = ''; setTextCount(0); }, 2100)
  }, [loading]);

  useEffect(() => {
    if (text.current.innerHTML !== '') {
      text.current.innerHTML = ''
      // setTextCount(0)
      text.current.innerHTML = langs.decription_bottom
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

  //  Hide and show header depends on scroll
  let lastScrollTop = 0;


  window.onscroll = onScroll;

  function onScroll() {
    let animationScroll = document.querySelectorAll('.animation-scroll')
    let top = window.pageYOffset;
    if (top === 0)
      return document.querySelector('header').classList.remove('scroll')

    if (window.scrollY >= document.querySelector('header').clientHeight && lastScrollTop > top)
      document.querySelector('header').classList.add('scroll')

    if (lastScrollTop > top) {
      document.querySelector('header').classList.remove('scroll-down')
    } else if (lastScrollTop < top) {
      if (window.scrollY >= document.querySelector('header').clientHeight) {
        document.querySelector('header').classList.add('scroll-down')
      }
    }
    lastScrollTop = top;
    if (animationScroll)
      for (let i = 0; i < animationScroll.length; i++) {
        let positionElement = animationScroll[i].getBoundingClientRect()
        if (
          (positionElement.top + positionElement.height > 0) &&
          (window.innerHeight - (positionElement.top + (positionElement.height / 2)) > 0) &&
          (positionElement.left + positionElement.width > 0) &&
          (window.innerWidth - positionElement.left > 0)
        ) {
          animationScroll[i].classList.remove('animation-scroll')
        }
      }
  }
  return (
    <>
      <Loading animation={animation} loading={loading} />
      <div className={!animation ? 'wrapper animation' : 'wrapper'}>
        <Header />
        <main>
          <div className="container">
            <section className="section_main">
              <Particle />
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
          </div>
          <section className="section_skills" id="1">
            <div className="container">
              <div className="section_title">
                &#60; 🧠 {langs.my_skills} /&#62;
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
            </div>
          </section>
          <section className="section_experience" id="2">
            <div className="container">
              <div className="section_title">
                &#60; 👨🏽‍💻 {langs.experience} /&#62;
              </div>
              <div className="experience_blocks">
                <div className="item animation-scroll">
                  <div className="experience_block date">
                    <span> 2021 — Present</span>
                  </div>
                  <div className="experience_block text">
                    <div className="title">Ergonova / Frontend Developer / Full-time </div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorem asperiores ea dolor doloribus adipisci vitae, quidem quisquam suscipit ipsum esse velit possimus quibusdam earum repudiandae ratione molestias ut illum!
                    </div>
                  </div>
                </div>

                <div className="item animation-scroll">
                  <div className="experience_block date">
                    <span> 2019 — Present</span>
                  </div>
                  <div className="experience_block text">
                    <div className="title">SIA Berry White / Frontend Developer / Freelance</div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorem asperiores ea dolor doloribus adipisci vitae, quidem quisquam suscipit ipsum esse velit possimus quibusdam earum repudiandae ratione molestias ut illum!
                    </div>
                  </div>
                </div>

                <div className="item animation-scroll">
                  <div className="experience_block date">
                    <span>  2021 — 2021</span>
                  </div>
                  <div className="experience_block text">
                    <div className="title">INDEX / Frontend Developer / Full-time</div>
                    <div className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorem asperiores ea dolor doloribus adipisci vitae, quidem quisquam suscipit ipsum esse velit possimus quibusdam earum repudiandae ratione molestias ut illum!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div >
    </>
  );
}

export default App
