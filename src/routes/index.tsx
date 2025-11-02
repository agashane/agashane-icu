import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Center, HStack, VStack } from "~/styled-system/jsx";
import { css } from "~/styled-system/css";

export default component$(() => {
	return (
		<Center minH="100vh" minW="100vw" p="4">
			<VStack rowGap="4" alignItems="flex-start">
				<h1>Hi ! I'm Glorieux Lukama</h1>
				<p>
					I'm a web developer focusing on building e-commerce solutions with
					React Router V7, Sveltekit and Medusajs.
				</p>
				<VStack rowGap="4">
					<h2 class={css({ textAlign: "left", fontSize: "xl", w: "full" })}>
						Let's connect
					</h2>
					<HStack flexWrap="wrap">
						<a href="#">Whatsapp</a>
						<a href="#">GitHub</a>
						<a href="#">Twitter</a>
						<a href="#">Bluesky</a>
						<a href="#">LinkedIn</a>
					</HStack>
				</VStack>
			</VStack>
		</Center>
	);
});

export const head: DocumentHead = {
	title: "Agashane",
	meta: [
		{
			name: "description",
			content: "Welcome to my website",
		},
	],
};
