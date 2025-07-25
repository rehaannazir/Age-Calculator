let yearNum = document.getElementById("year_card_num");
let monthNum = document.getElementById("month_card_num");
let dayNum = document.getElementById("day_card_num");
let calButton = document.getElementById("calculate");

let msg_year = document.getElementById("y");
let msg_month = document.getElementById("m");
let msg_day = document.getElementById("d");

let secButton = document.getElementById("another_page");

let inputDate = document.getElementById("birth_date");

let element = document.getElementById("msg");
let error = document.getElementById("error");

let input_display = document.body.children[1].children[0].children[1];
let output_display = document.body.children[1].children[0].children[2];

let retry_button = document.getElementById("retry");

const shade = input_display[0];


 function error_setup()
    {
        input_display.classList.add("hide");
        error.classList.remove("hide");
        output_display.classList.add("hide");
    
    }

    function showError(message) {
      element.textContent = message; 
      error_setup();
    }


function showErrors(y,m,d,today)
{

    if (isNaN(m)) {
        showError( "Valid Date is required.");
        hasError = true;
    } 
    else if (isNaN(d)) {
        showError('Valid Date is required.');
        hasError = true;
    }
    else if(y < 0)
    {
        showError("Valid date is required.")
    }

    if (hasError) return;

}

function setDate(e)
{

    const today = new Date();


    const currDay   = String(today.getDate()).padStart(2, '0');           
    const currMonth = String(today.getMonth() + 1).padStart(2, '0');   
    const currYear  = today.getFullYear(); 

    const [year, month, day] = e.split('-');

    let y = currYear - year;
    let  m = currMonth - month;
    let d = currDay - day;

    if (d < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        d += prevMonth.getDate();
        m -= 1;
    }

    if (m < 0) {
        m += 12;
        y -= 1;
    }

    yearNum.textContent = y;
    monthNum.textContent = m;
    dayNum.textContent = d;

    msg_year.textContent = `${y} years`;
    msg_month.textContent = `${m} months`;
    msg_day.textContent = `${d} days`;

    showErrors(y,m,d,today);
}

calButton.addEventListener("click", 

    getDate = () =>{
    let datVal = inputDate.value;
    console.log(datVal);
    output_display.classList.remove("hide");
    input_display.classList.add("hide");
    setDate(datVal);
});

secButton.addEventListener("click",() => {
     output_display.classList.add("hide");
    input_display.classList.remove("hide");
})

retry_button.addEventListener("click", ()=> {
    error.classList.add("hide");
     input_display.classList.remove("hide");
})