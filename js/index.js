var dt = new Date();
console.log(dt);
function RanderDate(){
    var month =[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ];

    document.getElementById("date_str").innerHTML= dt.toDateString();
    document.getElementById("month").innerHTML=month[dt.getMonth()];
    // next we are going to set the total days of month 
    var endDate = new Date(
        dt.getUTCFullYear(),
        dt.getMonth()+1,
        0
    ).getDate(); 
    // using above command we will get the end date of current month

    var preDate = new Date(
        dt.getUTCFullYear(),
        dt.getMonth(),
        0
    ).getDate();
    // using above command we will get the end date of last month

    var today = new Date();

    dt.setDate(1); //this is used to know where our 1st day start at e.g at sunday monday etc
    var day = dt.getDay();
    console.log(day);
    var cells="";
    for (x = day; x >0 ; x--)
    {
        cells += "<div class ='prev_date'>"+(preDate -x +1)+"</div>";
    }
    for (i=1; i<= endDate; i++){
        if(i == today.getDate() && dt.getMonth() == today.getMonth()){
            cells += "<div class ='todays'>"+i+"</div>";
        }
        else{
            cells += "<div>"+i+"</div>";
        }
        
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;

}

function moveDate(para){
    if(para =='prev'){
        dt.setMonth(dt.getMonth()-1);
    }
    else if(para =='next')
    {
        dt.setMonth(dt.getMonth()+1);
    }
    RanderDate();
}

