export  interface Country {
    name: { common: string , nativeName : {[key : string] : {official : string , common : string}} };
    population: string;
    region: string;
    flags: { svg: string; png: string };
    capital: string;
    subregion : string;
    borders : string[]

    topLevelDomain : string[];

    currencies : {[key : string] : {name : string , symbol : string}};
    languages : {[key : string] : string};
}
