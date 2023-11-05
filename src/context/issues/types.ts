import { promises } from 'dns'
import { ReactNode } from 'react'

export interface UserProps {
  login: string,
  id: number,
  avatarUrl: string,
  htmlUrl: string,
  name: string,
  company: string,
  location: string,
  bio: string,
  followers: number
}

export interface IssueProps {
  id: number
  title: string
  body: string
  html_url: string
  created_at: Date
  comments: number
  user: {
    login: string
  }
}

export interface IssuesProps {
  url: string,
  
}

export interface ContextIssues {
  user: UserProps | undefined
  issues: IssueProps[] | undefined
  handleSearchIssues: (search: string) => Promise<void>
}

export interface IssuesProviderProps {
  children: ReactNode
}