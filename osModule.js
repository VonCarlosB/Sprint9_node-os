const os = require('node:os')

function getOSData() {
    return `Nombre: ${os.platform()}\nTipo: ${os.type()}\nVersión: ${os.version()}\nArquitectura: ${os.arch()}\nCPUs: ${os.cpus().length}\nMemoria total: ${os.totalmem()/1000000} MB\nMemoria libre: ${os.freemem()/1000000} MB\n`
}

module.exports = getOSData