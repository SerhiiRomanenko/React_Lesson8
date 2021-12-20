import faker from "faker";

export function makeOneNew() {
  return {
    id: faker.datatype.uuid(),
    title: faker.name.title(),
    text: faker.lorem.paragraph(),
    description: faker.lorem.sentence(),
    photo: faker.image.image(),
    author: faker.name.firstName() + " " + faker.name.lastName(),
    hashTags: Array(3)
      .fill(null)
      .map(() => "#" + faker.lorem.word()),
  };
}

export function makeNews() {
  return Array(10)
    .fill(null)
    .map(() => makeOneNew());
}

export const TAGS = [
  {
    name: "#crime",
    label: "Criminal News",
    id: "dasdasdasda3rwrwqrfaad",
  },
  {
    name: "#economy",
    label: "Economy News",
    id: "dasdasdasda3rwrwasdad",
  },
  {
    name: "#society",
    label: "Society News",
    id: "dasd24wr45wqrfaad",
  },
  {
    name: "#COVID-19",
    label: "Health News",
    id: "2489435trwqrfaad",
  },
  {
    name: "#sport",
    label: "Sport News",
    id: "--tyg-hfgdwqrfaad",
  },
  {
    name: "#music",
    label: "Music News",
    id: "d0-dg-fsd-qrfaad",
  },
];

export const AUTHORS = [
  {
    name: "Andrew Rayel",
    direction: "crime",
  },
  {
    name: "John Newman",
    direction: "economy",
  },
  {
    name: "Sarah Conor",
    direction: "society",
  },
  {
    name: "Fill Jones",
    direction: "Footbal",
  },
  {
    name: "Anna Sedokova",
    direction: "Fasion",
  },
  {
    name: "Boris Burda",
    direction: "Other",
  },
];
