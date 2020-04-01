export const EmailRules = [
  (v: any) => !!v || "Email Is Required",
  (v: any) => /.+@.+/.test(v) || "Email Must Be Valid"
];

export const isRequiredRule = [(v: any) => !!v || "password Is Required"];
