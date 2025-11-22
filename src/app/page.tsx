import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "@/components/navbar";
import ProvidersSection from "@/components/provider";
import DashboardTabs from "@/components/dashboard";
import FeaturesGridSection from "@/components/feature";
import SpecialtySolutionsSection from "@/components/solutions";
import SecuritySection from "@/components/security";
import TestimonialsSection from "@/components/testimonials";
import PricingSection from "@/components/pricing";
import HeroBlueSection from "@/components/cta";
import Footer from "@/components/footer";
import Features from "@/components/features";
import "./../styles/common.scss";

export default function Home() {
	return (
		<>
			<Navbar />
			<section className={styles.hero}>
				<Image src="/hero-bg.png" alt="Healthcare Hero" fill priority className={styles.backgroundImage} />
				<div className={styles.overlay}></div>
				<div className={styles.content}>
					<h1 className={styles.title}>
						Revolutionize <br />
						Healthcare <br />
						with ApexEHR
					</h1>
					<div className={styles.subtitle}>
						Streamlined, Secure, and Scalable Solutions
						<br />
						Tailored for Healthcare Providers.
					</div>
					<div className={styles.ctas}>
						<button className={"primary-action"}>
							<span className={"cta-icon"}>
								<Image src="/arrow-right.png" alt="ApexEHR CTA" width={9} height={9} />
							</span>
							<span>Get started</span>
						</button>
						<button className={"secondary-action"}>
							<span className={"cta-icon"}>
								<Image src="/demo-icon.svg" alt="ApexEHR CTA" width={9} height={9} />
							</span>
							Request a demo
						</button>
					</div>
				</div>
			</section>
			<ProvidersSection />
			<DashboardTabs />
			<Features />
			<SpecialtySolutionsSection />
			<SecuritySection />
			<TestimonialsSection />
			<PricingSection />
			<HeroBlueSection />
			<Footer />
		</>
	);
}
