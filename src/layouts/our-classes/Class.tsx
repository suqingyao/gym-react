import { FC } from 'react'

type ClassProps = {
  name: string
  description?: string
  image: string
}

const Class: FC<ClassProps> = ({ name, description, image }) => {
  const overlayStyles = `p-5 absolute flex w-450px h-full
   flex-col items-center justify-between whitespace-normal
    bg-primary-500 text-center text-white 
    opacity-100 transition duration-500 hover:opacity-80`
  return (
    <li className="relative h-425px w-450px">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
        <img src={image} alt={image} />
      </div>
    </li>
  )
}

export default Class
