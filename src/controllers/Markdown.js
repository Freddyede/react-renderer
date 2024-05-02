import { MarkdownHtmlParser } from "../../main.js";

export class Markdown extends MarkdownHtmlParser {
    constructor(md) {
        super(md);
        this.logicalSystems();
    }

    /**
     * Charge readBlocs or readLines if this.md is bloc or simple text
     */
    logicalSystems() {
        if(this.verifyIsMarkdown() && this.md.includes("\n\n")){
                this.readBlocs();
        } else {
            this.readLines();
        }
    }

    readBlocs() {
        for (const element of this.md.split('\n\n')) {
            this.readLines(element);
        }
    }

    readLines(element) {
        console.log(element);
    }


}