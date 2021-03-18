/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const adminUser = this.usersRepository.findById(user_id);

    if (!adminUser) {
      throw new Error("User does not exist");
    }

    if (!adminUser.admin) {
      throw new Error("Prohibited action, user is not a admin");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
