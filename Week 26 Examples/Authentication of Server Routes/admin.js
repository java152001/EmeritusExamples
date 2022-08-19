const admin = require('firebase-admin');

// firebase service account pk
const type = "service_account";
const project_id = "testerino2-25bc4";
const private_key_id = "59629285c9a5d05c122a64ef88783a756b2c84b74";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCy9JfTWrA9YBF7\nPn2r3Fl9zFVXQfhjSOdqzUCX8QkPhFYQK9xXDWvTFXSRFP44I0ZL49z61lOYhGac\n47QAGF8BZOuttVg0SqOcvcnRDBjOwN5UQrW0ilaI6qveF1vNFZZ0nh7U1gMYsu02\n5pluvIZkMBKwEG67MnnuPdclc/zLryUjNF7/wb7urNO6wdA6Lob8HjOrqM7kV/jB\nJB7A07ahamM+9fhlc2qKbIbxr8ZAohm9VF0655Lv4RVXZJ4izTlU6/gXuNi7d2rD\nPKf4JtoqCZQwKLRM38iyRrVwhAXxosg+mWlSdgeCa1857KFBiRefGxtobilyz1MQ\nuZmp3FLpAgMBAAECggEAPmEVNUbE7Tf6EABJ9SjDhx69VsO3rgAhLrDqRaxu8Jo8\nF7n6Pdv/TF6LufDb5ryhCd4dTtB75kusqx6SRYA5SbagknYGj3+/BWmAml6BnTxM\no4l3Zj3ciTBoBWwWA2h1gCQH8j/BZ5AjMQJz1E5h+DVrpjSsLJOdPgcPYk5KfcLz\n0LEu5s/3XL7YSqrZitfm8WmuolHFSf+LLoPNAnx9z5PsTXw7yWB6n4tCapjjrnma\nWU/iin/+6+BljA9ADkb5xl6WbyInBOYkenB0eeFdsFBtMm5UylEpU/64fXyCWZ9K\nHRzpFN5Y1baKjuGVMwa9NFhNIUcGdmse5dGXJoWSswKBgQDYIREkvoPVKCTdAFlp\nUVLSr1XbOaNv3RtYkwnRKcYnxnOlmtsxCCxLKRcqWzwWPVjrPZpZqOQXIIngmAWo\nd01jUfGyDd/LLBOJtHPEr4H8SbtJXOAnJdlDcDyNKi2syzYAvl2/UVs+Luyk8BqS\n9cs6hUJUuYkBBD8dIrauEbUSKwKBgQDT9/TwdkshAix8twWfYv1WJFUZtR0SM39h\nBuMIqcGPU0EPxyPv0UgKntcI3igtU+IdVmxt8k1tuaRShdztXxV9E0ufIBGb47Qq\n1TVAseOH7xAnXtnGj2Ua1ig0+BQtbukgURUsmSVBn7++Nh5TByHkqglwdjlB/P5A\nglHpwsjpOwKBgC6YSmrii+d7hR8EQUJ8Xt+/H0JpFbw7LfcVlCs811Sh6zLLxO+4\nNFxr2muuSbD9vtrQaCNmTu5RfIgoHigouE1uUC4z4Yia0weAGOlRcTOj7bWuSUEH\nXuS0IMnKSxiSouzcHbfuYT5xvWD9xqziQtM2AYvkiA3pDXZJkprKhIALAoGBAKMI\neT2mTpzB1kPKZam08pOZ+FaAhi6kq1mOeXsFTloVt9oR2iMvfdClYVFxxccvWKAm\nA9oA3usBOVE7orR0SMvd1nE6sjCLz9yOBpqO+Clqh6sweiIN0r70bxJmqOZVAzwX\nAUk/NXenDkyXxXUo7Dm7Su1UETAfDdPCKIy6g9tXAoGBAI4q4+c0A7fhI/kKdrs7\nN08EEwtmVPBDAsN6fWGfWAbCSgw7TXln20cy3S8MEa0o/fLgLKsoFnl4U9woS2br\nzXGSoO4WBsPXvXflzvdVdzyjsKRQUzoeUiaUcjilTkaP99f7hEpdMbcTzk6xt7f3\nObTdrYdPNwR0x3KApXtASPOz\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-941st@testerino2-25bc4.iam.gserviceaccount.com";
const client_id = "117348461749870761125";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-941st%40testerino2-25bc4.iam.gserviceaccount.com";


// credential grants access to Firebase services
admin.initializeApp({
  credential: admin.credential.cert({
      type,
      project_id,
      private_key_id,
      private_key:
        private_key.replace(/\\n/g,'\n'),
      client_email,
      client_id,
      auth_uri,
      token_uri,
      auth_provider_x509_cert_url,
      client_x509_cert_url
  }),
});

module.exports = admin;