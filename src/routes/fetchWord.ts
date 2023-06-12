const URL_API = "https://api.dictionaryapi.dev/api/v2/entries/en/"

export function getWord(word: string, callback : (data: any) => void) {
    return fetch(URL_API + word)
        .then((res) => res.json())
        .then((data) => callback(data))
}