type IconProps = { imgUrl: string, className?: string }

const Icon = ({ imgUrl, className }: IconProps) => {
    return (
        <img className={className} src={imgUrl} alt='image' />
    )
}

export default Icon