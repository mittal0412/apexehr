"use client"; // This directive marks the file as a Client Component

import styles from "../styles/Providersection.module.scss";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ProvidersSection() {
	useEffect(() => {
		AOS.init({
			// duration : 5000
		});
	}, []);
	return (
		<section className={styles.providers}>
			{/* Floating icon bubbles */}

			<div data-aos="zoom-in" className={`${styles.iconBubble} ${styles.icon1}`}>
				<img src="/icon-1.svg" alt="dashboard icon" />
			</div>
			<div data-aos="zoom-in" className={`${styles.iconBubble} ${styles.icon2}`}>
				<img src="/icon-2.svg" alt="user icon" />
			</div>
			<div data-aos="zoom-in" className={`${styles.iconBubble} ${styles.icon3}`}>
				<img src="/icon-3.svg" alt="calendar icon" />
			</div>
			<div data-aos="zoom-in" className={`${styles.iconBubble} ${styles.icon4}`}>
				<img src="/icon-4.svg" alt="chat icon" />
			</div>
			<div data-aos="zoom-in" className={`${styles.iconBubble} ${styles.icon5}`}>
				<img src="/icon-5.svg" alt="lab icon" />
			</div>
			<div data-aos="zoom-in" className={`${styles.iconBubble} ${styles.icon6}`}>
				<img src="/icon-6.svg" alt="note icon" />
			</div>
			<div className={styles.badge}>ABOUT APEX</div>
			<h2 className={styles.heading}>
				Empowering Today’s <span>Healthcare Providers</span>
			</h2>
			<div className={styles.subheading}>
				ApexEHR is an intuitive, all-in-one solution that streamlines healthcare operations, improves patient
				outcomes, and ensures data security—all while integrating seamlessly with existing systems.
			</div>

			<div className={styles.metricsPanel}>
				<Image
					src="/providers.png"
					alt="Providers Icon"
					width={1229}
					height={779}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
		</section>
	);
}
