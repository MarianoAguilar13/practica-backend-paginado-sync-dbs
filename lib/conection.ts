import Airtable from "airtable";
import algoliasearch from "algoliasearch";

export let baseAirtable = new Airtable({
  apiKey: "keysQ8ris9t4P8Cjb",
}).base("appy80saWEF0ooYoM");

const client = algoliasearch("FYQGF7IE1Z", "489e3bfcbb4a03a5dd04d574c9468028");
export const productIndex = client.initIndex("products");
