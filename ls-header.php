<?php
/**
 * Plugin Name:       LibreSign Header
 * Description:       The header block for LibreSign
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Libre Code
 * Author URI:        https://librecode.coop/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ls-header
 *
 * @package CreateBlock
 */


 //You shall not pass!

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_ls_header_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_ls_header_block_init' );
