import type { AnchorHTMLAttributes } from 'react'
import { FC, MouseEvent, PropsWithChildren, useRef } from 'react'

type AnchorLinkProps = {
  offset?: number
}

const AnchorLink: FC<
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & AnchorLinkProps>
> = ({ offset: propsOffset, children, ...rest }) => {
  const offset = useRef(0)
  const smoothScroll = (event: MouseEvent) => {
    event.preventDefault()
    if (propsOffset) {
      offset.current = propsOffset
    }
    const id = event.currentTarget.getAttribute('href')?.slice(1) as string
    const $anchor = document.getElementById(id)
    if (!$anchor) {
      throw new Error('please confirm anchor link address exist')
    }
    const offsetTop = $anchor!.getBoundingClientRect()?.top + window.pageYOffset
    window.scroll({
      top: offsetTop - offset.current,
      behavior: 'smooth'
    })
  }

  return (
    <a {...rest} onClick={smoothScroll}>
      {children}
    </a>
  )
}

export default AnchorLink
