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

export function Home() {
  return (
    <div>
      <Card className="flex flex-col mx-4 items-center justify-center lg:mx-0 sm:flex-row bg-base-profile shadow-xl">
        <img
          className="w-[148px] h-[148px] rounded-lg"
          src="https://github.com/sirwhod.png"
          alt=""
        />
        <div className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Rodrigo Brandão</CardTitle>
            <Link to="/github">GITHUB</Link>
          </CardHeader>
          <CardContent>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have.
            </p>
          </CardContent>
          <CardFooter className="p-0 mt-6 gap-6">
            <div className="flex flex-row items-center gap-2">
              <GithubLogo size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-base">sirwhod</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BuildingSolid size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-base">
                Lola Cosmetics
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <UserGroup size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-base">
                100 seguidores
              </span>
            </div>
          </CardFooter>
        </div>
      </Card>

      <div className="px-4 lg:px-0 flex flex-col items-center justify-center gap-3 mt-10">
        <div className="w-full flex flex-row items-center justify-between">
          <strong className="font-nunito text-lg font-bold text-base-subtitle">
            Publicações
          </strong>
          <p className="font-nunito text-sm text-base-span">6 publicações</p>
        </div>
        <Input placeholder="Buscar conteúdo" />
      </div>

      <div className="px-4 lg:px-0 w-full grid sm:grid-cols-2 gap-8 mt-12 pb-10">
        <Card>
          <NavLink to="/">
            <CardHeader>
              <CardTitle>Rodrigo Brandão</CardTitle>
              <CardTime>há 1 dia</CardTime>
            </CardHeader>
            <CardContent>
              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have.
              </p>
            </CardContent>
          </NavLink>
        </Card>
        <Card>
          <NavLink to="/">
            <CardHeader>
              <CardTitle>Rodrigo Brandão</CardTitle>
              <CardTime>há 1 dia</CardTime>
            </CardHeader>
            <CardContent>
              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have.
              </p>
            </CardContent>
          </NavLink>
        </Card>
      </div>
    </div>
  )
}
