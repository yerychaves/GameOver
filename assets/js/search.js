const data = [
    {
        redirectTo: 'juegos-nota.html',
        keyWords: ['fornite', 'bandidos', 'temporada 2', 'capitulo 6']
    },
    {
        redirectTo: 'resenas-nota.html',
        keyWords: ['assassin', 'creed', 'ubisoft']
    },
    {
        redirectTo: 'ofertas-nota.html',
        keyWords: ['configuración', 'escritorio', 'mouse', 'teclado', 'monitor']
    },
    {
        redirectTo: 'eventos-nota.html',
        keyWords: ['mundial', 'worlds 2024', 'fan fest', '2 de noviembre']
    },
    {
        redirectTo: 'noticias-nota.html',
        keyWords: ['forza', 'horizon', 'xbox', 'japonesa']
    },
]

const getInputSearchElement = () => {
    return document.querySelector('#search-input')
}

const handleOnSearch = () => {
    const inputValue = getInputSearchElement().value
    if (!inputValue) return

    const redirectTo = searchFilter(inputValue)
    window.location = redirectTo
}

const search = () => handleOnSearch()

const searchFilter = (word) => {
    const post = data.filter(item => item.keyWords.includes(word.toLowerCase()))
    
    if (!!post.length) return post[0].redirectTo

    return 'page-not-found.html'
}

const onInputSearchEvent = () => {
    const input = getInputSearchElement()

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleOnSearch()
        }
    })
}

onInputSearchEvent()
