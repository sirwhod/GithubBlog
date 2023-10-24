import { NavLink } from 'react-router-dom'
import { GithubLogo } from '../assets/icons/GithubLogo'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/basics/Card'
import { Link } from '../components/basics/Link'
import { BackArrow } from '../assets/icons/BackArrow'
import { Calendar } from '../assets/icons/Calendar'
import { Coments } from '../assets/icons/Coments'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useIssues } from '../context/issues/useIssues'
import { IssueProps } from '../context/issues/types'

export function Post() {
  const { idPost } = useParams()
  const { issues } = useIssues()

  const [issue, setIssue] = useState<IssueProps>()

  useEffect(() =>  {
    if (idPost) {
      if (issues) {
        const issueData = issues.find((iss) => {
          return iss.id === Number(idPost)
        })
        setIssue(issueData)
      }
    }
  }, [])

  return (
    <div>
      <Card className="mx-1 lg:mx-0 bg-base-profile shadow-xl">
        <div className="h-full flex flex-col">
          <CardHeader>
            <NavLink className="flex flex-row gap-2 text-blue text-nunito text-xs text-normal text-bold uppercase border-b border-transparent hover:border-blue" to="/">
              <BackArrow size={12} color="#3294F8"/>
              <span>Voltar</span>
            </NavLink>

            {issue && (
              <Link to={issue?.html_url}>
                VER NO GITHUB
              </Link>
            )}
          </CardHeader>
          <CardContent>
            <CardTitle className="mt-5 font-nunito text-2xl text-base-title">{issue?.title}</CardTitle>
          </CardContent>
          <CardFooter className="p-0 mt-6 gap-6">
            <div className="flex flex-row items-center gap-2 text-base-span">
              <GithubLogo size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-[13px] sm:text-base">{issue?.user.login}</span>
            </div>
            <div className="flex flex-row items-center gap-2 text-base-span">
              <Calendar size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-[13px] sm:text-base">
                { issue && formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <div className="flex flex-row items-center gap-2 text-base-span">
              <Coments size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-[13px] sm:text-base">
                {issue?.comments} comentários
              </span>
            </div>
          </CardFooter>
        </div>
      </Card>

      <div className="px-4 lg:px-0 w-full flex gap-8 mt-12 pb-10">
        {issue && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="w-full font-nunito text-base text-base-text"
          >
            {issue.body}
          </ReactMarkdown>
        ) }
      </div>
    </div>
  )
}
