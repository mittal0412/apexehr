import styles from "../styles/Solution.module.scss";
import Image from "next/image";

export default function SpecialtySolutionsSection() {
	return (
		<section className={styles.sectionRoot + " container"}>
			<div className={"section-badge"}>FOR PROVIDERS</div>
			<div className={"main-title"}>
				Tailored Solutions for <span className="light">Every Specialty</span>
			</div>
			<div className={"sub-title"}>
				ApexEHR adapts to the specific needs of various
				<br /> specialties, ensuring every practice benefits from <br /> personalized tools and workflows.
			</div>
			<div className={styles.contentRow}>
				{/* Specialties as image */}
				<div className={styles.specialtyImagePanel}>
					<Image
						style={{ maxWidth: "80%", height: "auto", margin: "auto" }}
						src="/tailored-solution.png"
						alt="Specialties"
						width={1142}
						height={624}
						priority
					/>
				</div>
			</div>
		</section>
	);
}
