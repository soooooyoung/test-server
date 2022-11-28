import { Service } from "typedi";
import { ComicParams } from "../models/params/comicParams";

@Service()
export class TestService {
  public fetchComics = async ({ page, pageSize }: ComicParams) => {};
}
