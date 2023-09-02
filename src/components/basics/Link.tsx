import { ReactNode } from 'react'
import { LinkIcon } from '../../assets/icons/LinkIcon'

interface LinkProps {
  to: string
  children: ReactNode
}
export function Link({ to, children }: LinkProps) {
  return (
    <a
      className="flex flex-row gap-2 text-blue text-nunito text-xs text-normal text-bold uppercase border-b border-transparent hover:border-blue"
      href={to}
    >
      {children}
      <LinkIcon size={12} color="#3294F8" />
    </a>
  )
}
