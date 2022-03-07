require('shelljs/global');
const path = require('path');
const open = require('open');

const indexPath = path.join(__dirname, '../docs/index.html')

exec('esdoc ./.esdoc.json',function(){
    open(indexPath);
});