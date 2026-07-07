import { rmSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const nextBin = join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next')
const distDir = process.env.NEXT_DIST_DIR || '.next-dev'

rmSync(distDir, { recursive: true, force: true })

const result = spawnSync(process.execPath, [nextBin, 'dev'], {
  stdio: 'inherit',
  env: process.env,
})

process.exit(result.status ?? 1)
