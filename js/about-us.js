(function () {
 const bookingSteps = [
    {
        id: "1",
        image: "img/first_step_img.png",
        title: "Contact us",
        chapter: "Some tour conditions may be changed according to the season. To learn more about the program, please contact us."
    },
    {
        id: "2",
        image: "img/second_step_img.png",
        title: "Pick a date",
        chapter: "We conduct tours all year round, almost every week, but the most comfortable weather for sightseeing is in summer."
    },
    {
        id: "3",
        image: "img/third_step_img.png",
        title: "Start your journey",
        chapter: "If necessary, we help you apply for a visa to Norway, as well as advise what things you should take with you."
    },
 ];
 function renderSteps (bookingSteps) {
    const stepsContainer = document.querySelector('.booking-steps');
    for (const step of bookingSteps) {
        stepsContainer.innerHTML += `
        <div class="booking-steps-card">
              <img
                class="step-number__image"
                src="${step.image}"
                alt="step number"
              />
              <h3 class="booking-steps-title">${step.title}</h3>
              <p class="booking-steps-chapter">${step.chapter}
              </p>
        </div>
        `
    }
 }
 renderSteps(bookingSteps);
})();
