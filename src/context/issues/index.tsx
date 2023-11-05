import { createContext, useEffect, useState } from 'react'
import { ContextIssues, IssueProps, IssuesProviderProps, UserProps } from './types'
import { getDataUser, getIssues, searchIssues } from './utils'

export const IssuesContext = createContext<ContextIssues>({} as ContextIssues)

export function IssuesProvider({children}: IssuesProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const [issues, setIssues] = useState<IssueProps[]>()

  async function handleGetDataUser() {
    const userData = await getDataUser()

    setUser(userData)
  }

  async function handleGetIssues() {
    const issuesList = await getIssues()

    setIssues(issuesList)
  }

  async function handleSearchIssues(search: string) {
    const issuesList = await searchIssues(search)
    
    setIssues(issuesList)
  }

  useEffect(() => {
    handleGetDataUser()
    handleGetIssues()
  }, [])

  return (
    <IssuesContext.Provider
      value={{
        user,
        issues,
        handleSearchIssues
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}