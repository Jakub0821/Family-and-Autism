const resources = {
    'dziecko autystyczne': {
        articles: ['Jak wspierać dziecko z autyzmem w codziennym życiu', 'Komunikacja z dzieckiem autystycznym'],
        books: ['„Dziecko z autyzmem” – poradnik dla rodziców', '„Autyzm w praktyce” – kompendium wiedzy']
    },
    'nauka': {
        articles: ['Wczesne objawy autyzmu – na co zwracać uwagę?', 'Jak wspierać rozwój poznawczy u dzieci w spektrum'],
        books: ['„Autyzm i nauka” – metody wspierające', '„Rozwój dziecka z autyzmem” – poradnik rodzica']
    }
};

document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Zablokowanie domyślnego zachowania formularza

    const searchTerm = document.getElementById('search').value.toLowerCase();
    const resultsDiv = document.getElementById('results');

    if (resources[searchTerm]) {
        const { articles, books } = resources[searchTerm];

        let resultHTML = '<strong>Powiązane artykuły:</strong><ul>';
        articles.forEach(article => resultHTML += `<li>${article}</li>`);
        resultHTML += '</ul>';

        resultHTML += '<strong>Powiązane książki:</strong><ul>';
        books.forEach(book => resultHTML += `<li>${book}</li>`);
        resultHTML += '</ul>';

        resultsDiv.innerHTML = resultHTML;
    } else {
        resultsDiv.innerHTML = 'Przepraszamy, nie znaleziono wyników dla podanego hasła.';
    }
});
