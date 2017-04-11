export class EventId {
    time: Date;
    seq: number;
}

export class Event {
    _id: EventId;
    id: string;
    timestamp: string;
    payload: any;
    headers: { [key:string]:string; };
    metrics: { [key:string]:number };
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