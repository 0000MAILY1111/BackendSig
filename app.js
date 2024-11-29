const { mostrarMenu } = require('./helpers/messages');

require ('colors');
console.clear();

const main = async () => {
    console.log('Hello, World!'.green);

    mostrarMenu ();
}

main();