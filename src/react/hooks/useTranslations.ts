import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'

export type TValuFunction = (key: string | undefined, params?: Record<string, any>) => string
const cache: Map<TFunction, TValuFunction> = new Map()

let resolvedUseTranslation = useTranslation

export const setUseTranslation = (useTrans: any): void => {
  resolvedUseTranslation = useTrans
}

export const createSafeT = (t: TFunction): TValuFunction => {
  if (cache.has(t)) {
    return cache.get(t) as TValuFunction
  }
  const value: TValuFunction = ((key: string | undefined, params?: Record<string, any>): string => {
    if (!key) {
      return ''
    }
    const limits = key.split(' ')

    // useCase: errors.form.string.minLength {#limit} // joi
    // useCase: errors.form.string.minLength some custom text // general
    if (limits.length === 2) {
      return t(limits[0], { ...params, limit: limits[1] })
    }
    return t(key, params)
  })

  cache.set(t, value)
  return value
}

type safeTF = { t: (key: string | undefined, params?: Record<string, any>) => string }

// TODO memoize
export const useTranslations = (namespaces?: string[]): safeTF => {
  const { t } = resolvedUseTranslation(namespaces)

  return { t: createSafeT(t) as TValuFunction }
}
