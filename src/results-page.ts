import { JSDOM } from "jsdom";

type DocLink = {
  date: string;
  description: string;
  ref: string;
  url: string;
};

export class ResultsPage {
  private dom: JSDOM;

  constructor(html: string) {
    this.dom = new JSDOM(html, {});
  }

  getLinks(): DocLink[] {
    this.dom.window.document.querySelectorAll();
    return [];
  }

  nextPage(): Promise<ResultsPage | undefined> {
    return Promise.resolve(undefined);
  }
}
