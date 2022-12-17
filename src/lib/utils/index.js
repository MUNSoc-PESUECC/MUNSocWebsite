export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        // @ts-ignore
        const { metadata } = await resolver()
        const postPath = path.slice(12, -3)
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    return allPosts
  }

  export const fetchMarkdownEvents = async () => {
    const allEventFiles = import.meta.glob('/src/routes/events/*.md')
    const iterableEventFiles = Object.entries(allEventFiles)
    
    const allEvents = await Promise.all(
      iterableEventFiles.map(async ([path, resolver]) => {
        // @ts-ignore
        const { metadata } = await resolver()
        const postPath = path.slice(12, -3)
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    return allEvents
  }
