const os = require('os');

//info sobre cpu y nucleos
let cpus = os.cpus();
console.log("info: ", cpus);

//hostname equipo
let hostname = os.hostname();
console.log(hostname);

//string ej 'Linux', 'Darwin', 'Windows_NT'
let type = os.type();
console.log(type);

//String ej 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', or 'win32'.
let platform = os.platform();
console.log(platform);

//Returns the total amount of system memory in bytes as an integer.
let totalmem = os.totalmem();
console.log(totalmem/(1024*1024*1024));

//Returns the amount of free system memory in bytes as an integer.
let freemem = os.freemem();
console.log(freemem/(1024*1024*1024));

//object ej: Returns an object containing network interfaces that have been assigned a network address.
let network = os.networkInterfaces();
console.log(network);

// integer, Devuelve el tiempo de actividad del sistema en segundos.
let uptime = os.uptime();
console.log(uptime*0.0166667);




