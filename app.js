import {Markdown} from "./src/controllers/Markdown.js";

const md = `# Title`;

export const markdown = new Markdown(md);

console.log(markdown.getHtml());