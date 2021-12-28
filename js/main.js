let coll = document.getElementsByClassName("faq-question");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        openSelectedFaq(this);
    });
}


function openSelectedFaq(content){
    content.classList.toggle("faq-question-open");
    if (content.nextElementSibling.style.maxHeight){
        console.log("here");
        content.nextElementSibling.style.maxHeight = null;
    } else {
        console.log("no here");
        closeOtherFaq();
        content.nextElementSibling.style.maxHeight = content.nextElementSibling.scrollHeight + "px";
    }
}


function closeOtherFaq()
{
    elements = document.querySelectorAll(".faq-question")
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].nextElementSibling.style.maxHeight){
            elements[i].classList.toggle("faq-question-open");
            elements[i].nextElementSibling.style.maxHeight = null;
        }
    }
}