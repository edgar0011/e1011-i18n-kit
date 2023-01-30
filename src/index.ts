import i18next from 'i18next'

export default i18next

export const { use, init, t } = i18next

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getResource = (...args: any[]) => i18next.getResource(...args)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const addResource = (...args: any[]) => i18next.getResource(...args)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const addResourceBundle = (...args: any[]) => i18next.addResourceBundle(...args)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const addResources = (...args: any[]) => i18next.addResources(...args)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getResourceBundle = (...args: any[]) => i18next.getResourceBundle(...args)

export const getLanguage = () => i18next.language
export const getLanguages = () => i18next.languages
