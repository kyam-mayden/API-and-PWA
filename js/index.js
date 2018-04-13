
fetch('https://api.github.com/search/repositories?q=created:>2017-01-01&language:javascript&sort=stars&order=desc',
    {method:'get',
        headers:{
        'content-type':'application/json'
        }
    }).then(function(data) {
    return data.json()
}).then(function(data){
     let top3=[data.items[0], data.items[1], data.items[2]];
     var num=1;
     top3.map(item=>{
         document.getElementById(num).innerHTML=
            "<a class='title' href='"+ item['svn_url']+"'>"+ item['name'] +"</a>"+
            "<p class='description'>"+ item['description'] +"</p>"+
            "<p class='date'>date: "+ item['created_at'].substring(0,10) +"</p>"+
            "<p class='stars'>stars: "+ item['stargazers_count'] +"</p>"
         ;
         num++
     })
})

