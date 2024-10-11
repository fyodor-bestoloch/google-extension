const article = document.documentElement.innerHTML;

if (article) {

    const wordMatch = "stylesheet"; // ищем слово "stylesheet", например
    const words = article.matchAll(wordMatch);

    const wordCount = [...words].length;
    console.log(wordCount); // выводит количество совпадений в коде страницы
}
