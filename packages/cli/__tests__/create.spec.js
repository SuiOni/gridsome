const fs = require('fs-extra')
const { join } = require('path')

const runCLI = require('./utils/helpers')

const genPath = join(__dirname, 'my-project')

beforeEach(() => {
  fs.ensureDirSync(genPath)
  fs.writeFileSync(join(genPath, 'index.js'), '// Test')
})

afterEach(() => {
  fs.removeSync(genPath)
})

test('warns if a directory with the same name exists in path', async () => {
  const { stdout } = await runCLI(['create', 'my-project'], __dirname)

  expect(stdout).toMatch('because the directory is not empty')
})
