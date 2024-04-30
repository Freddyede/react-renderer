import markdown from '../data/markdown.json';
import { Markdown } from "../controllers/Markdown.js";

export class MarkdownHtmlParser {
    md = '';
    html = '';
    headings = markdown.headings;
    lists = markdown.lists;
    others = markdown.others;
    markdownElement = null;
    constructor(md) {
        this.md = md;
        this.markdownElement = new Markdown(md);
    }
    getHtml() {
        return this.html;
    }
    setHtml(html) {
        this.html = html;
    }
}