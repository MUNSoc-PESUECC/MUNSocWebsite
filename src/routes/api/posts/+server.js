// @ts-nocheck
import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
	const sortedPosts = allPosts.sort(
		(
			/** @type {{ meta: { date: string | number | Date; }; }} */ a,
			/** @type {{ meta: { date: string | number | Date; }; }} */ b
		) => {
			return new Date(b.meta.date) - new Date(a.meta.date);
		}
	);

	return json(sortedPosts);
};
