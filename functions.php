<?php
// Função para remover o estilo de margem do bloco group
function ls_header_remove_block_margin() {
    wp_enqueue_style( 'ls-header-style', get_stylesheet_uri() );
    wp_add_inline_style( 'ls-header-style', '
        .wp-block-group {
            margin-top: 0;
            margin-bottom: 0;
        }
    ' );
}
add_action( 'wp_enqueue_scripts', 'ls_header_remove_block_margin' );

// //
// function ls_header_enqueue_bootstrap() {
//     // Enqueue Bootstrap CSS
//     wp_enqueue_style( 'bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css', array(), '5.3.0' );

//     // Enqueue Bootstrap JS
//     wp_enqueue_script( 'bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.3.0', true );
// }

// add_action( 'wp_enqueue_scripts', 'ls_header_enqueue_bootstrap' );
