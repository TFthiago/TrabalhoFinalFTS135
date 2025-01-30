const supertest = require("supertest")
const testData = require('./testData');

describe('Testes da PetStore Swagger', () => {
    const request = supertest("https://petstore.swagger.io/v2")

    it('Teste cadastro do gato Bichento (POST)', () => {
        const jsonbody = require("../../vendors/json/petPost.json")

            return request
                .post("/pet")
                .send(jsonbody)
                .then((resp) => {
                    testData.petId = resp.body.id
                    testData.petName = resp.body.name
                    testData.petStatus = resp.body.status
                    expect(resp.statusCode).toBe(200)
                    expect(resp.body.id).toBe(testData.petId)
                    expect(resp.body.name).toBe(testData.petName)
                    expect(resp.body.status).toBe(testData.petStatus)

                    console.log(`O id do pet é: ${testData.petId}`)
                    console.log(`O nome do pet é: ${testData.petName}`)

                })

    })

    it('Teste cadastro do usuário Hermione (POST)', () => {
        const jsonbody = require("../../vendors/json/userPost.json")

            return request
                .post("/user")
                .send(jsonbody)
                .then((resp) => {
                    testData.userId = resp.body.message
                    expect(resp.statusCode).toBe(200)
                    expect(resp.body.code).toBe(200)
                    expect(resp.body.type).toBe("unknown")
                    expect(resp.body.message).toBe(testData.userId)

                    console.log(`O id do usuário é: ${testData.userId}`)
                })
    })

    it('Teste realização de venda do pet (POST)', () => {
        const jsonbody = require("../../vendors/json/petSell.json")

        return request
            .post("/store/order")
            .send(jsonbody)
            .then((resp) => {
                testData.sellId = resp.body.id
                testData.sellQuant = resp.body.quantity
                testData.sellStatus = resp.body.status
                expect(resp.statusCode).toBe(200)
                expect(resp.body.id).toBe(testData.sellId)
                expect(resp.body.quantity).toBe(testData.sellQuant)
                expect(resp.body.status).toBe(testData.sellStatus)

                console.log(`O id da venda é: ${testData.sellId}`)
            })
    })

    it('Teste atualização de status do pet (PUT)', () => {
        const jsonbody = require("../../vendors/json/petPut.json")

            return request 
                .put("/pet")
                .send(jsonbody)
                .then((resp) => {
                    testData.petStatus = resp.body.status
                    expect(resp.statusCode).toBe(200)
                    expect(resp.body.status).toBe(testData.petStatus)

                    console.log(`O status do pet é: ${testData.petStatus}`)
                })
    })

    it('Teste verificação do pet (GET)', () => {
        return request
            .get("/pet/" + testData.petId)
            .then((resp) => {

                console.log(resp.body);

                testData.tagName = resp.body.tags[0].name
                expect(resp.statusCode).toBe(200)
                expect(resp.body.id).toBe(testData.petId)
                expect(resp.body.status).toBe(testData.petStatus)
                expect(resp.body.tags[0].name).toBe(testData.tagName)

                console.log(`O nome da tagName é: ${testData.tagName}`)
            })
    })

    it('Teste consultar ordem de venda (GET)', () => {
        return request
            .get("/store/order/" + testData.sellId)
            .then((resp) => {
                expect(resp.statusCode).toBe(200)
                expect(resp.body.id).toBe(testData.sellId)
                expect(resp.body.quantity).toBe(testData.sellQuant)
                expect(resp.body.status).toBe(testData.sellStatus)
                expect(resp.body.complete).toBe(true)
            })
    })

})