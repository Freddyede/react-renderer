import { MarkdownHtmlParser } from "../../main.js";

export class Markdown extends MarkdownHtmlParser {
    constructor(md) {
        super(md);
        this.logicalSystems();
    }

    /**
     * Charge readBlocs or readLines if this.md is bloc or simple text
     * @author Patouillard Franck<patouillardfranck.development@gmail.com>
     * @version 0.0.1
     */
    logicalSystems() {
        if(this.verifyIsMarkdown() && this.md.includes("\n\n")){
                this.readBlocs();
        } else {
            this.readLines();
        }
    }

    /**
     * Run all line `\n\n` element and passe it to readLines
     * @author Patouillard Franck<patouillardfranck.development@gmail.com>
     * @version 0.0.1
     */
    readBlocs() {
        for (const element of this.md.split('\n\n')) {
            this.readLines(element);
        }
    }

    /**
     * Read all line of markdown text
     * @param element line markdown
     * @author Patouillard Franck<patouillardfranck.development@gmail.com>
     * @version 0.0.1
     */
    readLines(element) {
        console.log(element);
    }


}