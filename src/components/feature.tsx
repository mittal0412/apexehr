import styles from "../styles/Feature.module.scss";
import Image from "next/image";

// Define grid layout by mapping (column, row spans)
const gridSettings = [
	// [colStart, colEnd, rowStart, rowEnd, className, content]
	[
		1,
		2,
		1,
		3,
		"",
		<>
			Doctor Dashboard
			<div className={styles.stat}>56%</div>
		</>,
	],
	[
		1,
		2,
		3,
		5,
		"imgCard",
		<>
			<Image src="/features/lab.png" alt="Integrated Lab Results" width={352} height={470} />
			<div className="label">Integrated Lab Results</div>
		</>,
	],
	[
		2,
		3,
		1,
		3,
		"imgCard",
		<>
			<Image src="/features/lab.png" alt="Revenue Cycle" width={260} height={88} />
			<div className="label">Revenue Cycle Management</div>
		</>,
	],
	[2, 3, 3, 4, "", "Advanced Reporting & Analytics"],
	[
		2,
		3,
		4,
		5,
		"imgCard",
		<>
			<Image src="/features/lab.png" alt="e-Prescription Management" width={260} height={88} />
			<div className="label">e-Prescription Management</div>
		</>,
	],
	[3, 4, 1, 2, "", "Patient Portal"],
	[
		3,
		4,
		2,
		3,
		"imgCard",
		<>
			<Image src="/features/lab.png" alt="Appointment Scheduling" width={260} height={88} />
			<div className="label">Appointment Scheduling</div>
		</>,
	],
	[3, 4, 3, 4, "blueCard", "Clinical Decision Support"],
	[3, 4, 4, 5, "", "Medication Management"],
	[4, 5, 1, 2, "blueCard", "Telemedicine Integration"],
	[
		4,
		5,
		2,
		4,
		"",
		<>
			<div>
				Health Information Exchange
				<br />
				(HIE) Integration
			</div>
			<div style={{ marginTop: "0.5em", fontWeight: 400, fontSize: "0.9em" }}>Patient Communication Hub</div>
		</>,
	],
	[4, 5, 4, 5, "", "Task Management"],
];

export default function FeatureMasonry() {
	return (
		<section className={styles.sectionRoot}>
			<div className={styles.badge}>FOR PROVIDERS</div>
			<div className={styles.heading}>
				Discover Powerful Features Tailored
				<br />
				<span className={styles.subheading}>to Your Needs</span>
			</div>
			<div className={styles.tetrisGrid}>
				{gridSettings.map(([colStart, colEnd, rowStart, rowEnd, className, content], i) => (
					<div
						key={i}
						className={`${styles.card} ${className && styles[className]}`}
						style={{
							gridColumn: `${colStart} / ${colEnd}`,
							gridRow: `${rowStart} / ${rowEnd}`,
						}}
					>
						{content}
					</div>
				))}
			</div>
		</section>
	);
}
