import { prismaClient } from "../src/application/databases.js"
import supertest from "supertest"
import {web} from "../src/application/web.js"
import {logger} from "../src/application/logging.js"

describe('POST /api/users', ()=>{

    // Setelah test selesai, hapus data nya
    afterEach(async ()=>{
        await prismaClient.user.deleteMany({
            where:{
                username: 'triyas'
            }
        });
    })

    it('should can register new user', async ()=>{

        const result = await supertest(web).post('/api/users').send({
            username: 'triyas',
            password: 'rahasia',
            name:'Triyas Hevianto Saputro'
        });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('triyas');
        expect(result.body.data.name).toBe('Triyas Hevianto Saputro');
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
            username: 'triyas',
            password: 'rahasia',
            name:'Triyas Hevianto Saputro'
        });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('triyas');
        expect(result.body.data.name).toBe('Triyas Hevianto Saputro');
        expect(result.body.data.password).toBeUndefined();


        result = await supertest(web).post('/api/users').send({
            username: 'triyas',
            password: 'rahasia',
            name:'Triyas Hevianto Saputro'
        });

        logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();

    });
    
})