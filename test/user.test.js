import { prismaClient } from "../src/application/databases.js"
import supertest from "supertest"
import {web} from "../src/application/web.js"
import {logger} from "../src/application/logging.js"
import { createTestUser, getTestuser, removeTestUser } from "./test-util.js"
import bycript from "bcrypt";

describe('POST /api/users', ()=>{

    // Setelah test selesai, hapus data nya
    afterEach(async ()=>{
        await removeTestUser()
    })

    it('should can register new user', async ()=>{

        const result = await supertest(web).post('/api/users').send({
            username: 'test',
            password: 'rahasia',
            name:'test'
        });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test');
        expect(result.body.data.password).toBeUndefined();

    });

    it('should reject if request is invalid', async ()=>{

        const result = await supertest(web).post('/api/users').send({
            username: '',
            password: '',
            name:''
        });

        logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();

    })


    it('should reject if username already registered', async ()=>{

        let result = await supertest(web).post('/api/users').send({
            username: 'test',
            password: 'rahasia',
            name:'test'
        });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test');
        expect(result.body.data.password).toBeUndefined();


        result = await supertest(web).post('/api/users').send({
            username: 'test',
            password: 'rahasia',
            name:'test'
        });

        logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();

    });
    
});

describe('POST /api/users/login', ()=>{

    beforeEach(async ()=>{
        await createTestUser();
    });

    afterEach(async ()=>{
        await removeTestUser();
    });


    it('should can login', async()=>{
        const result = await supertest(web).post('/api/users/login').send({
            username: 'test',
            password: 'rahasia'
        });

        logger.info(result);

        expect(result.status).toBe(200);
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe('test');
    });


    it('should reject login if request is invalid', async()=>{
        const result = await supertest(web).post('/api/users/login').send({
            username: '',
            password: ''
        });

        logger.info(result);

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject login if password is wrong', async()=>{
        const result = await supertest(web).post('/api/users/login').send({
            username: 'test',
            password: 'salah'
        });

        logger.info(result);

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });


    it('should reject login if username is wrong', async()=>{
        const result = await supertest(web).post('/api/users/login').send({
            username: 'salah',
            password: 'rahasia'
        });

        logger.info(result);

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });

});

describe('GET /api/users/current', ()=>{

    beforeEach(async ()=>{
        await createTestUser();
    });

    afterEach(async ()=>{
        await removeTestUser();
    });

    it('should can get current user', async()=>{
        const result = await supertest(web).get('/api/users/current').set('Authorization', 'test');

        logger.info(result.body)

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test');

    });

    it('should reject if token is invalid', async()=>{
        const result = await supertest(web)
                .get('/api/users/current')
                .set('Authorization', 'salah');

        logger.info(result.body)

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
});



describe('PATCH /api/users/current', ()=>{
    beforeEach(async ()=>{
        await createTestUser();
    });

    afterEach(async ()=>{
        await removeTestUser();
    });

    it('Should can update user', async()=>{
        const result = await supertest(web)
                    .patch('/api/users/current')
                    .set("Authorization", "test")
                    .send({
                        name:"Triyas",
                        password: "rahasialagi"
                    });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("Triyas");

        const getUser = await getTestuser();
        expect(await bycript.compare('rahasialagi', getUser.password)).toBe(true);

    });

    it('Should can update name', async()=>{
        const result = await supertest(web)
                    .patch('/api/users/current')
                    .set("Authorization", "test")
                    .send({
                        name:"Triyas"
                    });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("Triyas");
    });

    it('Should can update password', async()=>{
        const result = await supertest(web)
                    .patch('/api/users/current')
                    .set("Authorization", "test")
                    .send({
                        password: "rahasialagi"
                    });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");

        const getUser = await getTestuser();
        expect(await bycript.compare('rahasialagi', getUser.password)).toBe(true);

    });

    it('Should reject if request not valid', async()=>{
        const result = await supertest(web)
                    .patch('/api/users/current')
                    .set("Authorization", "salah")
                    .send({});

        expect(result.status).toBe(401);
    
    });
});