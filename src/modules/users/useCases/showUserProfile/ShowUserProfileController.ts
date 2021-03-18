import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params

    try {

      const listUser = this.showUserProfileUseCase.execute({ user_id });

      return response.json(listUser);
    } catch (err) {
      return response.status(404).json({ error: err.message })
    }

  }
}

export { ShowUserProfileController };
