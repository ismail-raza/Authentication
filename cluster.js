const server= require('./server');
const cluster= require('cluster');
var cpunum= require('os').cpus.length;

if (cluster.isMaster){
    for(i=1; i<=cpunum;i+=1){
        cluster.fork();
    }
    cluster.on('exit', function(){
        cluster.fork();
    })
    console.log('asdhflasdfjasdlgjasdpi');
}
else{
    console.log('else part is lesting........');
}