// @ts-ignore
export async function load({ params }){
    const events = await import(`../${params.slug}.md`);
    const { title, date, time, img, venue, registrationLink } = events.metadata;
    const content = events.default;
    
    return {
      content,
      title,
      date,
      time,
      img,
      venue,
      registrationLink,
    }
  }
