// @ts-ignore
export async function load({ params }){
    const newsletter = await import(`../${params.slug}.md`);
    const { title, date, img, embedLink } = newsletter.metadata;
    
    return {
      title,
      date,
      img,
      embedLink
    }
  }