import * as path from "path";
import { Service } from "typedi";
import { ComicParams } from "../models/params/comicParams";
import { Response } from "express";
import { promisify } from "util";
@Service()
export class TestService {
  public fetchComicsMockData = async ({ page }: ComicParams, res: Response) => {
    const filePath = path.join(__dirname, `../data/page_${page}.json`);

    await promisify<string, void>(res.download.bind(res))(filePath);
    return res;
  };
}
