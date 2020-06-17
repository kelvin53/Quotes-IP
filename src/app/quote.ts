export class Quote {
    isDescriptionShown: boolean;
    upVotes: number;
    downVotes: number;
    constructor(public authorName: string, public quoteText: string, public createdBy: string, public dateCreated: any) {
        this.isDescriptionShown = false;
        this.upVotes = 0;
        this.downVotes = 0;
     }
}
