// @ts-nocheck
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/awards`);
	const awards = await response.json();

	return {
		awards
	};
};
