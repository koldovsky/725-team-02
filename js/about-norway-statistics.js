(() => {
    const aboutNorwayStatistics = [
        {
            id: "1",
            number: "17,000+",
            text: "Fjords"
        },
        {
            id: "2",
            number: "36",
            text: "Kilometers of coastal strip"
        },
        {
            id: "3",
            number: "450,000",
            text: "Freshwater lakes"
        },
        {
            id: "4",
            number: "10,000",
            text: "Waterfalls"
        },
     ];

    function renderStatistics(aboutNorwayStatistics) {
        const statisticsContainer = document.querySelector('.about-norway__footer-statistics');
        for (const statistics of aboutNorwayStatistics) {
            statisticsContainer.innerHTML +=
            `<div class="about-norway__footer-statistics">
              <div class="about-norway__footer-statistics-part">
                <p class="statistics-number">${statistics.number}</p>
                <p class="statistics-text">${statistics.text}</p>
              </div>
            </div>`
        }
    }
    renderStatistics(aboutNorwayStatistics);
})()