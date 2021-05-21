import Prismic from "@prismicio/client";
import { IProject, IWork } from "../types";

const apiEndpoint = process.env.PRISMICIO_API_ENDPOINT!;
const accessToken = process.env.PRISMICIO_ACCESS_TOKEN;

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken: any = null) => {
  const reqOption = req ? { req } : {};

  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export const getAllWorksData = async () => {
  const res = await getDocumentsByType("works");

  const data: IWork[] = res.map(({ data }) => ({
    ...data,
  }));

  const sorted = data.sort(
    (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
  );

  return sorted;
};

export const getDocumentsByType = async (type: string) => {
  const res = await Client().query(
    Prismic.Predicates.at("document.type", type)
  );

  return res.results;
};

export const getProjectByUid = async (uid: string) => {
  const res = await Client().getByUID("projects", uid, {});

  return res.data as IProject;
};
