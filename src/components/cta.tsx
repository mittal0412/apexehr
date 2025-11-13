import styles from "../styles/Cta.module.scss";
import Image from "next/image";

export default function HeroBlueSection() {
	return (
		<section className={styles.sectionRoot}>
			{/* Decorative geometric accent lines */}

			<div className={styles.bgAccent}>
				<Image src="/cta-bg.svg" alt="ApexEHR CTA" width={856} height={827} />
			</div>

			<div className={styles.innerContent}>
				<div className={styles.heading}>
					Experience the
					<br />
					Future of Healthcare
					<br />
					with ApexEHR
				</div>
				<div className={styles.actions}>
					<button className={styles.ctAction}>
						<span className={styles.ctaIcon}>
							<Image src="/arrow-right.png" alt="ApexEHR CTA" width={9} height={9} />
						</span>
						<span>Get started</span>
					</button>

					<button className={styles.secondaryCta}>
						<span className={styles.ctaIcon}>
							<Image src="/demo-icon.svg" alt="ApexEHR CTA" width={9} height={9} />
						</span>
						Request a demo
					</button>
				</div>
			</div>
		</section>
	);
}
