// @ts-ignore
import { fetchMarkdownNewsletters } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allNewsletters = await fetchMarkdownNewsletters()
  const sortedNewsletters = allNewsletters.sort((/** @type {{ meta: { date: string | number | Date; }; }} */ a, /** @type {{ meta: { date: string | number | Date; }; }} */ b) => {
    // @ts-ignore
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return json(sortedNewsletters)
}