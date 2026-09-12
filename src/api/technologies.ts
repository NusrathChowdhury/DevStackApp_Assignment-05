import type { ITechnology } from "../types/technology";

export const technologiesPromise: Promise<ITechnology[]> = fetch(
  "/technologies.json"
).then((res) => res.json());