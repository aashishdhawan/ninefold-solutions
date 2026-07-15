import { rmSync } from 'node:fs'
import { join } from 'node:path'
import { spawn } from 'node:child_process'

const nextBin = join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next')
const distDir = process.env.NEXT_DIST_DIR || '.next-dev'
const shouldCleanCache = process.env.NEXT_CLEAN === '1'
const userArgs = process.argv.slice(2)
const disableTurbo = process.env.NEXT_TURBO === '0'
const nextArgs = ['dev', ...(disableTurbo ? [] : ['--turbopack']), ...userArgs]
const shouldPrewarm = process.env.NEXT_PREWARM !== '0'
const prewarmRoutes = (process.env.NEXT_PREWARM_ROUTES || '/')
  .split(',')
  .map((route) => route.trim())
  .filter(Boolean)

function getArgValue(args, names) {
  for (let i = 0; i < args.length; i += 1) {
    const token = args[i]

    if (names.includes(token)) {
      return args[i + 1]
    }

    for (const name of names) {
      if (token.startsWith(`${name}=`)) {
        return token.slice(name.length + 1)
      }
    }
  }

  return undefined
}

async function prewarm(origin, routes) {
  for (const route of routes) {
    const url = new URL(route, origin).toString()

    for (let attempt = 1; attempt <= 30; attempt += 1) {
      try {
        const response = await fetch(url)
        if (response.ok) {
          break
        }
      } catch {
        // Dev server may not be ready yet; keep retrying.
      }

      await new Promise((resolve) => setTimeout(resolve, 250))
    }
  }
}

if (shouldCleanCache) {
  rmSync(distDir, { recursive: true, force: true })
}

const child = spawn(process.execPath, [nextBin, ...nextArgs], {
  stdio: 'inherit',
  env: process.env,
})

const host = getArgValue(userArgs, ['--hostname', '-H']) || process.env.HOST || 'localhost'
const port = getArgValue(userArgs, ['--port', '-p']) || process.env.PORT || '3000'
const origin = `http://${host}:${port}`

if (shouldPrewarm && prewarmRoutes.length > 0) {
  prewarm(origin, prewarmRoutes)
}

const forwardSignal = (signal) => {
  if (!child.killed) {
    child.kill(signal)
  }
}

process.on('SIGINT', () => forwardSignal('SIGINT'))
process.on('SIGTERM', () => forwardSignal('SIGTERM'))

child.on('exit', (code, signal) => {
  if (signal) {
    process.exit(1)
  }

  process.exit(code ?? 1)
})
