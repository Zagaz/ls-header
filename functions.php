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


function test(){
	echo "teste";
	die();
}

add_action("init","test");
