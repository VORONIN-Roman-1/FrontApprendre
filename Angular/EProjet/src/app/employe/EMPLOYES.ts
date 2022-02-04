import { Employe } from './Employe';

export const EMPLOYES: Employe[] = [
    {
        "id": 1,
        "level": 3,
        "seniority": 8,
        "name": "Dupont",
        "picture": "assets/photos/photo01.jpg",
        "roles": ["architect", "testeur"],
        "birthDate": new Date("1979-08-15")
    },
    {
        "id": 2,
        "level": 2,
        "seniority": 3,
        "name": "Rocriguez",
        "picture": "assets/photos/photo02.jpg",
        "roles": ["testeur"],
        "birthDate": new Date("1999-07-15")
    },
    {
        "id": 3,
        "level": 0,
        "seniority": 1,
        "name": "Mejean",
        "picture": "assets/photos/photo03.png",
        "roles": ["dev",],
        "birthDate": new Date("1995-06-01")
    },
    {
        "id": 4,
        "level": 5,
        "seniority": 1,
        "name": "Brail",
        "picture": "assets/photos/photo04.jpg",
        "roles": ["testeur"],
        "birthDate": new Date("1985-05-26")
    },
    {
        "id": 5,
        "level": 4,
        "seniority": 1,
        "name": "Sylvino",
        "picture": "assets/photos/photo04.jpg",
        "roles": ["business_analyst"],
        "birthDate": new Date("1989-03-29")
    },
    {
        "id": 6,
        "level": 1,
        "seniority": 4,
        "name": "stankovic",
        "picture": "assets/photos/photo01.jpg",
        "roles": ["business_analyst", "dev"],
        "birthDate": new Date("1988-05-16")
    },
    {
        "id": 7,
        "level": 1,
        "seniority": 4,
        "name": "Dejea",
        "picture": "assets/photos/photo02.jpg",
        "roles": ["chef_de_projet"],
        "birthDate": new Date("1991-12-12")
    },
    {
        "id": 8,
        "level": 1,
        "seniority": 2,
        "name": "sandi",
        "picture": "assets/photos/photo03.png",
        "roles": ["dev"],
        "birthDate": new Date("1982-01-12")
    },
    {
        "id": 9,
        "level": 1,
        "seniority": 2,
        "name": "Reno",
        "picture": "assets/photos/photo04.jpg",
        "roles": ["dev"],
        "birthDate": new Date("1990-10-16")
    },
    {
        "id": 10,
        "level": 1,
        "seniority": 1,
        "name": "Fernandez",
        "picture": "assets/photos/photo03.png",
        "roles": ["dev"],
        "birthDate": new Date("1992-04-04")
    },
    {
        "id": 11,
        "level": 4,
        "seniority": 9,
        "name": "Kensington",
        "picture": "assets/photos/photo01.jpg",
        "roles": ["dev"],
        "birthDate": new Date("1996-04-10")
    },
    {
        "id": 12,
        "level": 0,
        "seniority": 1,
        "name": "Gates",
        "picture": "assets/photos/photo02.jpg",
        "roles": ["alternant", "testeur"],
        "birthDate": new Date("2002-10-24")
    }
];
