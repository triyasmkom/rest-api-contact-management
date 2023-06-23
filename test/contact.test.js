import supertest from "supertest"
import {web} from "../src/application/web.js"
import {logger} from "../src/application/logging.js"
import { createTestContact, createTestUser, getTestContact, removeAllTestContact, removeTestUser } from "./test-util.js";


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

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
        
    });
});

describe('GET /api/contacts', ()=>{
    beforeEach(async()=>{
        await createTestUser();
        await createTestContact();
    });

    afterEach(async()=>{
        await removeAllTestContact();
        await removeTestUser();
    });

    it('should can get contact', async()=>{
        const testContact = await getTestContact();
        const result = await supertest(web).get('/api/contacts/'+ testContact.id)
                .set('Authorization', 'test');
        
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe('test');
        expect(result.body.data.last_name).toBe('test');
        expect(result.body.data.email).toBe('test@gmail.com');
        expect(result.body.data.phone).toBe('089123456789');
    });

    it('should return 404', async()=>{
        const testContact = await getTestContact();
        const result = await supertest(web).get('/api/contacts/'+ (testContact.id+1))
                .set('Authorization', 'test');
        
        expect(result.status).toBe(404);
    });

});



describe('PUT /api/contacts', ()=>{
    beforeEach(async()=>{
        await createTestUser();
        await createTestContact();
    });

    afterEach(async()=>{
        await removeAllTestContact();
        await removeTestUser();
    });

    it('should can update existing contact', async()=>{
        const testContact = await getTestContact();
        const result = await supertest(web)
                .put('/api/contacts/'+ testContact.id)
                .set('Authorization', 'test')
                .send({
                    first_name: 'Triyas',
                    last_name: 'HS',
                    email: 'triyas@gmail.com',
                    phone: '089123456788'
                });
        
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe('Triyas');
        expect(result.body.data.last_name).toBe('HS');
        expect(result.body.data.email).toBe('triyas@gmail.com');
        expect(result.body.data.phone).toBe('089123456788');
    });

    it('should reject if request is invalid', async()=>{
        const testContact = await getTestContact();
        const result = await supertest(web)
                .put('/api/contacts/'+ testContact.id)
                .set('Authorization', 'test')
                .send({
                    first_name: '',
                    last_name: 'HS',
                    email: '',
                    phone: '089123456788'
                });
        
        expect(result.status).toBe(400);
    });

    it('should reject if contact is not found', async()=>{
        const testContact = await getTestContact();
        const result = await supertest(web)
                .put('/api/contacts/'+ (testContact.id+1))
                .set('Authorization', 'test')
                .send({
                    first_name: 'Triyas',
                    last_name: 'HS',
                    email: 'triyas@gmail.com',
                    phone: '089123456788'
                });
        
        expect(result.status).toBe(404);
    });


});


describe('DELETE /api/contacts/:contactId', ()=>{
    beforeEach(async()=>{
        await createTestUser();
        await createTestContact();
    });

    afterEach(async()=>{
        await removeAllTestContact();
        await removeTestUser();
    });

    it('should can get contact', async()=>{
        let testContact = await getTestContact();
        const result = await supertest(web).delete('/api/contacts/'+ testContact.id)
                .set('Authorization', 'test');
        
        expect(result.status).toBe(200);
        expect(result.body.data).toBe("OK");

        testContact = await getTestContact();
        expect(testContact).toBeNull();
    });

    it('should return 404', async()=>{
        const testContact = await getTestContact();
        const result = await supertest(web).delete('/api/contacts/'+ (testContact.id+1))
                .set('Authorization', 'test');
        
        expect(result.status).toBe(404);
    });

});