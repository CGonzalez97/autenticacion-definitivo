export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}

export interface googAuthUser{
    email:String,
    family_name: String,
    given_name: String,
    granted_scopes: String,
    id: String,
    locale: String,
    name: String,
    picture: String,
    verified_email: Boolean
}