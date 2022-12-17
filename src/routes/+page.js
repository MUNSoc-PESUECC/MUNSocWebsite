// @ts-nocheck
export const load = async ({ fetch }) => {
    const responsePosts = await fetch(`/api/posts`)
    const posts = await responsePosts.json()
    const responseEvents = await fetch('/api/events')
    const events = await responseEvents.json()
  
    return {
      posts,
      events,
    }
}
