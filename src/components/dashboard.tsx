"use client";

import { useRef, useState, useEffect } from "react";
import styles from "../styles/Dashboardtabs.module.scss";
import Image from "next/image";

const items = [
	{
		label: "Efficiency",
		key: "efficiency",
		desc: (
			<>
				Automate administrative
				<br />
				tasks <span>and focus on patient care.</span>
			</>
		),
		imgSrc: "/dashboards/efficiency-main.png",
		imgAlt: "Efficiency",
		icon: "/dashboards/efficiency.svg",
		width: 764,
		height: 586,
		className: "efficiencyImage",
	},
	{
		label: "Custom Dashboards",
		key: "custom-dashboards",
		desc: (
			<>
				Personalize workflows
				<br /> <span>for each specialty.</span>
			</>
		),
		imgSrc: "/dashboards/custom-dashboard-main.png",
		imgAlt: "Custom Dashboards",
		icon: "/dashboards/custom-dashboards.svg",
		width: 989,
		height: 946,
		className: "customDashboards",
	},
	{
		label: "Security & Compliance",
		key: "security",
		desc: (
			<>
				End-to-end encryption,
				<br />
				<span>HIPAA-compliant.</span>{" "}
			</>
		),
		imgSrc: "/dashboards/security-compliance-main.png",
		imgAlt: "Security & Compliance",
		icon: "/dashboards/security-icon.svg",
		width: 1160,
		height: 705,
		className: "securityImage",
	},
];

export default function DashboardSection() {
	const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
	const sectionRef = useRef<HTMLElement | null>(null);

	const [activeIdx, setActiveIdx] = useState(1); // default active "Custom Dashboards"
	const [barTop, setBarTop] = useState(0);
	const [sectionHeight, setSectionHeight] = useState(0);

	const barHeight = 230;
	const numItems = items.length;
	const isFirstRender = useRef(true);

	// Get section height when component mounts and on window resize
	useEffect(() => {
		function updateSectionHeight() {
			if (sectionRef.current) {
				const height = sectionRef.current.getBoundingClientRect().height;
				setSectionHeight(height);
			}
		}

		updateSectionHeight();
		window.addEventListener("resize", updateSectionHeight);
		return () => window.removeEventListener("resize", updateSectionHeight);
	}, []);

	// Calculate active bar top position based on activeIdx, sectionHeight, and barHeight
	useEffect(() => {
		if (!sectionHeight) return;

		const navItemHeight = sectionHeight / numItems;
		let calculatedTop;

		if (activeIdx === numItems - 1) {
			// Last item: bar bottom touches section bottom
			calculatedTop = sectionHeight - barHeight;
		} else {
			// Center bar vertically relative to nav item
			calculatedTop = navItemHeight * activeIdx + navItemHeight / 2 - barHeight / 2;
			// Prevent overflow beyond bottom
			calculatedTop = Math.min(calculatedTop, sectionHeight - barHeight);
		}

		setBarTop(calculatedTop);
	}, [activeIdx, sectionHeight, numItems]);

	useEffect(() => {
		const mainEl = document.querySelector(`.${styles.contentArea}`);
		if (!mainEl) return;

		const options = {
			root: mainEl,
			rootMargin: "0px",
			threshold: 0.6, // Panel is active when 60% visible
		};

		const observer = new window.IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const idx = contentRefs.current.findIndex((ref) => ref === entry.target);
					if (idx !== -1) {
						setActiveIdx(idx);
					}
				}
			});
		}, options);

		contentRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	// Scroll content panel when activeIdx changes, with smooth scroll
	useEffect(() => {
		console.log(isFirstRender.current, "isFirstRender");
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		contentRefs.current[activeIdx]?.scrollIntoView({ behavior: "smooth", block: "start" });
	}, [activeIdx]);

	return (
		<section className={styles.sectionRoot + " container"} ref={sectionRef}>
			{/* Left Sidebar */}
			<aside className={styles.sidebarRoot}>
				<div className={styles.dot}></div>
				<div className={styles.verticalLine} />
				<div className={styles.activeBar} style={{ top: barTop, height: `${barHeight}px` }} />
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

			{/* Right Content Panels: Set max height & overflow scroll */}
			<main
				className={styles.contentArea}
				style={{ maxHeight: "1080px", overflowY: "auto", scrollBehavior: "smooth" }}
			>
				{items.map((item, idx) => (
					<article
						key={item.key}
						ref={(el) => (contentRefs.current[idx] = el)}
						className={styles.sectionPanel}
						tabIndex={-1}
					>
						<div className={styles.imgTitle}>
							<Image src={item.icon} width={28} height={28} alt={item.imgAlt} />
							<h3>{item.label}</h3>
						</div>
						<div className={styles.imageWrapper}>
							<Image
								src={item.imgSrc}
								width={item.width}
								height={item.height}
								alt={item.imgAlt}
								priority={idx === activeIdx}
								style={{ maxWidth: "100%", height: "auto" }}
								className={styles[item.className]}
							/>
						</div>

						<p>{item.desc}</p>
					</article>
				))}
			</main>
		</section>
	);
}
