"use client";
import { ArrowTopRightIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

const RecentInstagram = () => {
	return (
		<section className="mb-8 mt-8">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{[1, 2, 3].map((index) => (
					<a
						href="https://www.instagram.com/uwu_arc/"
						key={index}
						className="hover:"
					>
						<div className="aspect-square rounded-xl bg-secondary/50" />
					</a>
				))}
			</div>
			<div className="flex items-center justify-center gap-2 py-10">
				<a
					href="https://www.instagram.com/uwu_arc/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 rounded-3xl bg-black px-6 py-3 text-white hover:opacity-90"
				>
					Follow Our Projects
					<ArrowTopRightIcon height={18} width={18} />
				</a>
			</div>
		</section>
	);
};

export default RecentInstagram;
