import { rmSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const args = process.argv.slice(2)
const nextBin = join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next')

function runBuild() {
  return spawnSync(process.execPath, [nextBin, 'build', ...args], {
    stdio: 'inherit',
    env: process.env,
  })
}

const firstAttempt = runBuild()

if (firstAttempt.status === 0) {
  process.exit(0)
}

console.warn('Build failed. Cleaning .next and retrying once...')
rmSync('.next', { recursive: true, force: true })

const secondAttempt = runBuild()
process.exit(secondAttempt.status ?? 1)
