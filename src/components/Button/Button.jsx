import Image from '../Image/Image';

const Button = ({ src, alt, title, label }) => {
  return (
    <button className="flex">
        <Image src={src} alt={alt} title={title} label={label} />
    </button>
  )
}

export default Button