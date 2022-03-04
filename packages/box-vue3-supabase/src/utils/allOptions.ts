export type AllOptions = devDefault | prodDefault | customConfig;

/**
 * Use your computer's local filesystem as the storage location for supabase. Use a single postgres instance. Start supabase studio. Do not secure supabase. DON'T USE THIS IN PRODUCTION.
 *
 * @typeParam jwtSecret: a password that will be used to make JSON Web Tokens for authentication. This must be a minimum of 36 characters long.
 *
 * @typeParam postgresPassword: a password that will be used to authenticate to the postgres database. This password is required for direct access to the database using tools like psql, TablePlus, and Supabase Studio
 */
export type devDefault = {
  jwtSecret: string;
  postgresPassword: string;
} & Partial<customConfig>;

/**
 * Use an S3 provider for storage, use a Postgres cluster as the database. Does not start supabase studio. You have to bring your own S3 storage and Postgres cluster.
 *
 * @typeParam jwtSecret: a password that will be used to make JSON Web Tokens for authentication. This must be a minimum of 36 characters long.
 *
 * @typeParam postgresPassword: a password that will be used to authenticate to the postgres database. This password is required for direct access to the database using tools like psql, TablePlus, and Supabase Studio
 */
export type prodDefault = {
  jwtSecret: string;
  postgresPassword: string;
  s3: string;
  postgresCluster: string;
} & Partial<customConfig>;

/**
 * Choose all of your own options
 *
 * @typeParam jwtSecret: a password that will be used to make JSON Web Tokens for authentication. This must be a minimum of 36 characters long.
 *
 * @typeParam postgresPassword: a password that will be used to authenticate to the postgres database. This password is required for direct access to the database using tools like psql, TablePlus, and Supabase Studio
 */
export type customConfig = {
  jwtSecret: string;
  postgresPassword: string;
  s3: string; // this is just a placeholder
  postgresCluster: string; // this is just a placeholder
  storageVolume: StorageVolumeOptions;
  postgres: PostgresOptions;
  realtime: RealtimeOptions;
  postgRest: PostgRestOptions;
  storage: StorageOptions;
  postgresMeta: PostgresMetaOptions;
  goTrue: GoTrueOptions;
  studio: StudioOptions;
  boxBase: BoxBaseOptions;
  kong: KongOptions;
};

export interface StorageVolumeOptions {}

/**
 * Options for the "supabase/postgres:14.1.0" container
 *
 * This container starts a Postgres database. It is only used in development mode.
 *
 * @typeParam POSTGRES_PASSWORD - the password used to authenticate to the database.
 *
 * @typeParam POSTGRES_PORT - the port on localhost on which Postgres will listen for connections. DO NOT ENABLE THIS IN PRODUCTION.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L149
 */
export interface PostgresOptions {
  POSTGRES_PORT: number;
}

/**
 * Options for the "supabase/realtime:v0.21.0" container
 *
 * This container broadcasts changes to the postgres database in realtime.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L90
 */
export interface RealtimeOptions {}

/**
 * Options for the "postgrest/postgrest:v9.0.0" container
 *
 * This container maps postgres database queries to REST API endpoints
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L77
 */
interface PostgRestOptions {}

/**
 * Options for the "supabase/storage-api:v0.10.0" container
 *
 * This container stores and retrieves files. In development mode, it it accesses a docker volume that lives in your computer's filesystem. In production mode, it accesses an S3 storage location.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L12
 */
export interface StorageOptions {}

/**
 * Options for the "supabase/postgres-meta:v0.29.0" container
 *
 * This container maps postgres metadata queries to REST API endpoints. Metadata queries are queries about the postgres database itself, rather than the data within the database.
 *
 * @typeParam PG_META_PORT - the port on which this container will listen for API requests.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L138
 */
export interface PostgresMetaOptions {}

/**
 * Options for the "supabase/gotrue:v2.5.8" container
 *
 * This container authenticates users
 *
 * @typeParam SITE_URL - the URL of your web app. (e.g. 'https://my-supa-app.com'). This field is required.
 *
 * @typeParam DISABLE_SIGNUP - don't let anyone create an account on your web app. Defaults to 'true' in development mode and 'false' in production mode. If you change it to 'true', then the only way to create an account on your web app is to invite someone from the supabase studio URL. Note that this doesn't stop people from signing _in_ to your web app. It just stops them from creating new accounts.
 *
 * @typeParam ADDITIONAL_REDIRECT_URLS - a list of one or more URIs that oAuth providers, such as Google, Github, and Facebook can send users to _after_ they log in. If you let people sign into your web app with Google, Github, Facebook, or any other oAuth provider, then your web app will send them to the oAuth provider's login page. Once they've logged in, the oAuth provider will send them to one of these URIs.
 *
 * @typeParam JWT_EXPIRY - the number of seconds before a user's JSON Web Token (JWT) expires. Once a user's JWT expires, they have to re-authenticate with your app. Defaults to 3600 seconds, or 1 hour. If you want to annoy your users, set this to something really small, like 600, which is 10 minutes.
 *
 * @typeParam ENABLE_EMAIL_SIGNUP - whether users can use their email to authenticate with your web app. Note that you have to build the UI for users to sign up with email. This setting only tells supabase to associate emails with user accounts.
 *
 * @typeParam ENABLE_EMAIL_AUTOCONFIRM - whether supabase should an account confirmation email to a user who signed up with email. Defaults to 'false'.
 *
 * @typeParam SMTP_ADMIN_EMAIL - the address from which all authentication-related emails are sent. (e.g. 'hello@my-supa-app.com'.) This is required.
 *
 * @typeParam SMTP_HOST - the mail server from which to send emails. (e.g. smtp.mandrillapp.com). Note that supabase doesn't have its own SMTP server. You have to provide it.
 *
 * @typeParam SMTP_PORT - the port on which the SMTP_HOST listens.
 *
 * @typeParam SMTP_USER - the username you use to authenticate to the SMTP_HOST
 *
 * @typeParam SMTP_PASS - the password you use to authenticate tothe SMTP_HOST
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/doc2ker/docker-compose.yml#L40
 *
 * @see https://supabase.com/docs/gotrue/server/about
 *
 * @see https://hub.docker.com/layers/supabase/gotrue/v2.5.8/images/sha256-ebae312adc009f0c35eaa03de51af9290afc73fab4da1a31f06a4b404858dc4b?context=explore
 */
export interface GoTrueOptions {
  SITE_URL: string;
  OPERATOR_TOKEN?: string /* only used if you are using netlify to host your prod frontend. see: https://supabase.com/docs/gotrue/server/about#top-level */;
  DISABLE_SIGNUP: boolean;
  ADDITIONAL_REDIRECT_URLS?: string /* only used if you want to allow logins with google, facebook or other SSO providers. see: https://supabase.com/docs/learn/auth-deep-dive/auth-google-oauth */;
  JWT_EXPIRY: number;
  /* for all of the following options, see https://supabase.com/docs/gotrue/server/about#e-mail */
  ENABLE_EMAIL_SIGNUP: boolean;
  ENABLE_EMAIL_AUTOCONFIRM: boolean;
  SMTP_ADMIN_EMAIL: string;
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASS: string;
  // SMTP_SENDER_NAME: string; // todo: test if this is even necessary
  // todo: implement the rest of the env variables listed at: https://supabase.com/docs/gotrue/server/about#e-mail
  /* for all of the following options, see: */
  ENABLE_PHONE_SIGNUP: boolean;
  ENABLE_PHONE_AUTOCONFIRM: boolean;
  // todo: ENABLE_X_SIGNUP to enable 'X' oAuth provider. see: https://supabase.com/docs/gotrue/server/about#external-authentication-providers
  // EXTERNAL_BITBUCKET_ENABLED
  // EXTERNAL_BITBUCKET_CLIENT_ID
  // EXTERNAL_BITBUCKET_SECRET
  // EXTERNAL_BITBUCKET_REDIRECT_URI
  // EXTERNAL_BITBUCKET_URL
  // EXTERNAL_GITHUB_ENABLED
  // EXTERNAL_GITHUB_CLIENT_ID
  // EXTERNAL_GITHUB_SECRET
  // EXTERNAL_GITHUB_REDIRECT_URI
  // EXTERNAL_GITHUB_URL
  // EXTERNAL_GITLAB_ENABLED
  // EXTERNAL_GITLAB_CLIENT_ID
  // EXTERNAL_GITLAB_SECRET
  // EXTERNAL_GITLAB_REDIRECT_URI
  // EXTERNAL_GITLAB_URL
  // EXTERNAL_GOOGLE_ENABLED
  // EXTERNAL_GOOGLE_CLIENT_ID
  // EXTERNAL_GOOGLE_SECRET
  // EXTERNAL_GOOGLE_REDIRECT_URI
  // EXTERNAL_GOOGLE_URL
}

/**
 * Options for the "supabase/studio:latest" container
 *
 * This container runs the Supabase Studio admin user interface.
 *
 * @typeParam STUDIO_PORT - the port on which the studio admin interface should be available. Defaults to 3000. (i.e. https://localhost:3000 opens studio)
 *
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L12
 *
 * @see https://github.com/supabase/supabase/tree/master/studio
 */
export interface StudioOptions {
  STUDIO_PORT: string;
}

//todo:
export interface BoxBaseOptions {}

/**
 * Options for the "kong:2.1" container
 *
 * This container proxies requests to your supabase backend, forwarding them to the correct container. It also connects each container to the postgres database.
 *
 * @typeParam KONG_HTTP_PORT - the port on localhost that Kong will use to listen for API requests sent with http
 *
 * @typeParam KONG_HTTPS_PORT - the port on localhost that Kong will use to listen for API request sent with https
 *
 * @remarks
 *
 * This image might have the log4shell vulnerability.
 *
 * @see https://github.com/supabase/supabase/blob/40f37f3638ad245752eeff07d695d87e21de620a/docker/docker-compose.yml#L24
 *
 * @see https://hub.docker.com/layers/kong/library/kong/2.1.0/images/sha256-aa6d39989058a27439807d9fc09becdcef04ca9d5c3a87fd2390f3e4fe210cf2?context=explore
 *
 * @see https://github.com/Kong/docker-kong/blob/ab4e1d8a61d80e5884e940f76622f729e751f563/alpine/Dockerfile
 *
 * @see https://docs.konghq.com/enterprise/2.3.x/deployment/default-ports/#main
 */
export interface KongOptions {
  KONG_HTTP_PORT: string;
  KONG_HTTPS_PORT: string;
}
