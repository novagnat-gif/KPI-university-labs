const users = new Map();
users.set('Rita', '+3805545932')
users.set('Andrii', '+380956684100')
users.set('Ihor','+38066777666')

function findPhoneByName(name) {
    return users.get(name)
}

console.log(findPhoneByName("Rita"))