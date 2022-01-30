 $(document).ready(function () {
        $('.toggle-sidebar-btn').click(function() {
            var toggle_sidebar = $('body').hasClass('toggle-sidebar');
            console.log(toggle_sidebar)
            localStorage.setItem('toggle_sidebar', toggle_sidebar);
        });
        var toggle_sidebar = localStorage.getItem('toggle_sidebar'); 
        if (toggle_sidebar=='true') {
            $('body').addClass('toggle-sidebar');
        }
})
