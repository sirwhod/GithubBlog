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

const rm = "O diagrama de casos de uso é um diagrama voltado para o ponto de vista do usuário, que foca na evolução do sistema. Descreve as principais funcionalidades do sistema e as interações de funcionalidades com os usuários, a fim de integrar com o sistema. O diagrama faz uma referência abstrata às atividades e tarefas dos usuários, que precisam verificar as ações com as quais eles vão interagir interagir com o sistema.\r\n\r\n## **Diagrama Casos de Uso**\r\n\r\nPara construir um diagrama de caso de uso precisamos conhecer os objetos que formam a estrutura do diagrama:\r\n\r\n- **Cenário:** são os eventos que envolvem as ações do usuário com o sistema;\r\n- **Ator:** elementos que interagem com os sistemas. Representam os papéis desempenhados por elementos externos aos usuários. Exemplo: humano (usuário), dispositivo de hardware ou outro sistema.\r\n\r\nComo encontrar atores:\r\n\r\n- Quem usa o sistema?\r\n- Quem instala ou mantém o sistema?\r\n- Quem inicia/desliga o sistema?\r\n- Que outros sistemas usam o sistema?\r\n- Quem recebe informações do sistema?\r\n- Quem provê informações do sistema?\r\n- **Use case (caso de uso):** representa uma funcionalidade do sistema que engloba um requisito funcional. É iniciado por um ator ou por outro caso de uso. Nomeie os casos de uso iniciado com um verbo.\r\n\r\nComo identificar um caso de uso?\r\n\r\n1º Método: identificar os atores relacionados a um sistema ou organização. Para cada ator, identificar os processos que eles iniciam ou os quais eles participaram.\r\n\r\n2º Método: Identificar os eventos externos aos quais um sistema deve responder. Relacionar os eventos a atores e a casos de uso.\r\n\r\n- **Interação:** é o elemento que liga o ator com o caso de uso.\r\n\r\nRelacionamento de Associação: indica que há uma interação (comunicação) entre um caso de uso e um ator. É possível que um ator possa se comunicar com vários casos de uso.\r\n\r\n### **Relacionamento de Generalização:**\r\n\r\n- **Generalização de atores** são quando dois ou mais atores podem se comunicar com o mesmo conjunto de casos de uso. Um filho (herdeiro) pode se comunicar com todos os casos de uso que seu pai se comunica.\r\n- **Generalização de caso de uso:** O caso de uso filho herda o comportamento e o significado do caso de uso pai. O caso de uso filho pode incluir ou sobrescrever o comportamento do caso de uso do pai. O caso de uso filho pode substituir o caso de uso pai em qualquer lugar que ele apareça.\r\n\r\n**Relacionamento de Dependência:** (extensão) representa uma variação/extensão do comportamento do caso de uso base. O caso de uso estendido só é executado sob certas circunstâncias. Expressar rotinas de exceção ou desdobramentos de um caso de uso. Separa parte obrigatórias de partes opcionais (partes obrigatórias – caso de uso base, partes opcionais – caso de uso estendido). Separar trechos que dependem de interação com um determinado ator.\r\n\r\n**Descrição de casos de uso:** contém o nome do caso de uso e uma descrição textual de sua funcionalidade. A descrição típica contém a identificação do ator que iniciou o caso de uso, pré-requisitos (se houver) de caso de uso e descrição textual do fluxo normal e de fluxo alternativos (se houver).\r\n\r\n**Descrição de caso de uso detalhada:** contém nome, descrição sucinta, atores, pré-condições, pós-condições, fluxo básico, fluxos alternativos, fluxos de exceção, estruturas de dados, regras de negócio e observações.\r\n\r\n!https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1667588181969-66F4Olk1dq.png\r\n\r\nPara exemplificar o diagrama de caso de uso, vamos usar o mesmo exemplo do diagrama de atividades para seguir com uma linha de raciocínio sobre um sistema para cadastrar disciplinas da escola. O cenário é a escola, os atores são alunos, professores e disciplinas, use case é o cadastro de disciplina:\r\n\r\n!https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1687464090781-qPaRGebV1I.png\r\n\r\nFonte: Autor.\r\n\r\nPara entender primeiro é preciso organizar os atores, depois colocar *Use case* na posição central da atividade dos atores, que no caso é a consulta do aluno pela disciplina e a verificação do professor, sendo guiado pela guia entre os atores com uma interação ou do professor porque ele mesmo é sempre analisado junto a disciplina.\r\n\r\n**Atividade Extra**\r\n\r\nPara saber mais sobre um diagrama de classe, veja o exemplo “Criar um diagrama de caso de uso UML”, no site da Microsoft Support.\r\n\r\n**Referência Bibliográfica**\r\n\r\nGALLOTTI, G. M. A. (Org.). **Arquitetura de software**. Pearson, 2017.\r\n\r\nSOMMERVILLE, I. **Engenharia de software.** 10.ed. Pearson, 2019.\r\n\r\nPFLEEGER, S. L. **Engenharia de software: teoria e prática.** 2.ed. Pearson. 2003."


export function Post() {
  return (
    <div>
      <Card className="mx-1 lg:mx-0 bg-base-profile shadow-xl">
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
              <span className="font-nunito font-normal text-[13px] sm:text-base">sirwhod</span>
            </div>
            <div className="flex flex-row items-center gap-2 text-base-span">
              <Calendar size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-[13px] sm:text-base">
                Há 1 dia
              </span>
            </div>
            <div className="flex flex-row items-center gap-2 text-base-span">
              <Coments size={18} color="#3A536B" />
              <span className="font-nunito font-normal text-[13px] sm:text-base">
                5 comentários
              </span>
            </div>
          </CardFooter>
        </div>
      </Card>

      <div className="px-4 lg:px-0 w-full flex gap-8 mt-12 pb-10">
      <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="w-full font-nunito text-base text-base-text"
            >
              {rm}
            </ReactMarkdown>
      </div>
    </div>
  )
}
