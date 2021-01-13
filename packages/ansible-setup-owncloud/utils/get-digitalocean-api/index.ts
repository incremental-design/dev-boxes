import converter from "api-spec-converter";
import swaggerParser from "@apidevtools/swagger-parser";
import { file } from "tmp-promise";
import fs from "fs";

const apiSource =
  "https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml";

const generateAPI = async function () {
  try {
    const dereferencedAPI = await swaggerParser.dereference(apiSource);
    const dereferencedAPIJSON = JSON.stringify(dereferencedAPI);
    const { path, cleanup } = await file();
    fs.writeFileSync(path, dereferencedAPIJSON); //FIXME: synchronously writing a file slows down the whole program.
    const digitalOceanAPI = {
      from: "openapi_3",
      to: "swagger_2",
      source: path,
    };
    const convertedAPI: object = await converter.convert(digitalOceanAPI);
    cleanup();
    const convertedAPIJSON = JSON.stringify(convertedAPI);
    const date = new Date();
    const today = date.toISOString().split("T")[0];
    fs.writeFile(
      "digitalOceanAPI-" + today + ".json",
      convertedAPIJSON,
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
