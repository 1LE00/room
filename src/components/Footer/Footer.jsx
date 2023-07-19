import Image from '../Image/Image';
import Dark from '../../assets/images/image-about-dark.jpg';
import Light from '../../assets/images/image-about-light.jpg';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer flex flex-column'>
            <section className="dark w-100">
                <Image src={Dark} alt='Table in Dark setting' title='Table in Dark setting' label='Table in Dark setting' />
            </section>
            <section className="footer-content">
                <article>
                    <h2 className='uppercase'>About our furniture</h2>
                    <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </article>
            </section>
            <section className="light w-100">
                <Image src={Light} alt='Table in Light setting' title='Table in Light setting' label='Table in Light setting' />
            </section>
        </footer>
    )
}

export default Footer