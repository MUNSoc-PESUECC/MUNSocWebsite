// @ts-ignore
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, description, img, author } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		description,
		img,
		author
	};
}
