import "../styles/global.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type { ReactNode } from "react";

const roboto = Roboto({
	weight: ["300", "400", "500"],
	style: "normal",
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className={`${roboto.variable} font-sans`} lang="en">
			<head>
				<link href="/favicon.ico" rel="shortcut icon" />
			</head>
			{/* The extra div is needed due to next.js' next-route-announcer, which gets appended to the body */}
			<body>
				<div className="grid h-screen min-h-screen place-items-center bg-gradient-to-b from-indigo-500 to-gray-800 text-white">
					{children}
				</div>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: "Tiago R",
	description: "insert some cool text here",
	keywords: ["metal", "metal0", "sysadmin", "developer", "tiago r"],
};
