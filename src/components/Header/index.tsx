import { Logo } from '../../assets/icons/Logo'
// import { LogoBackground } from '../../assets/icons/LogoBackgorund'

import styles from './styles.module.css'

export function Header() {
  return (
    <div className={`${styles.header} w-full h-72 flex flex-row items-center justify-center bg-base-profile bg-contain bg-center`}>
      <Logo /> 
    </div>
  )
}
