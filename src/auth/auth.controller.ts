import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto";
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {

  }

  @Post('register') //register new user
  register( @Body() user: AuthDTO) {
    return this.authService.register(user)
  }

  @Post('login') //login user
    login(@Body() user: AuthDTO) {
      return this.authService.login(user)
    }
}