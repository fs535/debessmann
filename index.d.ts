export class EventId {
    time: Date;
    seq: number;

    constructor(t: Date, seq: number) {
        this.time = t;
        this.seq = seq;
    }
}

export class Event {
    _id: EventId;
    id: string;
    timestamp: string;
    payload: any;
    headers: { [key:string]:string; };
    metrics: { [key:string]:number };

    constructor(id:EventId) {
        this._id = id;
    }
}

export class DM {
    init(endpoint:string, authkey:string): void ;
    send(data:Event): void ;
}

declare global {
    interface Window {
        dm: DM;
    }
}