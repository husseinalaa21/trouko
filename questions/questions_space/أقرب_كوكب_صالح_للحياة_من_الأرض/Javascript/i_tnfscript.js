var titleIn , addTitleIpage ,nameP , namePpath, discriptionP , photoP,infSuGuPageOn , infSuGuPageTw;
titleIn = " أقرب كوكب صالح للحياة من الأرض    ";
adPhoto = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFhUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAPFSsdFR0tLSsrKysrKystKy0tLSstKy0tNy0tKy0rKys3NzcrKysrLS0vKy0rLSstKystKzcrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xAA5EAACAQIEAwQHBwMFAAAAAAAAAQIDEQQhMUESUWEFBnGBEyIykaHR8AcUQlKxweEzYpIVI3LS8f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMQMyURP/2gAMAwEAAhEDEQA/APGo9QoAUFEZAQyIGQyQEMkFMkOkCI6RBIotihYosiBEhkgpDJEULBsNYZICvhA4ltgNAUtCtFzQrQFLiI0WtCMqKWhGi6SK5AVyQjLGIyhGKMxWEKwDMVlE4nzYQXIBExgXDcAodCjIimQ6ERZEB4osihIliIHSHihEWRAZIYiQyRFRIZIMEZdDCuWiuTVnNvxiWFaM+tgpR1RiSiJdW82fVLQrRY0KysqpIqZdIrkVFco/W5U0WsrYFcitljEYCMVjMVlAnGzaeqdtVquugq8L9M8+mQWDoVCkDlzIBEMAIDIcRDIgdFkStDoirIlkSuJZECyJZErQ6AsQ6EQ6IrJw0Ls9g+zvuzSnT9LUV9kjx6hOzPS+4nfSOHj6Op7L+Bx/WfP8en8t8bOf6dT3z7rUfQSqQiouKvkeIY6naTR6x3w79U6lJ06X4tWeS4qpd3HE93Ph3vhJ3/TFYkh5FbOzzEZWyyRWwiuRWy2RVIoRlbLJFbAViMdiMoVijMUqAEAQIMhRgCiyJWhkQW02r5ptck0nplm097be7UaJWmPFhViLIlSLIsgtRZEqTHQFsSxFSY6ZFWpl0KtjGTCpBZcZUqzZRJi8QGyLboSZW2MxGyslYjCxWyoSbKpMskytsBJCMaQjKFYrGYjCAKxhWUQgAgQIEGwDXGQqGIGTHTEQyCrYjJlaYyILosdMpTHTAuTHTKUx1IC24Uyq4yZFPcjYjYOIoLYjZGxWERsRsjYjYAkytjMRsBWLJ9P56hYjKAxWNIVhCsDGsB266fH6sUKQgQIgoAUA0V9eGbCgIJAyGQiGQVYhkVpjICxDxZUmMmQXJhTK0w3AtuG5UmNcCy4rYJtbadcvhdiNgO2I2BsVsAtisPFtz6J+7l5CNgBiMLYrKAxWwsUAMAWKET6+QrCAoBCEAKCgBQBCgDJkBCgWCgGixhEMmFMmMmIFMCxMa5WmG5BZcNyu5LgPcFxSANcAtwNgFsVkYpRGxWFsVgBk43a13blsQAQrAMABQMLAygXIQIEIRBAIQIKAKGsKmFsgKGQqCAyCKmS4U6GuV3DcB7guKQB7guKQA3JcW5GAQAuC4EYGG5LhC3Aw3AAANhYCgMUZisCBAQIgQIgDttu7zb1IKmEKZMZCBuA1yAQ9Om3kkQAeMGdV2F3GxFe0pL0cOctX4RO/7G7kYSjZuDqyW89P8dPeZvUjU5teTYDsetWdqdOc3/bFv9DpcD9nOMna8FBf3SS+Cuz2DD0OBJRhwrZRSSXki5YiEfaklzzTflY539G5w83wv2UTft14LwTf62M+n9k9PfEPyh/J6RgMRTmr2slu9JZ2yv5e8zYUeLK9nm7JZ2J/0XxkeWS+yWntiH/h/JjV/skf4MRF+MWv0Z648HZu97bNJvle/IoxlehTy4m3yjnZdWXzqZL8eI437K8XH2PRz8JWfxOX7U7rYqh/Uozj1tde9ZH0L95T0YtSd9bPo8xP1W/m+ZJ0Wipn0D2n3bweI/qUVGX5oeq/kzie3fsymryw01UX5JerLy2Z0nUrnebHmYLmZ2h2bUoycakJRktpKxhM0yNwXBcgUWxWST8hblRCEAES5AEAIQBAIYikAYIqR2fdXuk6lqlf1YaqO8vHoS3Fk1qu7/dytiperG0d5vRfM9Q7A7rUMMk1Hjqfmlz6LYzsDSjGKjCNorZZZG2oQfJJHHrquvPMPhqWa4n5L5m2UIRV7W6GrhJRz3MLG4xyfDF5bnO7W9xsMfjmlZWNFXxPFbPx0XvsNi6sVGzl8zW4rFQjHUSGnxGNmlwqcrJ3tff9zf8Ad3vI8ozVWbbs3HPXd8sv0OExGJvmskdl3T7RUqcYwcKbi0pNJJya3tfNtWu89dttX4jr8XVozyk+OMX6zcpKMbXyebbbvbyMLHTo8MpQjF8K9ZWcrN3tlfJ7tar9Nb2p3ow1F+iadSovUcYprh4uFtNt6vpyOPj2i1K8Xwq7lZWave64k007dSEjeyxEnptyLaWKk1m3b/zfzMepjqUqaqTspWWiUfevG/Iwo4q/s28nfXn7xi+Tdxxu2T8x4Yh6o0lOu2nzvsWvE2W68tH4oHqs/tLB0cTHhrU1JbO3rLwex5p3n7gzpXnh36SGvD+OPlud3HFPYsjijU6sZvMrwSpBp2Ylz1rvT3Wp4pOpTtCrzWkv+S38dfE8rx2EnRm4VIuMlt+65o7c9SuVmKRQ3AaZAhCAQhCAEaDs72T6PQBAIFIU63uh2In/AL9VeqvYi/xPm+gtxZGf3T7sqKVeus3nCD26y6nXrEq6u7L60NdWxW/wMb093fM4266SOoodorbTnv7jKqdqRejZzlCulrkM8ZG2phps54xyy2BHF8KuaSXaGy0MfE4yT0f7FxGTWxV25Z5vUqnK+bfkYNOV3dlWKruUsnktS4ayMQntZFFHtGdCanB2kr2aSdrpp69GzDnWu82YlauXE1ssX2nOtJ1KjvJ8KcrJaKy9nK+RfQxXBZttX0s9Frkc+qreX1/JlU8JNq6GGupq4hOHDx3V72u/VvknbdafAycJhG0mp2bWifwyuctg61Snlk1nk72zvfpuzd4LHRS/K+V8k+hMXW+jG2ru/FfCw9KvZmhqdojUMRF5qVvL9yUjoasYyzi+F8tn8jHUm8nkzVyxUtndc9DOo1opK7u/rIirVXtluabvB2XTxcLS9WovZlunyfNGxxFWJi+kvoJ6L7eT47BzozdOorNfFbNdCk9L7w9kxxVO2SqRV4S/Z9Prx82q05Qk4yVpRdmns0d+etcrMIAIDTKEDYgBIGwYRbaS1bsgNj2F2b6apn7Ec5f9Tt6mJUUksklkuhqMHTVGmoLXWT5tlNWtmYvtuemyliWwfekmrs1v3iy1KZ4i9+RMXW+WKb3MWriupqljcrGLVxjbWeRZynk333tb2FljeXvObhjHvuMsZYsiWt9Ux65mBXxvJmtqYoqlUebfu+Q8TWwWOa095TUxV9Wa6VQXjGGtpQr53256e4zo9ps551OozrE8V1vv9QuF45nP+lGVZ8x4mugWOetzJp9pW0y6HM+nHjiWPE1067WfUeParOcjjB1iUTxXXRvtN3vcz8Lik9GcasSZeExrT1JeSV1ksTZnPd7OzlUXp4L1l7aW65+RfHHcXiPTxPPQT0t9uGaAbDtjCejm0vZlnHw5eRr2dNc8AhCFRZY2nYdFcTm/w6eJq4m3oz4IqPmyVY2OIr7mvqYox8RiLmHUmSRbWVLFMV4gw+IKkakZtZXpQOrYoFmbxk063IqdVitkRlozqDKoxEiICSBckgcQEuS4CEBuTiIABlMZVGVkAvVUZVjHAMXWZGoWwrGvuGNRkw1tqeIsZkcTn4mijWMinWJYutvj4elpNfijmvkc4bnC4k1mOp8M3bR5rzEKpIABpGXh4Zj1apRGpZCtjDUlNsFgphTsaZCSCgSGRUMkLUZLiVBUkVkIQw2aD/kb5/ARhv8AMqFkgMLRCKBBkr7k4HyAUg1g2AWxEEhQCBAAGSwWQgAVIBAMijWLcXmk+Rhotp1dmMXQ4uiCNfoQjSsaRCGo5q5FiIQQLEtQCGolSRXLT3kISkDYQhDLQoKIQsE3IAgALlp5EIIEJsQgAIQgEQCEAjIAhFEBCBERCEAuIQhlp//Z"
adDiscription = "يوجد عدد كبير جداً من الكواكب الشبيها بالارض و التي يشار الى أنها صالحة للحياة , وذلك نضراً لتوفر العوامل التي تساعد الانسان على العيش بها , فأذا كنت تقصد اي كوكب صالح للعيش وألا يكون توأم الارض ويتسم بنفس المقومات الصالحه للحياة على الارض حتى لو كانت ليست بطبيعية كالهواء مثلا حيث يكون بداخل المحطات المخصصة للسكن او البدلات , فسيكون اول جوب هو الكوكب الاحمر او المريخ وغيره من الكواكب القريبة , وذلك بسبب عدة عوامل يتسم بها هذا الكوكب , وقد كتبنا بالفعل مقالة لهذا الكوكب الرائع والذي سيصبح يوماً ما المستقبل البشر [ <a href='https://www.trouko.co/subjects/space/استعمار_المريخ/'> استعمار المريخ </a> ] , ولكن اذا كان المقصود هو كوكب شبيه بالارض او كوكب يتسم بنفس عوامل الارض من هواء و مناخ و جاذبية .. فسنتطرق الى بعض الكواكب ومنها ما يلي .    "
namePpath = "https://www.trouko.co/questions/questions_space/أقرب_كوكب_صالح_للحياة_من_الأرض/"
infSuGuPageOn = '<p>          أسئلة / الفضاء          </p>'+'<i class="material-icons" style="font-size:16px; color: #393e46;">folder</i>'
infSuGuPageTw = '<p>  السبت, 24 اكتوبر 2020  </p>'+'<i class="material-icons" style="font-size:15px; color: #393e46; margin-right: 5px;">date_range</i>'
nameP = namePpath.replace('https://www.trouko.co/',"")
addTitleIpage = document.getElementById(nameP+'_pag_s_262');
addt(titleIn)
function addt(m){
var textDis = adDiscription.slice(0, 80);
var ap = document.createElement('div')
ap.innerHTML ='<div class="img_p_sugg_p"> <a href="'+namePpath+'">'+'<img src="'+adPhoto +'" alt="'+m+'"  class="sub_s_i" style="width:100%"> </a> </div>' + "<div class='sugg_p_t_bo_23'> <a class='s_sub_t' href='"+namePpath+"'>"+m+"</a>"+'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'+'<div class="infoPageSuQu">'+infSuGuPageOn+'</div>'+"<div class='p_t_inf'> <p>"+textDis +"... </p>"+ '<a class="link_t_read_p" href="'+namePpath+'"> قراءة المزيد </a>'+"</div>"+'<div class="infoPageSuQuTw">'+infSuGuPageTw+'</div>'+ "</div>"
addTitleIpage.append(ap)
}