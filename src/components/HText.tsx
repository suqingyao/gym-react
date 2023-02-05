import { FC, PropsWithChildren } from 'react'

type HTextProps = {}

const HText: FC<PropsWithChildren<HTextProps>> = ({ children }) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  )
}

export default HText
