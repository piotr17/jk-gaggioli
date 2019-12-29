var $grid = $('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item',
    percentPosition: true,
    packery: {
        columnWidth: '.grid-sizer'
    },
    sortBy: 'original-order'
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});
document.querySelectorAll(".grid img").forEach(element => {
    const elem = element;
    function reflow(){
        $grid.isotope('layout');
    }

    new imagesLoaded(elem);
    elem.addEventListener("lazyloaded", reflow);
});