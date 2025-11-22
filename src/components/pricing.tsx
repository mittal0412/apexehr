import styles from "../styles/Pricing.module.scss";

const plans = [
	{
		name: "Basic",
		price: 100,
		summary: "Essential features for small practices at a great value.",
		features: ["Increased rating", "Verified icon", "Transaction priority", "For employers & freelancers"],
	},
	{
		name: "Professional",
		price: 200,
		summary: "Essential features for small practices at a great value.",
		features: [
			"Increased rating",
			"Verified icon",
			"Transaction priority",
			"Transaction priority",
			"Transaction priority",
			"For employers & freelancers",
			"For employers & freelancers",
		],
	},
	{
		name: "Enterprise",
		price: 300,
		summary: "Essential features for small practices at a great value.",
		features: ["Increased rating", "Verified icon", "Transaction priority", "For employers & freelancers"],
	},
];

export default function PricingSection() {
	return (
		<section className={styles.sectionRoot + " container"}>
			<div className={"section-badge"}>PRICING</div>
			<div className={"main-title"}>
				Affordable Pricing <br /> <span>for Every Practice</span>
			</div>

			<div className={styles.pricingGrid}>
				<img src="/bg-lines.svg" alt="background lines" className={styles.bgLines} />
				{plans.map((plan, idx) => (
					<div className={styles.card} key={plan.name}>
						<div className={styles.cardTitle}>{plan.name}</div>
						<div className={styles.priceRow}>
							{plan.price}
							<span>$</span> <span className={styles.per}>/ Per Month</span>
						</div>
						<div className={styles.cardSummary}>{plan.summary}</div>
						<div className={styles.divider}></div>
						<ul className={styles.cardList}>
							{plan.features.map((f, i) => (
								<li key={i}>{f}</li>
							))}
						</ul>
						<button className={styles.getStartedBtn}>Get started</button>
					</div>
				))}
			</div>
		</section>
	);
}
