import { injectGlobal } from 'styled-components'
import globalStyleRules from './globalStyleRules'

export default () => injectGlobal`${globalStyleRules}`
