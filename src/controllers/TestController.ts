//modules
import { Response } from "express";
import {
  JsonController,
  HttpCode,
  Get,
  Res,
  QueryParam,
} from "routing-controllers";
import { Inject, Service } from "typedi";
import { TestService } from "../services/TestService";

@Service()
@JsonController("/api/comics")
export class UserController {
  @Inject()
  private testService: TestService = new TestService();

  // TODOS: ErrorHandlers, Validators
  /**
   *  Get Romance Comics
   *
   */
  @HttpCode(200)
  @Get("/romance")
  public async getRomance(
    @Res() res: Response,
    @QueryParam("page") page = 1,
    @QueryParam("pageSize") pageSize = 19
  ) {
    try {
      const response = await this.testService.fetchComicsMockData(
        {
          page,
          pageSize,
        },
        res
      );

      return response.status(200);
    } catch (e) {
      return res.status(400).json({
        error: (e as Error).message,
      });
    }
  }
}
