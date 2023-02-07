const question = [
    'How many team members can I invite?',
    'What is the maximum file upload size?',
    'How do I reset my password?',
    'Can I cancel my subscription?',
    'Do you provide additional support?',

];
const answer = [
    'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    'No more than 2GB. All files in your account must fit your allotted storage space.',
    'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    'Yes! Send us a message and we’ll process your request no questions asked.',
    'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
];

let faqAccordions = document.getElementById("faq-accordions");

for (let i = 0; i < question.length; i++) {

    faqAccordions.innerHTML += `
<article class="article">
    <button class="accordion">${question[i]}</button>
    <div class="panel dispaly">
        <p>${answer[i]}</p>
    </div>
</article>
    `;
}

let faqcontainer = document.querySelectorAll(".accordion");
//faqcontainer.onclick = functiononclick;

for (i = 0; i < faqcontainer.length; i++) {

    faqcontainer[i].addEventListener("click", function () {

        this.classList.toggle("active");

        var panel = this.nextElementSibling;

        panel.classList.toggle("dispaly");

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    });
}
