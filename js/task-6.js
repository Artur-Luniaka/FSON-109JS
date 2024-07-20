/**
 *? Напишіть через свіч пошук автора мови програмування.
 *? Пишемо назву мови у шаблонному рядку отримує відповідь
 *? мова та автор
 *? PHP Расмус Лердорф
 *? C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
 *? Swift Кріс Латтнер
 *? JS Брендан Ейх
 *? Java Джеймс Гослінг
 *? Python Гвідо ван Россум
 */

function itLanguage(language) {
    switch (language) {
        case "PHP":
            console.log("Расмус Лердорф");
            break;
            case "C#":
            console.log("група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота");
            break;
            case "Swift":
            console.log("Кріс Латтнер");
            break;
            case "JS":
            console.log("Брендан Ейх");
            break;
            case "Java":
            console.log("Джеймс Гослінг");
            break;
            case "Python":
            console.log("Гвідо ван Россум");
            break;
     
        default:
            console.log("Creator not found");
     }
}
 itLanguage("c#")