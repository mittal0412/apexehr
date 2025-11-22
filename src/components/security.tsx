import styles from "../styles/Security.module.scss";
import Image from "next/image";

export default function SecuritySection() {
	return (
		<section className={styles.sectionRoot + " container"}>
			<div className={"main-title blue"}>
				Industry-Leading Security
				<br />
				<span className={styles.highlight}>HIPAA Compliance</span>
			</div>
			<div className={styles.subdesc}>
				Your patient data is safeguarded by enterprise-level encryption, robust access controls, and
				HIPAA-compliant practices.
			</div>
			<div style={{ textAlign: "center" }}>
				<Image
					src="/hippa-compliance.png"
					alt="Specialties"
					width={1476}
					height={682}
					style={{ maxWidth: "70%", height: "auto", margin: "auto" }}
					priority
				/>
			</div>
		</section>
	);
}
