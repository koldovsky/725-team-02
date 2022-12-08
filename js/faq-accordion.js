(() => {
    const acc = document.getElementsByClassName('faq__accordion-button');

    for (let i = 0; i < acc.length; i++) {

        acc[i].onclick = function () {
            let panel = this.nextElementSibling;
            console.log(panel);
            let coursePanel = document.getElementsByClassName('faq__panel');
            console.log(coursePanel);
            let courseAccordionActive = document.getElementsByClassName('faq__accordion-button faq__active');

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove('faq__active');
            } else {
                for (let j = 0; j < courseAccordionActive.length; j++) {
                    courseAccordionActive[j].classList.remove('faq__active');
                }
                for (let t = 0; t < coursePanel.length; t++) {
                    this.classList.remove('faq__active');
                    coursePanel[t].style.maxHeight = null;
                }
                panel.style.maxHeight = panel.scrollHeight + 'px';
                this.classList.add('faq__active');
            }
        }
    }

})();