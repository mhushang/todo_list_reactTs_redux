export interface IUserAddressGeo {
    lat: number;
    lng: number;
}

export interface IUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IUserAddressGeo;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IUserAddress;
    phone: string;
    website: string;
    company: IUserCompany;
}

export interface IUsersState {
    items: IUser[];
    loading: boolean;
    error: String | any;
}
