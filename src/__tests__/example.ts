import * as renderer from 'react-test-renderer'
import { createSerializer } from '@emotion/jest'
import styled from '@emotion/styled'
import { jsx } from '@emotion/react'

expect.addSnapshotSerializer(createSerializer())

test('renders with correct styles', () => {
  const H1 = styled.h1`
    float: left;
  `

  const tree = renderer.create(jsx(H1, { children: 'Hello World' })).toJSON()
  console.log(tree)
  // expect(tree).toHaveStyleRule('float', 'left', { target: 'h1' })
})
