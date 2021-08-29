import styled from 'styled-components'
import { Theme } from './Prop'

const MainContent = styled.div<{theme:Theme}>`
background:${({theme})=>theme.background};
`

export {MainContent}