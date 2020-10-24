<?php
/**
 * Plugin Name: Post Table of Contents
 * Plugin URI: https://itsjustanthony.com/
 * Description: Add a table of contents to your posts with a shortcode.
 * Version: 0.0.1
 * Author: Anthony Corbelli (anthony@itsjustanthony.com)
 * Author URI: https://itsjustanthony.com
 * Text Domain: ija-ptoc-shortcode
 * Domain Path: /i18n/languages/
 *
 */

// In functions.php, or your plugin files

function ija_ptoc_shortcode_callback($attributes = [], $content = '') {
    return "
<div class='ija-ptoc-container'>
    <div class='ija-ptoc'>
        <ul class='ija-ptoc-list'></ul>
    </div>
    <div class='ija-ptoc-content'>
        {$content}
    </div>
</div>
";
}
add_shortcode('ija-ptoc', 'ija_ptoc_shortcode_callback');


function ija_ptoc_wp_enqueue_scripts_callback() {
    wp_enqueue_script('ija-ptoc', plugin_dir_url( __FILE__ ) . 'ija-ptoc.js', array('jquery'));
}

add_action('wp_enqueue_scripts', 'ija_ptoc_wp_enqueue_scripts_callback');
