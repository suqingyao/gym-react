import AnchorLink from '@/components/AnchorLink'
import { SelectedPage } from '@/typing/const'
import { FC } from 'react'
import { motion } from 'framer-motion'

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1
  }
}

type BenefitProps = {
  title: string
  icon: JSX.Element
  description: string
  setSelectedPage: (value: SelectedPage) => void
}

const Benefit: FC<BenefitProps> = ({
  title,
  icon,
  description,
  setSelectedPage
}) => {
  return (
    <motion.div
      className="flex-1 mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center flex flex-col justify-between"
      variants={childVariants}
    >
      <div className="mb-4 flex justify-center">
        <div className="flex rounded-full border-2 border-gray-100 bg-gray-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="py-6">{description}</p>
      <AnchorLink
        className="mt-auto text-sm font-bold text-primary-500 underline-dashed hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}

export default Benefit
