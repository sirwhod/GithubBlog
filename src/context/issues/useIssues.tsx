import { useContext } from "react"
import { IssuesContext } from "."

export const useIssues = () => {
  const context = useContext(IssuesContext)

  return context
}