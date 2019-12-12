import fetch from "node-fetch";
import minimist from "minimist";
import jsdom, { JSDOM } from "jsdom";


const url = (ref: string) =>
  `http://www.dublincity.ie/AniteIMWebSearch/ExternalEntryPoint.aspx?SEARCH_TYPE=1&DOC_CLASS_CODE=PL&folder1_ref=${ref}`;
const run = async () => {
  const args = minimist(process.argv.slice(2));

  const rd = await fetch(url(args.ref), { redirect: "manual" });

  const location: string = rd.headers.get("location") as string;

  const cookie: string = rd.headers.get("set-cookie") as string;
  const firstPage = await fetch(location, {
    headers: {
      Cookie: cookie //rd.headers.get("set-cookie")
    }
  });

  const html = await firstPage.text();
  console.log("html:", html);
};

run()
  .then(r => console.log(r))
  .catch(e => console.error(e));
