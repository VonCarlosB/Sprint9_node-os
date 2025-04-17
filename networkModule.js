const net = require('os').networkInterfaces()
const names = Object.keys(net)

function getNetwork() {
    let ans = ''
    for (const interface of names) {
        let dataArray = net[interface]
        ans += `Interfaz: ${interface}\n`
        for (const data of dataArray) {
            ans += ` Familia: ${data.family} Dirección: ${data.address} Interno: ${data.internal}\n`
        }
        ans+='\n'
    }
    return ans
}

module.exports = getNetwork