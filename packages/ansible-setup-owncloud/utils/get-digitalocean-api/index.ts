import converter from "api-spec-converter";
import swaggerParser from "@apidevtools/swagger-parser";
import fs from "fs";

const digitalOceanAPI = {
  from: "openapi_3",
  to: "swagger_2",
  source:
    "https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml",
};
const api = converter
  .convert(digitalOceanAPI)
  .then(function (convertedAPI: any) {
    swaggerParser
      .dereference(convertedAPI)
      .then(function (dereferencedAPI: any) {
        JSON.stringify(dereferencedAPI);
      });
  });

const date = new Date();
const today = date.toISOString().split("T")[0];

fs.writeFile("digitalOceanAPI-" + today + ".json", api, "utf8", (error) => {
  console.log(error);
});
