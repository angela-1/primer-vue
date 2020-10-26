import type { ServerConfig } from 'vite'

const config: ServerConfig = {
  hmr: {
    port: 10080
  },
  port: 8080,
  optimizeDeps: {
    include: ['@primer/css', '@primer/octicons', 'dayjs']
  }
}

export default config
