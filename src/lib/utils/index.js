// @ts-nocheck
export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(12, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const fetchMarkdownEvents = async () => {
	const allEventFiles = import.meta.glob('/src/routes/events/*.md');
	const iterableEventFiles = Object.entries(allEventFiles);

	const allEvents = await Promise.all(
		iterableEventFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const eventPath = path.slice(12, -3);

			return {
				meta: metadata,
				path: eventPath
			};
		})
	);

	return allEvents;
};

export const fetchMarkdownNewsletters = async () => {
	const allNewsletterFiles = import.meta.glob('/src/routes/newsletter/*.md');
	const iterableNewsletterFiles = Object.entries(allNewsletterFiles);

	const allNewsletters = await Promise.all(
		iterableNewsletterFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const newsletterPath = path.slice(12, -3);

			return {
				meta: metadata,
				path: newsletterPath
			};
		})
	);

	return allNewsletters;
};

export const fetchMarkdownAwards = async () => {
	const allAwardFiles = import.meta.glob('/src/routes/about/awards/*.md');
	const iterableAwardFiles = Object.entries(allAwardFiles);

	const allAwards = await Promise.all(
		iterableAwardFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const awardsPath = path.slice(12, -3);

			return {
				meta: metadata,
				path: awardsPath
			};
		})
	);

	return allAwards;
};
