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
											src={window.udSettings.themeUrl + "/assets/images/logo/logo.svg"}
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
										<ul id="nav" class="navbar-nav mx-auto">
											<li class="nav-item">
												<a class="ud-menu-scroll" href="https://libresign.coop/#home">
													Home
												</a>
											</li>
											<li class="nav-item">
												<a class="ud-menu-scroll" href="https://libresign.coop/#features">
													Features
												</a>
											</li>
											<li class="nav-item">
												<a class="ud-menu-scroll" href="https://libresign.coop/#about">
													About
												</a>
											</li>
											<li class="nav-item">
												<a class="ud-menu-scroll" href="https://libresign.coop/pricing">
													Pricing
												</a>
											</li>
											<li class="nav-item">
												<a class="ud-menu-scroll" href="https://libresign.coop/#target_audience">
													Target audience
												</a>
											</li>
											<li class="nav-item">
												<a class="ud-menu-scroll" href="https://libresign.coop/#contact">
													Contact
												</a>
											</li>
											<li class="nav-item">
												<a class="ud-menu-scroll" href="https://libresign.coop/posts">
													Posts
												</a>
											</li>
											<li class="nav-item nav-item-has-children">
												<a href="javascript:void(0)">Language</a>
												<ul class="ud-submenu">
													<li class="ud-submenu-item">
														<a class="ud-submenu-link" href="/">
															English
														</a>
													</li>
													<li class="ud-submenu-item">
														<a class="ud-submenu-link" href="/fr">
															Français
														</a>
													</li>
													<li class="ud-submenu-item">
														<a class="ud-submenu-link" href="/nb-NO">
															Norsk bokmål
														</a>
													</li>
													<li class="ud-submenu-item">
														<a class="ud-submenu-link" href="/pt-BR">
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
