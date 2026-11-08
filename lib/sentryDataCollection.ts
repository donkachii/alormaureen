const ipHeaderTerms = ["forwarded", "-ip", "remote-", "via", "-user"];

// Sentry SDK v11 collects everything unless told otherwise, including request bodies, which on
// the contact form would mean a sender's name, email and message. Keep all of that out.
export const sentryDataCollection = {
  userInfo: false,
  cookies: false,
  httpHeaders: {
    request: { deny: ipHeaderTerms },
    response: { deny: ipHeaderTerms },
  },
  httpBodies: [],
  urlQueryParams: { deny: ipHeaderTerms },
  genAI: { inputs: false, outputs: false },
  databaseQueryData: false,
  graphQL: { document: false, variables: false },
  stackFrameVariables: false,
};
