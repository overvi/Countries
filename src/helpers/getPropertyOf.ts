import { Country } from "../entitis/Country";

function getPropertyOf<T extends  keyof Country>(
    desc: Country,
    property : T
  ): Country[T][keyof Country[T]] | undefined {
    for (let key in desc[property]) {
        if (desc[property][key])
        return desc[property][key]
    }
}

export function getNativeNames(descriptions: Country): string[] {
  const officialNames: string[] = [];
  for (let key in descriptions.name.nativeName) {
    officialNames.push(descriptions.name.nativeName[key].common);
  }
  return officialNames;
}
export default getPropertyOf