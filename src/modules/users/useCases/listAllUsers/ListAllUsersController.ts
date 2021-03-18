/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (Array.isArray(user_id)) {
      throw new Error("Id must be a string and not an array");
    }

    try {
      const listAll = this.listAllUsersUseCase.execute({ user_id });

      return response.json(listAll);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }


  }
}

export { ListAllUsersController };
