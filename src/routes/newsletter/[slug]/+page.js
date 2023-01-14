// @ts-ignore
export async function load({ params }){
    const newsletter = await import(`../${params.slug}.md`);
    const { title, date, img } = newsletter.metadata;
    const content = newsletter.default;
    
    return {
      content,
      title,
      date,
      img
    }
  }