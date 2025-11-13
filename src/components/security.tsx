import styles from "../styles/Security.module.scss";
import Image from "next/image";

export default function SecuritySection() {
	return (
		<section className={styles.sectionRoot}>
			<div className={styles.heading}>
				Industry-Leading Security
				<br />
				&nbsp;<span className={styles.highlight}>HIPAA Compliance</span>
			</div>
			<div className={styles.subdesc}>
				Your patient data is safeguarded by enterprise-level encryption, robust access controls, and
				HIPAA-compliant practices.
			</div>
			<div>
				<Image
					src="/images/specialties.jpg"
					alt="Specialties"
					width={360}
					height={410}
					className={styles.specialtyImg}
					priority
				/>
			</div>
		</section>
	);
}
