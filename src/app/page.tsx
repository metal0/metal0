import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { SiGithub, SiDiscord, SiMatrix } from "react-icons/si";

export default function Page() {
	return (
		<div className="max-w-2xl flex-col items-center justify-center px-4">
			<header>
				<h1 className="text-4xl font-medium hover:animate-pulse">Tiago R.</h1>
				<p className="text-xl font-light text-gray-400">Sysadmin and hobbyist backend developer</p>
			</header>

			<div className="mt-4 flex gap-3 text-lg text-gray-300">
				<Link className="duration-150 hover:text-gray-400" href="mailto:metal@i0.tf">
					<MdEmail size={30} />
				</Link>

				<Link className="duration-150 hover:text-gray-400" href="https://github.com/metal0">
					<SiGithub size={30} />
				</Link>

				<Link className="duration-150 hover:text-gray-400" href="https://discord.com/users/344837487526412300">
					<SiDiscord size={30} />
				</Link>

				<Link className="duration-150 hover:text-gray-400" href="https://matrix.to/#/@metal0:matrix.org">
					<SiMatrix size={30} />
				</Link>
			</div>
		</div>
	);
}
