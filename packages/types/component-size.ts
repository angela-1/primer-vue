export type PrComponentSize = 'small' | 'default' | 'large'

export function getSizeSuffix(
  componentSize: PrComponentSize,
  component: 'button' | 'progress'
): string {
  let sizeString: string = ''
  const btnSizeSuffix = {
    small: 'sm',
    default: '',
    large: 'large'
  }

  const progressSizeSuffix = {
    small: 'small',
    default: '',
    large: 'large'
  }

  switch (component) {
    case 'button':
      sizeString = btnSizeSuffix[componentSize]
      break
    case 'progress':
      sizeString = progressSizeSuffix[componentSize]
      break
    default:
      break
  }
  return sizeString
}
