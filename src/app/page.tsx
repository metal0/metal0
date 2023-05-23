import Link from "next/link";
import type { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { SiGithub, SiDiscord, SiMatrix } from "react-icons/si";

const socials = [
	{
		ariaLabel: "Contact by email",
		href: "mailto:metal@i0.tf",
		Icon: MdEmail,
	},
	{
		ariaLabel: "View GitHub profile",
		href: "https://github.com/metal0",
		Icon: SiGithub,
	},
	{
		ariaLabel: "View Discord profile",
		href: "https://discord.com/users/344837487526412300",
		Icon: SiDiscord,
	},
	{
		ariaLabel: "View Matrix profile",
		href: "https://matrix.to/#/@metal0:matrix.org",
		Icon: SiMatrix,
	},
] as const satisfies readonly { Icon: IconType; ariaLabel: string; href: string }[];

export default function Page() {
	return (
		<div className="max-w-2xl flex-col items-center justify-center px-4">
			<header>
				<h1 className="text-4xl font-medium hover:animate-pulse">Tiago R.</h1>
				<p className="text-xl font-light text-gray-400">Sysadmin and hobbyist backend developer</p>
			</header>

			<div className="mt-4 flex gap-3 text-lg text-gray-300">
				{socials.map(({ ariaLabel, href, Icon }) => (
					<Link aria-label={ariaLabel} className="transition-colors hover:text-gray-400" href={href} key={href}>
						<Icon size={30} />
					</Link>
				))}
			</div>
		</div>
	);
}
