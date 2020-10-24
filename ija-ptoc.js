/**
 * {wp-plugins}/ija-ptoc/ija-ptoc.js
 *
 * (function($){ ... })(jQuery);
 */
(function($) {
    function ija_ptoc_generate_toc(containerElement) {

        // Grab our container from the param or grab all containers if called without one
        var toc_container = containerElement || $('.ija-ptoc-container');

        if (!toc_container.length) { return; }
        if (toc_container.length > 1) {
            // If we're dealing with many on a page we need to handle them individually
            // .each is a jQuery function for looping over a jQuery collection
            // https://api.jquery.com/jquery.each/
            toc_container.each(function (container) {
                ija_toc_generate_toc(container);
            });
            return;
        }

        // This is the list container, any element with class 'ija-ptoc'
        var toc = $('.ija-ptoc');

        // This is the list, what we'll append to
        var toc_list = toc.children('.ija-ptoc-list');

        // Our content, we use .children() for performance since we know that
        // .ija-ptoc-content is a direct child of .ija-ptoc-container
        var toc_content = toc_container.children('.ija-ptoc-content');

        // Finally, the actual headings found in the content.
        var subtitles = toc_content.find('h1, h2, h3, h4');


        // Loop through every heading
        for (var i = 0; i < subtitles.length; i++) {
            // Create the anchor for us to link to
            subtitles[i].setAttribute('id', `${subtitles[i].textContent.toLowerCase().replace(' ', '-')}`);

            // Create the link and append it to our list
            toc_list.append(`<li class="ija-ptoc-list-item"><a href='#${subtitles[i].textContent.toLowerCase().replace(' ', '-')}' >${subtitles[i].textContent}</a></li>`);
        }

    }

    // When the DOM is ready to operate on, generally a reliable place to start working with DOM elements
    $(document).ready(function(){

        // Grab our container
        var toc_container = $('.ija-ptoc-container');

        // .length will be 0 if it's not found, 0 evaluates to false
        if (toc_container.length) {

            // Once we know we have at least one toc container it's time to operate on it.
            ija_ptoc_generate_toc(toc_container);
        }
    });
})(jQuery);