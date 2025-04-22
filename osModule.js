const os = require('node:os')

function getOSData() {
    return `Nombre: ${os.platform()}\nTipo: ${os.type()}\nVersión: ${os.version()}\nArquitectura: ${os.arch()}\nCPUs: ${os.cpus().length}\nMemoria total: ${(os.totalmem()/(1024*1024)).toFixed(2)} MB\nMemoria libre: ${(os.freemem()/(1024*1024)).toFixed(2)} MB\n`
}

module.exports = getOSData