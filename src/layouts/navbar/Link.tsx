import AnchorLink from '@/components/AnchorLink'
import { SelectedPage } from '@/typing/const'
import { FC } from 'react'

type LinkProps = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Link: FC<LinkProps> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
