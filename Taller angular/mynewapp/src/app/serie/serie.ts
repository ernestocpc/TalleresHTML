export class Serie{
    index: number;
    name: string;
    channel: string;
    season: number;
    descripcion: string;
    webPage: string;
    imagen: string;

    constructor(index: number, name: string, channel: string, season: number, descripcion: string, webPage: string, imaghen: string){
        this.index = index;
        this.name = name;
        this.channel = channel;
        this.season = season;
        this.descripcion = descripcion;
        this.webPage = webPage;
        this.imagen = imaghen;
    }
}
