var titleIn , adTime , discriptionPage , adPhoto , adDiscription , addTitleIpage,addTitleContainerOne_n
,addContainerOne_n , addTitleContainerTwo_n , addContainerTwo_n ,addSourcesAndQuotesTwo_n , addTitleContainerThree_n,addContainerThree_n,
addTitleContainerFour_n,addContainerFour_n ,addSourcesAndQuotesFour_n ,
addTitleContainerfive_n,addContainerfive_n,addTitleContainerSix_n,addContainerSix_n,addTitleContainerSeven_n,addContainerSeven_n,addSourcesAndQuotesOne_n
,addSourcesAndQuotesThree_n,addSourcesAndQuotesfive_n,addSourcesAndQuotesSix_n,addSourcesAndQuotesSeven_n,bnt;
var b = " <br> "


// add title 
titleIn
bnt

// add time
adTime


// add discription to another page 
discriptionPage


// add photo 
adPhoto


// add discription 
adDiscription



// one container
addTitleContainerOne_n

addContainerOne_n

addSourcesAndQuotesOne_n

// tow conainer 
addTitleContainerTwo_n

addContainerTwo_n

addSourcesAndQuotesTwo_n


// three container 
addTitleContainerThree_n

addContainerThree_n

addSourcesAndQuotesThree_n


// four container 
addTitleContainerFour_n

addContainerFour_n

addSourcesAndQuotesFour_n


// five container 
addTitleContainerfive_n

addContainerfive_n 

addSourcesAndQuotesfive_n



// sex container 
addTitleContainerSix_n

addContainerSix_n 

addSourcesAndQuotesSix_n


// seven container
addTitleContainerSeven_n

addContainerSeven_n 

addSourcesAndQuotesSeven_n


// send data


addTitleIpage = document.getElementById(bnt+'_pag_n_232');

addt(titleIn)

function addt(m){
    var textDis = adDiscription.slice(0, 80);
    var o = document.createElement('div')
    o.innerHTML ='<div class="img_p_sugg_p"> <a href="https://www.trouko.co/questions/'+bnt+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='https://www.trouko.co/questions/"+bnt+"/'>"+m+"</a>"+"<p class='p_t_inf'>"+textDis+"...</p>" + '<a class="link_t_read_p" href="https://www.trouko.co/questions/'+bnt+'">'+" قراءة المزيد "+"</a> </div>"
    addTitleIpage.append(o)
}