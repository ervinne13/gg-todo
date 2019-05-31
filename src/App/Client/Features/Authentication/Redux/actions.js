
export const AUTHENTICATE = 'AUTHENTICATE';

export const authenticate = (user) => {
    return {
        type: AUTHENTICATE,
        user
    };
};