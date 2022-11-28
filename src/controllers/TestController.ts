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
@JsonController("/user")
export class UserController {
  @Inject()
  private testService: TestService = new TestService();

  // TODOS: ErrorHandlers, Validators
  /**
   *  GetUsers
   *
   */
  @HttpCode(200)
  @Get("/")
  public async getUsers(
    @Res() res: Response,
    @QueryParam("page") page = 1,
    @QueryParam("pageSize") pageSize = 19
  ) {
    try {
      const response = await this.testService.fetchComics({
        page,
        pageSize,
      });

      return res.status(200).json({
        success: true,
        error: null,
        result: response,
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: e,
      });
    }
  }
}
