import FacebookIcon from '../img/Facebook'
import GitHubIcon from '../img/GitHub'
import InstagramIcon from '../img/Instagram'
import LinkedinIcon from '../img/Linkedin'


const Footer = () => {
    return (
        <footer>
            <span>
                Ⓒ VLADISLAV APARIN 2022
            </span>
            <div className="socials">
                <a href="https://www.facebook.com/aparin.vladislav27" target='_blank' rel="noreferrer"><FacebookIcon /></a>
                <a href="https://github.com/stinex" target='_blank' rel="noreferrer"><GitHubIcon /></a>
                <a href="https://www.instagram.com/vlad_aparin/" target='_blank' rel="noreferrer"><InstagramIcon /></a>
                <a href="https://www.linkedin.com/in/vladislav-a-9597b3253/" target='_blank' rel="noreferrer"><LinkedinIcon /></a>
            </div>
        </footer>
    )
}

export default Footer