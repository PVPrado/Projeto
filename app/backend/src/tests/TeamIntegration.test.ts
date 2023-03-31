import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import TeamModel from '../database/models/TeamModel';
import mockTeam from './mocks/mockTeam';


chai.use(chaiHttp);

describe('Testes de integração da rota /Team', () => {
  afterEach( () => {
    sinon.restore();
  });

  it('Test 1: Testa se retorna todos os times', async () => {
    
    sinon.stub(TeamModel, 'findAll').resolves(mockTeam as TeamModel[])

    const response = await chai.request(app).get('/teams');
    chai.expect(response.body).to.deep.equal(mockTeam);
  })

  it('Test 2: Testa se retorna o ID correspondente', async () => {

    sinon.stub(TeamModel, 'findOne').resolves(mockTeam[0] as TeamModel)
    const response = await chai.request(app).get('/teams/1')
    chai.expect(response.status).to.be.equal(200)
  })
})
