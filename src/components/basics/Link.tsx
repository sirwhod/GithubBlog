import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { LinkIcon } from '../../assets/icons/LinkIcon'

interface LinkProps {
  to: string
  children: ReactNode
}
export function Link({ to, children }: LinkProps) {
  return (
    <NavLink
      className="flex flex-row gap-2 text-blue text-nunito text-xs text-normal text-bold uppercase border-b border-transparent hover:border-blue"
      to={to}
    >
      {children}
      <LinkIcon size={12} color="#3294F8" />
    </NavLink>
  )
}
