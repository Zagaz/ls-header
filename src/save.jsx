import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	// The block props are added to the container div
	const blockProps = useBlockProps.save();

	return (
		<>
		<div {...blockProps}>

			<header class="ud-header">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<nav class="navbar navbar-expand-lg">
								<a class="navbar-brand" href="/">
									<img src="/assets/images/logo/logo.svg" alt="Logo" />
									ud-header					</a>
								<button class="navbar-toggler" title="Toggle navigation menu">
									<span class="toggler-icon"> </span>
									<span class="toggler-icon"> </span>
									<span class="toggler-icon"> </span>
								</button>

								<div class="navbar-collapse">
									<ul id="nav" class="navbar-nav mx-auto">
										<li class="nav-item">
											<a class="ud-menu-scroll" href="/#home">
												Cris
											</a>
										</li>
										<li class="nav-item">
											<a class="ud-menu-scroll" href="/#features">
												Isaac
											</a>
										</li>
										<li class="nav-item">
											<a class="ud-menu-scroll" href="/#about">
												About
											</a>
										</li>
										<li class="nav-item">
											<a class="ud-menu-scroll" href="/pricing">
												Pricing
											</a>
										</li>
										<li class="nav-item">
											<a class="ud-menu-scroll" href="/#target_audience">
												Target audience
											</a>
										</li>
										<li class="nav-item">
											<a class="ud-menu-scroll" href="/#contact">
												Contact
											</a>
										</li>
										<li class="nav-item">
											<a class="ud-menu-scroll" href="/posts">
												Posts
											</a>
										</li>
										<li class="nav-item nav-item-has-children">
											<a href="javascript:void(0)">Language</a>
											<ul class="ud-submenu show">
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
