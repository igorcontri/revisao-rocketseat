function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log('tudo certo (sayMyName)')
}

// o parametro de "catch" é o "throw" da função testada no "try"
try {
    sayMyName('Roger')
} catch(e) {
    console.log(e)
}

console.log('Após a função de erro')
