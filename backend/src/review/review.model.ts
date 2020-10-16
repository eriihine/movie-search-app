export class Review {
  title: string;
  rating: string;
  headline: string;
  summary: string;
  publicationDate: string;
  openingDate: string;
  dateUpdated: string;
  link: {
    type: string;
    url: string;
    suggestedLinkText: string;
  };

  constructor(data: any) {
    this.title = data?.display_title;
    this.rating = data?.mpaa_rating;
    this.headline = data?.headline;
    this.summary = data?.summary_short;
    this.publicationDate = data?.publication_date;
    this.openingDate = data?.opening_date;
    this.dateUpdated = data?.date_updated;
    this.link = {
      type: data?.link?.type,
      url: data?.link?.url,
      suggestedLinkText: data?.link?.suggested_link_text,
    };
  }
}
