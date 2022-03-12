import { forwardRef } from 'react'
import {
  Link,
  VStack,
  Button,
  LinkProps,
  useStyleConfig,
} from '@chakra-ui/react'

const NavItem = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant, ...rest }, ref) => {
    const styles = useStyleConfig('NavItem', { variant })
    return <Link sx={styles} {...rest} ref={ref} />
  }
)

export const Navbar = () => {
  return (
    <VStack spacing="9">
      <NavItem variant="active">Hub</NavItem>
      <NavItem>People</NavItem>
      <NavItem>Messages</NavItem>
      <NavItem>History</NavItem>
      <Button
        bgGradient="linear(95deg, #F3A32B, #F35B2B)"
        color="white"
        borderRadius="md"
        h="5"
        w="90%"
        fontSize="12px"
        _hover={{
          bgGradient: 'linear(95deg, #F3A32B, #F35B2B)',
        }}
      >
        COMMUNITY
      </Button>
    </VStack>
  )
}
