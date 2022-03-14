import {
  FormControl,
  FormLabel,
  Center,
  Box,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react'
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useStore } from 'stores'

export const Start = () => {
  const navigate = useNavigate()
  const { value, setAgora } = useStore(state => state.agora)
  const [appid, setAppid] = useState(value.appid)
  const [token, setToken] = useState(value.token)
  const [channel, setChannel] = useState(value.channel)

  const onClick = useCallback(() => {
    setAgora({
      appid,
      token,
      channel,
    })
    navigate('/hub')
  }, [appid, channel, navigate, setAgora, token])

  return (
    <Center flexDirection="column" mx="auto" width="70%" minWidth="640px">
      <h1>
        <Center fontSize="md" my="4" color="primary">
          Please Enter....
        </Center>
      </h1>
      <VStack spacing="4">
        <FormControl>
          <FormLabel htmlFor="appid">AppID</FormLabel>
          <Input
            type="text"
            id="appid"
            name="appid"
            value={appid}
            onChange={event => {
              setAppid(event.target.value)
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="token">Token(Optional)</FormLabel>
          <Input
            type="text"
            id="token"
            name="token"
            value={token}
            onChange={event => {
              setToken(event.target.value)
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="channel">Channel</FormLabel>
          <Input
            type="text"
            id="channel"
            name="channel"
            value={channel}
            onChange={event => {
              setChannel(event.target.value)
            }}
          />
        </FormControl>
        <Box width="100%">
          <Button colorScheme="teal" width="100%" onClick={onClick}>
            Join
          </Button>
        </Box>
      </VStack>
    </Center>
  )
}
