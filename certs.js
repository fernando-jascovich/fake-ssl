const cp = require('child_process')
const [,,domain] = process.argv

if (!domain) {
  console.error('No domain specified, can\'t continue...')
  process.exit(1);
}

cp.execSync('mkcert -install', { stdio: 'inherit' })
cp.execSync(`mkcert ${domain}`, { stdio: 'inherit' })
