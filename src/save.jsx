import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	// The block props are added to the container div
	const blockProps = useBlockProps.save();

	return (
		<>
		<div {...blockProps}>

			<header className="ud-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<nav className="navbar navbar-expand-lg">
								<a className="navbar-brand" href="/">
									<img src="/assets/images/logo/logo.svg" alt="Logo" />
									ud-header					</a>
								<button className="navbar-toggler" title="Toggle navigation menu">
									<span className="toggler-icon"> </span>
									<span className="toggler-icon"> </span>
									<span className="toggler-icon"> </span>
								</button>

								<div className="navbar-collapse">
									<ul id="nav" className="navbar-nav mx-auto">
										<li className="nav-item">
											<a className="ud-menu-scroll" href="/#home">
												Cris
											</a>
										</li>
										<li className="nav-item">
											<a className="ud-menu-scroll" href="/#features">
												Isaac
											</a>
										</li>
										<li className="nav-item">
											<a className="ud-menu-scroll" href="/#about">
												About
											</a>
										</li>
										<li className="nav-item">
											<a className="ud-menu-scroll" href="/pricing">
												Pricing
											</a>
										</li>
										<li className="nav-item">
											<a className="ud-menu-scroll" href="/#target_audience">
												Target audience
											</a>
										</li>
										<li className="nav-item">
											<a className="ud-menu-scroll" href="/#contact">
												Contact
											</a>
										</li>
										<li className="nav-item">
											<a className="ud-menu-scroll" href="/posts">
												Posts
											</a>
										</li>
										<li className="nav-item nav-item-has-children">
											<a href="javascript:void(0)">Language</a>
											<ul className="ud-submenu show">
												<li className="ud-submenu-item">
													<a className="ud-submenu-link" href="/">
														English
													</a>
												</li>
												<li className="ud-submenu-item">
													<a className="ud-submenu-link" href="/fr">
														Français
													</a>
												</li>
												<li className="ud-submenu-item">
													<a className="ud-submenu-link" href="/nb-NO">
														Norsk bokmål
													</a>
												</li>
												<li className="ud-submenu-item">
													<a className="ud-submenu-link" href="/pt-BR">
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
