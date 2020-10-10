# primer-vue (WIP)

A UI Toolkit built on Vue.js 3.0 with [@primer/css](https://primer.style/)
and [Github Docs](https://docs.github.com/).

## think

### size

The size of form components like button input date-range and so on have
size classes, should add a `PrComponentSize` type set it.

for example: `btn btn-sm`, `btn btn-large`

```ts
type PrComponentSize = 'small' | 'default' | 'large'
```

then the size should be transformed to actual class.

```ts
const getSizeSuffix = (componentSize: PrComponentSize): string => {
  const sizeSuffix = {
    small: 'sm',
    default: '',
    large: 'large'
  }
  return sizeSuffix[componentSize]
}
```

## components

- [ ] icon
- [ ] button
- [ ] alert
- [ ] label
- [ ] side-nav
- [ ] tab-nav
- [ ] pagination
- [ ] date-range

## tasks

- [ ] workflow
- [ ] structure
