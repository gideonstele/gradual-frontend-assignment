import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  Box,
  Portal,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { SettingsIcon, EmailIcon } from '@chakra-ui/icons'

export const Inbox = () => {
  return (
    <Popover placement="top-start" arrowSize={12} gutter={12}>
      <PopoverTrigger>
        <Box
          tabIndex={0}
          role="button"
          aria-label="Inbox"
          cursor="pointer"
          d="flex"
          alignContent="center"
        >
          <EmailIcon boxSize="6" />
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          zIndex={4}
          color="white"
          bg="blue.800"
          borderColor="blue.800"
          borderRadius="md"
        >
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            Inbox
          </PopoverHeader>
          <PopoverArrow bgColor="blue.800" />
          <PopoverCloseButton />
          <PopoverBody>
            <Tabs isFitted variant="enclosed">
              <TabList>
                <Tab>To Everyone</Tab>
                <Tab>To Me Only</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>Some Messages To Everyone...</p>
                </TabPanel>
                <TabPanel>
                  <p>Some Messages To Me Only...</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
          <PopoverFooter
            border="0"
            d="flex"
            alignItems="center"
            justifyContent="flex-end"
            pb={4}
          >
            <IconButton aria-label="settings" icon={<SettingsIcon />} />
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
