const data = [
    {
        redirectTo: 'juegos-nota.html',
        keyWords: ['fornite', 'bandidos', 'temporada 2', 'capitulo 6']
    },
    {
        redirectTo: 'resenas-nota.html',
        keyWords: ['assassin', 'creed', 'ubisoft']
    },
]

const search = () => {
    const inputValue = document.querySelector('#search-input').value
    const redirectTo = searchFilter(inputValue)
    window.location = redirectTo
}

const searchFilter = (word) => {
    const post = data.filter(item => item.keyWords.includes(word.toLowerCase()))
    if (!!post.length) return post[0].redirectTo

    return 'page-not-found.html'
}