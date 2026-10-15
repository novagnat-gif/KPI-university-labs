const dataTypes = []
const dataTypeNames = {string: 0, number: 0, boolean: 0}


for(let i = 0; i < 10; i++) {
    if (i == 0) {
        dataTypes.push('Football Match')
    } else if (i == 1) {
        dataTypes.push('Andrii')
    } else if (i == 2) {
        dataTypes.push(false)
    } else if (i == 3) {
        dataTypes.push(true)
    } else if (i == 4) {
        dataTypes.push('hello')
    } else if (i == 5) {
        dataTypes.push(5)
    } else if (i == 6) {
        dataTypes.push(12)
    } else if (i == 7) {
        dataTypes.push(-200)
    } else if (i == 8) {
        dataTypes.push(false)
    } else if (i == 9) {
        dataTypes.push(false)
    }
}

for(const dataType of dataTypes) {
    dataTypeNames[typeof dataType]++
}

console.dir(dataTypeNames)
