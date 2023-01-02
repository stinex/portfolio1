import FacebookIcon from '../img/Facebook'
import GitHubIcon from '../img/GitHub'
import InstagramIcon from '../img/Instagram'
import LinkedinIcon from '../img/Linkedin'

const Footer = () => {
    return (
        <footer>
            <span>
                Ⓒ VLAD APARIN {new Date().getFullYear()}
            </span>
            <div className="socials">
                <a href="https://www.facebook.com/aparin.vladislav27" target='_blank' rel="noreferrer"><FacebookIcon color='#F9F9F9'/></a>
                <a href="https://github.com/stinex" target='_blank' rel="noreferrer"><GitHubIcon color='#F9F9F9'/></a>
                <a href="https://www.instagram.com/vlad_aparin/" target='_blank' rel="noreferrer"><InstagramIcon color='#F9F9F9'/></a>
                <a href="https://www.linkedin.com/in/vladislav-a-9597b3253/" target='_blank' rel="noreferrer"><LinkedinIcon color='#F9F9F9'/></a>
            </div>
        </footer>
    )
}

export default Footer