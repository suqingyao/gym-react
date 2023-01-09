import { SelectedPage } from '@/typing/const'
import { FC } from 'react'

type OurClassesProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses: FC<OurClassesProps> = ({ setSelectedPage }) => {
  return <div>OurClasses</div>
}

export default OurClasses
