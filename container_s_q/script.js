(function(w){
    w.addEventListener('load', function(){
        const   btn_left = document.getElementById('btn-left'),
                btn_right = document.getElementById('btn-right'),
                content = document.getElementById('sub_r_s');
        const content_scroll_width = content.scrollWidth;
        let content_scoll_left = content.scrollLeft;
        btn_right.addEventListener('click', () => {
            content_scoll_left += 300;
            if (content_scoll_left >= content_scroll_width) { content_scoll_left = content_scroll_width; }
            content.scrollLeft = content_scoll_left;
        });
        btn_left.addEventListener('click', () => {
            content_scoll_left -= 300;
            if (content_scoll_left <= 0) {
                content_scoll_left = 0;
            }
            content.scrollLeft = content_scoll_left;
        });
    });
})(window);