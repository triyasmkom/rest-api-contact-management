import supertest from "supertest"
import {web} from "../src/application/web.js"
import {logger} from "../src/application/logging.js"
import { createTestUser, removeAllTestContact, removeTestUser } from "./test-util.js";


describe('POST /api/contacts', ()=>{
    beforeEach(async()=>{
        await createTestUser();
    });

    afterEach(async()=>{
        await removeAllTestContact();
        await removeTestUser();
    });

    it('should can new contact', async()=>{
        const result = await supertest(web).post('/api/contacts')
        .set('Authorization', 'test')
        .send({
            first_name: 'test',
            last_name: 'test',
            email: 'test@gmail.com',
            phone: '0878122111111'
        })

        console.log(result);
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.first_name).toBe('test');
        expect(result.body.data.last_name).toBe('test');
        expect(result.body.data.email).toBe('test@gmail.com');
        expect(result.body.data.phone).toBe('0878122111111');
    });

    it('should reject request is not valid', async()=>{
        const result = await supertest(web).post('/api/contacts')
        .set('Authorization', 'test')
        .send({
            first_name: '',
            last_name: 'test',
            email: 'test',
            phone: '08781221111111234567764532222'
        })

        console.log(result);
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
        
    });
});