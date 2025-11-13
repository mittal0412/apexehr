import styles from "../styles/Testimonials.module.scss";

export default function TestimonialsSection() {
	return (
		<section className={styles.sectionRoot}>
			<div className={styles.badge}>
				<span>1500+</span> active users
			</div>
			<div className={styles.heading}>Trusted by Healthcare</div>
			<div className={styles.subheading}>Providers Worldwide</div>
			<div className={styles.parentGrid}>
				<img src="/testimonial-line.svg" alt="background lines" className={styles.bgLines} />

				<div className={styles.grid}>
					{/* Top Left Card */}
					<div className={`${styles.testimonial} ${styles.leftTop}`}>
						<div className={styles.quoteMark}>
							<svg
								width="34"
								height="28"
								viewBox="0 0 34 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.23346 0H14.8171L7.93774 28H0L4.23346 0ZM23.4163 0H34L27.1206 28H19.1829L23.4163 0Z"
									fill="#A9ACB2"
								/>
							</svg>
						</div>
						<div className={styles.quoteText}>
							ApexEHR’s reporting tools give us deep insights into patient outcomes and practice
							performance, allowing for better clinical decisions.
						</div>
						<div className={styles.attribution}>
							Dr. Raj Patel
							<div className={styles.attributionSmall}>Oncologist</div>
						</div>
					</div>
					{/* Top Right Card */}
					<div className={`${styles.testimonial} ${styles.rightTop}`}>
						<div className={styles.quoteText}>
							“ApexEHR has transformed our clinic’s efficiency. We can now focus more on patient care,
							thanks to its intuitive design.”
						</div>
						<div className={styles.attribution}>
							Dr. Emily Zhang
							<div className={styles.attributionSmall}>Pediatrician</div>
						</div>
					</div>
				</div>
				<div className={styles.grid}>
					{/* Bottom Left Card */}
					<div className={`${styles.testimonial} ${styles.leftBottom}`}>
						<div className={styles.quoteText}>
							“The customizable dashboard is a game-changer, letting us tailor workflows specifically for
							cardiology.”
						</div>
						<div className={styles.attribution}>
							Dr. Michael Davis
							<div className={styles.attributionSmall}>Cardiologist</div>
						</div>
					</div>
					{/* Big Blue Card */}
					<div className={`${styles.testimonial} ${styles.rightBig}`}>
						<div className={styles.quoteMark}>
							<svg
								width="34"
								height="28"
								viewBox="0 0 34 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.23346 0H14.8171L7.93774 28H0L4.23346 0ZM23.4163 0H34L27.1206 28H19.1829L23.4163 0Z"
									fill="#FFFFFF"
								/>
							</svg>
						</div>
						<div className={styles.quoteText}>
							With ApexEHR’s streamlined billing and patient portal, we’ve significantly reduced
							administrative workload and improved patient satisfaction.
						</div>
						<div className={styles.attribution}>
							Dr. Sarah Thompson
							<div className={styles.attributionSmall}>Dermotologist</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
