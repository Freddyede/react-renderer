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
        if(this.verifyIsMarkdown()){
            if(this.md.endsWith("\n\r\n\r")){
                this.md = this.md.split("\n\n");
                console.log(this.md.split("\n\n"));
                this.readBlocs();
            } else {
                this.readLines(this.md);
            }
        }
    }

    readBlocs() {
        for (const element of this.md) {
            this.readLines(element);
        }
    }

    readLines(element) {
        console.log(element);
        console.log('READ LINE: ', element);
    }


}