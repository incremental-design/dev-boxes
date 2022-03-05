import { findAPortNotInUse, checkPortStatus } from 'portscanner';
import {
  makePasswordPrompt,
  getAnswersFromCLI,
  generatePasswords,
  addToKeychain,
  retrieveFromKeychain,
} from '@incremental.design/box-base';

import {
  getDefaultEnvironmentVariables,
  StudioOptions,
  KongOptions,
  PostgresOptions,
  GoTrueOptions,
} from './';

export async function prompts() {
  const {
    STUDIO_PORT,
    KONG_HTTP_PORT,
    KONG_HTTPS_PORT,
    POSTGRES_PORT,
    JWT_EXPIRY,
  } = await getDefaultEnvironmentVariables();

  const availablePorts = await Promise.all(
    [
      STUDIO_PORT,
      KONG_HTTP_PORT,
      KONG_HTTPS_PORT,
      POSTGRES_PORT,
      8080 /* the http port to listen on in dev */,
      80 /* the http port to listen on in prod */,
      443 /* the https port to listen on in prod */,
    ].map((port) => findAPortNotInUse(port, 65535))
  );

  const validatePort = async (port: number) => {
    if (typeof port === 'string' && port === '')
      return `Press tab + enter to accept the default port`;
    if (port < 0) return `port must be > 0. Received '${port}'.`;
    if (port > 65535) return `port must be < 65536. Received '${port}'.`;
    if ((await checkPortStatus(port)) === 'closed') return true;
    return `Port ${port} on localhost is in use. Choose a different port`;
  };

  const jwtPrompt = await makePasswordPrompt('box-vue3-supabase', 'JWT_SECRET');

  const postgresPasswordPrompt = await makePasswordPrompt(
    'box-vue3-supabase',
    'postgres'
  );

  const signupMethods = [
    { title: 'Email', value: 'email' },
    { title: 'Phone', value: 'phone' },
    { title: 'Bitbucket', value: 'bitbucket' },
    { title: 'GitHub', value: 'github' },
    { title: 'Gitlab', value: 'gitlab' },
    { title: 'Google', value: 'google' },
  ];
  const {
    preset,
    newPasswordBoxVue3SupabaseJwtSecret,
    newPasswordBoxVue3Supabasepostgres,
    studioPort,
    kongHttpPort,
    kongHttpsPort,
    postgresPort,
    siteUrl,
    sitePortHttp,
    jwtExpiry,
    allowSignup,
    signupWith,
    autoconfirmWith,
  } = await getAnswersFromCLI([
    {
      name: 'preset',
      type: 'select',
      message: 'Use default settings?',
      choices: [
        {
          title: 'dev',
          description:
            '\nDefault settings for development:\n- Uses your local filesystem as the storage location.\n- Uses a single Postgres instance.\n- Starts Supabase studio.\n- Does NOT secure supabase.\n',
        },
        {
          title: 'prod',
          description:
            '\nDefault settings for production:\n- Uses an S3 provider of your choice as the storage location.\n- Uses a Postgres cluster of your choice as the database.\n- Secures supabase with passwords and certificates.\n- Does NOT start Supabase studio.\n- Bring your own S3 storage and Postgres cluster.\n',
        },
        {
          title: 'custom',
          description:
            '\nCustomize all of the cluster settings however you want.',
        },
      ],
      initial: 0,
    },
    ...jwtPrompt,
    ...postgresPasswordPrompt,
    {
      name: 'studioPort',
      type: (prev, values) =>
        values.preset < 2 || !values.preset ? false : 'number',
      message: `Choose the port on which Supabase Studio will run. (e.g. https://localhost:${STUDIO_PORT}`,
      initial: availablePorts[0],
      validate: validatePort,
    },
    {
      name: 'kongHttpPort',
      type: (prev, values) =>
        values.preset < 2 || !values.preset ? false : 'number',
      message: `Choose the port on which kong will listen for API requests. (e.g. http://localhost:${KONG_HTTP_PORT}`,
      initial: availablePorts[1],
      validate: validatePort,
    },
    {
      name: 'kongHttpsPort',
      type: (prev, values) =>
        values.preset < 2 || !values.preset ? false : 'number',
      message: `Choose the port on which kong will listen for API requests made with https. (e.g. https://localhost:${KONG_HTTPS_PORT}`,
      initial: availablePorts[2],
      validate: validatePort,
    },
    {
      name: 'postgresPort',
      type: (prev, values) =>
        values.preset < 2 || !values.preset ? false : 'number',
      message: `Choose the port on which postgres will listen for connections. (e.g. https://localhost:${POSTGRES_PORT}`,
      initial: availablePorts[3],
      validate: validatePort,
    },
    {
      name: 'siteUrl',
      type: (prev, values) =>
        values.preset === 0 ||
        !values.preset /* if preset is 'dev' don't bother setting a site url */
          ? false
          : 'text',
      message: 'What is the domain name of your web app?',
      initial: 'my-supa-app.com',
      validate: (url: string) => {
        /* valid domains are 'localhost', any IP address, or a domain with a generic top-level domain (gTLD) */
        if (url === 'localhost') return true;
        if (
          (() => {
            const octets = url.split('.').map((octet) => {
              const o = parseInt(octet);
              return (
                o >= 0 &&
                o <=
                  255 /* yes, I know that we aren't checking to make sure that an IP address isn't a broadcast address. Maybe later. I don't feel like solving the CIDRs rn. */
              );
            });
            return octets.length === 4 && octets.every((octet) => octet);
          })()
        )
          return true;
        if (
          !url.match(
            /.+?\.[a-zA-Z]+?$/
          ) /* e.g. abc.com, abc.net, abc.io, ... see: https://stackoverflow.com/questions/9071279/number-in-the-top-level-domain */
        )
          return 'Site url must be an IP address or be a domain name that ends with a generic top-level-domain (gTLD) (e.g. .com, .net, .org)';
        return true;
      },
    },
    {
      name: 'sitePortHttp',
      type: (prev, values) =>
        values.preset === 0 || !values.preset ? false : 'number',
      message: 'What port does your web app listen on for http traffic?',
      initial: (prev, values) =>
        values.preset === 0 || !values.preset
          ? availablePorts[4] /* if preset 'dev' use the first available port starting from 3000 */
          : availablePorts[5] /* else, use the first availabe port starting from 80 */,
      validate: validatePort,
    },
    {
      name: 'jwtExpiry',
      type: (prev, values) => {
        return values.preset < 2 || !values.preset ? false : 'number';
      },
      message:
        'How many seconds should pass before your web app automatically logs users out?',
      initial: JWT_EXPIRY,
      validate: (value) =>
        value >
        0 /* we aren't giving 'infinite' as an option because that is a VERY bad idea. This is because if a bad actor steals a user's JWT, and the JWT never expires, the bad actor will have full access to supabase until you manually reset the JWT_SECRET */,
    },
    {
      name: 'allowSignup',
      type: (prev, values) => {
        return values.preset < 2 || !values.preset ? false : 'confirm';
      },
      message: 'Let users create accounts in your web app?',
      initial: true,
      hint: 'If you enable this, then supabase will let users sign up for an account in your web app. Otherwise, you will have to manually create accounts for them. Disabling this does NOT prevent users from signing in to your web app, if they already have an account.',
    },
    {
      name: 'signupWith',
      type: (prev) =>
        prev
          ? 'multiselect'
          : false /* this prompt MUST directly follow 'allowSignup' */,
      message: 'How should users be able to sign up for your web app?',
      choices: [...signupMethods],
      hint: '- Space to select. Return to submit.',
    },
    {
      name: 'autoconfirmWith',
      type: (prev, values) =>
        values.signupWith && values.signupWith.length > 0
          ? 'multiselect'
          : false,
      message: 'Automatically create an account when users sign up with:',
      choices: (prev, values) =>
        signupMethods.filter((method) =>
          values.signupWith.includes(method.value)
        ),
      hint: `- If you enable this, users won't receive an account confirmation message when they sign up for an account with a given method. Supabase will create an account, even if they can't access the email, phone number, or other authentication method they provided.`,
    },
  ]);

  if (
    ![
      0 /* prompt 'dev' */,
      1 /* prompt 'prod' */,
      2 /* prompt 'custom' */,
      'dev',
      'development',
      'prod',
      'production',
    ].includes(preset)
  ) {
    console.error(
      `--preset '${preset}' is not a valid option. It should be either 'dev' for the development preset or 'prod' for the production preset.`
    );
    process.exit(1);
  }

  const changePassword = process.argv.includes('--changePassword');

  const handlePasswordPromptAnswer = async (
    answer: any,
    service: string,
    account: string
  ) => {
    let password;

    if (changePassword && !answer) {
      /* then both --changePassword and --autoPassword were set */
      password = generatePasswords(64, true, 1).next().value;
      console.log(
        `Automatically changing password for ${service} ${account} to ${password}`
      );
      await addToKeychain(service, account, password);
    } else if (answer) {
      /* then --changePassword was set OR new password was prompted */
      password = answer;
      await addToKeychain(service, account, password);
    } else {
      password = await retrieveFromKeychain(service, account);
      if (!password) {
        password = generatePasswords(64, true, 1).next().value;
        console.log(
          `Automatically setting password for ${service} ${account} to ${password}`
        );
      }
    }
    return password;
  };

  const jwtSecret = await handlePasswordPromptAnswer(
    newPasswordBoxVue3SupabaseJwtSecret,
    'box-vue3-supabase',
    'JWT_SECRET'
  );

  const postgresPassword = await handlePasswordPromptAnswer(
    newPasswordBoxVue3Supabasepostgres,
    'box-vue3-supabase',
    'postgres'
  );

  if (!kongHttpPort)
    console.log(
      `Kong will listen for API requests on http://${siteUrl || 'localhost'}:${
        availablePorts[1]
      }`
    );

  if (!kongHttpsPort)
    console.log(
      `Kong will listen for API requests on https://${siteUrl || 'localhost'}:${
        availablePorts[2]
      }`
    );

  if (!postgresPort)
    console.log(
      `Postgres will listen for connections on http://${
        siteUrl || 'localhost'
      }:${availablePorts[3]}`
    ); // todo: RESTRICT CONNECTIONS TO LOCALHOST IN PROD (and also set firewall rules)

  const SITE_URL = `http://${siteUrl || 'localhost'}:${
    sitePortHttp || availablePorts[4]
  }`;
  console.log(`Your can access your web app at ${SITE_URL}`);

  if (!studioPort)
    console.log(
      `You can access Supabase Studio at https://${siteUrl || 'localhost'}:${
        availablePorts[0]
      }`
    );

  const aw = (() => {
    if (Array.isArray(autoconfirmWith)) return autoconfirmWith;
    if (typeof autoconfirmWith === 'string') return [autoconfirmWith];
    return [];
  })();

  const autoconfirmWithMethods = signupMethods.filter((sm) =>
    aw.map((a) => (a as string).toLowerCase()).includes(sm.value)
  );

  const sw: Array<string> = Array.isArray(signupWith)
    ? signupWith.map((s) => (s as string).toLowerCase())
    : [];

  const useSignupMethods = signupMethods
    .filter(
      (sm /* (s)ignup(m)ethod */) =>
        sw.includes(sm.value) ||
        aw.includes(
          sm.value
        ) /* the idea is that if you pass --autoconfirmWith <method>, it automatically enables --signupWith<method>*/
    )
    .map((sm) => sm.value);

  const sv /* (s)ignupmethod(v)alues */ = signupMethods.map((sm) => sm.value);

  const unrecognizedSignupMethods = sw.filter((s) => !sv.includes(s));
  if (unrecognizedSignupMethods.length > 0) {
    const validOptions = (() => {
      const valids = sv.map((v) => `--signupWith ${v}`);
      if (valids.length === 1) return `${valids[0]}`;
      return `${valids.slice(0, -1).join(', ')} and ${
        valids[valids.length - 1]
      }`;
    })();
    const ua /* (u)nrecognized(a)rray */ = unrecognizedSignupMethods.map(
      (m) => '--signupWith ' + m
    );
    const notValidOptions = (() => {
      const notValids = unrecognizedSignupMethods.map(
        (v) => `--signupWith ${v}`
      );
      if (notValids.length === 1) return `${notValids[0]}`;
      return `${notValids.slice(0, -1).join(', ')} and ${
        notValids[notValids.length - 1]
      }`;
    })();

    console.error(
      `Ignoring ${notValidOptions} ${
        notValidOptions.length > 1
          ? 'because they are not valid options'
          : 'because it is not a valid option'
      }. ${
        validOptions.length > 1
          ? 'Valid options are'
          : 'The only valid option is'
      } ${validOptions} .`
    );
  }

  const unrecognizedAutoconfirmMethods = Array.isArray(autoconfirmWith)
    ? autoconfirmWith.filter((a: string) => !sv.includes(a.toLowerCase()))
    : [];

  if (unrecognizedAutoconfirmMethods.length > 0) {
    const validOptions = (() => {
      const valids = sv.map((v) => `--autoconfirmWith ${v}`);
      if (valids.length === 1) return `${valids[0]}`;
      return `${valids.slice(0, -1).join(', ')} and ${
        valids[valids.length - 1]
      }`;
    })();
    const notValidOptions = (() => {
      const notValids = unrecognizedAutoconfirmMethods.map(
        (v: string) => `--autoconfirmWith ${v}`
      );
      if (notValids.length === 1) return `${notValids[0]}`;
      return `${notValids.slice(0, -1).join(', ')} and ${
        notValids[notValids.length - 1]
      }`;
    })();

    console.error(
      `Ignoring ${notValidOptions} ${
        unrecognizedAutoconfirmMethods.length > 1
          ? 'because they are not valid options'
          : 'because it is not a valid option'
      }. ${
        validOptions.length > 1
          ? 'Valid options are'
          : 'The only valid option is'
      } ${validOptions} .`
    );
  }

  let DISABLE_SIGNUP = true;
  if (
    (allowSignup ===
      undefined /* because it was never prompted, and no --allowSignup flag was passed */ &&
      useSignupMethods.length >
        0) /* because --signupWith <method> was passed */ ||
    autoconfirmWithMethods.length >
      0 /* because --autoconfirmWith <method> was passed */
  ) {
    DISABLE_SIGNUP = false;
  } else {
    if (
      allowSignup ===
        'true' /* because --allowSignup true was passed as flag */ ||
      allowSignup === true /* because allowSignup was prompted */
    ) {
      DISABLE_SIGNUP = false;
    }
  }

  const use: {
    jwtSecret: string;
    postgresPassword: string;
    studio: StudioOptions;
    kong: KongOptions;
    postgres: PostgresOptions;
    goTrue: GoTrueOptions;
  } = {
    jwtSecret,
    postgresPassword,
    studio: {
      STUDIO_PORT: studioPort || availablePorts[0],
    },
    kong: {
      KONG_HTTP_PORT: kongHttpPort || availablePorts[1],
      KONG_HTTPS_PORT: kongHttpsPort || availablePorts[2],
    },
    postgres: {
      POSTGRES_PORT: postgresPort || availablePorts[3],
    },
    goTrue: {
      SITE_URL,
      DISABLE_SIGNUP,
      // todo: ADDITIONAL_REDIRECT_URLS
      JWT_EXPIRY: jwtExpiry || JWT_EXPIRY,
      ENABLE_EMAIL_SIGNUP:
        !DISABLE_SIGNUP && useSignupMethods.includes('email'),
      ENABLE_EMAIL_AUTOCONFIRM:
        !DISABLE_SIGNUP &&
        autoconfirmWithMethods.map((a) => a.value).includes('email'),
      SMTP_ADMIN_EMAIL: 'hello@example.com',
      SMTP_HOST: 'smtp://my.mail.server.com',
      SMTP_PORT: 587,
      SMTP_USER: 'admin',
      SMTP_PASS: 'password',
      ENABLE_PHONE_SIGNUP:
        !DISABLE_SIGNUP && useSignupMethods.includes('phone'),
      ENABLE_PHONE_AUTOCONFIRM:
        !DISABLE_SIGNUP &&
        autoconfirmWithMethods.map((a) => a.value).includes('phone'),
    },
  };

  const useProd = {
    s3: '',
    postgresCluster: '',
  };

  return [0, 'dev', 'development'].includes(preset)
    ? { ...use }
    : [1, 'prod', 'production'].includes(preset)
    ? { ...use, ...useProd }
    : {
        /* the answers from the CLI prompt, in the format of options */
        ...use,
        ...useProd,
      };
}
