const https = require('https')
const fs = require('fs')
const httpProxy = require('http-proxy')
const [,,source,domain,port] = process.argv

new Array(source, domain, port).forEach(x => {
  if (!x) {
    console.error('Missing source, domain or port, can\'t continue...')
    process.exit(1);
  }
});

console.log(`Starting ssl for ${domain}`)
const proxy = httpProxy.createProxyServer({})
const options = {
  key: fs.readFileSync(`./${domain}-key.pem`),
  cert: fs.readFileSync(`./${domain}.pem`)
};

https
  .createServer(options, (req, res) => {
    proxy.web(req, res, { target: `http://${source}:${port}` })
})
  .listen(443)
