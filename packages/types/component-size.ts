export type PrComponentSize = 'small' | 'default' | 'large'

export function getSizeSuffix(componentSize: PrComponentSize): string {
  const sizeSuffix = {
    small: 'sm',
    default: '',
    large: 'large'
  }
  return sizeSuffix[componentSize]
}
