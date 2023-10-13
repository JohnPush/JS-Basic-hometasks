/*8-crypto*/

/*Шифратор*/

function crypto (password) {
    if (password === undefined || password === null ||password === '') {
        console.log ('no password set');
    } else {
        password = password.toString();
        password = password.split('');
            if (password.length < 4) {
                console.log ('the password must be at least 4 characters long');
        } else {
            const spliceLastCrypto = password.splice(-1, 1);
            password.unshift(spliceLastCrypto);
            const spliceFirstCrypto = password.splice(1, 1)
            password.push(spliceFirstCrypto);
            password.unshift('a');
            password.unshift(spliceLastCrypto);
            password.push(spliceFirstCrypto);
            password.push('s');
            password = password.join('');
            console.log(password);
        }
    }
}

crypto (1234);

/*Дешифратор*/

function deCrypto (cryptoPassword, password) {
    cryptoPassword = cryptoPassword.split('');
    const spliceTwoLastDeCrypto = cryptoPassword.splice(-2, 2);
    const spliceTwoFirstDeCrypto = cryptoPassword.splice(0, 2);
    const spliceLastDeCrypto = cryptoPassword.splice(-1, 1);
    cryptoPassword.unshift(spliceLastDeCrypto);
    const spliceFirstDeCrypto = cryptoPassword.splice(1, 1)
    cryptoPassword.push(spliceFirstDeCrypto);
    cryptoPassword = cryptoPassword.join('');
    password = password.toString('');
    if (cryptoPassword === password) {
        console.log(true);
    } else {
        console.log(false);
    }
}

deCrypto ('4a42311s', '1234');