import passport from "passport";
import { Strategy } from "passport-oauth2-client-password";

export const strategy = new Strategy(function (clientId, clientSecret, done) {
  // generate a dummy client id and secret
  const client = {
    name: "Custom API Client",
    id: "client-id",
    secret: "client-secret",
  };
  if (clientId !== client.id) {
    return done(null, false);
  }
  if (clientSecret !== client.secret) {
    return done(null, false);
  }
  const { secret, ...result } = client;
  return done(null, result);
});

export function middelware(req, res, next) {
  console.log("Proxy request %s method %s", req.url, req.method);

  passport.authenticate("oauth2-client-password", {
    session: false,
  })(req, res, next);
}
