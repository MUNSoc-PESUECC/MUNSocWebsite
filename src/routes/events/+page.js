// @ts-nocheck
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/events`);
	const events = await response.json();

	return {
		events
	};
};
