import './link.css';

const Link = ({ name, href }) => {
    return (
        <a href={href} className="flex link">{name}</a>
    )
}

export default Link