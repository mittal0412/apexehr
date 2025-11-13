import styles from "../styles/Footer.module.scss";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className={styles.footerRoot}>
			<div className={styles.logoBlurSection}>
				<div className={styles.logoBlur}>ApexEHR</div>
				<div className={styles.blurImage}>
					<Image src="/footer-blur.png" alt="ApexEHR logo blur" width={953} height={318} />
				</div>
			</div>
			<div className={styles.divider} />
			<div className={styles.upper}>
				<div className={styles.leftCol}>
					<div style={{ fontSize: "0.97rem", color: "#23253b" }}>
						Experience the Future of Healthcare with ApexEHR
					</div>
					<div className={styles.ctaRow}>
						<button className={styles.ctAction}>
							<span className={styles.ctaIcon}>
								<Image src="/arrow-right.png" alt="ApexEHR CTA" width={9} height={9} />
							</span>
							<span>Get started</span>
						</button>

						<button className={styles.secondaryCta}>
							<span className={styles.ctaIcon}>
								<Image src="/demo-icon-dark.svg" alt="ApexEHR CTA" width={9} height={9} />
							</span>
							Request a demo
						</button>
					</div>
				</div>
				<div className={styles.rightColWrap}>
					{/* Quick Links */}
					<div>
						<div className={styles.colTitle}>Quick Links</div>
						<ul className={styles.linkList}>
							<li className={styles.linkItem}>Home</li>
							<li className={styles.linkItem}>Features</li>
							<li className={styles.linkItem}>Pricing</li>
							<li className={styles.linkItem}>Contact</li>
						</ul>
					</div>
					{/* Contacts */}
					<div>
						<div className={styles.colTitle}>Contacts</div>
						<ul className={styles.contactList}>
							<li>
								1-6-2 Misuji, Taito-ku
								<br />
								Tokyo 111-0055
							</li>
							<li>+9 999 999 9999</li>
							<li>
								<a href="mailto:apex@gmail.com" style={{ color: "#23253b" }}>
									apex@gmail.com
								</a>
							</li>
						</ul>
					</div>
					{/* Social */}
					<div>
						<div className={styles.colTitle}>Social</div>
						<div className={styles.socialList}>
							<a href="#" className={styles.socialBtn} aria-label="Facebook">
								<Image src="/facebook.svg" alt="Facebook logo blur" width={45} height={45} />
							</a>
							<a href="#" className={styles.socialBtn} aria-label="Twitter">
								<Image src="/telegram.svg" alt="Telegram logo blur" width={45} height={45} />
							</a>
							<a href="#" className={styles.socialBtn} aria-label="LinkedIn">
								<Image src="/linkedin.svg" alt="Linkedin logo blur" width={45} height={45} />
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <div className={styles.divider} /> */}
			<div className={styles.lower}>
				<div className={styles.legalLinks}>
					<span>Terms of use</span>
					<span>Privacy Policy</span>
				</div>

				<span>&copy; ApexEHR All Rights Reserved 2023</span>
			</div>
		</footer>
	);
}
