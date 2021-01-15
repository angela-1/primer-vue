const fs = require('fs')
const render = require('json-templater/string')
const uppercamelcase = require('uppercamelcase')
const path = require('path')
const endOfLine = require('os').EOL
const startOfLine = '  '.repeat(1)
const backlist = ['types', 'index.d.ts']

const OUTPUT_PATH = path.join(__dirname, '../lib/index.ts')

let packageNames = fs.readdirSync('./packages', 'utf-8')
let components = packageNames
  .filter((pn) => !backlist.includes(pn))
  .map((pn) => ({
    name: uppercamelcase(pn),
    package: pn,
  }))

const importComponents = components.map(({ name, package }) => {
  return `import { ${name} } from '../packages/${package}'`
})

// const exportComponents = components.map(({ name, package }) => {
//   return `export * from '../packages/${package}'`
// })

const template = `import { App } from 'vue'
{{importComponents}}
import '@primer/css/index.scss'

const components = [
  {{components}}
]

export const install = function (app: App, opts = {}) {
  components.forEach((component)=>{
    app.component(component.name, component);
  })
}
export const version = '{{version}}'

`

const code = render(template, {
  version: require('../package.json').version,
  components: components.map((c) => c.name).join(',' + endOfLine + startOfLine),
  importComponents: importComponents.join(endOfLine),
  // exportComponents: exportComponents.join(endOfLine),
})

fs.writeFileSync(OUTPUT_PATH, code)

console.log('Done');
// console.log('[build entry] DONE:', code)