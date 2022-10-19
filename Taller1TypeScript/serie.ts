export class Serie{
    index: number;
    name: string;
    channel: string;
    season: number;

    constructor(index: number, name: string, channel: string, season: number){
        this.index = index;
        this.name = name;
        this.channel = channel;
        this.season = season;
    }
}