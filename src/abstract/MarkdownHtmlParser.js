import markdown from '../data/markdown.json' assert { type: 'json' };

/**
 * This class can convert:
 * - HTML to MD
 * - MD to HTML
 * @version 0.0.1
 * @author Patouillard Franck<patouillardfranck.development@gmail.com>
 */
export class MarkdownHtmlParser {
    md = '';
    html = '';
    headings = markdown.headings;
    lists = markdown.lists;
    others = markdown.others;
    constructor(md) {
        this.md = md;
    }

    /**
     * Verify if this.md is md text or not
     * @returns {boolean} true if md text else false
     * @version 0.0.1
     * @author Patouillard Franck<patouillardfranck.development@gmail.com>
     */
    verifyIsMarkdown() {
        return (
            new RegExp(/^[0-9.]\s/).test(this.md) ||
            new RegExp(/^#\s/).test(this.md) ||
            new RegExp(/^-\s/).test(this.md)
        );
    };

    /**
     * Récupères le text html
     * @version 0.0.1
     * @author Patouillard Franck<patouillardfranck.development@gmail.com>
     * @returns {string} html text
     */
    getHtml() {
        return this.html;
    }
    /**
     * Modifie le text html
     * @param html Nouveau texte html
     * @version 0.0.1
     * @author Patouillard Franck<patouillardfranck.development@gmail.com>
     */
    setHtml(html) {
        this.html = html;
    }
}