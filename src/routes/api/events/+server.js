// @ts-ignore
import { fetchMarkdownEvents } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allEvents = await fetchMarkdownEvents();
	const sortedEvents = allEvents.sort(
		(
			/** @type {{ meta: { date: string | number | Date; }; }} */ a,
			/** @type {{ meta: { date: string | number | Date; }; }} */ b
		) => {
			// @ts-ignore
			return new Date(b.meta.date) - new Date(a.meta.date);
		}
	);

	return json(sortedEvents);
};
