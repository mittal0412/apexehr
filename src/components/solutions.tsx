import styles from "../styles/Solution.module.scss";
import Image from "next/image";

export default function SpecialtySolutionsSection() {
	return (
		<section className={styles.sectionRoot}>
			<div className={styles.badge}>FOR PROVIDERS</div>
			<div className={styles.heading}>
				Tailored Solutions for <span className="light">Every Specialty</span>
			</div>
			<div className={styles.desc}>
				ApexEHR adapts to the specific needs of various
				<br /> specialties, ensuring every practice benefits from <br /> personalized tools and workflows.
			</div>
			<div className={styles.contentRow}>
				{/* Specialties as image */}
				<div className={styles.specialtyImagePanel}>
					<Image
						src="/images/specialties.jpg"
						alt="Specialties"
						width={360}
						height={410}
						className={styles.specialtyImg}
						priority
					/>
				</div>
			</div>
		</section>
	);
}
