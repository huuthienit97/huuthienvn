import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, { message: 'Email không đúng định dạng' })
    @IsNotEmpty({ message: 'Email không được để trống' })
    email: string;

    @IsNotEmpty({ message: 'Password không được để trống' })
    password: string;

    // @IsNotEmpty({ message: 'Tên không được để trống' })
    name: string;

    // @IsNotEmpty({ message: 'Địa chỉ không được để trống' })
    address: string
}
