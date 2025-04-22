const net = require('os').networkInterfaces()
const names = Object.keys(net)

function getNetwork(){
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

//Class solution 1
/*function network(){
    const redes = {}
    names.forEach(nombre => {
        redes[nombre] = net[nombre].map(iface => {
            return {
                Familia: iface.family,
                Direccion: iface.address,
                Interno: iface.internal
            }
        })
    });
    return redes
}*/

//Class solution 2 with for in
/*function network() {
    const redes = {}
    for (interface in net) {
        redes[interface] = net[interface].map(iface => {
            return {
                Familia: iface.family,
                Direccion: iface.address,
                Interno: iface.internal
            }
        })
    }
}*/

module.exports = getNetwork