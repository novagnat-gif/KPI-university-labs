const dataTypes = ['Football Match' ,'Andrii', false, true, 'hello', 5, 12, -200, false, false, 'word']
const dataTypeNames = {string: 0, number: 0, boolean: 0}

for(const dataType of dataTypes) {
    dataTypeNames[typeof dataType]++
}

console.dir(dataTypeNames)
