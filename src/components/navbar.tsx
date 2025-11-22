"use client";

import { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Image src="/logo.svg" alt="ApexEHR Logo" width={277} height={60} />
				{/* Apex<span style={{ color: "#49b6ee" }}>EHR</span> */}
			</div>
			<div className={styles.navLinks}>
				<a href="#home" className={styles.link}>
					Home
				</a>
				<a href="#features" className={styles.link}>
					Features
				</a>
				<a href="#pricing" className={styles.link}>
					Pricing
				</a>
				<a href="#contact" className={styles.link}>
					Contact
				</a>
			</div>
			<div className={styles.ctas}>
				<button className={"secondary-action"}>
					<span className={"cta-icon"}>
						<Image src="/demo-icon.svg" alt="ApexEHR CTA" width={9} height={9} />
					</span>
					Request a demo
				</button>
				<button className={"primary-action"}>
					<span className={"cta-icon"}>
						<Image src="/arrow-right.png" alt="ApexEHR CTA" width={9} height={9} />
					</span>
					<span>Get started</span>
				</button>
			</div>
			<button className={styles.menuToggle} onClick={() => setMenuOpen((v) => !v)}>
				☰
			</button>
			{menuOpen && (
				<div className={styles.mobileMenu}>
					<a href="#features" className={styles.link} onClick={() => setMenuOpen(false)}>
						Features
					</a>
					<a href="#solutions" className={styles.link} onClick={() => setMenuOpen(false)}>
						Solutions
					</a>
					<a href="#contact" className={styles.link} onClick={() => setMenuOpen(false)}>
						Contact
					</a>
					<button className={"secondary-action"} onClick={() => setMenuOpen(false)}>
						<span className={"cta-icon"}>
							<Image src="/demo-icon.svg" alt="ApexEHR CTA" width={9} height={9} />
						</span>
						Request a demo
					</button>
					<button
						className={"primary-action"}
						style={{ display: "block", width: "100%" }}
						onClick={() => setMenuOpen(false)}
					>
						Get started
					</button>
				</div>
			)}
		</nav>
	);
}
