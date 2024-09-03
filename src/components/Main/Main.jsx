import Image from '../Image/Image';
import LinkButton from '../Link/LinkButton';
import MImageOne from '../../assets/images/mobile-image-hero-1.jpg';
import MImageTwo from '../../assets/images/mobile-image-hero-2.jpg';
import MImageThree from '../../assets/images/mobile-image-hero-3.jpg';
import DImageOne from '../../assets/images/desktop-image-hero-1.jpg';
import DImageTwo from '../../assets/images/desktop-image-hero-2.jpg';
import DImageThree from '../../assets/images/desktop-image-hero-3.jpg';
import { ReactComponent as Left } from '../../assets/icons/icon-angle-left.svg';
import { ReactComponent as Right } from '../../assets/icons/icon-angle-right.svg';
import './main.css';
import { useEffect, useState } from 'react';

const Main = () => {
    const fields = {
        first: {
            title: 'Discover innovative ways to decorate',
            paragraph: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        },
        second: {
            title: 'We are available all across the globe',
            paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        third: {
            title: 'Manufactured with the best materials',
            paragraph: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
        }
    }
    const length = 3;

    const [count, setCount] = useState(0);

    const [content, setContent] = useState({
        title: fields.first.title,
        article: fields.first.paragraph,
        mobile: MImageOne,
        desktop: DImageOne
    });

    const handleLeftClick = () => {
        setCount(value => value > 0 ? (value - 1) % length : 2);
    }

    const handleRightClick = () => {
        setCount(value => value < 3 ? (value + 1) % length : 2);
    }
    // change content based on the value of count
    useEffect(() => {
        if (count === 0) {
            setContent({
                title: fields.first.title,
                article: fields.first.paragraph,
                mobile: MImageOne,
                desktop: DImageOne
            });
        } else if (count === 1) {
            setContent({
                title: fields.second.title,
                article: fields.second.paragraph,
                mobile: MImageTwo,
                desktop: DImageTwo
            });
        } else {
            setContent({
                title: fields.third.title,
                article: fields.third.paragraph,
                mobile: MImageThree,
                desktop: DImageThree
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);


    useEffect(() => {
        const findKey = (params) => {
            return params.key === 'ArrowLeft' ? handleLeftClick() : params.key === 'ArrowRight' ? handleRightClick() : null;
        }
        document.addEventListener('keydown', findKey, true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((value) => (value + 1) % length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main id="main" className='flex flex-column'>
            <section className="main-img-holder">
                <picture className='w-100'>
                    <source media="(min-width:376px)" srcSet={content.desktop} />
                    <Image src={content.mobile} />
                </picture>
                <section className="buttons flex">
                    <button className="left flex" onClick={handleLeftClick}>
                        <Left />
                    </button>
                    <button className="right flex" onClick={handleRightClick}>
                        <Right />
                    </button>
                </section>
            </section>
            <section className="main-article">
                <article>
                    <h1>{content.title}</h1>
                    <p>{content.article}</p>
                    <LinkButton name='Shop now' />
                </article>
            </section>
        </main>
    )
}

export default Main
