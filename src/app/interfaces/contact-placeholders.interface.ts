export interface ContactFormPlaceholders {
    [name: string]: {
        state: 'regular' | 'error';
    },
    email: {
        state: 'regular' | 'error';
    }, 
    msg: {
        state: 'regular' | 'error';
    },
    privacy: {
        state: 'regular' | 'error';
    }
}