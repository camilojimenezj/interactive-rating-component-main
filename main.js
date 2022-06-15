
const end = () => {
    let rating = document.getElementsByName("rating");
    let rate;
    for(i = 0; i < rating.length; i++) {
        if(rating[i].checked) {
            rate = i + 1;
        }
    }
    let result = document.getElementById("page2");
    let selection = document.getElementById("selection");

    selection.innerHTML= rate;
    result.style.display= 'flex';
}