import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	// The block props are added to the container div
	const blockProps = useBlockProps.save();
	// test scroll ,if scroll > 100px alert
	// Add scroll event listener

	return (
		<>
			<div {...blockProps}>
				<header className="ud-header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<nav className="navbar navbar-expand-lg">
									<a className="navbar-brand" href="/">
										{/* // Insert the src/assets/images/logo/logo image */}
										<img
											src="https://libresign.coop/assets/images/logo/logo.svg"
											alt="logo"
											className = "img-fluid"
										/>
									</a>
									<button className="navbar-toggler " title="Toggle navigation menu">
										<span className="toggler-icon"> </span>
										<span className="toggler-icon"> </span>
										<span className="toggler-icon"> </span>
									</button>

									<div className="navbar-collapse">
										{/* <InnerBlocks.Content /> */}
										<ul id="nav" className = "navbar-nav mx-auto">
											<li className = "nav-item">

												<a className = "ud-menu-scroll"
												target = "_self"
												href="https://libresign.coop/#home">
													Home
												</a>
											</li>
											<li className = "nav-item">
												<a className = "ud-menu-scroll"
												target = "_self"
												href="https://libresign.coop/#features">
													Features
												</a>
											</li>
											<li className = "nav-item">
												<a className="ud-menu-scroll" target = "_self"  href="https://libresign.coop/#about">
													About
												</a>
											</li>
											<li className = "nav-item">
												<a className = "ud-menu-scroll" target = "_self"  href="https://woocommerce.libresign.coop/?post_type=product">
													Pricing
												</a>
											</li>
											<li className = "nav-item">
												<a className = "ud-menu-scroll"  target = "_self" href="https://libresign.coop/#target_audience">
													Target audience
												</a>
											</li>
											<li className = "nav-item">
												<a className = "ud-menu-scroll"  target = "_self" href="https://libresign.coop/#contact">
													Contact
												</a>
											</li>
											<li className = "nav-item">
												<a className = "ud-menu-scroll"  target = "_self" href="https://libresign.coop/posts">
													Posts
												</a>
											</li>
											<li className = "nav-item nav-item-has-children">
												<a href = "javascript:void(0)">Language</a>
												<ul className = "ud-submenu">
													<li className = "ud-submenu-item">
														<a className = "ud-submenu-link" target = "_self"  href="/">
															English
														</a>
													</li>
													<li className = "ud-submenu-item">
														<a className = "ud-submenu-link" target = "_self"  href="/fr">
															Français
														</a>
													</li>
													<li className = "ud-submenu-item">
														<a className = "ud-submenu-link" target = "_self"  href="/nb-NO">
															Norsk bokmål
														</a>
													</li>
													<li className = "ud-submenu-item">
														<a className = "ud-submenu-link" target = "_self"  href="/pt-BR">
															Português Brasil
														</a>
													</li>
												</ul>
											</li>
										</ul>
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
