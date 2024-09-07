export interface MarqueeItems {
    id: string,
    
}

export interface Note {
    id?: string;
    status: "regular" | "trashed";
    title:string;
    content:string;
    marked: boolean;
}