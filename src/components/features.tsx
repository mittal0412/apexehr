"use client"; // This directive marks the file as a Client Component

import styles from "../styles/Feature.module.scss";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
	useEffect(() => {
		AOS.init({
			// duration : 5000
		});
	}, []);
	return (
		<>
			<section className={styles.featuresSection}>
				<div className={styles.badge}>FOR PROVIDERS</div>
				<div className={styles.heading}>
					Discover Powerful
					<br /> Features Tailored
					<br />
					<span className={styles.subheading}>to Your Needs</span>
				</div>
				<div className={styles.featuresGrid}>
					<div className={styles.dFlexRow}>
						<div data-aos="fade-up" className={styles.cardCol}>
							<div className={`${styles.card} ${styles.card1}`}>
								<h3 className={styles.cardTitle}>Doctor Dashboard</h3>
								{/* <div className={styles.cardImage}>
									<Image src="/features/lab.png" alt="Doctor Dashboard" width={352} height={470} />
								</div> */}
								<div className={styles.otherElements}>
									<div className={styles.textCount}>
										<span>56%</span>
									</div>
									<div className={styles.rotateImage}>
										<Image
											src="/features/rotate.png"
											alt="Doctor Dashboard"
											width={305}
											height={306}
										/>
									</div>
								</div>
							</div>
							<div className={`${styles.card} ${styles.card2}`}>
								<h3 className={styles.cardTitle}>Integrated Lab Results</h3>
								<div className={styles.cardImage}>
									<Image
										src="/features/integrated.png"
										alt="Integrated Lab Results"
										width={352}
										height={300}
									/>
								</div>
								<div className={styles.otherElements}></div>
							</div>
						</div>
						<div data-aos="fade-up" className={styles.cardCol}>
							<div className={`${styles.card} ${styles.card3}`}>
								<h3 className={styles.cardTitle}>Revenue Cycle Management</h3>
								<div className={styles.cardImage}>
									<Image
										src="/features/revenue-cycle.png"
										alt="Revenue Cycle Management"
										width={352}
										height={470}
									/>
								</div>
								<div className={styles.otherElements}></div>
							</div>
							<div className={`${styles.card} ${styles.card4}`}>
								<h3 className={styles.cardTitle}>Advanced Reporting & Analytics</h3>
								<div className={styles.otherElements}>
									<Image
										src="/features/analytics.png"
										alt="Advanced Reporting & Analytics"
										width={240}
										height={256}
									/>
								</div>
							</div>
							<div className={`${styles.card} ${styles.card5}`}>
								<h3 className={styles.cardTitle}>Medication Management</h3>
								<div className={styles.cardImage}>
									<Image
										src="/features/medication.svg"
										alt="Medication Management"
										width={352}
										height={300}
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div className={styles.otherElements}></div>
							</div>{" "}
						</div>
						<div data-aos="fade-up" className={styles.cardCol}>
							<div className={`${styles.card} ${styles.card6}`}>
								<h3 className={styles.cardTitle}>Patient Portal</h3>
								<div className={styles.cardImage}>
									<Image
										src="/features/patient-portal.svg"
										alt="Patient Portal"
										width={352}
										height={300}
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div className={styles.otherElements}></div>
							</div>
							<div className={`${styles.card} ${styles.card7}`}>
								<h3 className={styles.cardTitle}>e-Prescription Management</h3>
								<div className={styles.cardImage}>
									<Image
										src="/features/e-Prescription.png"
										alt="e-Prescription Management"
										width={352}
										height={470}
									/>
								</div>
								<div className={styles.otherElements}></div>
							</div>
							<div className={`${styles.card} ${styles.card8}`}>
								<h3 className={styles.cardTitle}>Task Management</h3>
								{/* <div className={styles.cardImage}></div> */}
								<div className={styles.otherElements}>
									<Image
										src="/features/task-management.png"
										alt="Task Management"
										width={352}
										height={211}
									/>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" className={styles.cardCol}>
							<div className={`${styles.card} ${styles.card9}`}>
								<h3 className={styles.cardTitle}>Appointment Scheduling</h3>
								<div className={styles.cardImage}>
									<Image
										src="/features/appointment-scheduling.png"
										alt="Appointment Scheduling"
										width={352}
										height={470}
									/>
								</div>
								<div className={styles.otherElements}></div>
							</div>
							<div className={`${styles.card} ${styles.card10}`}>
								<h3 className={styles.cardTitle}>Clinical Decision Support</h3>
								<div className={styles.otherElements}>
									<Image
										src="/features/clinical-support.svg"
										alt="Clinical Decision Support"
										width={352}
										height={300}
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
							</div>
							<div className={`${styles.card} ${styles.card11}`}>
								<h3 className={styles.cardTitle}>Health Information Exchange (HIE) Integration</h3>
								<div className={styles.otherElements}>
									<Image
										src="/features/hie-integration.svg"
										alt="Health Information Exchange (HIE) Integration"
										width={352}
										height={470}
									/>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" className={styles.cardCol}>
							<div className={`${styles.card} ${styles.card12}`}>
								<h3 className={styles.cardTitle}>Telemedicine Integration</h3>
								<div className={styles.cardImage}>
									<Image
										src="/features/telemedicine.svg"
										alt="Telemedicine Integration"
										width={352}
										height={470}
									/>
								</div>
								<div className={styles.otherElements}></div>
							</div>
							<div className={`${styles.card} ${styles.card13}`}>
								<h3 className={styles.cardTitle}>Patient Communication Hub</h3>

								<div className={styles.otherElements}>
									<Image
										src="/features/communication-hub.svg"
										alt="Patient Communication Hub"
										width={352}
										height={300}
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Features;
