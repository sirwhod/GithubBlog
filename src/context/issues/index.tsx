import { createContext, useEffect, useState } from 'react'
import { ContextIssues, IssuesProviderProps, UserProps } from './types'
import { getDataUser } from './utils'

export const IssuesContext = createContext<ContextIssues>({} as ContextIssues)

export function IssuesProvider({children}: IssuesProviderProps) {
  const [user, setUser] = useState<UserProps>()

  async function handleGetDataUser() {
    const userData = await getDataUser()

    setUser(userData)
  }

  useEffect(() => {
    handleGetDataUser()

    console.log(user)
  }, [])

  return (
    <IssuesContext.Provider
      value={{
        user
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}