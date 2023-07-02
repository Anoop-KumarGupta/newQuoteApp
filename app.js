
/*----------------------------------quotes------------------------------------------------------------------------------------------*/
const arrQuotes=[
"The only thing that feels better than winning is winning when nobody thought you could.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"The most important thing is to enjoy your life - to be happy - it's all that matters.",
"In order to be truly happy, you must pursue your dreams and goals.",
"You can have anything you want if you are willing to give up everything you have.",
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
"Don't judge each day by the harvest you reap but by the seeds that you plant.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"If you want to make your dreams come true, the first thing you have to do is wake up.",
"If you want to live a happy life, tie it to a goal, not to people or things."
];


/*----------------------------------Authors------------------------------------------------------------------------------------------*/
const arrAuthor=["-By Hank Aaron","-By Winston Churchill","-By Steve Jobs","-By Oprah Winfrey","-By Oprah Winfrey","-By Jimmy Dean",
"-By Robert Louis Stevenson","-By Nelson Mandela","-By J.M. Power","-By Albert Einstein"];


/*----------------------------------color---------------------------------------------------------------------------------------------*/
const color=["#4465f4","#B33771","#e58e26","#16a085","#27ae60","#9b59b6","#e74c3c","#e67e22","#34495e","#30336b"];


/*----------------------------------selecting elements--------------------------------------------------------------------------------*/
const headingSpan=document.getElementById("heading-span");
const mainBox1=document.getElementById("main-box-1");
const quote=document.getElementById("quote");
const author=document.getElementById("author");
const btn=document.getElementById("btn");

const d=new Date();
const hours=d.getHours();
function dayTimePeriod(hours){
    if(hours>=5 && hours<12){
        return "morning";
    }else if(hours>=12 && hours<=17){
        return "afternoon";
    }else if(hours>17 && hours<21){
        return "evening";
    }else{
        return "night";
    }
}
const dayTime=dayTimePeriod(hours);
headingSpan.innerHTML=dayTime;

/*-------------------------------------click function---------------------------------------------------------------------------------*/
function newQuote(){
    let x=Math.floor(Math.random()*10);
    // let y=Math.floor(Math.random()*10);
    document.body.style.backgroundColor=color[x];
    headingSpan.innerHTML=dayTime;
    mainBox1.style.color=color[x];
    quote.innerHTML=arrQuotes[x];
    author.innerHTML=arrAuthor[x];
    author.style.color=color[x];
    btn.style.backgroundColor=color[x];
}