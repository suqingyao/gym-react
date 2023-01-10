import { ClassType, SelectedPage } from '@/typing/const'
import { FC } from 'react'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '@/components/HText'
import Class from './Class'

const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description: 'Voluptates odit dolores sunt et sunt cum delectus.',
    image: image1
  },
  {
    name: 'Yoga Classes',
    description: 'Voluptates odit dolores sunt et sunt cum delectus.',
    image: image2
  },
  {
    name: 'Ab Core Classes',
    image: image3
  },
  {
    name: 'Adventure Classes',
    description: 'Voluptates odit dolores sunt et sunt cum delectus.',
    image: image4
  },
  {
    name: 'Fitness Classes',
    description: 'Voluptates odit dolores sunt et sunt cum delectus.',
    image: image5
  },
  {
    name: 'Training Classes',
    description: 'Voluptates odit dolores sunt et sunt cum delectus.',
    image: image6
  }
]

type OurClassesProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses: FC<OurClassesProps> = ({ setSelectedPage }) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Maxime vel quibusdam hic ipsam enim ea sapiente. Enim saepe ipsa
              saepe. Laborum soluta sit occaecati. Quia sapiente sit non totam
              ullam ipsum libero.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 w-5/6 mx-auto overflow-x-auto overflow-y-hidden">
          <ul className="w-2800px whitespace-nowrap flex gap-10 justify-between">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses
