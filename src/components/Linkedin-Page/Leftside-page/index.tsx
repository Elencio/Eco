import { LeftSide } from './styles'

import { HeaderProfile } from './Header-Profile'
import { ResourcesLinkedIn } from './Resources-LikedIn'
import { DestaqueLinkedIn } from './Destaque-LinkedIn'
import { AtividadesLinkedIn } from './Atividades-LinkedIn'
import { SobreLinkedIn } from './Sobre-LinkedIn'
import { ExperienciaLinkedIn } from './Experiencia-LinkedIn'
import { FormacaoLinkedIn } from './Formacao-LinkedIn'
import { LicencasLinkedIn } from './Licencas-LinkedIn'
import { ProjectosLinkedIn } from './Projectos-Linkedin'

export function LeftSidePage() {
  return (
    <LeftSide>
      <HeaderProfile />
      <ResourcesLinkedIn />
      <DestaqueLinkedIn />
      <AtividadesLinkedIn />
      <SobreLinkedIn />
      <ExperienciaLinkedIn />
      <FormacaoLinkedIn />
      <LicencasLinkedIn />
      <ProjectosLinkedIn />
    </LeftSide>
  )
}
