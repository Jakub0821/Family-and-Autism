document.getElementById('problem-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Zablokowanie domyślnego zachowania formularza
    
    const problem = document.getElementById('problem').value.toLowerCase();
    const solutionDiv = document.getElementById('solution');

    let solution = 'Przepraszamy, nie znaleziono odpowiedzi na ten problem.';

    // Proste przykładowe rozwiązania problemów
    if (problem.includes('komunikacja')) {
        solution = 'Aby poprawić komunikację z dzieckiem, spróbuj używać prostego i bezpośredniego języka. Wspólne rytuały również mogą pomóc.';
    } else if (problem.includes('nauka')) {
        solution = 'Jeśli masz problem z nauką dziecka, spróbuj krótkich sesji zadań edukacyjnych i nagradzaj każde osiągnięcie, aby zmotywować dziecko.';
    } else if (problem.includes('emocje')) {
        solution = 'W przypadku wyzwań emocjonalnych, spróbuj wprowadzić regularny harmonogram dnia, aby dziecko czuło się bezpiecznie i przewidywalnie.';
    }

    solutionDiv.innerHTML = `<strong>Rozwiązanie:</strong> ${solution}`;
});
