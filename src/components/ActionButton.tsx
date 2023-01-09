import { SelectedPage } from '@/typing/const'
import { FC, PropsWithChildren } from 'react'
import AnchorLink from './AnchorLink'

type ActionButtonProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({
  setSelectedPage,
  children
}) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton
