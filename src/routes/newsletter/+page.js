// @ts-nocheck
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/newsletters`);
	const newsletters = await response.json();

	return {
		newsletters
	};
};
