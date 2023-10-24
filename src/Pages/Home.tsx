import { NavLink } from 'react-router-dom'
import { BuildingSolid } from '../assets/icons/BuildingSolid'
import { GithubLogo } from '../assets/icons/GithubLogo'
import { UserGroup } from '../assets/icons/UserGroup'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTime,
  CardTitle,
} from '../components/basics/Card'
import { Input } from '../components/basics/Input'
import { Link } from '../components/basics/Link'
import { useIssues } from '../context/issues/useIssues'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Home() {
  const { user, issues } = useIssues()
  return (
    <div>
      <Card className="flex flex-col mx-1 items-center justify-center lg:mx-0 sm:flex-row bg-base-profile shadow-xl">
        <img
          className="w-[148px] h-[148px] rounded-full"
          src={user?.avatarUrl}
          alt=""
        />
        <div className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>{user?.name}</CardTitle>
            <Link to={user ? user.htmlUrl : ''}>GITHUB</Link>
          </CardHeader>
          <CardContent>
            <p>
              {user?.bio}
            </p>
          </CardContent>
          <CardFooter className="p-0 mt-6 gap-6">
            <div className="flex flex-row items-center gap-2">
              <GithubLogo size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-[13px] sm:text-base">{user?.login}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BuildingSolid size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-[13px] sm:text-base">
                {user?.company}
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <UserGroup size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-[13px] sm:text-base">
                {user?.followers} seguidores
              </span>
            </div>
          </CardFooter>
        </div>
      </Card>

      <div className="px-2 lg:px-0 flex flex-col items-center justify-center gap-3 mt-10">
        <div className="w-full flex flex-row items-center justify-between">
          <strong className="font-nunito text-lg font-bold text-base-subtitle">
            Publicações
          </strong>
          <p className="font-nunito text-sm text-base-span">6 publicações</p>
        </div>
        <Input placeholder="Buscar conteúdo" />
      </div>

      <div className="px-2 lg:px-0 w-full grid sm:grid-cols-2 gap-8 mt-12 pb-10">
        {
          issues?.map((issue) => {
            return (
              <Card key={issue.id}>
                <NavLink to={`/post/${issue.id}`}>
                  <CardHeader>
                    <CardTitle>{issue.title}</CardTitle>
                    <CardTime>
                      {formatDistanceToNow(new Date(issue.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </CardTime>
                  </CardHeader>
                  <CardContent>
                    <p className="max-h-36 overflow-hidden">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        className="w-full font-nunito text-base text-base-text"
                      >
                        {issue.body}
                      </ReactMarkdown>
                    </p>
                  </CardContent>
                </NavLink>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
