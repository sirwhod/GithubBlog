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

export function Post() {
  return (
    <div>
      <Card className="mx-4 lg:mx-0 bg-base-profile shadow-xl">
        <div className="h-full flex flex-col">
          <CardHeader>
            <NavLink className="flex flex-row gap-2 text-blue text-nunito text-xs text-normal text-bold uppercase border-b border-transparent hover:border-blue" to="/">
              <BackArrow size={12} color="#3294F8"/>
              <span>Voltar</span>
            </NavLink>
            <Link to="">
              VER NO GITHUB
            </Link>
          </CardHeader>
          <CardContent>
            <CardTitle className="mt-5 font-nunito text-2xl text-base-title">Rodrigo Brandão</CardTitle>
          </CardContent>
          <CardFooter className="p-0 mt-6 gap-6">
            <div className="flex flex-row items-center gap-2 text-base-span">
              <GithubLogo size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-base">sirwhod</span>
            </div>
            <div className="flex flex-row items-center gap-2 text-base-span">
              <Calendar size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-base">
                Há 1 dia
              </span>
            </div>
            <div className="flex flex-row items-center gap-2 text-base-span">
              <Coments size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-base">
                5 comentários
              </span>
            </div>
          </CardFooter>
        </div>
      </Card>

      <div className="px-4 lg:px-0 w-full flex gap-8 mt-12 pb-10">
        
      </div>
    </div>
  )
}
