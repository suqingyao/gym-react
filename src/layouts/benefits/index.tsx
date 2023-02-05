import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import ActionButton from '@/components/ActionButton'
import HText from '@/components/HText'
import { BenefitType, SelectedPage } from '@/typing/const'
import { motion } from 'framer-motion'
import { FC } from 'react'
import Benefit from './Benefit'

const benefits: Array<BenefitType> = [
  {
    icon: <div className="i-heroicons:home-modern-20-solid w-6 h-6" />,
    title: 'State of the Art Facilities',
    description:
      'Quis amet magni neque facere. Harum id ex natus est. Quas et ducimus ipsam magnam. Velit eum tempore voluptatem vitae repudiandae labore doloremque sed quo. Illo repudiandae laborum. Dolorem ea voluptatem.'
  },
  {
    icon: <div className="i-heroicons:user-group-20-solid w-6 h-6" />,
    title: "100's of Diverse Classes",
    description:
      'Amet ut qui animi cum iusto quas libero et qui. Officia velit est reiciendis culpa accusantium nisi facilis quo. Magni distinctio aut numquam sit eum quia vel quam architecto. Sint maiores magni.'
  },
  {
    icon: <div className="i-heroicons:academic-cap-20-solid w-6 h-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Sapiente optio ratione aperiam quod molestiae. Eaque rerum consectetur eos porro qui beatae quibusdam. Iste aut quis. Sunt hic aperiam harum minima iste enim repudiandae ut.'
  }
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits: FC<BenefitsProps> = ({ setSelectedPage }) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>More Than Just A Gym</HText>
          <p className="my-5 text-sm">
            Quas repudiandae voluptatum vel ut porro quas est id. Molestiae
            illum animi enim culpa illo et minima. Dolores quo aut odio et hic
            exercitationem sint. Eligendi eveniet voluptatibus velit molestiae
            enim laudantium dolor. Ut ut minus sapiente dolores. Nobis non culpa
            quo omnis unde sunt ipsam autem. Voluptatem autem delectus. Aut
            temporibus corporis minima quos ducimus sequi cum. Repellendus ut ad
            aperiam qui. Dignissimos qui eum odit eum earum.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-1 before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <p className="my-5">
                At repellat et. Velit ut dolores totam magni animi non. Veniam
                aut veritatis voluptates error doloribus et suscipit. Assumenda
                minus distinctio quas illum officiis. Quibusdam repudiandae
                tenetur impedit.
              </p>
              <p className="mb-5">
                Quas eveniet rerum debitis sit quis eum. Excepturi repellat
                repellat quis repellendus aut. Consequatur voluptates at
                perspiciatis ipsa voluptates delectus dolorem. Vel dolorem
                nesciunt natus maiores quia et.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:-z-1 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
