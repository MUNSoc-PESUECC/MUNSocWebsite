// @ts-nocheck
// @ts-ignore
import { fetchMarkdownAwards } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allAwards = await fetchMarkdownAwards()
  const sortedAwards = allAwards.sort((/** @type {{ meta: { date: string | number | Date; }; }} */ a, /** @type {{ meta: { date: string | number | Date; }; }} */ b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return json(sortedAwards)
}
