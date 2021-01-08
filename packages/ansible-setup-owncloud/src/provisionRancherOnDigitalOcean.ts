const DigitalOceanAPIWrapperConstructor = require("do-wrapper").default;
const DigitalOceanAPIWrapper = new DigitalOceanAPIWrapperConstructor(
  process.env.DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN
);
