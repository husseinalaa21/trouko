document.getElementById("time_up").innerHTML = formatAMPM()
function formatAMPM() {
var d = new Date(),
 minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
 hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
 ampm = d.getHours() >= 12 ? ' مسائاً ' : ' صباحاً ',
 months = ['يناير','فبراير','مارس','ابريل','مايو','يونيو','يوليو','اغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمير'],
 days = ['الاحد','الاثنين','الثلاثاء','الاربعاء','الخميس','الجمعه','السبت'];
return days[d.getDay()]+'  , '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' | '+hours+':'+minutes+ampm;

}