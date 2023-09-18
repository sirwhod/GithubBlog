import { api } from "../../lib/axios";

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