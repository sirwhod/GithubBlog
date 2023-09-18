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

export interface IssuesProps {
  url: string,
  
}

export interface ContextIssues {
  user: UserProps | undefined
}

export interface IssuesProviderProps {
  children: ReactNode
}