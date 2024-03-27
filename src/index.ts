import i18next from 'i18next'

export default i18next

export type { TFunction } from 'i18next'

export const { use, init, t } = i18next

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getResource = (...args: any[]): ReturnType<typeof i18next.getResource> => i18next.getResource(...args)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const addResource = (...args: any[]): ReturnType<typeof i18next.addResource> => i18next.addResource(...args)

export const addResourceBundle
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  = (...args: any[]): ReturnType<typeof i18next.addResourceBundle> => i18next.addResourceBundle(...args)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const addResources = (...args: any[]): ReturnType<typeof i18next.addResources> => i18next.addResources(...args)

export const getResourceBundle
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  = (...args: any[]): ReturnType<typeof i18next.getResourceBundle> => i18next.getResourceBundle(...args)

export const getLanguage = (): typeof i18next.language => i18next.language
export const getLanguages = (): typeof i18next.languages => i18next.languages
