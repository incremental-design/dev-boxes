import keytar from "keytar";

export async function setDigitalOceanPersonalAccessToken(
  token: string
): Promise<void> {
  await keytar.setPassword(
    "DIGITALOCEAN",
    "DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN",
    token
  );
}

export async function getDigitalOceanPersonalAccessToken(): Promise<string> {
  const token = await keytar.getPassword(
    "DIGITALOCEAN",
    "DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN"
  );
  return token === null ? "" : token;
}
