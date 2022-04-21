# fake ssl

This is a very simple ssl server for local env.
It depends on [mkcert](https://mkcert.org/), so please be sure to install it first on your system.

## Running

A single command is required for creating certs and running server. The following are the environmental variables involved:

 - DOMAIN: this is target domain for local ssl cert
 - TARGET: another non-ssl server hostname which will provide answer
 - PORT: port on which $TARGET is listening

In example:
```bash
DOMAIN=some-domain.com \
  TARGET=192.168.0.1 \
  PORT=8080 \
  npm start
```
