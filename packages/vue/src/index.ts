import { registerService } from './services'

const startDesignSystem = (vueApp: any) => {
  registerService.registerComponents(vueApp)
}

export { startDesignSystem }
