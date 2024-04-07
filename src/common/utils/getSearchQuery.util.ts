import { Like } from "typeorm";

export const searchQuery = (text, fieldList) => {
  if (text) {
    let term = `${text.replace(/%20/g, " ")}`;
    console.warn(term, "term");
    let mainquery = {};
    let query = {};
    for (const [index, i] of fieldList.entries()) {
      query[i] = Like("%" + term + "%");
      //   console.warn(query);

      mainquery[i] = { ...query[i] };
      delete query[i];
    }
    console.warn(mainquery, "MAinQuery");

    return mainquery;
  }
  return {};
};
// {
//   id: {
//   }
//   identifier: {
//   }
// }

// Object.entries(obj)?.forEach(([key, value]) => {});
// {
//   {
//     id: {
//     }
//   }
//   {
//     identifier: {
//     }
//   }
// }
