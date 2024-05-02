import markdown from './src/data/markdown.json' assert {type: 'json'};
import { MarkdownHtmlParser } from "./src/abstract/MarkdownHtmlParser.js";
import { Markdown } from "./src/controllers/Markdown.js";

export {
    markdown,
    MarkdownHtmlParser,
    Markdown
};