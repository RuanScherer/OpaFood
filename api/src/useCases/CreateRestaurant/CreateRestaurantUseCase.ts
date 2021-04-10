import { verifyAccountEmailTemplate } from "../../constants";
import { Restaurant } from "../../entities/Restaurant";
import { validateDocument } from "../../helpers";
import { log } from "../../logger";
import { IMailProvider } from "../../providers/IMailProvider";
import { IRestaurantRepository } from "../../repositories/IRestaurantRepository";
import { ICreateRestaurantRequestDTO } from "./CreateRestaurantDTO";

export class CreateRestaurantUseCase {

  constructor(
    private restaurantRepository: IRestaurantRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateRestaurantRequestDTO) {
    log({
      type: 'INFO',
      step: 'START',
      message: 'Start of Create Restaurant use case'
    })

    if (!validateDocument(data.document)) {
      log({
        type: 'INFO',
        step: 'END',
        message: 'End of Create Restaurant use case'
      })
      throw new Error('Invalid document.')
    }

    const restaurantAlreadyExists = await this.restaurantRepository.findByEmailOrDocument(data.email, data.document)

    if (restaurantAlreadyExists) {
      log({
        type: 'INFO',
        step: 'END',
        message: 'End of Create Restaurant use case'
      })
      throw new Error('User already exists.')
    }

    const restaurant = new Restaurant(data)

    const token = await this.restaurantRepository.create(restaurant)

    await this.mailProvider.sendMail({
      to: data.email,
      subject: 'Verificação de Cadastro no OpaFood!',
      message: verifyAccountEmailTemplate({ token, userType: 'RESTAURANT' })
    })

    log({
      type: 'INFO',
      step: 'END',
      message: 'End of Create Restaurant use case'
    })
  }
}