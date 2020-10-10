import type { ServerConfig } from 'vite'

const config: ServerConfig = {
  port: 8080,
  optimizeDeps: {
    include: ['@primer/css', '@primer/octicons', 'dayjs']
  }
}

export default config
