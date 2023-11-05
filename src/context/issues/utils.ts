import { api } from "../../lib/axios";
import { IssueProps } from "./types";

export async function getDataUser() {
  try {
    const response = await api.get('/users/sirwhod')

    if (response.data) {
      const user = {
        login: response.data.login,
        id: response.data.id,
        avatarUrl: response.data.avatar_url,
        htmlUrl: response.data.html_url,
        name: response.data.name,
        company: response.data.company,
        location: response.data.location,
        bio: response.data.bio,
        followers: response.data.followers
      }

      return user
    }
  } catch (err) {
    console.log(err)
  }
}

export async function getIssues() {
  try {
    const response = await api.get('/repos/sirwhod/GithubBlog/issues')

    if (response.data) {
      const issueList = response.data.map((issue: IssueProps) => {
        const issueData = {
          id: issue.id,
          title: issue.title,
          body: issue.body,
          html_url: issue.html_url,
          created_at: issue.created_at,
          comments: issue.comments,
          user: {
            login: issue.user.login
          }
        }

        return issueData
      })

      return issueList
    }

  } catch (err) {
    console.log(err)
  }
}

export async function searchIssues(search: string) {
  try {
    const response = await api.get(`/search/issues?q=${search}%20repo:sirwhod/GithubBlog`)

    console.log(response)
    
    if (response.data) {
      const issueList = response.data.items.map((issue: IssueProps) => {
        const issueData = {
          id: issue.id,
          title: issue.title,
          body: issue.body,
          html_url: issue.html_url,
          created_at: issue.created_at,
          comments: issue.comments,
          user: {
            login: issue.user.login
          }
        }

        return issueData
      })

      return issueList
    }

  } catch (err) {
    console.log(err)
  }
}