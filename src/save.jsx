import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	// The block props are added to the container div
	const blockProps = useBlockProps.save();

	// Inner blovcks content
	// This is where the child blocks are rendered
	// The InnerBlocks.Content must be added to the save function

	return (
		<>
			<div
			{...blockProps}
			>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur consectetur magni, magnam facilis architecto rem odio! Sint aliquam expedita dolor tenetur eligendi quos nobis in? Quia maiores ut similique.

					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia fugiat vitae vero sequi repellat repudiandae totam ea omnis atque earum quaerat expedita error, voluptatibus nesciunt iste possimus ipsum animi alias.
				</div>
				
				<header className="ud-header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<nav className="navbar navbar-expand-lg">
									<a className="navbar-brand" href="/">
										<img src="/assets/images/logo/logo.svg" alt="Logo" />
										ud-header{" "}
									</a>
									<button
										className="navbar-toggler"
										title="Toggle navigation menu"
									>
										<span className="toggler-icon"> </span>
										<span className="toggler-icon"> </span>
										<span className="toggler-icon"> </span>
									</button>

									<div className="navbar-collapse">
										<InnerBlocks.Content />


									</div>
								</nav>
							</div>
						</div>
					</div>
				</header>
			</div>

			<InnerBlocks.Content />
		</>
	);
}
