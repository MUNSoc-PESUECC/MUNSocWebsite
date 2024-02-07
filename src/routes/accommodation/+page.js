// @ts-ignore
export async function load({ params }) {
	const post = await import(`./accommodation.md`);
	const content = post.default;

	return {
		content
	};
}
