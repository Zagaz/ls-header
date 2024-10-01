import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";
import { useEffect } from "react";

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

	    // Add scroll event listener inside useEffect
		useEffect(() => {
			const handleScroll = () => {
				if (window.scrollY > 100) {
					console.log('scroll ok');
				}
			};

			// Attach scroll event listener
			window.addEventListener("scroll", handleScroll);

			// Cleanup event listener on component unmount
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}, []);
	return (
		<>

			<div {...useBlockProps()}>

				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={MENU}
					templateLock="all"
				/>
			</div>
		</>
	);
}
