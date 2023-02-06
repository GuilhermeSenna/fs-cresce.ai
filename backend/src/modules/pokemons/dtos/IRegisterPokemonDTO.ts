import { userTypes } from '../infra/entities/Pokemon';

interface IRegisterUserDTO {
    id?: string;
    email: string;
    password: string;
    name: string;
    phone: string;
    birth_date: Date;
    company_name?: string;
    company_fantasy_name?: string;
    cnpj?: string;
    avatar_image?: string;
    cnh_image?: string;
    // Address info
    address_street?: string;
    address_district?: string;
    address_city?: string;
    address_state?: string;
    address_number?: string;
    address_zip_code?: string;
    address_complement?: string;
    // User types
    user_type: userTypes;
}

export { IRegisterUserDTO };
