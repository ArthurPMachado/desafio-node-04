import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params

    const listUser = this.showUserProfileUseCase.execute({ user_id });

    return response.json(listUser);
  }
}

export { ShowUserProfileController };
