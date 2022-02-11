 var data = [
     
     {

        name: "Tanya Sharma",
        age: 23
    },
    {

        name: "Priya Sharma",
        age: 26
    },
    {

        name: "Satyam Sharma",
        age: 22
     },
    {
    
            name: "Usha Sharma",
            age: 46
    },
    {
    
            name: "Suresh Kumar Sharma",
            age: 52
    },
    {

        name: "Sushil Kumar Sharma",
        age: 34
         },

];

const info = document.querySelector('#info');


let details = data.map(function(item)
{
    return '<div>'+ item.name +'\xa0\xa0\xa0\xa0\xa0' +item.age + '</div>';
});

info.innerHTML = details.join('\n');
 