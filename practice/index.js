var year = 2200;
if( year % 4== 0) 
{
    if(year % 100 ==0)
    {
       if(year%400 == 0)
    {
        console.log("This "+year+" is a leep year");

    }else{console.log("not a leep year");}
}else {console.log("not a leep year");}

}
else{
    console.log("This "+year+" is not a leep year");
}