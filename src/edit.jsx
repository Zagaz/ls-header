import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

export default function Edit() {
	const ALLOWED_BLOCKS = ["core/navigation"];
	const MENU = [["core/navigation"]];
	return (
		<>

			<div {...useBlockProps()}>
				<p>sd</p>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={MENU}
					templateLock="all"
				/>
			</div>
		</>
	);
}
