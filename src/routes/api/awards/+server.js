// @ts-nocheck
import { fetchMarkdownAwards } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allAwards = await fetchMarkdownAwards();
	const sortedAwards = allAwards.sort((a, b) => {
		console.log(a);
		console.log(b);
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedAwards);
};
