"use client";

import { useRef, useState, useEffect } from "react";
import styles from "../styles/Dashboardtabs.module.scss";
import Image from "next/image";

const items = [
	{
		label: "Efficiency",
		key: "efficiency",
		desc: "Automate administrative tasks and focus on patient care.",
		imgSrc: "/images/efficiency.jpg",
		imgAlt: "Efficiency",
	},
	{
		label: "Custom Dashboards",
		key: "custom-dashboards",
		desc: "Personalize workflows for each specialty.",
		imgSrc: "/images/custom-dashboards.jpg",
		imgAlt: "Custom Dashboards",
	},
	{
		label: "Security & Compliance",
		key: "security",
		desc: "Data security and compliance made simple and robust for every stakeholder.",
		imgSrc: "/images/security-compliance.jpg",
		imgAlt: "Security & Compliance",
	},
];

export default function DashboardSection() {
	const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [activeIdx, setActiveIdx] = useState(1); // default active "Custom Dashboards"
	const [barTop, setBarTop] = useState(0);

	useEffect(() => {
		const el = itemRefs.current[activeIdx];
		if (el) setBarTop(el.offsetTop + 50);
	}, [activeIdx]);

	// Scroll content panel when activeIdx changes
	useEffect(() => {
		contentRefs.current[activeIdx]?.scrollIntoView({ behavior: "smooth", block: "start" });
	}, [activeIdx]);

	return (
		<section className={styles.sectionRoot}>
			{/* Left Sidebar */}
			<aside className={styles.sidebarRoot}>
				<div className={styles.verticalLine} />
				<div className={styles.activeBar} style={{ top: barTop }} />
				<nav className={styles.list}>
					{items.map((item, idx) => (
						<button
							key={item.key}
							ref={(el) => (itemRefs.current[idx] = el)}
							onClick={() => setActiveIdx(idx)}
							className={`${styles.item} ${activeIdx === idx ? styles.active : ""}`}
							aria-current={activeIdx === idx ? "true" : "false"}
						>
							{item.label}
						</button>
					))}
				</nav>
			</aside>

			{/* Right Content Panels */}
			<main className={styles.contentArea}>
				{items.map((item, idx) => (
					<article
						key={item.key}
						ref={(el) => (contentRefs.current[idx] = el)}
						className={styles.sectionPanel}
						tabIndex={-1}
					>
						<h3>{item.label}</h3>
						<p style={{ color: "#5e6473", marginBottom: "1.6rem" }}>{item.desc}</p>
						<Image
							src={item.imgSrc}
							width={440}
							height={210}
							alt={item.imgAlt}
							style={{ borderRadius: "18px" }}
							priority={idx === activeIdx}
						/>
					</article>
				))}
			</main>
		</section>
	);
}
