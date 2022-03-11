import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { FC } from 'react'

export const Breadcrumb: FC = () => {
  return (
    <ChakraBreadcrumb separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink>ElC Community</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>Match</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>How to have a great career in ...</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Hub</BreadcrumbLink>
      </BreadcrumbItem>
    </ChakraBreadcrumb>
  )
}
