let objects = [
    {name: 'Rita', phone: '+3805545932'},
    { name: 'Andrii', phone:'+380956684100'},
    {name: 'Ihor', phone: '+38066777666'}
]

function findPhoneByName(name) {
    for(object of objects) {
        if (object.name == name) {
            return object.phone
        }
    }
}

console.log(findPhoneByName('Ihor'))
