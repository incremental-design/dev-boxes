import converter from "api-spec-converter";
import swaggerParser from "@apidevtools/swagger-parser";
import { file } from "tmp-promise";
import fs from "fs";

const apiSource =
  "https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml";

const generateAPI = async function () {
  try {
    const digitalOceanAPI = {
      from: "openapi_3",
      to: "swagger_2",
      source: apiSource,
    };

    const convertedAPI: any = await converter.convert(digitalOceanAPI);

    // console.log(convertedAPI);

    const convertedAPIJSON = convertedAPI.stringify({
      syntax: "json",
      order: "openapi",
    });

    console.log(convertedAPIJSON);

    const { path, cleanup } = await file();
    fs.writeFileSync(path, convertedAPIJSON); //FIXME: synchronously writing a file slows down the whole program.

    const dereferencedAPI = await swaggerParser.dereference(path);

    cleanup();

    const dereferencedAPIJSON = JSON.stringify(dereferencedAPI);

    const date = new Date();
    const today = date.toISOString().split("T")[0];

    fs.writeFile(
      "digitalOceanAPI-" + today + ".json",
      dereferencedAPIJSON,
      "utf8",
      (error) => {
        console.log(error);
      }
    );
  } catch (error) {
    throw error;
  }
};

generateAPI();
