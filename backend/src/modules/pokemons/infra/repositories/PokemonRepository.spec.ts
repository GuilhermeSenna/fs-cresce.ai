// import { prismaMock } from '../../../../../singleton';
// import { UserRepository } from './UserRepository';

// describe('UserRepository', () => {
//     const { register, list } = new UserRepository();

//     test('should be able create a new register user', async () => {
//         const user = {
//             // id: '45120d2b-74eb-4b55-887e-21f58d1d67e5',
//             name: 'Fulano da Silva Pereira',
//             phone: '11998731521',
//             birth_date: new Date(),
//             company_name: 'Any Company LTDA',
//             company_fantasy_name: 'Any Company LTDA',
//             cnpj: '11111111111111',
//             avatar_image: 'https://s3.image.default',
//             cnh_image: '1111111111',
//         };

//         prismaMock.games.create.mockResolvedValue(user);
//         const result = await register(game);
//         expect(result).toEqual(undefined);
//     });

//     test('should be able to list users', async () => {
//         prismaMock.users.findMany();
//         const result = await list();

//         expect(result).toEqual(undefined);
//     });
// });
