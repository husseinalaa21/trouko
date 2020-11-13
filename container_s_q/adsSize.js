var ads_cpage_as = document.getElementById("ads_cpage_as")
if(screen.width > 800){
    ads_cpage_as.innerHTML = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         style="display:inline-block;width:728px;height:90px"
         data-ad-client="ca-pub-8002456001478908"
         data-ad-slot="3163863585"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`;
}
if(screen.width < 800){
    ads_cpage_as.innerHTML = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         style="display:inline-block;width:300px;height:100px"
         data-ad-client="ca-pub-8002456001478908"
         data-ad-slot="4672138952"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`;
}